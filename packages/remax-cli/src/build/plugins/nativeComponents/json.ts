import { existsSync } from 'fs';
import { output } from '../../utils/output';

const jsonPaths: string[] = [];

export function getjsonPaths() {
  return jsonPaths;
}

export default function json(id: string) {
  const filePath = id.replace(/\.js$/, '.json');
  if (!existsSync(filePath)) {
    output(`\n🚨 文件 ${filePath} 不存在`, 'red');
    return;
  }

  if (!jsonPaths.includes(filePath)) {
    jsonPaths.push(filePath);
  }
}
