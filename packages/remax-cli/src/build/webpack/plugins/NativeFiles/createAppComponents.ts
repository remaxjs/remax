import * as path from 'path';
import * as fs from 'fs';
import { compilation } from 'webpack';
import { Options, Meta } from '@remax/types';
import globby from 'globby';
import API from '../../../../API';

/**
 * 拷贝平台组件内容到构建内容中，作用于全局的组件
 */
export default async function createAppComponents(
  api: API,
  options: Options,
  meta: Meta,
  compilation: compilation.Compilation
) {
  if (meta.components) {
    const componentsDir = path.join(meta.components, '../');
    const files = globby.sync('components/**/*.*', { cwd: componentsDir });
    if (files.length > 0) {
      files.forEach(fileName => {
        const source = fs.readFileSync(path.join(componentsDir, fileName));
        compilation.assets[fileName] = {
          source: () => source,
          size: () => Buffer.byteLength(source),
        };
      });
    }
  }
}
