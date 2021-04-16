import type { Options, Meta } from '@remax/types';
import jsHelper from './jsHelper';
import jsModule from './modules';
import style from './style';
import json from './json';
import template from './template';
import usingComponents from './usingComponents';

export default function getAssets(platformConfig: Meta, resourcePath: string, options: Options) {
  const assets: string[] = [
    ...jsModule(options, resourcePath),
    ...jsHelper(platformConfig, resourcePath),
    ...style(platformConfig, resourcePath),
    ...json(resourcePath),
    ...template(platformConfig, options, resourcePath),
    ...usingComponents(resourcePath, options).reduce<string[]>(
      (acc, id) => [...acc, ...getAssets(platformConfig, id, options)],
      []
    ),
  ];

  return assets;
}
