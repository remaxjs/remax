import fs from 'fs';
import path from 'path';
import { RemaxOptions } from './getConfig';

interface AppConfig {
  pages: string[];
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

export default function getEntries(options: RemaxOptions): Entries {
  const appConfigPath: string = path.join(options.cwd, 'src', 'app.json');
  if (!fs.existsSync(appConfigPath)) {
    throw new Error(`${appConfigPath} is not found`);
  }
  const appConfig: AppConfig = JSON.parse(
    fs.readFileSync(appConfigPath, 'utf-8')
  );
  const { pages } = appConfig;
  if (!pages || pages.length === 0) {
    throw new Error(
      'app.json `pages` field should not be undefined or empty object'
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
  entries.pageConfigPath = pages.reduce((ret: string[], page) => {
    return [
      ...ret,
      searchFile(path.join(options.cwd, 'src', page), 'json'),
    ].filter(f => f);
  }, []);

  return entries;
}
