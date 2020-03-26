import * as path from 'path';
import { compilation } from 'webpack';
import { RemaxOptions } from 'remax-types';
import readManifest from '../../../../readManifest';
import API from '../../../../API';

export default function createAppManifest(options: RemaxOptions, compilation: compilation.Compilation) {
  const config = readManifest(path.resolve(options.cwd, `${options.rootDir}/app.config`), API.adapter.target);
  const source = Buffer.from(JSON.stringify(config, null, 2));
  compilation.assets['app.json'] = {
    source: () => source,
    size: () => Buffer.byteLength(source),
  };
}
