import { declare } from '@babel/helper-plugin-utils';
import { NodePath } from '@babel/traverse';
import { ConfigAPI } from '@babel/core';
import * as t from '@babel/types';
import { kebabCase } from 'lodash';
import type { HostComponent, Platform } from '@remax/types';
import Store from '@remax/build-store';
import { slash } from '@remax/shared';

interface Options {
  target: Platform;
  hostComponents: Map<string, any>;
  skipHostComponents: string[];
  skipProps: string[];
  includeProps: string[];
}

export default function hostComponent(options: Options) {
  return declare((api: ConfigAPI) => {
    api.assertVersion(7);

    function shouldRegisterProp(propName: string, isNative: boolean, hostComponent?: HostComponent) {
      // key 属性
      if (propName === 'key') {
        return true;
      }

      if (options.includeProps.includes(propName)) {
        return true;
      }

      // 原生组件的属性都要注册
      if (isNative) {
        return true;
      }

      // host component 上的标准属性
      if (hostComponent?.alias?.[propName]) {
        return true;
      }

      const prefix = `${options.target}-`;

      // 平台特定属性
      if (propName.startsWith(prefix)) {
        return true;
      }

      // data 属性
      if (propName.startsWith('data-')) {
        return true;
      }

      return false;
    }

    function aliasProp(propName: string, hostComponent?: HostComponent) {
      const prefix = `${options.target}-`;

      if (propName.startsWith(prefix)) {
        return propName.replace(new RegExp(`^${prefix}`), '');
      }

      return hostComponent?.alias?.[propName] || propName;
    }

    function registerSlotViewProps(node: t.JSXElement) {
      let props: string[] = [];
      node.openingElement.attributes.forEach(attr => {
        if (t.isJSXSpreadAttribute(attr)) {
          props = [...props, ...(options.hostComponents.get('view')?.props || [])];
          return;
        }

        const prop = attr.name;
        let propName = '';

        if (t.isJSXIdentifier(prop)) {
          propName = prop.name;
        }

        if (t.isJSXNamespacedName(prop)) {
          return;
        }

        props.push(propName);
      });

      return (
        props
          // 无需收集 slot 字段
          .filter(p => p !== 'slot')
          .map(prop => aliasProp(prop, options.hostComponents.get('view')))
          .sort()
      );
    }

    function isSlotView(componentName: string, node?: t.JSXElement) {
      if (!node || componentName !== 'view') {
        return false;
      }

      if (node.openingElement.attributes.find(attr => t.isJSXAttribute(attr) && attr.name.name === 'slot')) {
        return true;
      }

      return false;
    }

    function getProps(id: string, node?: t.JSXElement, isNative?: boolean) {
      const hostComponent = options.hostComponents.get(id);

      if (!isNative && !hostComponent) {
        return;
      }

      const props: string[] = hostComponent ? hostComponent.props.slice() : [];

      if (node) {
        node.openingElement.attributes.forEach(attr => {
          if (t.isJSXSpreadAttribute(attr)) {
            return;
          }

          const prop = attr.name;
          let propName = '';

          if (t.isJSXIdentifier(prop)) {
            propName = prop.name;
          }

          if (t.isJSXNamespacedName(prop)) {
            propName = prop.namespace.name + ':' + prop.name.name;
          }

          /**
           * React 运行时读不到 key
           * 所以在这里如果发现组件上设置了 key
           * 就再设置一个别名 __key
           * 然后在模板里写死 key="{{item.props.__key}}"
           */
          if (propName === 'key') {
            node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('__key'), attr.value));
          }

          if (!shouldRegisterProp(propName, !!isNative, hostComponent)) {
            return;
          }

          props.push(propName);
        });
      }

      if (isNative) {
        return Array.from(
          new Set(
            props
              // 剔除 ref，在 axml 特殊处理
              .filter(p => p !== 'ref')
              .filter(Boolean)
              .map(prop => prop.replace('className', 'class'))
          )
        ).sort();
      }

      return Array.from(
        new Set(
          props
            // 静态编译辅助字段
            .filter(p => !options.skipProps.includes(p))
            .filter(Boolean)
            .map(prop => aliasProp(prop, hostComponent))
        )
      ).sort();
    }

    function getHostComponentName(path: NodePath<t.JSXElement>) {
      const node = path.node;
      const openingElement = node.openingElement;

      if (!t.isJSXIdentifier(openingElement.name)) {
        return;
      }

      const name = openingElement.name.name;
      const binding = path.scope.getBinding(name);

      if (!binding) {
        return;
      }

      const bindingPath = binding.path;

      // binding
      if (!bindingPath || !t.isImportSpecifier(bindingPath.node)) {
        return;
      }

      const importPath = bindingPath.parentPath;

      if (t.isImportDeclaration(importPath) && t.isIdentifier(bindingPath.node.imported)) {
        return kebabCase(bindingPath.node.imported.name);
      }

      return;
    }

    function registerHostComponentManifest(id: string, node?: t.JSXElement) {
      if (options.skipHostComponents.includes(id)) {
        return;
      }

      let props: string[] | undefined = [];

      if (isSlotView(id, node)) {
        // isSlotView 确保了 node 一定存在
        props = registerSlotViewProps(node!);

        Store.slotView.props = Array.from(new Set([...Store.slotView.props, ...props]));

        return;
      } else {
        props = getProps(id, node);
      }

      if (!props) {
        return;
      }

      const component = {
        id,
        props,
      };

      const registeredComponent = Store.collectedComponents.get(id);

      if (registeredComponent) {
        component.props = Array.from(new Set([...props, ...registeredComponent.props])).sort();
      }

      Store.collectedComponents.set(id, component);
    }

    function collectCompositionComponents(path: NodePath<t.JSXElement>, importer: string) {
      const node = path.node;
      const openingElement = node.openingElement;

      if (!t.isJSXIdentifier(openingElement.name)) {
        return false;
      }

      const name = openingElement.name.name;
      const binding = path.scope.getBinding(name);

      if (!binding) {
        return false;
      }

      const bindingPath = binding.path;

      // binding
      if (!bindingPath) {
        return false;
      }

      const importPath = bindingPath.parentPath;

      if (t.isImportDeclaration(importPath)) {
        const importNode = importPath.node as t.ImportDeclaration;
        const source = importNode.source.value;
        const props = getProps('', node, true) || [];

        const modules = Store.compositionComponents.get(importer) || new Map();
        const component: { import: string; props: Set<string> } = modules.get(source) || {
          import: source,
          props: new Set(props),
        };
        modules.set(source, {
          import: source,
          props: new Set([...component.props, ...props]),
        });
        Store.compositionComponents.set(importer, modules);
      }

      if (
        t.isVariableDeclarator(bindingPath.node) &&
        t.isCallExpression(bindingPath.node.init) &&
        t.isIdentifier(bindingPath.node.init.callee) &&
        (bindingPath.node.init.callee as any).name === 'createNativeComponent'
      ) {
        const arg0 = bindingPath.node.init.arguments[0];
        if (t.isStringLiteral(arg0)) {
          const id = arg0.value;
          // macro 先执行，肯定注册过了
          const component = Array.from(Store.pluginComponents.values()).find(c => c.id === id)!;
          const props = getProps('', node, true) || [];
          props.forEach(component.props.add, component.props);
        }
      }
    }

    return {
      visitor: {
        JSXElement: (path: NodePath<t.JSXElement>, state: any) => {
          const hostComponentName = getHostComponentName(path);

          if (hostComponentName) {
            registerHostComponentManifest(hostComponentName, path.node);
            return;
          }

          collectCompositionComponents(path, slash(state.file.opts.filename));
        },
        CallExpression: {
          enter: (path: NodePath<t.CallExpression>, state: any) => {
            const importer = slash(state.file.opts.filename);

            if (!t.isMemberExpression(path?.node?.callee)) return;
            const memberExpression: t.MemberExpression = path?.node?.callee;
            if (!t.isIdentifier(memberExpression?.property)) return;

            const name = memberExpression?.property.name;
            if (name !== 'createElement') return;

            const elementName = path.node.arguments[0];
            if (!t.isIdentifier(elementName)) return;
            const binding = path.scope.getBinding(elementName.name);

            if (!binding) {
              return false;
            }

            const bindingPath = binding.path;

            // binding
            if (!bindingPath) {
              return false;
            }

            const importPath = bindingPath.parentPath;

            if (t.isImportDeclaration(importPath)) {
              const importNode = importPath.node as t.ImportDeclaration;
              const source = importNode.source.value;

              if (source === 'remax') return;

              const propsObject = path.node.arguments[1];
              let props: any[] = [];
              if (t.isObjectExpression(propsObject)) {
                props = propsObject.properties
                  .map(it => {
                    if (!t.isObjectProperty(it)) return;
                    if (t.isIdentifier(it.key)) return it.key.name;
                    if (t.isStringLiteral(it.key)) return it.key.value;
                  })
                  .filter(p => p !== 'ref')
                  .filter(Boolean);
              }
              const modules = Store.compositionComponents.get(importer) || new Map();
              const component: { import: string; props: Set<string> } = modules.get(source) || {
                import: source,
                props: new Set(props),
              };
              modules.set(source, {
                import: source,
                props: new Set([...component.props, ...props]),
              });
              Store.compositionComponents.set(importer, modules);
            }
          },
        },
      },
    };
  });
}
