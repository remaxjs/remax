import * as path from 'path';
import { RemaxOptions, Meta } from 'remax-types';
import ejs from 'ejs';
import winPath from '../../../../../winPath';
import { TEMPLATE_ID_ATTRIBUTE_NAME } from '../constants';

export async function renderPage(
  pageFile: string,
  options: RemaxOptions,
  meta: Meta,
  createRenderOptions: Function
) {
  const renderOptions: any = createRenderOptions(options);
  const fileName = `${path.dirname(pageFile)}/${path.basename(
    pageFile,
    path.extname(pageFile)
  )}${meta.template.extension}`;

  const entries = renderOptions.templates.filter(
    (template: any) =>
      template.isEntry &&
      template.module === path.join(options.cwd, options.rootDir, pageFile)
  );

  renderOptions.entries = entries;
  renderOptions.baseTemplate = winPath(
    path.relative(path.dirname(pageFile), `base${meta.template.extension}`)
  );
  renderOptions.TEMPLATE_PROP = TEMPLATE_ID_ATTRIBUTE_NAME;

  let code: string = await ejs.renderFile(meta.ejs.page, renderOptions, {
    rmWhitespace: options.compressTemplate,
  });

  // TODO 用 uglify 替代 compressTemplate
  /* istanbul ignore next */
  if (options.compressTemplate) {
    code = code.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/\r\n|\n/g, ' ');
  }

  return {
    type: 'asset' as const,
    fileName,
    source: code,
  };
}

export async function renderCommon(
  options: RemaxOptions,
  meta: Meta,
  createRenderOptions: Function
) {
  const renderOptions = createRenderOptions(options);

  renderOptions.TEMPLATE_PROP = TEMPLATE_ID_ATTRIBUTE_NAME;

  let code: string = await ejs.renderFile(meta.ejs.base!, renderOptions, {
    rmWhitespace: options.compressTemplate,
  });

  // TODO 用 uglify 替代 compressTemplate
  /* istanbul ignore next */
  if (options.compressTemplate) {
    code = code.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/\r\n|\n/g, ' ');
  }

  return {
    type: 'asset' as const,
    fileName: `base${meta.template.extension}`,
    source: code,
  };
}
