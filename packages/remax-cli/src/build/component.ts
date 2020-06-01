import webpack from 'webpack';
import { Options } from '@remax/types';
import webpackConfig from './webpack/config.component';
import API from '../API';
import output from './utils/output';

export default function buildComponent(api: API, options: Options) {
  const { target } = options;
  api.registerAdapterPlugins(target!, options.one);

  const webpackOptions: webpack.Configuration = webpackConfig(api, options, target!);
  const compiler = webpack(webpackOptions);

  if (options.watch) {
    output.message('🚀 启动 watch\n', 'blue');
    compiler.watch({}, (error, stats) => {
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
    });
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

  return compiler;
}
