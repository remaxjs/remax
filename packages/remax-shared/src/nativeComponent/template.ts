import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import type { Options, Meta } from '@remax/types';
import { getPath } from './helpers';

export function walk(platformConfig: Meta, filePath: string, templatePaths: Set<string>, options: Options) {
  if (!fs.existsSync(filePath)) {
    console.error(`文件 ${filePath} 不存在`, options.notify);
    return;
  }
  const { tag, src } = platformConfig.template;

  templatePaths.add(filePath);

  const content = fs.readFileSync(filePath).toString();

  const parser = new htmlparser2.Parser({});

  (parser as any)._cbs.onopentag = (name: string, attrs: any) => {
    if (name === tag && attrs[src]) {
      walk(platformConfig, getPath(filePath, attrs[src]), templatePaths, options);
    } else if (['include', 'import'].includes(name) && attrs.src) {
      walk(platformConfig, getPath(filePath, attrs.src), templatePaths, options);
    }
  };

  parser.reset();
  parser.write(content);
  parser.end();
}

export default function template(platformConfig: Meta, options: Options, id: string) {
  const templatePaths: Set<string> = new Set();
  const filePath = id.replace(/\.js$/, platformConfig.template.extension);

  walk(platformConfig, filePath, templatePaths, options);

  return Array.from(templatePaths);
}
