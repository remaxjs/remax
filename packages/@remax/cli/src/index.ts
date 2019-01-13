import program from 'commander';

import dev from './dev';

program
  .command('dev')
  .description('start development')
  .action(dev);

program.parse(process.argv);
