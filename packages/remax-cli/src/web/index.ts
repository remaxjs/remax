import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import express from 'express';
import webpackConfig from './webpackConfig.web';
import getConfig from '../getConfig';
import output from '../build/utils/output';
import { remaxVersion } from '../checkVersions';

export default async (argv: any) => {
  const target = argv.target;
  process.env.REMAX_PLATFORM = target;

  const options = getConfig();

  const webpackOptions: webpack.Configuration = webpackConfig(options, target);
  const compiler = webpack(webpackOptions);

  output.message(`\n⌨️  Remax v${remaxVersion()}\n`, 'green');
  output.message(`🎯 平台 ${target}`, 'blue');

  if (argv.watch) {
    output.message('🚀 启动 watch\n', 'blue');
    const app = express();
    app.use(middleware(compiler));
    app.listen(3000, () => console.log('Example app listening on port http://localhost:3000'));

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
