import fs from 'fs';
import path from 'path';
import { RemaxOptions } from './getConfig';
import readManifest from './readManifest';
import { Adapter } from './build/adapters';

interface AppConfig {
  pages: string[];
  subpackages: {
    root: string;
    pages: string[];
  }[];
}

interface Entries {
  appConfigPath: string;
  pageConfigPath: string[];
  app: string;
  pages: string[];
}

function searchFile(file: string, ext?: string) {
  const exts = [ext, 'ts', 'tsx', 'js'].filter(e => e);

  for (const e of exts) {
    const extFile = file + '.' + e;
    if (fs.existsSync(extFile)) {
      return extFile;
    }

    if (e === ext) {
      return '';
    }
  }

  return '';
}

export default function getEntries(
  options: RemaxOptions,
  adpater: Adapter
): Entries {
  const appConfigPath: string = path.join(options.cwd, 'src', 'app.config.js');
  if (!fs.existsSync(appConfigPath)) {
    throw new Error(`${appConfigPath} is not found`);
  }
  const appConfig: AppConfig = readManifest(appConfigPath, adpater.name);
  const { pages, subpackages = [] } = appConfig;
  if (!pages || pages.length === 0) {
    throw new Error(
      'app.config.js `pages` field should not be undefined or empty object'
    );
  }

  const entries: Entries = {
    appConfigPath,
    pageConfigPath: [],
    app: searchFile(path.join(options.cwd, 'src', 'app')),
    pages: [],
  };

  entries.pages = pages.reduce((ret: string[], page) => {
    return [...ret, searchFile(path.join(options.cwd, 'src', page))].filter(
      f => f
    );
  }, []);

  subpackages.forEach(pack => {
    entries.pages = entries.pages.concat(
      pack.pages.reduce((ret: string[], page) => {
        return [
          ...ret,
          searchFile(path.join(options.cwd, 'src', pack.root, page)),
        ].filter(f => f);
      }, [])
    );
  });

  entries.pageConfigPath = pages.reduce((ret: string[], page) => {
    return [
      ...ret,
      searchFile(path.join(options.cwd, 'src', page), 'config.js'),
    ].filter(f => f);
  }, []);

  return entries;
}
