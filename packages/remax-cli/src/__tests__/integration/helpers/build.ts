import * as path from 'path';
import { createFsFromVolume, Volume, IFs } from 'memfs';
import joinPath from 'memory-fs/lib/join';
import nodeExternals from 'webpack-node-externals';
import { slash } from '@remax/shared';
import API from '../../../API';
import getConfig from '../../../getConfig';
import type { Platform } from '@remax/types';
import Config from 'webpack-chain';
import MiniBuilder from '../../../build/MiniBuilder';
import MiniPluginBuilder from '../../../build/MiniPluginBuilder';
import WebBuilder from '../../../build/WebBuilder';

function ensureWebpackMemoryFs(fs: IFs) {
  const nextFs = Object.create(fs);
  nextFs.join = joinPath;

  return nextFs;
}

interface OutputFile {
  fileName: string;
  code: Buffer;
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
        code: fs.readFileSync(filePath) as Buffer,
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

export async function buildApp(app: string, target: Platform, options: Partial<Options> = {}, extraRemaxOptions?: any) {
  const cwd = path.resolve(__dirname, `../fixtures/${app}`);
  process.chdir(cwd);
  process.env.NODE_ENV = 'test';
  process.env.REMAX_PLATFORM = target;

  const config = getConfig();
  const api = new API();

  api.registerPlugins(config.plugins);

  const externals: any = [
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../../../../../../node_modules'),
      allowlist: options.externalsIgnore,
    }),
  ];

  const remaxOptions = {
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
        .externals([...(context.config.get('externals') || []), ...externals]);

      if (typeof config.configWebpack === 'function') {
        config.configWebpack(context);
      }
    },
    ...extraRemaxOptions,
  };

  const builder = target === 'web' ? new WebBuilder(api, remaxOptions) : new MiniBuilder(api, remaxOptions);
  const fs = createFsFromVolume(new Volume());
  const webpackFs = ensureWebpackMemoryFs(fs);
  const compiler = builder.run();
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
      const outputDir = path.join(remaxOptions.cwd, remaxOptions.output);

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

export async function buildMiniPlugin(app: string, target: Platform, options: Partial<Options> = {}) {
  const cwd = path.resolve(__dirname, `../fixtures/${app}`);
  process.chdir(cwd);
  process.env.NODE_ENV = 'test';
  process.env.REMAX_PLATFORM = target;

  const config = getConfig();
  const api = new API();

  api.registerPlugins(config.plugins);

  const externals: any = [
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../../../../../../node_modules'),
      allowlist: options.externalsIgnore,
    }),
  ];

  const remaxOptions = {
    ...config,
    target,
    configWebpack(context: { config: Config; webpack: any }) {
      context.config
        .mode('none')
        .plugins.delete('webpackbar')
        .end()
        .externals([...context.config.get('externals'), ...externals]);

      if (typeof config.configWebpack === 'function') {
        config.configWebpack(context);
      }
    },
  };

  const builder = new MiniPluginBuilder(api, remaxOptions);

  const fs = createFsFromVolume(new Volume());
  const webpackFs = ensureWebpackMemoryFs(fs);
  const compiler = builder.run();
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
      const outputDir = path.join(remaxOptions.cwd, remaxOptions.output);

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
