import * as path from 'path';
import { createFsFromVolume, Volume, IFs } from 'memfs';
import joinPath from 'memory-fs/lib/join';
import nodeExternals from 'webpack-node-externals';
import { slash } from '@alipay/remix-shared';
import API from '../../../API';
import getConfig from '../../../getConfig';
import { Platform } from '@alipay/remix-types';
import { run } from '../../../build';
import { reset } from '../../../build/webpack/plugins/NativeFiles/cacheable';

function ensureWebpackMemoryFs(fs: IFs) {
  const nextFs = Object.create(fs);
  nextFs.join = joinPath;

  return nextFs;
}

interface OutputFile {
  fileName: string;
  code: string;
}

function getFilesInDir(fs: IFs, root: string, fsPath: string) {
  const list = fs.readdirSync(fsPath);
  let outputs: OutputFile[] = [];

  list.forEach((fileName: any) => {
    const filePath = path.join(fsPath, fileName);
    if (fs.statSync(filePath).isDirectory()) {
      outputs = outputs.concat(getFilesInDir(fs, root, filePath));
    } else {
      outputs.push({
        fileName: slash(filePath).replace(slash(root), ''),
        code: fs.readFileSync(filePath).toString(),
      });
    }
  });

  return outputs;
}

interface Options {
  include: string[];
  exclude: string[];
  externalsIgnore: string[];
}

export default async function build(app: string, target: Platform, options: Partial<Options> = {}) {
  const cwd = path.resolve(__dirname, `../fixtures/${app}`);
  process.chdir(cwd);
  process.env.NODE_ENV = 'test';
  process.env.REMAX_PLATFORM = target;

  reset();

  const config = getConfig();
  const api = new API();

  api.registerPlugins(config.plugins);

  const externals: any = [
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../../../../../../node_modules'),
      whitelist: options.externalsIgnore,
    }),
    {
      '@alipay/remax-runtime': JSON.stringify('@alipay/remax-runtime'),
      '@alipay/remix/ali': JSON.stringify('@alipay/remix/ali'),
      '@alipay/remix-ali': JSON.stringify('@alipay/remix-ali'),
      'remix/wechat': JSON.stringify('remix/wechat'),
      '@remix/wechat': JSON.stringify('@remix/wechat'),
      'remix/toutiao': JSON.stringify('remix/toutiao'),
      '@remix/toutiao': JSON.stringify('@remix/toutiao'),
      'remix/router': JSON.stringify('remix/router'),
      'remix/web': JSON.stringify('remix/web'),
    },
  ];

  (options.externalsIgnore || []).forEach(k => {
    delete externals[1][k];
  });

  const remixOptions = {
    ...config,
    target,
    configWebpack(context: any) {
      context.config
        .mode('none')
        .plugins.delete('webpackbar')
        .end()
        .resolve.alias.merge({
          '@components': path.resolve(cwd, 'src/components'),
          '@c': path.resolve(cwd, 'src/components'),
        })
        .end()
        .end()
        .externals(externals);

      if (typeof config.configWebpack === 'function') {
        config.configWebpack(context);
      }
    },
  };

  const fs = createFsFromVolume(new Volume());
  const webpackFs = ensureWebpackMemoryFs(fs);
  const compiler = run(remixOptions);
  compiler.outputFileSystem = webpackFs;

  return new Promise(resolve => {
    compiler.hooks.done.tap('done', stats => {
      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
        throw new Error(info.errors.join('\n'));
      }

      if (stats.hasWarnings()) {
        info.warnings.forEach(warning => {
          console.warn(warning);
        });
      }

      const exclude = options.exclude || ['node_modules'];
      const include = options.include || [];
      const includeRegExp = new RegExp(`(${include.join('|')})`);
      const excludeRegExp = new RegExp(`(${exclude.join('|')})`);
      const outputDir = path.join(remixOptions.cwd, remixOptions.output);

      const output = getFilesInDir(fs, outputDir + '/', outputDir).filter(
        c =>
          (include.length > 0 && includeRegExp.test(c.fileName)) ||
          (exclude.length > 0 && !excludeRegExp.test(c.fileName))
      );

      resolve(output);
    });

    compiler.hooks.failed.tap('failed', error => {
      console.error(error.message);
      throw error;
    });
  });
}

export const JEST_BUILD_TIMEOUT = 60 * 1000;
