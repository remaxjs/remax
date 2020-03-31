import { loader } from 'webpack';
import * as fs from 'fs';
import * as path from 'path';
import API from '../../../API';
import { isMini } from '../../platform';

export default function resolvePlatform(this: loader.LoaderContext, source: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  const id = this.resourcePath;
  const ext = path.extname(id);
  const extRegExp = new RegExp(`${ext.replace('.', '\\.')}$`);

  let target = API.adapter.target;
  let targetFile = id.replace(extRegExp, `.${target}${ext}`);

  if (fs.existsSync(targetFile)) {
    this.addDependency(targetFile);
    return fs.readFileSync(targetFile);
  }

  if (isMini(target)) {
    target = '.mini';
    targetFile = id.replace(extRegExp, `.${target}${ext}`);

    if (fs.existsSync(targetFile)) {
      this.addDependency(targetFile);
      return fs.readFileSync(targetFile);
    }
  }

  return source;
}
