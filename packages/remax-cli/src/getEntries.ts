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

function searchFile(file: string, ext?: string | string[]) {
  const inputExts = Array.isArray(ext) ? ext : [ext];
  const exts = [...inputExts, 'ts', 'tsx', 'js'].filter(e => e);

  for (const e of exts) {
    const extFile = file + '.' + e;
    if (fs.existsSync(extFile)) {
      return extFile;
    }

    // 匹配到输入的最后一个都不满足
    if (e === inputExts[inputExts.length - 1]) {
      return '';
    }
  }

  return '';
}

function getAppConfig(cwd: string, adapterName: string): [string, AppConfig] {
  const appConfigJSONPath: string = path.join(cwd, 'src', 'app.json');
  const appConfigPath: string = path.join(cwd, 'src', 'app.config.js');
  const isJSONExist = fs.existsSync(appConfigJSONPath);
  const isJSExist = fs.existsSync(appConfigPath);
  if (!isJSExist && !isJSONExist) {
    throw new Error(`${appConfigJSONPath} is not found`);
  }

  if (isJSONExist) {
    return [
      appConfigJSONPath,
      JSON.parse(fs.readFileSync(appConfigJSONPath, 'utf-8')),
    ];
  }

  return [appConfigPath, readManifest(appConfigPath, adapterName)];
}

export default function getEntries(
  options: RemaxOptions,
  adpater: Adapter
): Entries {
  const [appConfigPath, appConfig] = getAppConfig(options.cwd, adpater.name);
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
      searchFile(path.join(options.cwd, 'src', page), ['json', 'config.js']),
    ].filter(f => f);
  }, []);

  return entries;
}
