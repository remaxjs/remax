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
import jsModule, { getJsModules, resolveModulesInCode } from './modules';
import { isNativeComponent, isPluginComponent, getSourcePath } from './util';
import winPath from '../../../winPath';
import usingComponents from './usingComponents';
import { getImporters } from './babelPlugin';

const getFiles = () => [
  ...getcssPaths(),
  ...getjsonPaths(),
  ...getTemplatePaths(),
  ...getJsHelpers(),
  ...getJsModules(),
];

export default (options: RemaxOptions, pages: string[]): Plugin => {
  return {
    name: 'nativeComponents',
    load(id) {
      if (isNativeComponent(id)) {
        jsModule(options, id);
        jsHelper(id);
        style(id);
        json(id);
        template(options, id);
        usingComponents(id, options, this);

        getFiles().forEach(file => {
          this.addWatchFile(file);
        });

        // TODO 转换成 react 组件
        return 'export default {};';
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

        magicString.remove(node.start, node.end);

        if (!isPluginComponent(componentPath, options)) {
          magicString.prepend(`import '${source}'\n;`);
        }

        if (!helperImported) {
          magicString.prepend("import { unstable_createNativeComponent } from 'remax';\n");
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
      // const importers = getImporters();

      // getEntryChunks(bundle).forEach(chunk => {
      //   const page = chunk.facadeModuleId!;
      //   const modules = getRelatedModulesForEntry(chunk, bundle);
      //   modules.forEach(id => {
      //     const nativeImporter = importers.get(id);
      //     if (nativeImporter) {
      //       [...nativeImporter.values()].forEach(component => {
      //         component.pages = new Set([...component.pages, page]);
      //       });
      //     }
      //   });
      // });

      getFiles().forEach(id => {
        const bundleFileName = winPath(path.relative(path.join(options.cwd), id).replace(/node_modules/g, 'npm'))
          // 避免出现相对路径，形如： '../'
          .replace(/\.\.\//g, '')
          .replace(new RegExp(`^${options.rootDir}/`), '')
          .replace(/@/g, '_');

        let source: string | Buffer = readFileSync(id);

        if (this.cache.get(bundleFileName)?.toString() === source.toString()) {
          return;
        }

        this.cache.set(bundleFileName, source);

        // resolve js 文件中的引用路径
        if (id.match(/.js$/)) {
          source = resolveModulesInCode(source.toString(), id, options);
        }

        this.emitFile({
          fileName: bundleFileName,
          type: 'asset',
          source,
        });
      });
    },
  };
};
