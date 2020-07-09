import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import detect from 'detect-port';
import { Options } from '@remax/types';
import webpackConfig from './webpack/config.web';
import address from 'address';
import output from './utils/output';
import API from '../API';
import watch from './watch';

export default function buildWeb(api: API, options: Options): webpack.Compiler {
  const webpackOptions: webpack.Configuration = webpackConfig(api, options);
  const compiler = webpack(webpackOptions);

  if (options.watch) {
    const designatedPort = options.port ?? 3000;

    detect(designatedPort, (err, port) => {
      if (err) {
        output.error(err.message);

        process.exit(1);
      }

      if (designatedPort !== port) {
        output.warn(` 端口: ${designatedPort} 被占用，系统已分配另一个可用端口：${port}`);
      }

      output.message('🚀 启动 watch', 'blue');
      output.message(`📎 http://localhost:${port}`, 'blue');
      output.message(`📎 http://${address.ip()}:${port}\n`, 'blue');

      const server = new WebpackDevServer(compiler, webpackOptions.devServer);

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
      server.listen(port, '0.0.0.0', error => {
        if (error) {
          console.error(error);
          process.exit(1);
        }
      });

      watch(options, api, compiler, server);
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

  return compiler;
}
