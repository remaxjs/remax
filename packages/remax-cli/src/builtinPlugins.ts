import errorScreen from '@remax/plugin-error-screen';
import { Plugin } from '@remax/types';

export const builtinPlugins: Array<{
  optionKey: string;
  init: (...args: any[]) => Plugin;
}> = [
  {
    optionKey: 'errorScreen',
    init: errorScreen,
  },
];
