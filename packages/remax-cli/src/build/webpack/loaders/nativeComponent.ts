import * as fs from 'fs';
import * as path from 'path';
import utils from 'loader-utils';
import { loader } from 'webpack';
import Store from '@remax/build-store';
import { isNativeComponent, slash } from '@remax/shared';
import { getNativeAssetOutputPath, replaceExtension } from '../../utils/paths';
import { cssExtensions } from '../../../extensions';
import Builder from '../../Builder';
import NativeEntry from '../../entries/NativeEntry';

const EntryFilePathRegex = /\.entry\.(js|ts)$/;

function isEntryFile(filepath: string) {
  return EntryFilePathRegex.test(filepath);
}

export default async function nativeModule(this: loader.LoaderContext, source: string) {
  this.cacheable();

  const callback = this.async()!;

  let finalSource = source;

  const { builder }: { builder: Builder } = utils.getOptions(this) as any;
  const resourcePath = slash(this.resourcePath);

  const entryRealPath = resourcePath.replace(/\.entry(?=\.(js|ts)$)/, '');
  const entry =
    builder.entryCollection.entries.get(entryRealPath) ||
    builder.entryCollection.nativeComponentEntries.get(entryRealPath);

  if (entry instanceof NativeEntry && resourcePath != entryRealPath) {
    entry.watchAssets(this);
    await Promise.all(
      Array.from(entry.getDependentEntries().values()).map(component => {
        builder.entryCollection.nativeComponentEntries.set(component.filename, component);
        component.watchAssets(this);
        return component.addToWebpack(this._compiler, this._compilation);
      })
    );
  }
  if (isEntryFile(resourcePath)) {
    const cssFiles = [builder.api.getMeta().style, ...cssExtensions].map(ext => replaceExtension(entryRealPath, ext));
    cssFiles.some(file => {
      if (fs.existsSync(file)) {
        finalSource = `
          require('./${path.basename(file)}');
          ${source}
        `;
        return true;
      }
    });
  }

  if (isNativeComponent(resourcePath)) {
    const name = getNativeAssetOutputPath(replaceExtension(resourcePath, ''), builder.options);
    // loader 处理的文件顺序不固定，使用输出路径计算组件 id
    const id = Store.registerNativeComponent(resourcePath, name);
    const entry = new NativeEntry(builder, name, resourcePath);
    builder.entryCollection.nativeComponentEntries.set(entry.filename, entry);
    entry.watchAssets(this);
    await entry.addToWebpack(this._compiler, this._compilation);
    finalSource = `import { createNativeComponent } from '@remax/runtime';
export default createNativeComponent('${id}')
`;
  }

  callback(null, finalSource);
}
