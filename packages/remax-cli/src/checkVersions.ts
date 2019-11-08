import path from 'path';
import fs from 'fs';
import semver from 'semver';
import chalk from 'chalk';

const generatorStar = (count: number, symbol = '*') => {
  let starStr = '';
  for (let i = 0; i < count; i++) {
    starStr += symbol;
  }
  return starStr;
};

const generatorPlace = (
  origin: string,
  replace: string,
  longLength: number
): string => {
  const index = Math.round(origin.length / 2) - Math.round(longLength / 2) - 1;
  const length = replace.length;
  const originArray = origin.split('');
  const replaceArray = replace.split('');
  for (let i = 0; i < length; i++) {
    originArray[i + index] = replaceArray[i];
  }
  return originArray.join('');
};

export const checkRemaxVersion = () => {
  try {
    const cliPackagePath: string = path.join(__dirname, '..', 'package.json');
    const remaxPackagePath: string = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(remaxPackagePath)) {
      const remaxPkgConfig = require(remaxPackagePath);
      const cliPkgConfig = require(cliPackagePath);
      if (remaxPkgConfig.dependencies && remaxPkgConfig.dependencies['remax']) {
        const remaxVersion = remaxPkgConfig.dependencies['remax'].replace(
          /^./,
          ''
        );
        if (semver.lt(remaxVersion, cliPkgConfig.version)) {
          const placeholder =
            '*                                                     *';
          const origin =
            '*                                                               *';
          const remax = 'remax:    ' + chalk.red(remaxVersion);
          const remaxCLI = 'remax-cli: ' + chalk.green(cliPkgConfig.version);
          const longLength =
            remax.length > remaxCLI.length ? remax.length : remaxCLI.length;

          const warning = chalk.yellow(`remax-cli 版本与 remax 版本不匹配`);
          const upgrade = chalk.yellow(`请升级 remax 版本`);

          console.log(generatorStar(55));
          console.log(placeholder);
          console.log('*', `         ${warning}         `, '*');
          console.log('*', `                 ${upgrade}                 `, '*');
          console.log(placeholder);
          console.log(generatorPlace(origin, remax, longLength));
          console.log(generatorPlace(origin, remaxCLI, longLength));
          console.log(placeholder);
          console.log(generatorStar(55));
        }
      }
    }
  } catch (err) {
    return false;
  }
};
