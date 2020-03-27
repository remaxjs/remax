import stringifyHostComponents from '../../stringifyHostComponents';

export default function remaxDefine(this: any, source: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  return source.replace('__REMAX_HOST_COMPONENTS__', stringifyHostComponents());
}
