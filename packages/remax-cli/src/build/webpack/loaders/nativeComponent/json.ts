import { existsSync } from 'fs';
import output from '../../../utils/output';

const jsonPaths: Set<string> = new Set();

export const getjsonPaths = () => Array.from(jsonPaths);

export default function json(id: string) {
  const filePath = id.replace(/\.js$/, '.json');
  if (!existsSync(filePath)) {
    output.error(`文件 ${filePath} 不存在`);
    return;
  }

  jsonPaths.add(filePath);
}
