import { Plugin } from '@remax/types';
import hostComponents from '../hostComponents/node';

const plugin = (): Plugin => {
  return {
    name: 'remax-one',
    hostComponents,
  };
};

export default plugin;
