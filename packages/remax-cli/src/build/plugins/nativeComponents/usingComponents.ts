import { getPath } from './util';
import { existsSync } from 'fs';
import path from 'path';
import { output } from '../../utils/output';
import { PluginContext } from 'rollup';
import { RemaxOptions } from 'remax-types';

const runWalk = (
  filePath: string,
  options: RemaxOptions,
  ctx: PluginContext
) => {
  const walk = (filePath: string) => {
    delete require.cache[filePath];
    const { usingComponents = {} } = require(filePath);

    Object.values(usingComponents).forEach(value => {
      const componentPath = getPath(filePath, value as string);
      const componentJsPath = `${componentPath}.js`;
      const componentJsonPath = `${componentPath}.json`;

      if (!existsSync(componentJsPath) || !existsSync(componentJsonPath)) {
        output(`\n🚨 ${componentJsPath} 或 ${componentJsonPath} 不存在`, 'red');
        return;
      }

      ctx.emitFile({
        id: path.relative(options.cwd, componentJsPath),
        type: 'chunk',
      });

      walk(componentJsonPath);
    });
  };

  walk(filePath);
};

export default function usingComponents(
  id: string,
  options: RemaxOptions,
  ctx: PluginContext
) {
  const filePath = id.replace(/\.js$/, '.json');
  if (!existsSync(filePath)) {
    output(`\n🚨 文件 ${filePath} 不存在`, 'red');
    return;
  }

  runWalk(filePath, options, ctx);
}
