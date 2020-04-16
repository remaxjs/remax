import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import API from '../../../../API';
import { getPath } from '../../../nativeComponent';
import output from '../../../utils/output';
import { RemaxOptions } from '@remax/types';

const templatePaths: Set<string> = new Set();

export function walk(filePath: string, options: RemaxOptions) {
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
      walk(getPath(filePath, attrs[src]), options);
    } else if (['include', 'import'].includes(name) && attrs.src) {
      walk(getPath(filePath, attrs.src), options);
    }
  };

  parser.reset();
  parser.write(content);
  parser.end();
}

export const getTemplatePaths = () => {
  return templatePaths;
};

export default (options: RemaxOptions, id: string) => {
  const filePath = id.replace(/\.js$/, API.getMeta().template.extension);

  walk(filePath, options);
};
