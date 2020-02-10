import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import API from '../../../API';
import { pushArray, getPath } from './util';
import output from '../../utils/output';
import { RemaxOptions } from 'remax-types';

const parser = new htmlparser2.Parser({});

const templatePaths: string[] = [];

export function walk(filePath: string, options: RemaxOptions) {
  if (!fs.existsSync(filePath)) {
    output.error(`文件 ${filePath} 不存在`, options.notify);
    return;
  }

  const meta = API.getMeta({ remaxOptions: options });
  const { tag, src } = meta.template;
  const { tag: includeTag, src: includeSrc } = meta.include;

  pushArray(templatePaths, filePath);

  const content = fs.readFileSync(filePath).toString();

  parser._cbs.onopentag = (name, attrs) => {
    if (name === tag && attrs[src]) {
      walk(getPath(filePath, attrs[src]), options);
    } else if (name === includeTag && attrs[includeSrc]) {
      walk(getPath(filePath, attrs[includeSrc]), options);
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
  const filePath = id.replace(
    /\.js$/,
    API.getMeta({
      remaxOptions: options,
    }).template.extension
  );

  walk(filePath, options);
};
