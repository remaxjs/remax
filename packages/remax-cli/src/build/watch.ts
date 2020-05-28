import chokidar from 'chokidar';
import { Options } from '@remax/types';
import { Compiler } from 'webpack';
import SingleEntryPlugin from 'webpack/lib/SingleEntryPlugin';
import { getPages } from '../getEntries';

let isRunning = true;

export default function watch(options: Options, compiler: Compiler, watcher: any, addEntry = false) {
  // 监听额外的文件
  const pages = getPages(options);
  chokidar.watch([`${options.rootDir}/app.config.{js,ts}`], {
    cwd: options.cwd,
  }).on('change', () => {
    if (isRunning) return;
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

  chokidar.watch([`${options.rootDir}/**/!(app).config.{js,ts}`], {
    cwd: options.cwd,
  }).on('all', () => {
    if (isRunning) return;
    watcher.invalidate();
  });

  compiler.hooks.watchRun.tap('watchRun', () => {
    isRunning = true;
  });

  compiler.hooks.done.tap('done', () => {
    isRunning = false;
  });

  return watcher;
}
