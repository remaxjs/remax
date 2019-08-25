import fs from 'fs';
import { RollupOptions, watch, RollupWatcher } from 'rollup';
import { output } from './utils/output';

let isBundleRunning = false;
let isFirstRunWatcher = true;

const rollupWatchFiles = ['src/**', 'app.js', '*.config.js'];
const configFiles = 'src/app.config.js';

let configFilesWatcher: RollupWatcher;
let watcher: RollupWatcher;
export default function runWather(rollupOptions: RollupOptions) {
  if (isBundleRunning) {
    return;
  }

  isBundleRunning = true;

  watcher = watch([
    {
      ...rollupOptions,
      watch: {
        chokidar: {
          usePolling: true,
        },
        include: rollupWatchFiles,
      },
    },
  ]);

  const watchEventHandle = (event: any) => {
    switch (event.code) {
      case 'START':
        output('🚚 编译...', 'blue');
        break;
      case 'END':
        isBundleRunning = false;
        output('💡 完成', 'green');
        break;
      case 'ERROR':
      case 'FATAL':
        isBundleRunning = false;
        const { error } = event;
        const name = error.code === 'PLUGIN_ERROR' ? error.plugin : error.code;
        output(`\n🚨 [${name}]: ${error.message}`, 'red');
        throw error;
      default:
        break;
    }
  };

  watcher.on('event', watchEventHandle);

  if (isFirstRunWatcher) {
    isFirstRunWatcher = false;
    console.log('\x1b[34m%s\x1b[0m', '🚀 启动 watch');
  }

  const close = (err?: Error) => {
    if (watcher) watcher.close();
    if (configFilesWatcher) configFilesWatcher.close();

    process.removeListener('uncaughtException', close);

    if (err) {
      process.exit(1);
      console.error(err);
    }
  };

  process.on('uncaughtException', close);

  // 监听config的文件
  configFilesWatcher = fs.watch(configFiles, (event: string) => {
    if (isBundleRunning) return;

    if (event === 'change') {
      close();
      runWather(rollupOptions);
    }
  });
}
