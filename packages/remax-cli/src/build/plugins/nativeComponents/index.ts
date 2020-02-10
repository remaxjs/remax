import { get } from 'lodash';
import MagicString from 'magic-string';
import * as path from 'path';
import { Plugin, OutputChunk } from 'rollup';
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
import { searchFile } from '../../../getEntries';

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
        jsHelper(options, id);
        style(options, id);
        json(id);
        template(options, id);
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
      const collected: Map<string, Set<string>> = new Map();

      const collectPages = (page: string, importer: string) => {
        const pageCollected = collected.get(page);

        if (pageCollected) {
          if (pageCollected.has(importer)) {
            return;
          }

          pageCollected.add(importer);
        } else {
          collected.set(page, new Set([importer]));
        }

        const nativeImporter = importers.get(
          searchFile(
            path.join(options.cwd, importer).replace(path.extname(importer), '')
          )
        );

        if (nativeImporter) {
          [...nativeImporter.values()].forEach(component => {
            component.pages = new Set([...component.pages, page]);
          });
        }

        importer = winPath(importer)
          .replace(/node_modules/g, 'npm')
          .replace(new RegExp(`^${options.rootDir}/`), '')
          .replace(/@/g, '_')
          .replace(path.extname(importer), '.js');

        const { imports } = (bundle[importer] as OutputChunk) || {
          imports: [],
        };

        for (const file of imports) {
          collectPages(page, file);
        }
      };

      for (const key of pages) {
        collectPages(key, path.relative(options.cwd, key));
      }

      getFiles().forEach(id => {
        const bundleFileName = winPath(
          path.relative(options.cwd, id).replace(/node_modules/g, 'npm')
        )
          .replace(/^src\//, '')
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
