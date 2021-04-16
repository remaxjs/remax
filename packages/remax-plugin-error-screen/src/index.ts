import * as path from 'path';
import * as fs from 'fs';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import { slash } from '@remax/shared';

export default (_: any, { cwd, rootDir }: { cwd: string; rootDir: string }) => {
  const searchCustomErrorFile = () => {
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    for (const ext of extensions) {
      const file = path.join(cwd, rootDir, `_error${ext}`);
      if (fs.existsSync(file)) {
        return file;
      }
    }
  };

  let errorScreenFile;
  if (process.env.NODE_ENV !== 'production') {
    errorScreenFile = path.resolve(__dirname, './ErrorScreen.development.js');
  } else {
    const customErrorFile = searchCustomErrorFile();
    errorScreenFile = customErrorFile ?? path.resolve(__dirname, './ErrorScreen.js');
  }
  const errorBoundaryFile = path.resolve(__dirname, './ErrorBoundary.js');

  const virtualModules = new VirtualModulesPlugin({
    'node_modules/@remax/plugin-error-screen/runtime.js': `
        import React from 'react';
        import { View } from 'remax/one';
        import ErrorScreen from '${slash(errorScreenFile)}';
        import ErrorBoundary from '${slash(errorBoundaryFile)}';

        export default {
          onPageComponent({ component }) {
            function ErrorBoundaryWrap(props, ref) {
              return React.createElement(
                ErrorBoundary,
                { errorScreen: ErrorScreen },
                React.createElement(component, { ...props, ref })
              );
            }
            ErrorBoundaryWrap.displayName = 'ErrorBoundary'
            return React.forwardRef(ErrorBoundaryWrap);
          },
        };
      `,
  });

  return {
    configWebpack({ config }: { config: any }) {
      config.plugin('remax-plugin-error-screen-virtual-modules').use(virtualModules);
    },
    registerRuntimePlugin() {
      return '@remax/plugin-error-screen/runtime.js';
    },
  };
};
