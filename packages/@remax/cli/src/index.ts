import program from 'commander';
import dev from './dev';
import build from './build';
import getConfig from './getConfig';

const projectOptions = getConfig();

program
  .command('dev')
  .description('start development')
  .action(() => dev(projectOptions));

program
  .command('build')
  .description('build the project')
  .action(() => build(projectOptions));

program.parse(process.argv);
