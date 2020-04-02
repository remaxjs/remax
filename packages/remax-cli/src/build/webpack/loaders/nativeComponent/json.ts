import { existsSync } from 'fs';
import output from '../../../utils/output';
import { pushArray } from '../../../nativeComponents/util';

const jsonPaths: string[] = [];

export const getjsonPaths = () => jsonPaths;

export default function json(id: string) {
  const filePath = id.replace(/\.js$/, '.json');
  if (!existsSync(filePath)) {
    output.error(`文件 ${filePath} 不存在`);
    return;
  }

  pushArray(jsonPaths, filePath);
}
