import webpack from 'webpack';
import events from 'events';
import { RemaxOptions } from '@remax/types';
import webpackConfig from './webpack/config.mini';
import API from '../API';
import output from './utils/output';

export default async function buildMini(options: RemaxOptions, buildEvent: events.EventEmitter) {
  const { target } = options;

  API.registerAdapterPlugins(target, options);

  const webpackOptions: webpack.Configuration = webpackConfig(options, target);
  const compiler = webpack(webpackOptions);

  if (options.watch) {
    output.message('🚀 启动 watch\n', 'blue');
    compiler.watch({}, (error, stats) => {
      buildEvent.emit('event', {
        code: error ? 'ERROR' : 'END',
        error,
        stats,
      });
      if (error) {
        output.error(`[${name}]: ${error.message}`);
        throw error;
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        info.errors.forEach(error => {
          output.error(error);
        });
      }

      if (stats.hasWarnings()) {
        output.warn(info.warnings.join('\n'));
      }

      // 适配阿里小程序 IDE
      if (target === 'ali') {
        output.message('Watching for changes...', 'green', options.notify);
      }
    });
  } else {
    output.message('🚀 启动 build\n', 'blue');
    compiler.run((error, stats) => {
      buildEvent.emit('event', {
        code: error ? 'ERROR' : 'END',
        error,
        stats,
      });
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
          output.warn(warning);
        });
      }
    });
  }
}
