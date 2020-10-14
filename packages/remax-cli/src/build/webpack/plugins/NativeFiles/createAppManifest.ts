import { compilation } from 'webpack';
import { Options, Platform } from '@remax/types';
import * as cacheable from './cacheable';
import API from '../../../../API';
import getAppConfig from '../../../utils/getAppConfig';

export default function createAppManifest(options: Options, api: API, compilation: compilation.Compilation) {
  const config = getAppConfig(options, api);

  if (options.target === Platform.baidu) {
    // 百度小程序通过自定义组件加载 base 模板
    // 原因 @see https://smartprogram.baidu.com/forum/topic/show/118637
    config.usingComponents = Object.assign(
      {
        base: '/components/base/base',
      },
      config.usingComponents
    );
  }

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
