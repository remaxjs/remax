import { existsSync } from 'fs';
import resolve from 'resolve';
import type { Options } from '@remax/types';
import { getPath } from './helpers';

const runWalk = (filePath: string, components: Set<string>, options: Options) => {
  const walk = (filePath: string) => {
    const { usingComponents = {} } = require(filePath);

    Object.values(usingComponents).forEach(value => {
      let componentJsPath = '';
      let componentJsonPath = '';

      if (!componentJsPath) {
        const componentPath = getPath(filePath, value as string);
        componentJsPath = `${componentPath}.js`;
        componentJsonPath = `${componentPath}.json`;
      }

      try {
        componentJsPath = resolve.sync(value as string, { basedir: options.cwd });
        componentJsonPath = componentJsPath.replace(/\.js/, '.json');
      } catch {
        // ignore
      }

      if (!existsSync(componentJsPath) || !existsSync(componentJsonPath)) {
        console.error(`${componentJsPath} 或 ${componentJsonPath} 不存在`);
        return;
      }

      components.add(componentJsPath);
    });
  };

  walk(filePath);
};

export default function usingComponents(id: string, options: Options) {
  const components = new Set<string>();
  const filePath = id.replace(/\.js$/, '.json');
  if (!existsSync(filePath)) {
    console.error(`文件 ${filePath} 不存在`);
    return Array.from(components);
  }

  runWalk(filePath, components, options);

  return Array.from(components);
}
