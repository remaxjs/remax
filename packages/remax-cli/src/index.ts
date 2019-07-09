import cli from 'yargs';
import build from './build';

cli
  .scriptName('remax-cli')
  .usage('Usage: $0 <command> [options]')
  .command<any>('build', 'build your project', () => {}, (argv: any) => build(argv))
  .option('watch', {
    describe: 'watch project',
    alias: 'w',
    type: 'boolean',
    default: false,
  })
  .option('target', {
    describe: 'target platform',
    alias: 't',
    type: 'string',
    required: true,
  }).showHelpOnFail(false).argv;
