import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import API from '../../../../API';
import { getPath } from '../../../utils/nativeComponent';
import output from '../../../utils/output';
import { RemaxOptions } from '@remax/types';

export function walk(filePath: string, templatePaths: Set<string>, options: RemaxOptions) {
  if (!fs.existsSync(filePath)) {
    output.error(`文件 ${filePath} 不存在`, options.notify);
    return;
  }

  const meta = API.getMeta();
  const { tag, src } = meta.template;

  templatePaths.add(filePath);

  const content = fs.readFileSync(filePath).toString();

  const parser = new htmlparser2.Parser({});

  parser._cbs.onopentag = (name, attrs) => {
    if (name === tag && attrs[src]) {
      walk(getPath(filePath, attrs[src]), templatePaths, options);
    } else if (['include', 'import'].includes(name) && attrs.src) {
      walk(getPath(filePath, attrs.src), templatePaths, options);
    }
  };

  parser.reset();
  parser.write(content);
  parser.end();
}

export default (options: RemaxOptions, id: string) => {
  const templatePaths: Set<string> = new Set();
  const filePath = id.replace(/\.js$/, API.getMeta().template.extension);

  walk(filePath, templatePaths, options);

  return Array.from(templatePaths);
};
