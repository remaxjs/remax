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
  pages: { path: string; file: string }[];
}

function searchFile(file: string, ext?: string) {
  const extFiles = [ext, 'ts', 'tsx', 'js'].filter(e => e);
  const extFile = extFiles.find(e => {
    if (fs.existsSync(`${file}.${e}`)) {
      return true;
    }
    return false;
  });

  if (extFile) {
    return `${file}.${extFile}`;
  }

  return '';
}

export default function getEntries(
  options: RemaxOptions,
  adpater: Adapter,
  context?: Context,
): Entries {
  let pages: any = [];
  let subpackages: any = [];

  if (!context) {
    const appConfigPath: string = path.join(
      options.cwd,
      'src',
      'app.config.js',
    );
    if (!fs.existsSync(appConfigPath)) {
      throw new Error(`${appConfigPath} is not found`);
    }
    const appConfig: AppConfig = readManifest(appConfigPath, adpater.name);
    pages = appConfig.pages;
    subpackages = appConfig.subpackages || [];
    if (!pages || pages.length === 0) {
      throw new Error(
        'app.config.js `pages` field should not be undefined or empty object',
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
    (ret: { path: string; file: string }[], page: string) =>
      [
        ...ret,
        {
          path: page,
          file: searchFile(path.join(options.cwd, 'src', page)),
        },
      ].filter(subPage => subPage && subPage.file),
    [],
  );

  subpackages.forEach((pack: { pages: string[]; root: string }) => {
    entries.pages = entries.pages.concat(
      pack.pages.reduce(
        (ret: { path: string; file: string }[], page) =>
          [
            ...ret,
            {
              path: page,
              file: searchFile(path.join(options.cwd, 'src', pack.root, page)),
            },
          ].filter(subPage => subPage && subPage.file),
        [],
      ),
    );
  });

  return entries;
}
