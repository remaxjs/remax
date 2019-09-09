import { Adapter } from '../../adapters';
import { existsSync, readFileSync } from 'fs';
import postcss from 'postcss';
import path from 'path';
import { pushArray } from './util';

const cssPaths: string[] = [];

export const walk = (filePath: string) => {
  if (!existsSync(filePath)) {
    return;
  }

  pushArray(cssPaths, filePath);

  const content = readFileSync(filePath);
  const ast = postcss.parse(content);

  if (!ast.nodes) {
    return;
  }

  ast.nodes.forEach(node => {
    if (node.type === 'atrule' && node.name === 'import') {
      const file = path.join(
        path.dirname(filePath),
        node.params.replace(/'/g, '')
      );

      if (!existsSync(file)) {
        return;
      }

      walk(file);
    }
  });
};

export const getcssPaths = () => {
  return cssPaths;
};

export default (id: string, adapter: Adapter) => {
  const filePath = id.replace(/\.js$/, adapter.extensions.style);

  walk(filePath);
};
