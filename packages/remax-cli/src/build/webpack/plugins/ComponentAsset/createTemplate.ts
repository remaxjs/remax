import { sortBy } from 'lodash';
import { compilation } from 'webpack';
import ejs from 'ejs';
import { Options, Meta } from '@remax/types';
import * as componentManifest from '../../../babel/componentManifest';
import API from '../../../../API';
import SourceCache from '../../../../SourceCache';

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
  meta: Meta,
  compilation: compilation.Compilation,
  cache: SourceCache
) {
  const fileName = `index${meta.template.extension}`;

  const ejsOptions: { [props: string]: any } = {
    ...createRenderOptions(api),
    baseTemplate: `/base${meta.template.extension}`,
  };

  let source: string = await ejs.renderFile(meta.ejs.page, ejsOptions, {
    rmWhitespace: options.compressTemplate,
  });

  /* istanbul ignore next */
  if (options.compressTemplate) {
    source = source.replace(/^\s*$(?:\r\n?|\n)/gm, '').replace(/\r\n|\n/g, ' ');
  }

  cache.invalid(fileName, source, () => {
    compilation.assets[fileName] = {
      source: () => source,
      size: () => Buffer.byteLength(source),
    };
  });
}
