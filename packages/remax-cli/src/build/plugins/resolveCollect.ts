const path = require('path');
const resolve = require('enhanced-resolve');

export interface ResolveCollectionObject {
  source: string;
  importer: string;
  isEntry: boolean;
  rootEntry: ResolveCollectionObject | null;
}

export const resolveList: ResolveCollectionObject[] = [];

const tsResolve = resolve.create.sync({
  extensions: ['.ts', '.js', '.tsx', '.json'],
});

export function resolveCollection() {
  return {
    name: 'resolveCollection',
    resolveId(source: string, importer: string) {
      if (!source) return;
      if (
        source.indexOf('rollupPluginBabelHelpers.js') > -1 ||
        source.indexOf('commonjsHelpers.js') > -1
      ) {
        return;
      }
      if (importer) {
        source = tsResolve(path.dirname(importer), source);
      } else {
        source = tsResolve('', source);
      }

      if (!importer) {
        resolveList.push({
          source,
          importer,
          isEntry: true,
          rootEntry: null,
        });
        return null;
      }

      const bundle = {
        source,
        importer,
        isEntry: false,
      };

      resolveList.forEach(resolveId => {
        if (resolveId.source === bundle.importer) {
          if (resolveId.isEntry) {
            resolveList.push({
              ...bundle,
              rootEntry: resolveId,
            });
          } else {
            resolveList.push({
              ...bundle,
              rootEntry: resolveId.rootEntry,
            });
          }
        }
      });
      return null;
    },
  };
}
