import * as path from 'path';
import { compilation } from 'webpack';
import ejs from 'ejs';
import { nativeComponents } from '@remax/macro';
import { Options, Meta } from '@remax/types';
import { slash } from '@remax/shared';
import { TEMPLATE_ID } from '../../../babel/compiler/static/constants';
import { templateInfoMap } from '../../../babel/compiler/static/render/templates';
import { createRenderOptions } from './createPageTemplate';
import { ComponentManifest } from '../../../babel/componentManifest';
import API from '../../../../API';

export default async function createTurboPageTemplate(
  api: API,
  options: Options,
  pageFile: string,
  modules: string[],
  meta: Meta,
  compilation: compilation.Compilation
) {
  const renderOptions: any = createRenderOptions(api, options, modules, compilation);
  const pagePath = slash(pageFile).replace(slash(path.join(options.cwd, options.rootDir)) + '/', '');
  const fileName = slash(
    `${path.dirname(pagePath)}/${path.basename(pagePath, path.extname(pagePath))}${meta.template.extension}`
  );

  const templates = templateInfoMap.values().filter(t => {
    return modules.includes(t.module);
  });

  const entries = templateInfoMap
    .values()
    .filter((template: any) => template.isEntry && slash(template.module) === pageFile);

  renderOptions.components = (renderOptions.components as ComponentManifest[]).filter(c => {
    if (c.type !== 'native') {
      return true;
    }

    // native 组件要筛选属于当前 page 下的
    return !!nativeComponents.get(c.id)?.importers.find(importer => modules.includes(importer));
  });
  renderOptions.templates = templates;
  renderOptions.entries = entries;
  renderOptions.TEMPLATE_ID = TEMPLATE_ID;

  // 可以进入到 static compiler 中的都是配置好 staticEjs 的平台
  let source: string = await ejs.renderFile(meta.staticEjs!.page, renderOptions, {
    rmWhitespace: options.compressTemplate,
  });

  // TODO 用 uglify 替代 compressTemplate
  /* istanbul ignore next */
  if (options.compressTemplate) {
    source = source.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/\r\n|\n/g, ' ');
  }

  compilation.assets[fileName] = {
    source: () => source,
    size: () => Buffer.byteLength(source),
  };
}
