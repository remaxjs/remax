import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import path from 'path';
import { Adapter } from '../../adapters';
import { pushArray } from './util';
import jsHelper from './jsHelper';
import winPath from '../../../winPath';

const parser = new htmlparser2.Parser({});

const templatePaths: string[] = [];

function helperPath(from: string, to: string) {
  return winPath(path.resolve(path.dirname(from), to));
}

function walk(filePath: string) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  pushArray(templatePaths, filePath);

  const content = fs.readFileSync(filePath).toString();

  parser._cbs.onopentag = (name, attrs) => {
    if (name === 'import' && attrs.src) {
      walk(path.join(filePath, attrs.src));
    } else if (name === 'import-sjs') {
      // alipay sjs
      jsHelper(helperPath(filePath, attrs.from));
    } else if (name === 'wxs') {
      // wechat wxs
      jsHelper(helperPath(filePath, attrs.src));
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
  const filePath = id.replace(/\.js$/, adapter.extensions.template);

  walk(filePath);
};
