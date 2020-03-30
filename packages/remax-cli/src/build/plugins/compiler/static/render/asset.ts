import * as path from 'path';
import { RemaxOptions, Meta } from 'remax-types';
import ejs from 'ejs';
import { TEMPLATE_ID } from '../constants';
import { templateInfoMap } from './templates';

export async function renderPage(
  pageFile: string,
  modules: string[],
  options: RemaxOptions,
  meta: Meta,
  createRenderOptions: Function
) {
  const renderOptions: any = createRenderOptions(options);
  const fileName = `${path.dirname(pageFile)}/${path.basename(pageFile, path.extname(pageFile))}${
    meta.template.extension
  }`;
  const pagePath = path.join(options.cwd, options.rootDir, pageFile);

  const templates = templateInfoMap.values().filter(t => modules.find(m => m === t.module));

  const entries = templateInfoMap.values().filter((template: any) => template.isEntry && template.module === pagePath);

  renderOptions.components = renderOptions.components.filter((c: any) => {
    // native 组件要筛选属于当前 page 下的
    return c.type !== 'native' || c.pages?.has(pagePath);
  });
  renderOptions.templates = templates;
  renderOptions.entries = entries;
  renderOptions.TEMPLATE_ID = TEMPLATE_ID;

  // 可以进入到 static compiler 中的都是配置好 staticEjs 的平台
  let code: string = await ejs.renderFile(meta.staticEjs!.page, renderOptions, {
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
