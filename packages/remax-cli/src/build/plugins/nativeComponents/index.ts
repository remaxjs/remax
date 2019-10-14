import MagicString from 'magic-string';
import * as path from 'path';
import { Plugin } from 'rollup';
import { readFileSync } from 'fs';
import { RemaxOptions } from '../../../getConfig';
import { Adapter } from '../../adapters';
import style, { getcssPaths } from './style';
import json, { getjsonPaths } from './json';
import template, { getTemplatePaths } from './tempate';
import jsHelper, { getJsHelpers } from './jsHelper';
import { isNativeComponent, readFile } from './util';
import winPath from '../../../winPath';
import usingComponents from './usingComponents';
import { getNativeComponents } from './babelPlugin';

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
      const component = getNativeComponents()[id];
      if (component) {
        const importStr = `import React from 'react';
        import propsAlias from 'remax/esm/adapters/${adapter.name}/components/propsAlias';`;
        const exportStr = `export default ({children, ...props}) => {
        return React.createElement(
            '${component.id}',
            propsAlias(props, true),
            children
          );
        };`;

        const magicString = new MagicString(readFile(id));
        magicString
          .prepend(importStr)
          .append(exportStr)
          .indent();

        return {
          code: magicString.toString(),
          map: magicString.generateMap(),
        };
      }
      return null;
    },
    transform(_, id) {
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
