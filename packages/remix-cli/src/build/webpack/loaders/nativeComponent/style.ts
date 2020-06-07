import { existsSync, readFileSync } from 'fs';
import postcss from 'postcss';
import API from '../../../../API';
import { getPath } from '../../../utils/nativeComponent';
import output from '../../../utils/output';

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
        output.error(`文件 ${file} 不存在`);
        return;
      }

      walk(file, cssPaths);
    }
  });
};

export default function style(api: API, id: string) {
  const cssPaths: Set<string> = new Set();
  const filePath = id.replace(/\.js$/, api.getMeta().style);

  walk(filePath, cssPaths);

  return Array.from(cssPaths);
}
