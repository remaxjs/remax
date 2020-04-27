import { existsSync } from 'fs';
import { getPath } from '../../../utils/nativeComponent';
import output from '../../../utils/output';
import { RemaxOptions } from '@remax/types';

const runWalk = (filePath: string, components: Set<string>, options: RemaxOptions) => {
  const walk = (filePath: string) => {
    delete require.cache[filePath];
    const { usingComponents = {} } = require(filePath);

    Object.values(usingComponents).forEach(value => {
      let componentJsPath = '';
      let componentJsonPath = '';

      if (!componentJsPath) {
        const componentPath = getPath(filePath, value as string);
        componentJsPath = `${componentPath}.js`;
        componentJsonPath = `${componentPath}.json`;
      }

      if (!existsSync(componentJsPath) || !existsSync(componentJsonPath)) {
        output.error(`${componentJsPath} 或 ${componentJsonPath} 不存在`);
        return;
      }

      components.add(componentJsPath);
    });
  };

  walk(filePath);
};

export default function usingComponents(id: string, options: RemaxOptions) {
  const components = new Set<string>();
  const filePath = id.replace(/\.js$/, '.json');
  if (!existsSync(filePath)) {
    output.error(`文件 ${filePath} 不存在`);
    return Array.from(components);
  }

  runWalk(filePath, components, options);

  return Array.from(components);
}
