import { existsSync, readFileSync } from 'fs';
import postcss from 'postcss';
import API from '../../../API';
import { pushArray, getPath } from './util';
import { output } from '../../utils/output';

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
      const file = getPath(filePath, node.params.replace(/'|"/g, ''));

      if (!existsSync(file)) {
        output(`\n🚨 文件 ${file} 不存在`, 'red');
        return;
      }

      walk(file);
    }
  });
};

export const getcssPaths = () => {
  return cssPaths;
};

export default (id: string) => {
  const filePath = id.replace(/\.js$/, API.getMeta().style);

  walk(filePath);
};
