import chokidar, { FSWatcher } from 'chokidar';
import * as fs from 'fs';
import * as path from 'path';
import { RollupOptions, watch, RollupWatcher } from 'rollup';
import { RemaxOptions } from 'remax-types';
import { output } from '../utils/output';
import { checkChokidar } from '../utils/checkChokidar';
import { CliOptions } from '../../getConfig';
import { Context } from '../../types';
import { isConfigFile, isInNativeDir } from './helpers';
import build from '../index';

let isBundleRunning = false;
let isFirstRunWatcher = true;

// chokidar config
const chokidarConfig = {
  usePolling: true,
};

let extraFilesWatcher: FSWatcher | null;
let watcher: RollupWatcher | null;

export default function runWather(
  remaxOptions: RemaxOptions,
  rollupOptions: RollupOptions,
  cli: CliOptions,
  context?: Context
) {
  if (isBundleRunning) {
    return;
  }

  const rollupWatchFiles = [`${remaxOptions.rootDir}/**`];
  // 配置重新build的路径
  const extraFiles = [
    `${remaxOptions.rootDir}/app.config.js`,
    `${remaxOptions.rootDir}/**/*.config.js`,
    `${remaxOptions.rootDir}/app.config.ts`,
    `${remaxOptions.rootDir}/**/*.config.ts`,
    `${remaxOptions.rootDir}/native`,
    `${remaxOptions.rootDir}/native/**`,
  ];

  isBundleRunning = true;

  watcher = watch([
    {
      ...rollupOptions,
      watch: {
        chokidar: checkChokidar() && chokidarConfig,
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
    if (watcher) {
      watcher.close();
      watcher = null;
    }
    if (extraFilesWatcher) {
      extraFilesWatcher.close();
      watcher = null;
    }

    process.removeListener('uncaughtException', close);

    if (err) {
      console.error(err);
      process.exit(1);
    }
  };

  process.on('uncaughtException', close);
  // 监听额外的文件
  extraFilesWatcher = chokidar.watch(extraFiles);

  const reloadWatcher = (eventName: string) => (fileName: string) => {
    if (isFirstRunWatcher || isBundleRunning) return;

    if (isConfigFile(fileName)) {
      close();
      build(cli, context);
    }

    if (isInNativeDir(remaxOptions, fileName)) {
      const srcPath = path.join(remaxOptions.cwd, fileName);
      const destPath = path.join(
        remaxOptions.cwd,
        remaxOptions.output,
        fileName.replace(new RegExp(`^${remaxOptions.rootDir}/native`), '')
      );

      switch (eventName) {
        case 'change':
        case 'add':
          fs.writeFileSync(destPath, fs.readFileSync(srcPath));
          break;
        case 'addDir':
          fs.mkdirSync(destPath);
          break;
        case 'unlinkDir':
          fs.rmdirSync(destPath);
          break;
        case 'unlink':
          fs.unlinkSync(destPath);
          break;
      }
    }
  };

  extraFilesWatcher
    .on('addDir', reloadWatcher('addDir'))
    .on('add', reloadWatcher('add'))
    .on('unlink', reloadWatcher('unlink'))
    .on('unlinkDir', reloadWatcher('unlinkDir'))
    .on('change', reloadWatcher('change'));
}
