import { RemaxOptions } from 'remax-types';

export function isConfigFile(id: string) {
  return /\.config\.(js|ts)$/.test(id);
}

export function isInNativeDir(options: RemaxOptions, id: string) {
  return id.startsWith(options.rootDir + '/native/');
}
