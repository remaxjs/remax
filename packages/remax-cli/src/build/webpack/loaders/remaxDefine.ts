import { loader } from 'webpack';
import stringifyHostComponents from '../../stringifyHostComponents';

export default function remaxDefine(this: loader.LoaderContext, source: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  return source.replace('__REMAX_HOST_COMPONENTS__', stringifyHostComponents());
}
