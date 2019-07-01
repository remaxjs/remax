import fs from 'fs';
import path from 'path';
import { RemaxOptions } from './getConfig';

interface AppConfig {
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

export default function getEntries(options: RemaxOptions): any {
  const appConfigPath: string = path.join(options.cwd, 'src', 'app.json');
  if (!fs.existsSync(appConfigPath)) {
    throw new Error(`${appConfigPath} is not found`);
  }
  const appConfig: AppConfig = JSON.parse(fs.readFileSync(appConfigPath, 'utf-8'));
  const { pages } = appConfig;
  if (!pages || pages.length === 0) {
    throw new Error('app.json `pages` field should not be undefined or empty object');
  }

  const defaultEntry = [searchFile(path.join(options.cwd, 'src', 'app'))];
  const entry = pages.reduce((ret, page) => {
    return [...ret, searchFile(path.join(options.cwd, 'src', page))];
  }, defaultEntry);

  return entry;
}
