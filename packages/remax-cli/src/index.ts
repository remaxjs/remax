import yargs from 'yargs';
import type { Options } from '@remax/types';
import { internalBuildApp, buildMiniPlugin } from './build';
import getConfig from './getConfig';
import API from './API';

export * from './legacyExport';

export default class RemaxCLI {
  options?: Options;
  api?: API;

  run(args: any, callback?: yargs.ParseCallback) {
    const argv: any = require('yargs-parser')(args);
    process.env.REMAX_PLATFORM = argv.t || argv.target || 'ali';

    this.options = getConfig();
    this.options.compressTemplate = this.options.compressTemplate ?? argv.minimize;
    this.api = new API();
    const cli = this.initCLI();
    this.api.registerPlugins(this.options.plugins);
    this.api.extendCLI(cli);
    if (args.length === 0) {
      cli.showHelp();
    }
    return cli.parse(args, callback);
  }

  initCLI() {
    return yargs
      .scriptName('remax')
      .usage('Usage: $0 <command> [options]')
      .command<any>(
        'build',
        '编译项目',
        y => {
          y.option('watch', {
            describe: '监听文件变化',
            alias: 'w',
            type: 'boolean',
            default: false,
          })
            .option('target', {
              describe: '目标平台',
              alias: 't',
              type: 'string',
              default: 'ali',
            })
            .option('notify', {
              describe: '编译错误提醒',
              alias: 'n',
              type: 'boolean',
              default: false,
            })
            .option('port', {
              describe: '指定端口号',
              alias: 'p',
              type: 'number',
            })
            .option('minimize', {
              describe: '最小化文件',
              alias: 'm',
              type: 'boolean',
              default: false,
            })
            .option('analyze', {
              describe: '编译分析',
              alias: 'a',
              type: 'boolean',
              default: false,
            })
            .option('devtools', {
              describe: '启动 react-devtools 调试',
              alias: 'd',
              type: 'boolean',
              default: true,
            })
            .option('loglevel', {
              describe: '展示日志级别',
              type: 'string',
              default: 'verbose',
            });
        },
        (argv: any) => {
          internalBuildApp({ ...this.options, ...argv }, this.api!);
          try {
            require('remax-stats').run({ type: 'remax' });
          } catch (e) {
            // ignore
          }
        }
      )
      .command<any>('mini-plugin', '插件相关命令', y => {
        y.command(
          'build',
          '编译插件',
          y => {
            y.option('watch', {
              describe: '监听文件变化',
              alias: 'w',
              type: 'boolean',
              default: false,
            }).option('target', {
              describe: '目标平台',
              alias: 't',
              type: 'string',
            });
          },
          (argv: any) => {
            buildMiniPlugin({ ...this.options, ...argv });
            try {
              require('remax-stats').run({ type: 'remax' });
            } catch (e) {
              // ignore
            }
          }
        );
      })
      .help();
  }
}
