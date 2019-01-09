const program = require('commander');
const webpack = require('webpack');
const packageJSON = require('../package.json');
const getWebpackConfig = require('./webpack-config');
const fs = require('fs');
const path = require('path');

program.version(packageJSON.version);

function tryRequireConfig() {
  const configPath = path.join(process.cwd(), './remax.config.js');
  if (fs.existsSync(configPath)) {
    return require(configPath);
  } else {
    return {};
  }
}

program.command('dev')
  .description('start development')
  .action(() => {
    const configModule = tryRequireConfig();
    const webpackConfig = getWebpackConfig(configModule);
    configModule.__unsafe_webpack_config__ && configModule.__unsafe_webpack_config__(webpackConfig);
    webpack({
      ...webpackConfig,
      watch: true,
    }, (err, stats) => {
      if (err || stats.hasErrors()) {
        // Handle errors here
        console.error(err || stats.toString()); // eslint-disable-line
      }
      // Done processing
      console.log(stats.toString({ // eslint-disable-line
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

console.log('> Remax CLI'); // eslint-disable-line
