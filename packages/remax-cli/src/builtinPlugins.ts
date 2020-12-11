import errorScreen from '@remax/plugin-error-screen';
import devtools from '@remax/plugin-devtools';
import { Options, Platform, Plugin } from '@remax/types';

export const builtinPlugins = (
  options: Options
): Array<{
  optionKey: string;
  init: (...args: any[]) => Plugin;
}> => {
  const isDev = process.env.NODE_ENV !== 'production';
  const plugins = [
    {
      optionKey: 'errorScreen',
      init: errorScreen,
    },
  ];
  if (options.target !== Platform.web && isDev && options.devtools) {
    plugins.push({
      optionKey: 'devtools',
      init: devtools,
    });
  }
  return plugins;
};
