import { loader } from 'webpack';
import utils from 'loader-utils';
import { slash } from '@remax/shared';

export default function stub(this: loader.LoaderContext, source: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  const modules: string[] = utils.getOptions(this).modules;

  if (modules.every(module => slash(this.resourcePath).indexOf(module) === -1)) {
    return source;
  }

  return 'module.exports = { stub: true }';
}
