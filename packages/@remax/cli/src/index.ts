import program from 'commander';

import compile from './compile';

program
  .command('dev')
  .description('start development')
  .action(compile({ watch: true }));

program
  .command('build')
  .description('build the project')
  .action(compile());

program.parse(process.argv);
