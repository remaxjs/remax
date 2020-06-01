import yargs from 'yargs';
import { buildApp, buildComponent } from './build';
import analytics from './analytics';

export let cli = yargs;

export { default as buildMini } from './build/mini';
export { default as buildWeb } from './build/web';
export { getDefaultOptions } from './defaultOptions';

export function run(args: any, callback?: yargs.ParseCallback) {
  cli = yargs
    .scriptName('remax')
    .usage('Usage: $0 <command> [options]')
    .command<any>(
      'build [type]',
      '编译项目',
      y => {
        y.positional('type', {
          describe: '构建的项目类型',
          type: 'string',
          default: 'app',
        })
          .option('watch', {
            describe: '监听文件变化',
            alias: 'w',
            type: 'boolean',
            default: false,
          })
          .option('target', {
            describe: '目标平台，如 wechat，ali',
            alias: 't',
            type: 'string',
            required: true,
            requiresArg: true,
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
          })
          .option('minimize', {
            describe: '最小化文件',
            alias: 'm',
            type: 'boolean',
            default: false,
          })
          .showHelpOnFail(false);
      },
      (argv: any) => {
        if (argv.type === 'app') {
          analytics.event('cli', 'build', argv.target).send();
          buildApp(argv);
        } else {
          buildComponent(argv);
        }
      }
    );

  return cli.parse(args, callback);
}
