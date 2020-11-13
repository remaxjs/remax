import * as fs from 'fs';
import * as path from 'path';
import utils from 'loader-utils';
import { loader } from 'webpack';
import Store from '@remax/build-store';
import { isNativeComponent } from '@remax/shared';
import { getNativeAssetOutputPath, replaceExtension } from '../../utils/paths';
import Builder from '../../Builder';
import NativeEntry from '../../entries/NativeEntry';

export default async function nativeModule(this: loader.LoaderContext, source: string) {
  this.cacheable();

  const callback = this.async()!;

  let finalSource = source;

  const { builder }: { builder: Builder } = utils.getOptions(this) as any;

  const entryRealPath = this.resourcePath.replace(/\.entry\.js$/, '.js');
  const entry =
    builder.entryCollection.entries.get(entryRealPath) ||
    builder.entryCollection.nativeComponentEntries.get(entryRealPath);

  if (entry instanceof NativeEntry && this.resourcePath != entryRealPath) {
    entry.watchAssets(this);
    await Promise.all(
      Array.from(entry.getDependentEntries().values()).map(component => {
        builder.entryCollection.nativeComponentEntries.set(component.filename, component);
        component.watchAssets(this);
        return component.addToWebpack(this._compiler, this._compilation);
      })
    );
  }
  if (this.resourcePath.endsWith('.entry.js')) {
    const cssFile = replaceExtension(entryRealPath, builder.api.getMeta().style);
    if (fs.existsSync(cssFile)) {
      finalSource = `
        require('./${path.basename(cssFile)}');
        ${source}
      `;
    }
  }

  if (isNativeComponent(this.resourcePath)) {
    const name = getNativeAssetOutputPath(replaceExtension(this.resourcePath, ''), builder.options);
    // loader 处理的文件顺序不固定，使用输出路径计算组件 id
    const id = Store.registerNativeComponent(this.resourcePath, name);
    const entry = new NativeEntry(builder, name, this.resourcePath);
    builder.entryCollection.nativeComponentEntries.set(entry.filename, entry);
    entry.watchAssets(this);
    await entry.addToWebpack(this._compiler, this._compilation);
    finalSource = `import { createNativeComponent } from '@remax/runtime';
export default createNativeComponent('${id}')
`;
  }

  callback(null, finalSource);
}
