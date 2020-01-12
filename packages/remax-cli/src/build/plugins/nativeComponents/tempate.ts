import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import API from '../../../API';
import { pushArray, getPath } from './util';
import { output } from '../../utils/output';

const parser = new htmlparser2.Parser({});

const templatePaths: string[] = [];

export function walk(filePath: string) {
  if (!fs.existsSync(filePath)) {
    output(`\n🚨 文件 ${filePath} 不存在`, 'red');
    return;
  }

  const meta = API.getMeta();
  const { tag, src } = meta.template;
  const { tag: includeTag, src: includeSrc } = meta.include;

  pushArray(templatePaths, filePath);

  const content = fs.readFileSync(filePath).toString();

  parser._cbs.onopentag = (name, attrs) => {
    if (name === tag && attrs[src]) {
      walk(getPath(filePath, attrs[src]));
    } else if (name === includeTag && attrs[includeSrc]) {
      walk(getPath(filePath, attrs[includeSrc]));
    }
  };

  parser.reset();
  parser.write(content);
  parser.end();
}

export const getTemplatePaths = () => {
  return templatePaths;
};

export default (id: string) => {
  const filePath = id.replace(/\.js$/, API.getMeta().template.extension);

  walk(filePath);
};
