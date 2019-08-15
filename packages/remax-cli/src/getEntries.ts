import fs from 'fs';
import path from 'path';
import { RemaxOptions } from './getConfig';
import readManifest from './readManifest';
import { Adapter } from './build/adapters';
import { Context } from './types';

interface AppConfig {
  pages: string[];
  subpackages: {
    root: string;
    pages: string[];
  }[];
}

interface Entries {
  pageConfigPath: string[];
  app: string;
  pages: Array<{ path: string; file: string }>;
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
  adpater: Adapter,
  context?: Context
): Entries {
  let pages: any = [];
  let subpackages: any = [];

  if (!context) {
    const appConfigPath: string = path.join(
      options.cwd,
      'src',
      'app.config.js'
    );
    if (!fs.existsSync(appConfigPath)) {
      throw new Error(`${appConfigPath} is not found`);
    }
    const appConfig: AppConfig = readManifest(appConfigPath, adpater.name);
    pages = appConfig.pages;
    subpackages = appConfig.subpackages || [];
    if (!pages || pages.length === 0) {
      throw new Error(
        'app.config.js `pages` field should not be undefined or empty object'
      );
    }
  } else {
    pages = context.pages.map(p => p.path);
    subpackages = context.app.subpackages || [];
  }

  const entries: Entries = {
    pageConfigPath: [],
    app: searchFile(path.join(options.cwd, 'src', 'app')),
    pages: [],
  };

  entries.pages = pages.reduce(
    (ret: Array<{ path: string; file: string }>, page) => {
      return [
        ...ret,
        {
          path: page,
          file: searchFile(path.join(options.cwd, 'src', page)),
        },
      ].filter(f => f);
    },
    []
  );

  subpackages.forEach(pack => {
    entries.pages = entries.pages.concat(
      pack.pages.reduce((ret: Array<{ path: string; file: string }>, page) => {
        return [
          ...ret,
          {
            path: page,
            file: searchFile(path.join(options.cwd, 'src', pack.root, page)),
          },
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
