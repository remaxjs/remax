import * as path from 'path';
import { compilation } from 'webpack';
import type { Options } from '@remax/types';
import Store from '@remax/build-store';
import { getNativeAssetOutputPath } from '../../utils/paths';
import { slash } from '@remax/shared';

interface Module {
  dependencies: any[];
  resource: string;
}

function findModule(compilation: compilation.Compilation, file: string): Module | undefined {
  return Array.from((compilation as any)._modules.values()).find((m: any) => slash(m.resource) === file) as Module;
}

function compositionComponents(compilation: compilation.Compilation) {
  const compositionComponents = new Map();

  Store.compositionComponents.forEach((components, file) => {
    const module = findModule(compilation, file);
    module?.dependencies.forEach((dep: any) => {
      const component = components.get(dep.request);
      if (component && dep.module) {
        const resource = slash(dep.module.resource);
        const compositionComponent = compositionComponents.get(resource) || new Set();
        component.props.forEach(compositionComponent.add, compositionComponent);
        compositionComponents.set(resource, compositionComponent);
      }
    });
  });

  return compositionComponents;
}

/**
 * 编译小程序自定义组件流程
 *
 * 1. 通过 @babel/plugin-remax-host-component 找出每个 module 中从外部 import 的 composition component，放入 Store.compositionComponents；
 * 2. 通过 webpack loader 找出所有小程序自定义组件，放入 Store.nativeComponent；
 * 3. 在 getUsingComponents 方法中通过 compilation.modules 递归遍历所有 page 的 dependencies；
 * 4. 通过 1、2 中的信息从 dependencies 中找出 page 依赖的小程序自定义组件。
 */
export function getUsingComponents(
  page: string,
  compilation: compilation.Compilation,
  options: Options,
  prefixPath = ''
) {
  const components: Map<
    string,
    {
      id: string;
      path: string;
      props: string[];
    }
  > = new Map();
  const handledModules: Set<string> = new Set();
  const getComponents = (module?: Module) => {
    if (!module) {
      return;
    }
    const resource = slash(module.resource);
    // 防止循环依赖
    if (resource) {
      if (handledModules.has(resource)) {
        return;
      }
      handledModules.add(resource);
    }
    const pluginComponents = Array.from(Store.pluginComponents.values()).filter(c => c.importers.has(resource));
    pluginComponents.forEach(pluginComponent => {
      components.set(pluginComponent.id, {
        id: pluginComponent.id,
        path: pluginComponent.componentPath,
        props: Array.from(pluginComponent.props.values()),
      });
    });
    module.dependencies.forEach((dep: any) => {
      if (dep.module) {
        let depModule: any;
        if (dep.module.resource) {
          depModule = dep.module;
        } else if (dep.module.rootModule) {
          depModule = dep.module.rootModule;
        } else {
          return;
        }
        const depResource = slash(depModule.resource);
        const nativeComponent = Store.nativeComponents.get(depResource);
        if (nativeComponent) {
          const componentProps = compositionComponents(compilation).get(depResource);
          const componentPath = slash(path.join(prefixPath, getNativeAssetOutputPath(depResource, options)));
          components.set(nativeComponent.id, {
            id: nativeComponent.id,
            path: componentPath.replace(new RegExp(`\\${path.extname(componentPath)}$`), ''),
            props: Array.from(componentProps ? componentProps.values() : []),
          });
        }
        getComponents(depModule);
      }
    });
  };
  getComponents(findModule(compilation, page));
  return components;
}
