import webpack from 'webpack';
import { Options } from '@remax/types';
import webpackConfig from './webpack/config.mini';
import API from '../API';
import output from './utils/output';
import watch from './watch';

export default function buildMini(api: API, options: Options): webpack.Compiler {
  const { target } = options;

  api.registerAdapterPlugins(target!, options.one);

  const webpackOptions: webpack.Configuration = webpackConfig(api, options, target!);
  const compiler = webpack(webpackOptions);

  if (options.watch) {
    output.message('🚀 启动 watch\n', 'blue');
    const watcher = compiler.watch({}, (error, stats) => {
      if (error) {
        console.log(error);
        output.error(error.message);
        throw error;
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        info.errors.forEach(error => {
          output.error(error);
        });
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings.join('\n'));
      }

      // 适配阿里小程序 IDE
      if (options.target === 'ali') {
        output.message('Watching for changes...', 'green', options.notify);
      }
    });
    watch(options, api, compiler, watcher, true);
  } else {
    output.message('🚀 启动 build\n', 'blue');
    compiler.run((error, stats) => {
      if (error) {
        output.error(error.message);
        throw error;
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        info.errors.forEach(error => {
          output.error(error);
        });

        process.exit(1);
      }

      if (stats.hasWarnings()) {
        info.warnings.forEach(warning => {
          console.warn(warning);
        });
      }
    });
  }

  try {
    require('remax-stats').run();
  } catch (e) {
    // ignore
  }

  return compiler;
}
