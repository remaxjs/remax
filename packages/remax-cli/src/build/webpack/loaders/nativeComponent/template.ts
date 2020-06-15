import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import API from '../../../../API';
import { getPath } from '../../../utils/nativeComponent';
import output from '../../../utils/output';
import { Options } from '@remax/types';

export function walk(api: API, filePath: string, templatePaths: Set<string>, options: Options) {
  if (!fs.existsSync(filePath)) {
    output.error(`文件 ${filePath} 不存在`);
    if (options.notify) {
      output.notice(`文件 ${filePath} 不存在`);
    }
    return;
  }

  const meta = api.getMeta();
  const { tag, src } = meta.template;

  templatePaths.add(filePath);

  const content = fs.readFileSync(filePath).toString();

  const parser = new htmlparser2.Parser({});

  parser._cbs.onopentag = (name, attrs) => {
    if (name === tag && attrs[src]) {
      walk(api, getPath(filePath, attrs[src]), templatePaths, options);
    } else if (['include', 'import'].includes(name) && attrs.src) {
      walk(api, getPath(filePath, attrs.src), templatePaths, options);
    }
  };

  parser.reset();
  parser.write(content);
  parser.end();
}

export default function template(api: API, options: Options, id: string) {
  const templatePaths: Set<string> = new Set();
  const filePath = id.replace(/\.js$/, api.getMeta().template.extension);

  walk(api, filePath, templatePaths, options);

  return Array.from(templatePaths);
}
