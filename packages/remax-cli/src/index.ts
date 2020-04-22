import API from './API';
export { default as logger } from './build/utils/output';
import yargs from 'yargs';
import { build } from './build';
import analytics from './analytics';

export let cli = yargs;

export function run(args: any, callback?: yargs.ParseCallback) {
  cli = yargs
    .scriptName('remax-cli')
    .usage('Usage: $0 <command> [options]')
    .command<any>(
      'build',
      '编译项目',
      /* istanbul ignore next */
      () => {
        // ignore
      },
      (argv: any) => {
        analytics.event('cli', 'build', argv.target).send();
        build(argv);
      }
    );

  cli = API.extendsCLI({ cli });

  cli
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
    .showHelpOnFail(false);

  return cli.parse(args, callback);
}
