import * as path from 'path';
import * as fs from 'fs';
import { camelCase } from 'lodash';
import { Configuration, ProgressPlugin, DefinePlugin } from 'webpack';
import Config from 'webpack-chain';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import pxToUnits from '@remax/postcss-px2units';
import { RemaxOptions } from 'remax-types';
import { PlatformTarget } from './platform';
import extensions, { matcher } from '../extensions';
import getEntries from '../getEntries';
import * as styleConfig from './styleConfig';
import * as TurboPages from './turboPages';
import * as staticCompiler from './plugins/compiler/static';
import app from './plugins/app';
import page from './plugins/page';
// import fixRegeneratorRuntime from './plugins/fixRegeneratorRuntime';
import nativeComponentsBabelPlugin from './plugins/nativeComponents/babelPlugin';
import components from './plugins/components';
import * as RemaxPlugins from './webpack/plugins';
import alias from './alias';
import API from '../API';
import getEnvironment from './env';
import * as platform from './platform';

const config = new Config();

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

function prepare(options: RemaxOptions, target: PlatformTarget) {
  const meta = API.getMeta();
  const turboPagesEnabled = options.turboPages && options.turboPages.length > 0;
  const entries = getEntries(options);
  const entryMap = [entries.app, ...entries.pages].reduce<any>((m, entry) => {
    const ext = path.extname(entry);
    const name = entry.replace(path.join(options.cwd, options.rootDir) + '/', '').replace(new RegExp(`${ext}$`), '');
    m[name] = entry;
    return m;
  }, {});
  const stubModules = platform.mini
    .filter(name => API.adapter.target !== name)
    .reduce<string[]>((acc, name) => [...acc, `${name}/esm/api`, `${name}/esm/hostComponents`], []);

  const env = getEnvironment(options, target);
  const publicPath = '/';

  return {
    meta,
    turboPagesEnabled,
    entries,
    entryMap,
    stubModules,
    env,
    publicPath,
  };
}

