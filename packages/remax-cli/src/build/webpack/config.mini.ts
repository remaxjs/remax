import fs from 'fs';
import * as path from 'path';
import * as webpack from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import VirtualModulesPlugin from 'webpack-virtual-modules';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackBar from 'webpackbar';
import type { Options } from '@remax/types';
import { slash } from '@remax/shared';
import ejs from 'ejs';
import { moduleMatcher, targetExtensions } from '../../extensions';
import hostComponent from 'babel-plugin-remax-host-component';
import * as TurboRender from 'babel-plugin-remax-turbo-render';
import * as Lifecycle from 'babel-plugin-remax-lifecycle';
import moduleResolver from 'babel-plugin-module-resolver';
import fixRegeneratorRuntime from 'babel-plugin-remax-regenerator-runtime';
import Store from '@remax/build-store';
import * as RemaxPlugins from './plugins';
import API from '../../API';
import { cssConfig, addCSSRule, RuleConfig } from './config/css';
import baseConfig from './baseConfig';
import Builder from '../Builder';
import output from '../utils/output';

function prepare(api: API) {
  const meta = api.getMeta();

  const publicPath = '/';

  return {
    meta,
    publicPath,
  };
}

function resolveBabelConfig(options: Options) {
  if (fs.existsSync(path.join(options.cwd, 'babel.config.js'))) {
    return path.join(options.cwd, 'babel.config.js');
  }
  return false;
}

