import utils from 'loader-utils';
import { loader } from 'webpack';
import { registerNativeComponent as register } from '@remax/macro';
import { isNativeComponent } from '../../../utils/nativeComponent';
import getAssets from './getAssets';

export default function nativeComponent(this: loader.LoaderContext, source: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  const resourcePath = this.resourcePath;
  const { remaxOptions, api } = utils.getOptions(this);

  if (!isNativeComponent(resourcePath)) {
    return source;
  }

  const assets = getAssets(api, resourcePath, remaxOptions);

  assets.forEach(file => {
    this.addDependency(file);
  });

  const type = register(resourcePath, '', assets);

  return `import { createNativeComponent } from '@remax/runtime';
export default createNativeComponent('${type}')
`;
}
