import webpack from 'webpack';
import { Options } from '@remax/types';
import webpackConfig from './webpack/config.mini';
import API from '../API';
import output from './utils/output';
import watch from './watch';

export default function buildMini(api: API, options: Options): webpack.Compiler {
  const { target, notify } = options;

  api.registerAdapterPlugins(target!, options.one);

  const webpackOptions: webpack.Configuration = webpackConfig(api, options, target!);
  const compiler = webpack(webpackOptions);

  if (options.watch) {
    output.message('🚀 启动 watch\n', 'blue');
    const watcher = compiler.watch({}, (error, stats) => {
      let fail = false;

      if (error) {
        console.log(error);
        output.error(error.message, notify);
        throw error;
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        output.error(info.errors.join('\n'), notify);
        fail = true;
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings.join('\n'));
        fail = true;
      }

      // 适配阿里小程序 IDE
      if (options.target === 'ali') {
        output.message('Watching for changes...', 'green');
      }

      if (!fail && notify) {
        output.notice('编译完成');
      }
    });
    watch(options, api, compiler, watcher, true);
  } else {
    output.message('🚀 启动 build\n', 'blue');
    compiler.run((error, stats) => {
      if (error) {
        output.error(error.message, notify);
        throw error;
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        output.error(info.errors.join('\n'), notify);

        process.exit(1);
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings.join('\n'));

        return;
      }

      if (notify) {
        output.notice('编译完成');
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