export default function webpackConfig(options: RemaxOptions, target: PlatformTarget): Configuration {
  const { meta, turboPagesEnabled, entries, entryMap, stubModules, env, publicPath } = prepare(options, target);
  const styleGroup = styleConfig.entryGroup(Object.keys(entryMap), meta);

  for (const entry in entryMap) {
    config.entry(entry).add(entryMap[entry]);
  }

  config.devtool(false);
  config.mode((process.env.NODE_ENV as any) || 'development');
  config.context(options.cwd);
  config.resolve.extensions.merge(extensions);
  config.resolve.alias.merge(alias(options));
  config.output.path(path.join(options.cwd, options.output));
  config.output.filename('[name].js');
  config.output.globalObject(meta.global);
  config.output.publicPath(publicPath);
  config.optimization.runtimeChunk({ name: 'runtime' });
  config.optimization.splitChunks({
    chunks: 'initial',
    cacheGroups: {
      ...styleGroup,
    },
  });

  config.module
    .rule('createAppOrPageConfig')
    .test(matcher)
    .include.add(entries.app)
    .merge(entries.pages)
    .end()
    .use('babel')
    .loader(useLoader('babel'))
    .options({
      usePlugins: [app(entries.app), page(entries.pages)],
      reactPreset: false,
    });

  // turbo pages
  if (turboPagesEnabled) {
    config.module
      .rule('staticCompilation')
      .test(matcher)
      .include.add(TurboPages.filter(entries, options))
      .end()
      .use('babel')
      .loader(useLoader('babel'))
      .options({
        usePlugins: [staticCompiler.preprocess],
        reactPreset: false,
      })
      .end()
      .use('babel')
      .loader(useLoader('babel'))
      .options({
        usePlugins: [staticCompiler.render],
        reactPreset: false,
      })
      .end()
      .use('babel')
      .loader(useLoader('babel'))
      .options({
        usePlugins: [staticCompiler.postProcess],
        reactPreset: false,
      });
  }

  config.module
    .rule('compilation')
    .test(matcher)
    .use('babel')
    .loader(useLoader('babel'))
    .options({
      usePlugins: [
        nativeComponentsBabelPlugin(options),
        components(options),
        // fixRegeneratorRuntime
      ],
      reactPreset: true,
    });

  const cssModuleConfig = styleConfig.getCssModuleConfig(options.cssModules);
  const preprocessCssRules = [
    {
      name: 'postcss',
      loader: useLoader('postcss'),
      options: {
        config: {
          path: styleConfig.resolvePostcssConfig(options),
        },
        plugins: [pxToUnits()].filter(Boolean),
      },
    },
    styleConfig.enabled('less') && { name: 'less', loader: useLoader('less') },
    styleConfig.enabled('node-sass') && { name: 'sass', loader: useLoader('sass') },
    styleConfig.enabled('stylus') && { name: 'stylus', loader: useLoader('stylus') },
  ].filter(Boolean) as any[];

  let stylesRule = config.module
    .rule('styles')
    .test(/\.(css|less|sass|stylus)$/i)
    .exclude.add(cssModuleConfig.enabled ? cssModuleConfig.regExp : '')
    .end()
    .use('cssExtract')
    .loader(MiniCssExtractPlugin.loader)
    .end()
    .use('css')
    .loader(useLoader('css'))
    .options({
      importLoaders: preprocessCssRules.length,
    })
    .end();

  preprocessCssRules.forEach(rule => {
    stylesRule = stylesRule
      .use(rule.name)
      .loader(rule.loader)
      .options(rule.options || {})
      .end();
  });

  // Css Modules
  if (cssModuleConfig.enabled) {
    stylesRule = config.module
      .rule('cssModulesStyles')
      .test(cssModuleConfig.regExp)
      .include.add(cssModuleConfig.regExp)
      .end()
      .use(MiniCssExtractPlugin.loader)
      .loader(MiniCssExtractPlugin.loader)
      .end()
      .use('css')
      .loader(useLoader('css'))
      .options({
        importLoaders: preprocessCssRules.length,
        modules: true,
      })
      .end();

    preprocessCssRules.forEach(rule => {
      stylesRule = stylesRule
        .use(rule.name)
        .loader(rule.loader)
        .options(rule.options || {})
        .end();
    });
  }

  config.module
    .rule('stub')
    .test(matcher)
    .use('stub')
    .loader(useLoader('stub'))
    .options({
      modules: stubModules,
    });

  config.module
    .rule('json')
    .test(/\.json$/)
    .use('json')
    .loader(useLoader('json'))
    .options({
      modules: stubModules,
    });

  config.module
    .rule('remaxDefineVariables')
    .test(/remax\/esm\/createHostComponent.js/i)
    .use('remax-define')
    .loader(useLoader('remax-define'));

  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif|svg)$/i)
    .use('file')
    .loader(useLoader('file'));

  config.module
    .rule('resolvePlatformFiles')
    .test(matcher)
    .use('resolve-platform')
    .loader(useLoader('resolve-platform'));

  if (options.progress) {
    config.plugin('progress').use(new ProgressPlugin());
  }

  config.plugin('define').use(new DefinePlugin(env.stringified));
  config.plugin('cssExtract').use(
    new MiniCssExtractPlugin({
      filename: `[name]`,
    })
  );
  config.plugin('optimizeEntries').use(new RemaxPlugins.OptimizeEntries(meta));
  config.plugin('nativeFiles').use(new RemaxPlugins.NativeFiles(options));

  if (process.env.NODE_ENV === 'production') {
    config.plugin('clean').use(new CleanWebpackPlugin() as any);
  }

  if (typeof options.configWebpack === 'function') {
    options.configWebpack(config);
  }

  console.log(config.toConfig());

  return config.toConfig();
}
