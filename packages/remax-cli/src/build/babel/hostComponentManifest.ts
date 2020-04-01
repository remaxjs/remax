import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { HostComponent, RemaxOptions } from 'remax-types';
import { kebabCase } from 'lodash';
import { LEAF, ENTRY } from './compiler/static/constants';
import { getSourcePath, isNativeComponent, isPluginComponent } from './nativeComponents/util';
import API from '../../API';
import { register as registerNativeComponent } from '../nativeComponents';

interface ComponentManifest {
  id: string;
  props: string[];
  additional?: boolean;
  type?: string;
}

const hostComponentManifests: Map<string, ComponentManifest> = new Map();
const nativeComponentManifests: Map<string, ComponentManifest> = new Map();

function getNativeComponentName(path: NodePath<t.JSXElement>, importer: string, options: RemaxOptions) {
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
  if (!bindingPath || !t.isImportDefaultSpecifier(bindingPath.node)) {
    return false;
  }

  const importPath = bindingPath.parentPath;

  if (t.isImportDeclaration(importPath)) {
    const importNode = importPath.node as t.ImportDeclaration;

    const source = importNode.source.value;
    const sourcePath = getSourcePath(options, source, importer);

    if (!isNativeComponent(sourcePath) && !isPluginComponent(sourcePath, options)) {
      return;
    }

    return registerNativeComponent(sourcePath, importer);
  }

  return false;
}

function getRemaxHostComponentName(path: NodePath<t.JSXElement>) {
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
  if (!bindingPath || !t.isImportSpecifier(bindingPath.node)) {
    return false;
  }

  const importPath = bindingPath.parentPath;

  if (t.isImportDeclaration(importPath)) {
    const importNode = importPath.node as t.ImportDeclaration;

    if (importNode.source.value.startsWith('remax/')) {
      return kebabCase(bindingPath.node.imported.name);
    }
  }

  return false;
}

function aliasProp(propName: string, hostComponent?: HostComponent) {
  const prefix = `${API.adapter.target}-`;

  if (propName.startsWith(prefix)) {
    return propName.replace(new RegExp(`^${prefix}`), '');
  }

  return hostComponent?.alias?.[propName] || propName;
}

function registerProps(id: string, node?: t.JSXElement, isNative?: boolean) {
  const hostComponent = API.getHostComponents().get(id);

  if (!isNative && !hostComponent) {
    return false;
  }

  let props: string[] = [];

  if (hostComponent) {
    props = API.processProps(id, hostComponent.props.slice(), hostComponent.additional, node);
  }

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
        // 无需收集 slot 字段
        .filter(p => p !== 'slot')
        // 静态编译辅助字段
        .filter(p => p !== LEAF)
        .filter(p => p !== ENTRY)
        .filter(Boolean)
        .map(prop => aliasProp(prop, hostComponent))
    )
  ).sort();
}

function registerNativeComponentManifest(id: string, node: t.JSXElement) {
  const props = registerProps(id, node, true) || [];

  const component = {
    id,
    props,
    additional: false,
    type: 'native',
  };

  const registeredComponent = hostComponentManifests.get(id);

  if (registeredComponent) {
    component.props = Array.from(new Set([...props, ...registeredComponent.props])).sort();
  }

  hostComponentManifests.set(id, component);
}

function registerHostComponentManifest(id: string, phase: 'jsx' | 'extra', node?: t.JSXElement, additional?: boolean) {
  if (!API.shouldHostComponentRegister(id, phase, additional)) {
    return;
  }

  const props = registerProps(id, node);

  if (!props) {
    return;
  }

  const component = {
    id,
    props,
    additional,
  };

  const registeredComponent = nativeComponentManifests.get(id);

  if (registeredComponent) {
    component.props = Array.from(new Set([...props, ...registeredComponent.props])).sort();
  }

  nativeComponentManifests.set(id, component);
}

export default function hostComponent(options: RemaxOptions) {
  return {
    visitor: {
      JSXElement: (path: NodePath<t.JSXElement>, state: any) => {
        const importer = state.file.opts.filename;
        let name: any = getRemaxHostComponentName(path);

        if (name) {
          registerHostComponentManifest(name, 'jsx', path.node);
          return;
        }

        name = getNativeComponentName(path, importer, options);

        if (name) {
          registerNativeComponentManifest(name, path.node);
        }
      },
    },
  };
}

export function values() {
  API.getHostComponents().forEach((component, id) => {
    registerHostComponentManifest(id, 'extra', undefined, component.additional);
  });

  return [...hostComponentManifests.values(), ...nativeComponentManifests.values()];
}
