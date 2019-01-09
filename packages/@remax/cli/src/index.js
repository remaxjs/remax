const program = require('commander');
const webpack = require('webpack');
const packageJSON = require('../package.json');
const getWebpackConfig = require('./webpack-config');

program.version(packageJSON.version);

program.command('dev')
  .description('start development')
  .action(() => {
    const webpackConfig = getWebpackConfig();
    webpack({
      ...webpackConfig,
      watch: true,
    }, (err, stats) => {
      if (err || stats.hasErrors()) {
        // Handle errors here
        console.error(err || stats.toString());
      }
      // Done processing
      console.log(stats.toString({
        chunks: false, // Makes the build much quieter
        chunkModules: false,
        colors: true, // Shows colors in the console
        children: false,
        builtAt: true,
        modules: false,
      }));
    });
  });

program.parse(process.argv);

console.log('> Remax CLI');
