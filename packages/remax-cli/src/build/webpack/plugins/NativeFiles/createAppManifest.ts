import * as path from 'path';
import { compilation } from 'webpack';
import { Options } from '@remax/types';
import readManifest from '../../../../readManifest';
import * as cacheable from './cacheable';

export default function createAppManifest(options: Options, compilation: compilation.Compilation) {
  const config = readManifest(path.resolve(options.cwd, `${options.rootDir}/app.config`), options.target!);
  const source = Buffer.from(JSON.stringify(config, null, 2));

  const fileName = 'app.json';

  if (!cacheable.invalid(fileName, source.toString())) {
    return;
  }

  compilation.assets[fileName] = {
    source: () => source,
    size: () => Buffer.byteLength(source),
  };
}
