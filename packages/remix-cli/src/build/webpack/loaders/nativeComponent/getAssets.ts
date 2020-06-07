import { Options } from '@alipay/remix-types';
import jsHelper from './jsHelper';
import jsModule from './modules';
import style from './style';
import json from './json';
import template from './template';
import usingComponents from './usingComponents';
import { isNativeComponent } from '../../../utils/nativeComponent';
import API from '../../../../API';

export default function getAssets(api: API, resourcePath: string, remixOptions: Options) {
  if (!isNativeComponent(resourcePath)) {
    return [];
  }

  const assets: string[] = [
    ...jsModule(remixOptions, resourcePath),
    ...jsHelper(api, resourcePath),
    ...style(api, resourcePath),
    ...json(resourcePath),
    ...template(api, remixOptions, resourcePath),
    ...usingComponents(resourcePath, remixOptions).reduce<string[]>(
      (acc, id) => [...acc, ...getAssets(api, id, remixOptions)],
      []
    ),
  ];

  return assets;
}
