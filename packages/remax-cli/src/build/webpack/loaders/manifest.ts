import { loader } from 'webpack';
import * as fs from 'fs';
import * as path from 'path';

// TODO: 可以通过 Plugin 加入依赖？
export default function manifest(this: loader.LoaderContext, source: string) {
  const id = this.resourcePath;
  const ext = path.extname(id);
  const extRegExp = new RegExp(`\\${ext}$`);

  const manifestFilePath = id.replace(extRegExp, `.config.js`);

  if (fs.existsSync(manifestFilePath)) {
    this.addDependency(manifestFilePath);
  }

  return source;
}
