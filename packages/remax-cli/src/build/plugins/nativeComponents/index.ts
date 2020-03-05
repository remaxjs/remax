import { get } from 'lodash';
import MagicString from 'magic-string';
import * as path from 'path';
import { Plugin } from 'rollup';
import { simple } from 'acorn-walk';
import { readFileSync } from 'fs';
import { RemaxOptions } from 'remax-types';
import style, { getcssPaths } from './style';
import json, { getjsonPaths } from './json';
import template, { getTemplatePaths } from './tempate';
import jsHelper, { getJsHelpers } from './jsHelper';
import { isNativeComponent, isPluginComponent, getSourcePath } from './util';
import winPath from '../../../winPath';
import usingComponents from './usingComponents';
import { getImporters } from './babelPlugin';
import { getEntryChunks, getRelatedModulesForEntry } from '../../chunk';

const getFiles = () => [
  ...getcssPaths(),
  ...getjsonPaths(),
  ...getTemplatePaths(),
  ...getJsHelpers(),
];

export default (options: RemaxOptions, pages: string[]): Plugin => {
  return {
    name: 'nativeComponents',
    load(id) {
      if (isNativeComponent(id)) {
        jsHelper(id);
        style(id);
        json(id);
        template(id);
        usingComponents(id, options, this);

        getFiles().forEach(file => {
          this.addWatchFile(file);
        });

        const bundleFileName = winPath(path.relative(options.cwd, id))
          .replace(new RegExp(`^${options.rootDir}/`), '')
          .replace(/node_modules/g, 'npm')
          .replace(/@/g, '_')
          // trim extension
          .split('.')
          .slice(0, -1)
          .join('.');

        this.emitFile({
          type: 'chunk',
          id,
          name: bundleFileName,
        });
      }
      return null;
    },
    transform(code, id) {
      const importers = getImporters();
      const importer = importers.get(id);

      const ast = this.parse(code, {
        sourceType: 'module',
      });
      const magicString = new MagicString(code);

      if (!importer) {
        return {
          code: magicString.toString(),
          map: magicString.generateMap(),
        };
      }

      let helperImported = false;

      const extract = (node: any) => {
        const source: string = get(node, 'source.value');
        const name: string = get(node, 'specifiers[0].local.name');
        const componentPath = getSourcePath(options, source, id);
        const component = importer.get(componentPath);

        if (!component) {
          return;
        }

        if (!isPluginComponent(componentPath, options)) {
          this.emitFile({
            id: path.relative(options.cwd, componentPath),
            type: 'chunk',
          });
        }

        magicString.remove(node.start, node.end);
        if (!helperImported) {
          magicString.prepend(
            "import { unstable_createNativeComponent } from 'remax';\n"
          );
          helperImported = true;
        }

        const exportStr = `var ${name} = unstable_createNativeComponent('${component.hashId}')\n`;

        magicString.prepend(exportStr);
      };

      simple(ast, {
        ImportDeclaration: extract,
      });

      return {
        code: magicString.toString(),
        map: magicString.generateMap(),
      };
    },
    generateBundle(_, bundle) {
      const importers = getImporters();

      getEntryChunks(bundle).forEach(chunk => {
        const page = chunk.facadeModuleId!;
        const modules = getRelatedModulesForEntry(chunk, bundle);
        modules.forEach(id => {
          const nativeImporter = importers.get(id);
          if (nativeImporter) {
            [...nativeImporter.values()].forEach(component => {
              component.pages = new Set([...component.pages, page]);
            });
          }
        });
      });

      getFiles().forEach(id => {
        const bundleFileName = winPath(
          path.relative(options.cwd, id).replace(/node_modules/g, 'npm')
        )
          .replace(new RegExp(`^${options.rootDir}/`), '')
          .replace(/@/g, '_');

        const source = readFileSync(id);

        if (this.cache.get(bundleFileName)?.toString() === source.toString()) {
          return;
        }

        this.cache.set(bundleFileName, source);

        this.emitFile({
          fileName: bundleFileName,
          type: 'asset',
          source,
        });
      });
    },
  };
};
