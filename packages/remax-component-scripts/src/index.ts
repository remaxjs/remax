import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import build from './build';

export function run() {
  yargs(hideBin(process.argv))
    .scriptName('remax-component-script')
    .command(
      'build',
      '构建组件',
      y => {
        return y
          .option('watch', {
            describe: '监听文件变化',
            alias: 'w',
            type: 'boolean',
            default: false,
          })
          .option('type', {
            type: 'string',
            alias: 't',
            default: 'esm',
            description: '编译类型',
          })
          .option('config', {
            type: 'string',
            alias: 'c',
            description: '指定配置文件',
          })
          .option('output', {
            type: 'string',
            alias: 'o',
            default: 'dist',
            description: '指定输出目录',
          });
      },
      argv => {
        // 组件构建
        build(process.cwd(), argv);
      }
    ).argv;
}
