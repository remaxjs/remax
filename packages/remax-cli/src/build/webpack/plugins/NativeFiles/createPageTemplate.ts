import * as path from 'path';
import { sortBy } from 'lodash';
import { compilation } from 'webpack';
import ejs from 'ejs';
import { RemaxOptions, Meta } from 'remax-types';
import * as componentManifest from '../../../../build/babel/componentManifest';
import winPath from '../../../../winPath';
import { ensureDepth } from '../../../../defaultOptions/UNSAFE_wechatTemplateDepth';
import * as cacheable from './cacheable';

export function pageUID(pagePath: string) {
  let value = winPath(pagePath).replace('/', '_');
  const ext = path.extname(value);
  value = value.replace(ext, '');

  return value;
}

export function createRenderOptions() {
  return {
    components: sortBy(componentManifest.values(), 'id'),
    slotView: {
      props: [...new Set(componentManifest.SlotView.props || [])].sort(),
    },
  };
}

export default async function createPageTemplate(
  options: RemaxOptions,
  pageFile: string,
  meta: Meta,
  compilation: compilation.Compilation
) {
  const pagePath = pageFile.replace(path.join(options.cwd, options.rootDir) + '/', '');
  const fileName = `${path.dirname(pagePath)}/${path.basename(pagePath, path.extname(pagePath))}${
    meta.template.extension
  }`;

  const ejsOptions: { [props: string]: any } = {
    ...createRenderOptions(),
    baseTemplate: `/base${meta.template.extension}`,
  };

  if (meta.jsHelper) {
    ejsOptions.jsHelper = `./${pageUID(pagePath)}_helper${meta.jsHelper.extension}`;
  }

  let source: string = await ejs.renderFile(meta.ejs.page, ejsOptions, {
    rmWhitespace: options.compressTemplate,
  });

  // TODO 用 uglify 替代 compressTemplate
  /* istanbul ignore next */
  if (options.compressTemplate) {
    source = source.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/\r\n|\n/g, ' ');
  }

  if (!cacheable.invalid(fileName, source)) {
    return;
  }

  compilation.assets[fileName] = {
    source: () => source,
    size: () => Buffer.byteLength(source),
  };
}

export async function createBaseTemplate(options: RemaxOptions, meta: Meta, compilation: compilation.Compilation) {
  if (!meta.ejs.base) {
    return null;
  }

  let source: string = await ejs.renderFile(
    meta.ejs.base,
    {
      ...createRenderOptions(),
      depth: ensureDepth(options.UNSAFE_wechatTemplateDepth),
    },
    {
      rmWhitespace: options.compressTemplate,
    }
  );

  // TODO 用 uglify 替代 compressTemplate
  /* istanbul ignore next */
  if (options.compressTemplate) {
    source = source.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/\r\n|\n/g, ' ');
  }

  const fileName = `base${meta.template.extension}`;

  if (!cacheable.invalid(fileName, source)) {
    return;
  }

  compilation.assets[fileName] = {
    source: () => source,
    size: () => Buffer.byteLength(source),
  };
}
