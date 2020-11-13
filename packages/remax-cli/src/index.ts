import yargs from 'yargs';
import { Options, Platform, Plugin } from '@remax/types';
import { buildApp, buildMiniPlugin } from './build';
import getConfig from './getConfig';
import API from './API';
import { builtinPlugins } from './builtinPlugins';
import output from './build/utils/output';

export default class RemixCLI {
  options?: Options;
  api?: API;

  run(args: any, callback?: yargs.ParseCallback) {
    const argv: any = require('yargs-parser')(args);
    process.env.REMIX_PLATFORM = argv.t || argv.target || 'ali';

    this.options = getConfig();
    this.api = new API();
    const cli = this.initCLI();
    this.registerBuiltinPlugins();
    this.api.registerPlugins(this.options.plugins);
    this.api.extendCLI(cli);
    if (args.length === 0) {
      cli.showHelp();
    }
    return cli.parse(args, callback);
  }

  registerBuiltinPlugins() {
    const plugins = builtinPlugins.reduce((acc: Plugin[], plugin) => {
      const options = (this.options as any)[plugin.optionKey];
      if (options) {
        acc.push(plugin.init(options === true ? {} : options, this.options));
      }
      return acc;
    }, []);
    this.api?.registerPlugins(plugins);
  }

  initCLI() {
    return yargs
      .scriptName('remix')
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
            .option('analyze', {
              describe: '编译分析',
              alias: 'a',
              type: 'boolean',
              default: false,
            });
        },
        (argv: any) => {
          output.message('🚀 开始构建\n', 'blue');
          buildApp({ ...this.options, ...argv }, this.api!);
          try {
            require('remax-stats').run({ type: 'remix' });
            require('@alipay/remix-stats').run({ buildType: argv.target === Platform.web ? 'web-app' : 'mini-app' });
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
              default: 'ali',
            });
          },
          (argv: any) => {
            buildMiniPlugin({ ...this.options, ...argv });
            try {
              require('remax-stats').run({ type: 'remix' });
              require('@alipay/remix-stats').run({ buildType: 'mini-plugin' });
            } catch (e) {
              // ignore
            }
          }
        );
      })
      .help();
  }
}
