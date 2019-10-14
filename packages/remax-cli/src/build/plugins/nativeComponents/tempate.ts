import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import { Adapter } from '../../adapters';
import { pushArray, getPath } from './util';
import { output } from '../../utils/output';

const parser = new htmlparser2.Parser({});

const templatePaths: string[] = [];

export function walk(filePath: string, adapter: Adapter) {
  if (!fs.existsSync(filePath)) {
    output(`\n🚨 文件 ${filePath} 不存在`, 'red');
    return;
  }

  const { tag, src } = adapter.extensions.template;
  const { tag: includeTag, src: includeSrc } = adapter.extensions.include;

  pushArray(templatePaths, filePath);

  const content = fs.readFileSync(filePath).toString();

  parser._cbs.onopentag = (name, attrs) => {
    if (name === tag && attrs[src]) {
      walk(getPath(filePath, attrs[src]), adapter);
    } else if (name === includeTag && attrs[includeSrc]) {
      walk(getPath(filePath, attrs[includeSrc]), adapter);
    }
  };

  parser.reset();
  parser.write(content);
  parser.end();
}

export const getTemplatePaths = () => {
  return templatePaths;
};

export default (id: string, adapter: Adapter) => {
  const filePath = id.replace(/\.js$/, adapter.extensions.template.extension);

  walk(filePath, adapter);
};
