import { get } from 'lodash';
import MagicString from 'magic-string';
import * as path from 'path';
import { Plugin } from 'rollup';
import { simple } from 'acorn-walk';
import { readFileSync } from 'fs';
import { RemaxOptions } from '../../../getConfig';
import { Adapter } from '../../adapters';
import style, { getcssPaths } from './style';
import json, { getjsonPaths } from './json';
import template, { getTemplatePaths } from './tempate';
import jsHelper, { getJsHelpers } from './jsHelper';
import { isNativeComponent, isPluginComponent, getSourcePath } from './util';
import winPath from '../../../winPath';
import usingComponents from './usingComponents';
import { getImporters } from './babelPlugin';

const getFiles = () => [
  ...getcssPaths(),
  ...getjsonPaths(),
  ...getTemplatePaths(),
  ...getJsHelpers(),
];

export default (options: RemaxOptions, adapter: Adapter): Plugin => {
  return {
    name: 'nativeComponents',
    load(id) {
      if (isNativeComponent(id)) {
        jsHelper(id, adapter);
        style(id, adapter);
        json(id);
        template(id, adapter);
        usingComponents(id, options, this);

        getFiles().forEach(file => {
          this.addWatchFile(file);
        });
      }
      return null;
    },
    transform(code, id) {
      const importers = getImporters();
      const importer = importers.get(id);
      if (!importer) {
        return null;
      }

      const magicString = new MagicString(code);
      const ast = this.parse(code, {
        ecmaVersion: 6,
        sourceType: 'module',
      });

      const extract = (node: any) => {
        const source: string = get(node, 'source.value');
        const name: string = get(node, 'specifiers[0].local.name');
        const componentPath = getSourcePath(options, adapter, source, id);
        const component = importer.get(componentPath);

        if (!component) {
          return;
        }

        if (!isPluginComponent(componentPath, options, adapter)) {
          this.emitFile({
            id: path.relative(options.cwd, componentPath),
            type: 'chunk',
          });
        }

        magicString.remove(node.start, node.end);

        const exportStr = `var ${name} = function(props) {
        return React.createElement(
            '${component.hashId}',
            propsAlias(props, true),
            props.children
          );
        };`;

        magicString.append(exportStr);
      };

      simple(ast, {
        ImportDeclaration: extract,
      });

      const importStr = `import propsAlias from 'remax/esm/adapters/${adapter.name}/components/propsAlias';`;
      magicString.prepend(importStr);

      return {
        code: magicString.toString(),
        map: magicString.generateMap(),
      };
    },
    generateBundle() {
      getFiles().forEach(id => {
        const bundleFileName = winPath(
          path.relative(options.cwd, id).replace(/node_modules/, 'npm')
        ).replace(/src\//, '');

        this.emitFile({
          fileName: bundleFileName,
          type: 'asset',
          source: readFileSync(id),
        });
      });
    },
  };
};
