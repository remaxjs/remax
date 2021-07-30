import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

export function readFileContent(name: string, cwd: string) {
  return fs.readFileSync(path.join(cwd, name)).toString();
}

export function readDirFileList(pattern: string, cwd: string) {
  return glob.sync(pattern, {
    cwd,
  });
}
