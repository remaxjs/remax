import errorScreen from '@remax/plugin-error-screen';
import devtools from '@remax/plugin-devtools';
import { Plugin } from '@remax/types';

export const builtinPlugins: Array<{
  optionKey: string;
  init: (...args: any[]) => Plugin;
}> = [
  {
    optionKey: 'errorScreen',
    init: errorScreen,
  },
  {
    optionKey: 'devtools',
    init: devtools,
  },
];
