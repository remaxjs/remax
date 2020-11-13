import * as path from 'path';
import * as fs from 'fs';
import VirtualModulesPlugin from 'webpack-virtual-modules';

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
    'node_modules/@alipay/remax-plugin-error-screen/runtime.js': `
        import React from 'react';
        import { View } from 'remax/one';
        import ErrorScreen from '${errorScreenFile}';
        import ErrorBoundary from '${errorBoundaryFile}';

        export default {
          onPageComponent({ component }) {
            return React.forwardRef((props, ref) => {
              return React.createElement(
                ErrorBoundary,
                { errorScreen: ErrorScreen },
                React.createElement(component, { ...props, ref })
              );
            });
          },
        };
      `,
  });

  return {
    configWebpack({ config }: { config: any }) {
      config.plugin('remax-plugin-error-screen-virtual-modules').use(virtualModules);
    },
    registerRuntimePlugin() {
      return '@alipay/remax-plugin-error-screen/runtime.js';
    },
  };
};
