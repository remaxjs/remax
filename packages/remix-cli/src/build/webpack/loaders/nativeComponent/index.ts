import utils from 'loader-utils';
import { loader } from 'webpack';
import { registerNativeComponent as register } from '@alipay/remix-macro';
import { isNativeComponent } from '../../../utils/nativeComponent';
import getAssets from './getAssets';

export default function nativeComponent(this: loader.LoaderContext, source: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  const resourcePath = this.resourcePath;
  const { remixOptions, api } = utils.getOptions(this);

  if (!isNativeComponent(resourcePath)) {
    return source;
  }

  const assets = getAssets(api, resourcePath, remixOptions);

  assets.forEach(file => {
    this.addDependency(file);
  });

  const type = register(resourcePath, '', assets);

  return `import { createNativeComponent } from '@alipay/remix-runtime';
export default createNativeComponent('${type}')
`;
}
