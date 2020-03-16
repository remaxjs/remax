import { RemaxOptions } from 'remax-types';
import { isMatch } from 'micromatch';
import API from '../API';
import output from './utils/output';

export function validate(path: string, options: RemaxOptions) {
  const result = isMatch(path, options.turboPages);
  if (result && API.adapter.name !== 'alipay') {
    output.error('目前 static compiler 模式仅支持 alipay 开启');
  }

  return result;
}
