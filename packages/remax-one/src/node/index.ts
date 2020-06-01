import { Plugin } from '@remax/types';
import hostComponents from '../hostComponents/node';

const plugin = (): Plugin => {
  return {
    hostComponents,
  };
};

export default plugin;
