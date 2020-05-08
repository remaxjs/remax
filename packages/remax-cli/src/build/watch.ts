import chokidar from 'chokidar';
import { Options } from '@remax/types';
import { Compiler } from 'webpack';
import SingleEntryPlugin from 'webpack/lib/SingleEntryPlugin';
import { getPages } from '../getEntries';

let isFirstRunWatcher = true;

export default function watch(options: Options, compiler: Compiler, watcher: any, addEntry = false) {
  // 监听额外的文件
  const pages = getPages(options);
  chokidar.watch([`${options.rootDir}/app.config.{js,ts}`]).on('change', () => {
    if (isFirstRunWatcher) return;
    if (addEntry) {
      const nextPages = getPages(options);
      nextPages.forEach(np => {
        if (!pages.find(p => p.filename === np.filename)) {
          new SingleEntryPlugin(null, np.filename, np.name).apply(compiler);
        }
      });
    }
    watcher.invalidate();
  });

  chokidar.watch([`${options.rootDir}/**/*.config.{js,ts}`]).on('all', () => {
    if (isFirstRunWatcher) return;
    watcher.invalidate();
  });

  if (isFirstRunWatcher) {
    isFirstRunWatcher = false;
  }

  return watcher;
}
