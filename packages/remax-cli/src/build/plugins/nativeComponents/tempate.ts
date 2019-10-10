import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import path from 'path';
import { Adapter } from '../../adapters';
import { pushArray } from './util';

const parser = new htmlparser2.Parser({});

const templatePaths: string[] = [];

function walk(filePath: string) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  pushArray(templatePaths, filePath);

  const content = fs.readFileSync(filePath).toString();

  parser._cbs.onopentag = (name, attrs) => {
    if (name === 'import' && attrs.src) {
      walk(path.join(filePath, attrs.src));
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
