import * as path from 'path';
import { kebabCase } from 'lodash';

interface NativeComponent {
  id: string;
  sourcePath: string;
  importers: string[];
  assets: string[];
}

export const nativeComponents: Map<string, NativeComponent> = new Map();

export function register(sourcePath: string, importer = '', assets: string[] = []) {
  const component = Array.from(nativeComponents.values()).find(c => c.sourcePath === sourcePath);

  if (component) {
    component.assets = Array.from(new Set([...component.assets, ...assets]));
    component.importers = Array.from(new Set([...component.importers, importer].filter(Boolean)));
    return component.id;
  }

  const ext = path.extname(sourcePath);
  const basename = path.basename(sourcePath);
  let id = kebabCase(basename.replace(ext, ''));
  let num = 0;

  while (nativeComponents.has(id)) {
    id = id + num;
    num += 1;
  }

  nativeComponents.set(id, {
    id,
    sourcePath,
    importers: [importer].filter(Boolean),
    assets,
  });

  return id;
}
