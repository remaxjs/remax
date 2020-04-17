import { hostComponents } from 'remax/macro';
import { loader } from 'webpack';

const stringifyHostComponents = () =>
  JSON.stringify(
    [...hostComponents.keys()].reduce((obj, key) => {
      obj[key] = {
        alias: hostComponents.get(key)?.alias || {},
      };

      return obj;
    }, {} as any)
  );

export default function remaxDefine(this: loader.LoaderContext, source: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  return source.replace('__REMAX_HOST_COMPONENTS__', stringifyHostComponents());
}
