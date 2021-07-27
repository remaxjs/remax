import { sortBy } from 'lodash';
import { compilation } from 'webpack';
import ejs from 'ejs';
import type { Options, Meta } from '@remax/types';
import Store from '@remax/build-store';
import SourceCache from '../../../../SourceCache';
import { slash } from '@remax/shared';
import { getUsingComponents } from '../getUsingComponents';
import path from 'path';
import ComponentEntry from '../../../entries/ComponentEntry';

export function createRenderOptions(componentPath: string, compilation: compilation.Compilation, options: Options) {
  const components = new Map(Store.getCollectedComponents());

  getUsingComponents(componentPath, compilation, options).forEach(component => {
    components.set(component.id, {
      id: component.id,
      props: component.props,
      type: 'native',
    });
  });

  return {
    components,
    skipComponents: Store.skipHostComponents,
    slotView: {
      props: [...new Set(Store.slotView.props || [])].sort(),
    },
  };
}

export default async function createComponentTemplate(
  component: ComponentEntry,
  options: Options,
  meta: Meta,
  compilation: compilation.Compilation,
  cache: SourceCache
) {
  const fileName = slash(`${component.name}${meta.template.extension}`);

  let baseTemplate = `/base${meta.template.extension}`;

  // 如果是组件构建，生成相对路径
  if (component.builder.buildType === 'minicomponent') {
    baseTemplate = slash(path.relative(path.dirname('./' + fileName), '.' + baseTemplate));
  }

  const ejsOptions: { [props: string]: any } = {
    ...createRenderOptions(component.filename, compilation, options),
    renderIsolatedTemplates: false,
    baseTemplate,
    sortBy,
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
