import { existsSync, readFileSync } from 'fs';
import postcss from 'postcss';
import { getPath } from './helpers';
import type { Meta } from '@remax/types';

export const walk = (filePath: string, cssPaths: Set<string>) => {
  if (!existsSync(filePath)) {
    return;
  }

  cssPaths.add(filePath);

  const content = readFileSync(filePath);
  const ast = postcss.parse(content);

  if (!ast.nodes) {
    return;
  }

  ast.nodes.forEach(node => {
    if (node.type === 'atrule' && node.name === 'import') {
      const file = getPath(filePath, node.params.replace(/'|"/g, ''));

      if (!existsSync(file)) {
        console.error(`文件 ${file} 不存在`);
        return;
      }

      walk(file, cssPaths);
    }
  });
};

export default function style(platformConfig: Meta, id: string) {
  const cssPaths: Set<string> = new Set();
  const filePath = id.replace(/\.js$/, platformConfig.style);

  walk(filePath, cssPaths);

  return Array.from(cssPaths);
}
