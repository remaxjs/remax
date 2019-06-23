import fs from 'fs';
import path from 'path';

interface AppConfig {
  pages: string[];
}

export default function getEntries(): any {
  const cwd = process.cwd();
  const appConfigPath: string = path.join(cwd, 'src', 'app.json');
  if (!fs.existsSync(appConfigPath)) {
    throw new Error(`${appConfigPath} is not found`);
  }
  const appConfig: AppConfig = JSON.parse(fs.readFileSync(appConfigPath, 'utf-8'));
  const { pages } = appConfig;
  if (!pages || pages.length === 0) {
    throw new Error('app.json `pages` field should not be undefined or empty object');
  }

  const defaultEntry = {
    app: path.join(cwd, 'src', 'app.js'),
  };
  const entry = pages.reduce((ret, page) => {
    return { ...ret, [page]: path.join(cwd, 'src', `${page}.js`) };
  }, defaultEntry);

  return entry;
}
