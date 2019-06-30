import fs from 'fs';
import path from 'path';

export interface RemaxConfig {
  cssModules?: boolean;
}

export default function getConfig(): RemaxConfig {
  const configPath: string = path.join(process.cwd(), './remax.config.js');
  if (fs.existsSync(configPath)) {
    return require(configPath);
  }
  return {};
}
