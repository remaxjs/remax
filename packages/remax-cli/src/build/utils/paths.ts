import * as path from 'path';
import { slash } from '@remax/shared';
import { Options } from '@remax/types';
import crypto from 'crypto';

const hash = (name: string) => crypto.createHash('md5').update(name).digest('hex');

export function replaceExtension(file: string, ext: string) {
  const oldExt = path.extname(file);
  return file.replace(new RegExp(`${oldExt}$`), ext);
}

export function getNativeAssetOutputPath(sourcePath: string, options: Options) {
  let output = slash(sourcePath)
    .replace(slash(options.cwd) + '/', '')
    .replace(slash(options.rootDir) + '/', '')
    .replace(/@/g, '_')
    .replace(/node_modules/g, 'npm');

  if (path.isAbsolute(output)) {
    // 通过config.resolve.modules设置非cwd的sourcePath, 会进入此分支
    // 将这种路径改成相对路径
    const dirname = path.dirname(output);
    const basename = path.basename(output);

    output = 'remix__external/' + hash(dirname) + basename;
  }

  return output;
}
