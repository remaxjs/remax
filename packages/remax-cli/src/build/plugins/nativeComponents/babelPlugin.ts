import { get } from 'dot-prop';
import kebabCase from 'lodash/kebabCase';
import { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import * as path from 'path';
import resolve from 'resolve';
import { Adapter } from '../../adapters';
import { isNativeComponent } from './util';
import { RemaxOptions } from '../../../getConfig';
import alias from '../alias';

interface Component {
  type: string;
  id: string;
  props: string[];
}

interface NativeComponents {
  [id: string]: Component;
}

let nativeId = 0;

const nativeComponents: NativeComponents = {};

const getKebabCaseName = (sourcePath: string) =>
  kebabCase(path.basename(path.dirname(sourcePath)));

export default (options: RemaxOptions, adapter: Adapter) => () => ({
  visitor: {
    JSXElement(nodePath: NodePath, state: any) {
      const importer = state.file.opts.filename;
      const node = nodePath.node as t.JSXElement;

      if (t.isJSXIdentifier(node.openingElement.name)) {
        const tagName = node.openingElement.name.name;
        const binding = nodePath.scope.getBinding(tagName);
        if (!binding) {
          return;
        }
        const componentPath = binding.path;

        if (
          !componentPath ||
          !t.isImportDefaultSpecifier(componentPath.node) ||
          !t.isImportDeclaration(componentPath.parent)
        ) {
          return;
        }

        const source = componentPath.parent.source.value;

        let sourcePath = alias(options).resolveId(source, importer) || source;
        sourcePath = resolve.sync(sourcePath, {
          basedir: path.dirname(importer),
        });

        if (!isNativeComponent(sourcePath)) {
          return;
        }

        const id = getKebabCaseName(sourcePath);

        const usedProps = node.openingElement.attributes.map(e => {
          const propName = get(e, 'name.name') as string;
          return propName;
        });

        const props = usedProps
          .filter(prop => !!prop)
          .map(prop => adapter.getNativePropName(prop, true));

        if (!nativeComponents[sourcePath]) {
          nativeComponents[sourcePath] = {
            type: 'native',
            id: `${id}-${nativeId++}`,
            props,
          };
        }

        props.forEach(prop => {
          if (nativeComponents[sourcePath].props.includes(prop)) {
            return;
          }

          nativeComponents[sourcePath].props.push(prop);
        });
      }
    },
  },
});

export function getNativeComponents() {
  return nativeComponents;
}
