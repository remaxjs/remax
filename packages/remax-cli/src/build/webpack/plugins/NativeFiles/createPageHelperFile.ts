import * as path from 'path';
import ejs from 'ejs';
import { compilation } from 'webpack';
import { Meta, Options } from '@remax/types';
import * as cacheable from './cacheable';
import { pageFilename } from './createPageTemplate';
import winPath from '../../../../winPath';

export default async function createHelperFile(
  options: Options,
  pageFile: string,
  meta: Meta,
  compilation: compilation.Compilation
) {
  if (!meta.jsHelper || !meta.ejs.jsHelper) {
    return null;
  }

  const rootDir = path.join(options.cwd, options.rootDir);
  const pagePath = path.relative(rootDir, pageFile);
  const pageDir = path.dirname(pagePath);

  const source: string = await ejs.renderFile(meta.ejs.jsHelper, {
    target: options.target,
  });

  const fileName = winPath(path.join(pageDir, `${pageFilename(pagePath)}_helper${meta.jsHelper.extension}`));

  if (!cacheable.invalid(fileName, source)) {
    return;
  }

  compilation.assets[fileName] = {
    source: () => source,
    size: () => Buffer.byteLength(source),
  };
}
