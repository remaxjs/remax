import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { HostComponent, RemaxOptions } from '@remax/types';
import { kebabCase } from 'lodash';
import { registerNativeComponent } from '@remax/macro';
import { LEAF, ENTRY, TEMPLATE_ID } from './compiler/static/constants';
import { getSourcePath, isNativeComponent } from '../utils/nativeComponent';
import API from '../../API';

export const SlotView: ComponentManifest = {
  id: 'slot-view',
  props: [],
};

export interface ComponentManifest {
  id: string;
  props: string[];
  additional?: boolean;
  type?: string;
}

const hostComponentManifests: Map<string, ComponentManifest> = new Map();
const nativeComponentManifests: Map<string, ComponentManifest> = new Map();

function getNativePluginComponentName(path: NodePath<t.JSXElement>) {
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

  if (!bindingPath || !t.isVariableDeclarator(bindingPath.node)) {
    return false;
  }

  if (
    !t.isCallExpression(bindingPath.node.init) ||
    !t.isIdentifier(bindingPath.node.init.callee) ||
    bindingPath.node.init.callee.name !== 'createNativeComponent'
  ) {
    return false;
  }

  const arg0 = bindingPath.node.init.arguments[0];

  if (!t.isStringLiteral(arg0)) {
    return false;
  }

  return arg0.value;
}

function getNativeComponentName(path: NodePath<t.JSXElement>, importer: string) {
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
    const sourcePath = getSourcePath(source, importer);

    if (!isNativeComponent(sourcePath)) {
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

function shouldRegisterProp(propName: string, isNative: boolean, hostComponent?: HostComponent) {
  // key 属性
  if (propName === 'key') {
    return true;
  }

  // turboPages 模板 ID
  if (propName === TEMPLATE_ID) {
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

  const prefix = `${API.adapter.target}-`;

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
  const prefix = `${API.adapter.target}-`;

  if (propName.startsWith(prefix)) {
    return propName.replace(new RegExp(`^${prefix}`), '');
  }

  return hostComponent?.alias?.[propName] || propName;
}

function registerSlotViewProps(node: t.JSXElement) {
  let props: string[] = [];
  node.openingElement.attributes.forEach(attr => {
    if (t.isJSXSpreadAttribute(attr)) {
      props = [...props, ...(API.getHostComponents().get('view')?.props || [])];
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

  return (
    props
      // 无需收集 slot 字段
      .filter(p => p !== 'slot')
      .map(prop => aliasProp(prop, API.getHostComponents().get('view')))
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

function registerProps(id: string, node?: t.JSXElement, isNative?: boolean) {
  const hostComponent = API.getHostComponents().get(id);

  if (!isNative && !hostComponent) {
    return;
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

  const registeredComponent = nativeComponentManifests.get(id);

  if (registeredComponent) {
    component.props = Array.from(new Set([...props, ...registeredComponent.props])).sort();
  }

  nativeComponentManifests.set(id, component);
}

function registerHostComponentManifest(id: string, phase: 'jsx' | 'extra', node?: t.JSXElement, additional?: boolean) {
  if (!API.shouldHostComponentRegister(id, phase, additional)) {
    return;
  }

  let props: string[] | undefined = [];

  if (isSlotView(id, node)) {
    // isSlotView 确保了 node 一定存在
    props = registerSlotViewProps(node!);

    SlotView.props = Array.from(new Set([...SlotView.props, ...props]));

    return;
  } else {
    props = registerProps(id, node);
  }

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
    if (phase === 'extra') {
      return;
    }

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

        name = getNativeComponentName(path, importer) || getNativePluginComponentName(path);

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
