import * as path from 'path';
import * as fs from 'fs';
import { camelCase } from 'lodash';
import { Configuration, RuleSetRule, ProgressPlugin, Compiler } from 'webpack';
import FunctionModulePlugin from 'webpack/lib/FunctionModulePlugin';
import NodeSourcePlugin from 'webpack/lib/node/NodeSourcePlugin';
import JsonpTemplatePlugin from 'webpack/lib/web/JsonpTemplatePlugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RemaxOptions } from 'remax-types';
import { PlatformTarget } from './platform';
import extensions, { matcher } from '../extensions';
import getEntries from '../getEntries';
import * as TurboPages from './turboPages';
import * as staticCompiler from './plugins/compiler/static';
import app from './plugins/app';
import page from './plugins/page';
import nativeComponentsBabelPlugin from './plugins/nativeComponents/babelPlugin';
import components from './plugins/components';
import RemaxNativeFilesPlugin from './webpack/plugins/NativeFiles';
import RemaxOptimizeEntriesPlugin from './webpack/plugins/OptimizeEntries';
import alias from './alias';
import API from '../API';

function useLoader(id: string) {
  try {
    const loaderPath = path.join(__dirname, './webpack/loaders', camelCase(id) + '.js');
    if (fs.existsSync(loaderPath)) {
      return loaderPath;
    }
  } catch {
    // ignore
  }

  return require.resolve(id + '-loader');
}

export default function webpackConfig(options: RemaxOptions, target: PlatformTarget): Configuration {
  const meta = API.getMeta();
  const turboPagesEnabled = options.turboPages && options.turboPages.length > 0;
  const entries = getEntries(options);
  const publicPath = '/';

  const babelLoaders = [
    {
      test: matcher,
      include: [entries.app, ...entries.pages],
      use: {
        loader: useLoader('babel'),
        options: {
          usePlugins: [app(entries.app), page(entries.pages)],
          reactPreset: false,
        },
      },
    },
    turboPagesEnabled && {
      test: matcher,
      include: TurboPages.filter(entries, options),
      use: {
        loader: useLoader('babel'),
        options: {
          usePlugins: [staticCompiler.preprocess],
          reactPreset: false,
        },
      },
    },
    turboPagesEnabled && {
      test: matcher,
      include: TurboPages.filter(entries, options),
      use: {
        loader: useLoader('babel'),
        options: {
          usePlugins: [staticCompiler.render],
          reactPreset: false,
        },
      },
    },
    turboPagesEnabled && {
      test: matcher,
      include: TurboPages.filter(entries, options),
      use: {
        loader: useLoader('babel'),
        options: {
          usePlugins: [staticCompiler.postProcess],
          reactPreset: false,
        },
      },
    },
    {
      test: matcher,
      use: {
        loader: useLoader('babel'),
        options: {
          usePlugins: [nativeComponentsBabelPlugin(options), components(options)],
          reactPreset: true,
        },
      },
    },
  ].filter(Boolean) as RuleSetRule[];

  const entryMap = [entries.app, ...entries.pages, ...entries.images].reduce<any>((m, entry) => {
    const ext = path.extname(entry);
    const name = entry.replace(path.join(options.cwd, options.rootDir) + '/', '').replace(new RegExp(`${ext}$`), '');
    m[name] = entry;

    return m;
  }, {});

  return {
    mode: (process.env.NODE_ENV as any) || 'development',
    entry: entryMap,
    resolve: {
      extensions: extensions,
      alias: alias(options),
    },
    output: {
      path: path.join(options.cwd, options.output),
      filename: '[name].js',
      globalObject: 'my',
      publicPath,
    },
    optimization: {
      usedExports: true,
      runtimeChunk: { name: 'runtime' },
      splitChunks: {
        chunks: 'initial',
      },
    },
    module: {
      rules: [
        ...babelLoaders,
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: useLoader('css'), options: { importLoaders: 1 } },
            {
              loader: useLoader('postcss'),
              options: {
                config: {
                  path: path.resolve(__dirname, '../../'),
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: useLoader('file'),
            },
          ],
        },
        {
          test: /remax\/esm\/createHostComponent.js/i,
          use: [
            {
              loader: useLoader('remax-define'),
            },
          ],
        },
      ],
    },
    plugins: [
      new ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: `[name]${meta.style}`,
      }),
      new RemaxNativeFilesPlugin(options),
      new RemaxOptimizeEntriesPlugin(meta),
    ],
    devtool: false,
    target: function(compiler: Compiler) {
      const { options } = compiler;
      new JsonpTemplatePlugin().apply(compiler);
      new FunctionModulePlugin(options.output).apply(compiler);
      new NodeSourcePlugin(options.node).apply(compiler);
    },
  };
}
