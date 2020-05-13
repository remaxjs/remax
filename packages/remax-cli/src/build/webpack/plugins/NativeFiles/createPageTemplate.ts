import * as path from 'path';
import { sortBy } from 'lodash';
import { compilation } from 'webpack';
import ejs from 'ejs';
import { Options, Meta } from '@remax/types';
import * as componentManifest from '../../../../build/babel/componentManifest';
import winPath from '../../../../winPath';
import { ensureDepth } from '../../../../defaultOptions/UNSAFE_wechatTemplateDepth';
import * as cacheable from './cacheable';
import API from '../../../../API';

export function pageUID(pagePath: string) {
  let value = winPath(pagePath).replace('/', '_');
  const ext = path.extname(value);
  value = value.replace(ext, '');

  return value;
}

export function pageFilename(pagePath: string) {
  let value = path.basename(pagePath);
  const ext = path.extname(value);
  value = value.replace(ext, '');

  return value;
}

export function createRenderOptions(api: API) {
  return {
    components: sortBy(componentManifest.values(api), 'id'),
    slotView: {
      props: [...new Set(componentManifest.SlotView.props || [])].sort(),
    },
  };
}

export default async function createPageTemplate(
  api: API,
  options: Options,
  pageFile: string,
  meta: Meta,
  compilation: compilation.Compilation
) {
  const rootDir = path.join(options.cwd, options.rootDir);
  const pagePath = path.relative(rootDir, pageFile);
  const pageDir = path.dirname(pagePath);

  const fileName = winPath(path.join(pageDir, `${pageFilename(pagePath)}${meta.template.extension}`));

  const ejsOptions: { [props: string]: any } = {
    ...createRenderOptions(api),
    baseTemplate: `/base${meta.template.extension}`,
  };

  if (meta.jsHelper) {
    ejsOptions.jsHelper = `./${pageFilename(pagePath)}_helper${meta.jsHelper.extension}`;
  }

  let source: string = await ejs.renderFile(meta.ejs.page, ejsOptions, {
    rmWhitespace: options.compressTemplate,
  });

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

export async function createBaseTemplate(api: API, options: Options, meta: Meta, compilation: compilation.Compilation) {
  if (!meta.ejs.base) {
    return null;
  }

  let source: string = await ejs.renderFile(
    meta.ejs.base,
    {
      ...createRenderOptions(api),
      depth: ensureDepth(options.UNSAFE_wechatTemplateDepth),
    },
    {
      rmWhitespace: options.compressTemplate,
    }
  );

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
