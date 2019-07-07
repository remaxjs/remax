import program from 'commander';
import build from './build';
import getConfig from './getConfig';

const projectOptions = getConfig();

program
  .command('dev')
  .description('start development')
  .action(() => build(projectOptions, true));

program
  .command('build')
  .description('build the project')
  .action(() => build(projectOptions, false));

program.parse(process.argv);
