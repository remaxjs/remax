import fs from 'fs';
import path from 'path';

interface AppConfig {
  pages: string[];
}

interface Entries {
  app: string;
  pages: string[];
}

function searchFile(file: string) {
  const tsFile = file + '.ts';
  if (fs.existsSync(tsFile)) {
    return tsFile;
  }
  const tsxFile = file + '.tsx';
  if (fs.existsSync(tsxFile)) {
    return tsxFile;
  }
  return file + '.js';
}

export default function getEntries(): Entries {
  const appConfigPath: string = path.join(process.cwd(), 'src', 'app.json');
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
    app: searchFile(path.join(process.cwd(), 'src', 'app')),
    pages: [],
  };

  entries.pages = pages.reduce((ret: string[], page) => {
    return [...ret, searchFile(path.join(process.cwd(), 'src', page))];
  }, []);

  return entries;
}
