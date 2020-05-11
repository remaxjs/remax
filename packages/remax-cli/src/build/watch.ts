import chokidar from 'chokidar';
import { Options } from '@remax/types';
import { Compiler } from 'webpack';
import SingleEntryPlugin from 'webpack/lib/SingleEntryPlugin';
import { getPages } from '../getEntries';

let watchCounter = 0;

export default function watch(options: Options, compiler: Compiler, watcher: any, addEntry = false) {
  watchCounter += 1;
  // 监听额外的文件
  const pages = getPages(options);
  chokidar.watch([`${options.rootDir}/app.config.{js,ts}`]).on('change', () => {
    if (watchCounter <= 1) return;
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
    if (watchCounter <= 1) return;
    watcher.invalidate();
  });

  return watcher;
}
