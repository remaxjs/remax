import { Plugin } from '@alipay/remix-types';
import hostComponents from '../hostComponents/node';

const plugin = (): Plugin => {
  return {
    hostComponents,
  };
};

export default plugin;
