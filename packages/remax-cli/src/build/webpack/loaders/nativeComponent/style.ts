import { existsSync, readFileSync } from 'fs';
import postcss from 'postcss';
import API from '../../../../API';
import { getPath } from '../../../nativeComponent';
import output from '../../../utils/output';

const cssPaths: Set<string> = new Set();

export const walk = (filePath: string) => {
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
        output.error(`文件 ${file} 不存在`);
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
