const path = require('path');
const resolve = require('enhanced-resolve');

export interface ResolveCollectionObject {
  source: string;
  importer: string;
  isEntry: boolean;
  rootEntry: ResolveCollectionObject | null;
}

export const resolveList: ResolveCollectionObject[] = [];

export function resolveCollection() {
  return {
    name: 'resolveCollection',
    resolveId(source: string, importer: string) {
      if (
        source.indexOf('rollupPluginBabelHelpers.js') > -1 ||
        source.indexOf('commonjsHelpers.js') > -1
      ) {
        return;
      }
      if (importer) {
        source = resolve.sync(path.dirname(importer), source);
      } else {
        source = resolve.sync('', source);
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
