import cli from 'yargs';
import build from './build';

export function run(args: any, context?: any) {
  cli
    .scriptName('remax-cli')
    .usage('Usage: $0 <command> [options]')
    .command<any>(
      'build',
      '编译项目',
      () => {},
      (argv: any) => build(argv, context),
    )
    .option('watch', {
      describe: '监听文件变化',
      alias: 'w',
      type: 'boolean',
      default: false,
    })
    .option('target', {
      describe: '目标平台，如 wechat，alipay',
      alias: 't',
      type: 'string',
      required: true,
    })
    .showHelpOnFail(false)
    .parse(args);
}
