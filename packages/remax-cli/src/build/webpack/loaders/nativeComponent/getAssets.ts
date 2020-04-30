import { Options } from '@remax/types';
import jsHelper from './jsHelper';
import jsModule from './modules';
import style from './style';
import json from './json';
import template from './template';
import usingComponents from './usingComponents';
import { isNativeComponent } from '../../../utils/nativeComponent';
import API from '../../../../API';

export default function getAssets(api: API, resourcePath: string, remaxOptions: Options) {
  if (!isNativeComponent(resourcePath)) {
    return [];
  }

  const assets: string[] = [
    ...jsModule(remaxOptions, resourcePath),
    ...jsHelper(api, resourcePath),
    ...style(api, resourcePath),
    ...json(resourcePath),
    ...template(api, remaxOptions, resourcePath),
    ...usingComponents(resourcePath, remaxOptions).reduce<string[]>(
      (acc, id) => [...acc, ...getAssets(api, id, remaxOptions)],
      []
    ),
  ];

  return assets;
}
