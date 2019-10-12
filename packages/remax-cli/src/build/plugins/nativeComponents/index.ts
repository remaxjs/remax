import * as path from 'path';
import { Plugin } from 'rollup';
import { readFileSync } from 'fs';
import { RemaxOptions } from '../../../getConfig';
import { Adapter } from '../../adapters';
import style, { getcssPaths } from './style';
import json, { getjsonPaths } from './json';
import template, { getTemplatePaths } from './tempate';
import jsHelper, { getJsHelpers } from './jsHelper';
import { isNativeComponent } from './util';
import winPath from '../../../winPath';
import usingComponents from './usingComponents';

const getFiles = () => [
  ...getcssPaths(),
  ...getjsonPaths(),
  ...getTemplatePaths(),
  ...getJsHelpers(),
];

export default (options: RemaxOptions, adapter: Adapter): Plugin => {
  return {
    name: 'nativeComponents',
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
