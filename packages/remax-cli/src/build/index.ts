import webpack from 'webpack';
import webpackConfig from './webpackConfig';
import API from '../API';
import getConfig from '../getConfig';
import { Context } from '../types';
import output from './utils/output';
import { remaxVersion } from '../checkVersions';

export default async (argv: any, context?: Context) => {
  const target = argv.target;
  process.env.REMAX_PLATFORM = target;

  const options = {
    ...getConfig(),
    ...(context ? context.config : {}),
  };

  API.registerAdapterPlugins(target, options);

  const webpackOptions: webpack.Configuration = webpackConfig(options, target);
  const compiler = webpack(webpackOptions);

  output.message(`\n⌨️  Remax v${remaxVersion()}\n`, 'green');
  output.message(`🎯 平台 ${target}`, 'blue');

  if (argv.watch) {
    output.message('🚀 启动 watch\n', 'blue');
    compiler.watch({}, (error, stats) => {
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
    });

    try {
      require('remax-stats').run();
    } catch (e) {
      // ignore
    }
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
          output.warn(warning);
        });
      }

      output.message('💡 完成', 'green');
    });
  }
};
