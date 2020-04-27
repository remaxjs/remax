import { RemaxOptions } from 'remax-types';
import jsHelper from './jsHelper';
import jsModule from './modules';
import style from './style';
import json from './json';
import template from './template';
import usingComponents from './usingComponents';
import { isNativeComponent } from '../../../utils/nativeComponent';

export default function getAssets(resourcePath: string, remaxOptions: RemaxOptions) {
  if (!isNativeComponent(resourcePath)) {
    return [];
  }

  const assets: string[] = [
    ...jsModule(remaxOptions, resourcePath),
    ...jsHelper(resourcePath),
    ...style(resourcePath),
    ...json(resourcePath),
    ...template(remaxOptions, resourcePath),
    ...usingComponents(resourcePath, remaxOptions).reduce<string[]>(
      (acc, id) => [...acc, ...getAssets(id, remaxOptions)],
      []
    ),
  ];

  return assets;
}
