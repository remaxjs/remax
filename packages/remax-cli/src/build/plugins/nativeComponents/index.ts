import { simple } from 'acorn-walk';
import * as path from 'path';
import { Plugin } from 'rollup';
import { readFileSync } from 'fs';
import MagicString from 'magic-string';
import { RemaxOptions } from '../../../getConfig';
import { Adapter } from '../../adapters';
import style, { getcssPaths } from './style';
import json, { getjsonPaths } from './json';
import template, { getTemplatePaths } from './tempate';
import jsHelper, { getJsHelpers } from './jsHelper';
import { isNativeComponent } from './util';
import { getNativeComponents, getUsingComponents } from './babelPlugin';
import { isAsset } from '../removeSrc';

export default (options: RemaxOptions, adapter: Adapter): Plugin => {
  return {
    name: 'nativeComponents',
    transform(_, id) {
      const extname = path.extname(id);

      if (extname === adapter.extensions.jsHelper) {
        jsHelper(id);
        return null;
      }

      if (isNativeComponent(id)) {
        style(id, adapter);
        json(id);
        template(id, adapter);
      }

      return null;
    },
    generateBundle(_, bundle) {
      const files = [
        ...getcssPaths(),
        ...getjsonPaths(),
        ...getTemplatePaths(),
        ...getJsHelpers(),
      ];

      files.forEach(id => {
        const bundleFileName = path
          .relative(options.cwd, id)
          .replace(/node_modules/, 'npm')
          .replace(/src\//, '');

        this.emitFile({
          fileName: bundleFileName,
          type: 'asset',
          source: readFileSync(id),
        });
      });

      Object.keys(bundle).forEach(key => {
        const module = bundle[key];

        if (isAsset(module)) {
          return;
        }

        const id = module.facadeModuleId;

        if (!id) {
          return;
        }

        const nativeComponents = getNativeComponents();
        const usingComponents = getUsingComponents();

        if (nativeComponents[id] || usingComponents.includes(id)) {
          const magicString = new MagicString(module.code);

          const ast = this.parse(module.code, {
            ecmaVersion: 6,
            sourceType: 'module',
          });

          const extract = (node: any) => {
            const params = node.expression && node.expression.arguments;
            if (!params || !params[0] || !params[0].value) {
              return;
            }

            const usingComponentPath = path.join(
              path.dirname(id),
              params[0].value
            );

            if (usingComponents.includes(usingComponentPath)) {
              magicString.remove(node.start, node.end);
            }
          };

          simple(ast, {
            ExpressionStatement: extract,
          });

          module.map = magicString.generateMap();
          module.code = magicString.toString();
        }
      });
    },
  };
};