export default function webpackConfig(builder: Builder): webpack.Configuration {
  const config = new Config();

  baseConfig(config, builder);

  const { meta, publicPath } = prepare(builder.api);

  const appEntry = builder.entryCollection.appEntry!;
  config.plugin('webpack-virtual-modules' + appEntry.name).use(appEntry.virtualModule);
  config.entry(appEntry.name).add(appEntry.virtualPath);

  builder.entryCollection.entries.forEach(e => {
    config.plugin('webpack-virtual-modules' + e.name).use(e.virtualModule);
    config.entry(e.name).add(e.virtualPath);
  });

  config.devtool(false);

  config.resolve.extensions.merge(targetExtensions(builder.target));

  config.output.filename('[name].js');
  config.output.globalObject(meta.global);
  config.output.publicPath(publicPath);
  config.optimization.runtimeChunk({ name: 'runtime' });
  config.optimization.splitChunks({
    cacheGroups: {
      remaxStyles: {
        name: 'remax-styles',
        test: new RegExp(`(.css|.less|.sass|.scss|.stylus|.styl|${builder.api.meta.style})$`),
        chunks: 'initial',
        minChunks: 2,
        minSize: 0,
      },
      remaxVendors: {
        name: 'remax-vendors',
        test: moduleMatcher,
        chunks: 'initial',
        minChunks: 2,
        minSize: 0,
        priority: 2,
      },
    },
  });
  config.optimization.minimize(builder.options.minimize ?? false);

  if (builder.options.turboRenders) {
    const options = {
      isHostComponentPackage: (pkg: string) => pkg.startsWith('remax'),
    };
    // turbo pages
    config.module
      .rule('turbo-page')
      .pre()
      .test(moduleMatcher)
      .exclude.add(/react-reconciler/)
      .end()
      .use('turbo-page-render')
      .loader('babel')
      .options({
        usePlugins: [TurboRender.extractTemplate(options)],
        reactPreset: false,
      })
      .end()
      .use('turbo-page-preprocess')
      .loader('babel')
      .options({
        usePlugins: [TurboRender.preprocess(options)],
        reactPreset: false,
      });
  }

  config.module
    .rule('js')
    .test(moduleMatcher)
    .exclude.add(/react-reconciler/)
    .end()
    .use('babel')
    .loader('babel')
    .options({
      babelrc: false,
      configFile: resolveBabelConfig(builder.options),
      usePlugins: [
        Lifecycle.app({
          test: file => appEntry!.filename === slash(file),
        }),
        Lifecycle.page({
          test: file => {
            const importer = slash(file);
            const root = slash(path.join(builder.options.cwd, builder.options.rootDir));
            return importer.startsWith(root);
          },
        }),
        hostComponent({
          target: builder.options.target!,
          hostComponents: Store.registeredHostComponents,
          skipHostComponents: Store.skipHostComponents,
          skipProps: [TurboRender.LEAF, TurboRender.ENTRY],
          includeProps: [TurboRender.TEMPLATE_ID],
        }),
        fixRegeneratorRuntime(),
        [
          moduleResolver,
          {
            root: [`./${builder.options.rootDir}`],
            alias: {
              '/': './',
            },
          },
        ],
      ],
      reactPreset: true,
      api: builder.api,
      compact: process.env.NODE_ENV === 'production',
    })
    .end()
    .use('native-component')
    .loader('nativeComponent')
    .options({
      builder,
    });

  cssConfig(config, builder, false);

  config.module
    .rule('image')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  config.module
    .rule('font')
    .test(/\.(ttf|eot|woff|woff2)$/i)
    .use('file')
    .loader(require.resolve('file-loader'));

  const runtimeOptionsTemplate = fs.readFileSync(
    path.resolve(__dirname, '../../../template/app-runtime-options.js.ejs'),
    'utf-8'
  );
  const runtimeOptionsPath = slash('node_modules/@remax/apply-runtime-options.js');
  config.entry(appEntry!.name).prepend('@remax/apply-runtime-options');

  const runtimeOptions = {
    pxToRpx: builder.options.pxToRpx,
    debug: !!process.env.REMAX_DEBUG || output.level === 'debug',
    platform: builder.options.target,
    pluginFiles: builder.api.getRuntimePluginFiles(),
    hostComponents: '[]',
    pageEvents: '{}',
    appEvents: '[]',
  };

  const virtualModules = new VirtualModulesPlugin({
    [runtimeOptionsPath]: ejs.render(runtimeOptionsTemplate, runtimeOptions, { debug: false }),
  });
  config.plugin('webpack-virtual-modules').use(virtualModules);

  if (fs.existsSync(builder.projectPath.publicDir())) {
    config
      .plugin('webpack-copy-plugin')
      .use(CopyPlugin, [[{ from: builder.projectPath.publicDir(), to: builder.projectPath.outputDir() }]]);
  }

  config.plugin('webpackbar').use(WebpackBar);
  config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [{ filename: `[name]${meta.style}` }]);
  config.plugin('remax-optimize-entries-plugin').use(RemaxPlugins.OptimizeEntries, [meta]);
  config.plugin('remax-app-asset-plugin').use(RemaxPlugins.AppAsset, [builder]);
  config.plugin('remax-page-asset-plugin').use(RemaxPlugins.PageAsset, [builder]);
  config.plugin('remax-runtime-options-plugin').use(RemaxPlugins.RuntimeOptions, [builder]);
  config.plugin('remax-coverage-ignore-plugin').use(RemaxPlugins.CoverageIgnore);
  config.plugin('remax-native-asset-plugin').use(RemaxPlugins.NativeAsset, [builder]);

  if (builder.options.analyze) {
    config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
  }

  const context = {
    config,
    webpack,
    addCSSRule: (ruleConfig: RuleConfig) => {
      addCSSRule(config, builder, false, ruleConfig);
    },
  };

  if (typeof builder.options.configWebpack === 'function') {
    builder.options.configWebpack(context);
  }

  builder.api.configWebpack(context);

  const externals = config.get('externals');

  const runtimeOptionsExternal = {
    '/__remax_runtime_options__': `require('/__remax_runtime_options__')`,
  };

  if (Array.isArray(externals)) {
    config.set('externals', [...externals, runtimeOptionsExternal]);
  } else {
    config.set('externals', {
      ...externals,
      ...runtimeOptionsExternal,
    });
  }

  return config.toConfig();
}
