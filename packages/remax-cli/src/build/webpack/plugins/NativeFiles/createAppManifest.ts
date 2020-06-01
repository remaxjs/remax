import { compilation } from 'webpack';
import { Options } from '@remax/types';
import * as cacheable from './cacheable';
import API from '../../../../API';
import getAppConfig from '../../../utils/getAppConfig';

export default function createAppManifest(options: Options, api: API, compilation: compilation.Compilation) {
  const config = getAppConfig(options, api);
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
