import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { RemaxOptions, BuildCallback } from '@remax/types';
import webpackConfig from './webpack/config.web';
import address from 'address';
import output from './utils/output';

export default async (options: RemaxOptions, callback?: BuildCallback) => {
  const webpackOptions: webpack.Configuration = webpackConfig(options);
  const compiler = webpack(webpackOptions);

  if (typeof callback === 'function') {
    callback({ compiler });
  }

  if (options.watch) {
    output.message('🚀 启动 watch', 'blue');
    output.message('📎 http://localhost:3000', 'blue');
    output.message(`📎 http://${address.ip()}:3000\n`, 'blue');

    const server = new WebpackDevServer(compiler, {
      publicPath: webpackOptions.output!.publicPath!,
      compress: true,
      hot: true,
      open: false,
      historyApiFallback: true,
      port: 3000,
      noInfo: true,
    });

    compiler.hooks.done.tap('web-dev', stats => {
      console.log(
        stats.toString({
          colors: true,
          modules: false,
          children: false,
          assets: false,
          entrypoints: false,
        })
      );
    });
    server.listen(3000, '0.0.0.0', error => {
      if (error) {
        console.error(error);
        process.exit(1);
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
          output.warn(warning);
        });
      }

      output.message('💡 完成', 'green');
    });
  }
};
