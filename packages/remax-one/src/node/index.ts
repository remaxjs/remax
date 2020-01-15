import { RemaxNodePlugin } from 'remax-types';
import hostComponents from '../hostComponents/node';

const plugin = (): RemaxNodePlugin => {
  return {
    name: 'remax-one',
    hostComponents,
  };
};

export default plugin;
