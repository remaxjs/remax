import { existsSync } from 'fs';
import output from '../../../utils/output';

export default function json(id: string) {
  const filePath = id.replace(/\.js$/, '.json');
  const jsonPaths: Set<string> = new Set();

  if (!existsSync(filePath)) {
    output.error(`文件 ${filePath} 不存在`);
    return [];
  }

  jsonPaths.add(filePath);

  return Array.from(jsonPaths);
}
