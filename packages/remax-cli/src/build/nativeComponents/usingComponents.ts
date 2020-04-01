import { existsSync } from 'fs';
import path from 'path';
import { loader } from 'webpack';
import { getPath } from './util';
import output from '../utils/output';
import { RemaxOptions } from 'remax-types';

const runWalk = (filePath: string, options: RemaxOptions, ctx: loader.LoaderContext) => {
  const walk = (filePath: string) => {
    delete require.cache[filePath];
    const { usingComponents = {} } = require(filePath);

    Object.values(usingComponents).forEach(value => {
      const componentPath = getPath(filePath, value as string);
      const componentJsPath = `${componentPath}.js`;
      const componentJsonPath = `${componentPath}.json`;

      if (!existsSync(componentJsPath) || !existsSync(componentJsonPath)) {
        output.error(`${componentJsPath} 或 ${componentJsonPath} 不存在`);
        return;
      }

      ctx.addDependency(path.relative(options.cwd, componentJsPath));

      walk(componentJsonPath);
    });
  };

  walk(filePath);
};

export default function usingComponents(id: string, options: RemaxOptions, ctx: loader.LoaderContext) {
  const filePath = id.replace(/\.js$/, '.json');
  if (!existsSync(filePath)) {
    output.error(`文件 ${filePath} 不存在`);
    return;
  }

  runWalk(filePath, options, ctx);
}
