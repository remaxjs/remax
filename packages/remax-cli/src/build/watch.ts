import chokidar from 'chokidar';
import SingleEntryPlugin from 'webpack/lib/SingleEntryPlugin';
import Builder from './Builder';

let isRunning = true;

export default function watch(builder: Builder, watcher: any, addEntry = false) {
  // 监听额外的文件
  const { entries } = builder.entryCollection;
  chokidar
    .watch([`${builder.options.rootDir}/app.config.{js,ts}`], {
      cwd: builder.options.cwd,
    })
    .on('change', () => {
      if (isRunning) return;
      if (addEntry) {
        builder.fetchProjectConfig();
        builder.entryCollection.init();
        const nextEntries = builder.entryCollection.entries;
        nextEntries.forEach(entry => {
          if (!entries.get(entry.filename)) {
            entry.virtualModule.apply(builder.webpackCompiler);
            entry.updateSource(true);
            new SingleEntryPlugin(null, entry.virtualPath, entry.name).apply(builder.webpackCompiler);
          }
        });
      }
      watcher.invalidate();
    });

  chokidar
    .watch([`${builder.options.rootDir}/**/!(app).config.{js,ts}`], {
      cwd: builder.options.cwd,
    })
    .on('all', () => {
      if (isRunning) return;
      watcher.invalidate();
    });

  builder.webpackCompiler.hooks.watchRun.tap('watchRun', () => {
    isRunning = true;
  });

  builder.webpackCompiler.hooks.done.tap('done', () => {
    isRunning = false;
  });

  return watcher;
}
