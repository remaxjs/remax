import { RollupOptions, RollupWarning } from 'rollup';
import { output } from './utils/output';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from './plugins/babel';
import url from '@remax/rollup-plugin-url';
import json from '@rollup/plugin-json';
import postcss from '@remax/rollup-plugin-postcss';
import postcssUrl from './plugins/postcssUrl';
import progress from 'rollup-plugin-progress';
import clean from 'rollup-plugin-delete';
import inject from 'rollup-plugin-inject';
import copy from 'rollup-plugin-copy';
import stub from './plugins/stub';
import pxToUnits from '@remax/postcss-px2units';
import getEntries from '../getEntries';
import getCssModuleConfig from '../getCssModuleConfig';
import template from './plugins/template';
import components from './plugins/components';
import page from './plugins/page';
import removeSrc from './plugins/removeSrc';
import rename from './plugins/rename';
import replace from '@rollup/plugin-replace';
import { RemaxOptions } from '../getConfig';
import app from './plugins/app';
import adapters, { Adapter } from './adapters';
import { Context, Env } from '../types';
import namedExports from 'named-exports-db';
import fixRegeneratorRuntime from './plugins/fixRegeneratorRuntime';
import nativeComponents from './plugins/nativeComponents/index';
import nativeComponentsBabelPlugin from './plugins/nativeComponents/babelPlugin';
import alias from './plugins/alias';
import extensions from '../extensions';
import { without } from 'lodash';
import jsx from 'acorn-jsx';

export default function rollupConfig(
  options: RemaxOptions,
  argv: any,
  adapter: Adapter,
  context?: Context
) {
  const stubModules: string[] = [];

  adapters.forEach(name => {
    if (adapter.name !== name) {
      const esmPackage = `remax/esm/adapters/${name}`;
      const cjsPackage = `remax/cjs/adapters/${name}`;
      stubModules.push(esmPackage);
      stubModules.push(cjsPackage);
    }
  });

  const entries = getEntries(options, adapter, context);
  const cssModuleConfig = getCssModuleConfig(options.cssModules);

  // 获取 postcss 配置
  const postcssConfig = {
    options: {},
    plugins: [],
    ...options.postcss,
  };

  const envReplacement: Env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    REMAX_PLATFORM: argv.target,
    REMAX_DEBUG: process.env.REMAX_DEBUG,
    REMAX_PX2RPX: `${options.pxToRpx}`,
  };

  Object.keys(process.env).forEach(k => {
    if (k.startsWith('REMAX_APP_')) {
      envReplacement[`${k}`] = process.env[k];
    }
  });

  const plugins = [
    copy({
      targets: [
        {
          src: [`${options.rootDir}/native/*`],
          dest: options.output,
        },
      ],
      copyOnce: true,
    }),
    alias(options),
    url({
      limit: 0,
      fileName: '[dirname][name][extname]',
      publicPath: '/',
      sourceDir: path.resolve(options.cwd, options.rootDir),
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
    }),
    resolve({
      dedupe: [
        'react',
        'object-assign',
        'prop-types',
        'scheduler',
        'react-reconciler',
      ],
      extensions,
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    commonjs({
      include: /node_modules/,
      namedExports,
      extensions,
      ignoreGlobal: false,
    }),
    stub({
      modules: stubModules,
    }),
    babel({
      include: entries.pages.map(p => p.file),
      extensions: without(extensions, '.json'),
      usePlugins: [nativeComponentsBabelPlugin(options, adapter), page],
      reactPreset: false,
    }),
    babel({
      include: entries.app,
      extensions: without(extensions, '.json'),
      usePlugins: [nativeComponentsBabelPlugin(options, adapter), app],
      reactPreset: false,
    }),
    babel({
      extensions: without(extensions, '.json'),
      usePlugins: [
        nativeComponentsBabelPlugin(options, adapter),
        components(adapter),
      ],
      reactPreset: true,
    }),
    postcss({
      extract: true,
      ...postcssConfig.options,
      modules: cssModuleConfig,
      plugins: [options.pxToRpx && pxToUnits(), postcssUrl(options)]
        .filter(Boolean)
        .concat(postcssConfig.plugins),
    }),
    json(),
    replace({
      values: Object.keys(envReplacement).reduce((acc: any, key) => {
        acc[`process.env.${key}`] = JSON.stringify(envReplacement[key]);
        return acc;
      }, {}),
    }),
    rename({
      include: `${options.rootDir}/**`,
      map: input => {
        if (!input) {
          return input;
        }

        input = input
          // typescript
          .replace(/\.ts$/, '.js')
          .replace(/\.tsx$/, '.js')
          // image
          .replace(/\.png$/, '.png.js')
          .replace(/\.gif$/, '.gif.js')
          .replace(/\.svg$/, '.svg.js')
          .replace(/\.jpeg$/, '.jpeg.js')
          .replace(/\.jpg$/, '.jpg.js');

        // 不启用 css module 的 css 文件以及 app.css
        if (
          cssModuleConfig.globalModulePaths.some(reg => reg.test(input)) ||
          input.indexOf('app.css') !== -1
        ) {
          return input.replace(/\.css/, adapter.extensions.style);
        }

        return input.replace(/\.css/, '.css.js');
      },
    }),
    inject({
      exclude: 'node_modules/**',
      regeneratorRuntime: 'regenerator-runtime',
    }),
    rename({
      matchAll: true,
      map: input => {
        return (
          input &&
          input
            // npm 包可能会有 jsx
            .replace(/\.jsx$/, '.js')
            // npm 包里可能会有 css
            .replace(/\.less$/, '.less.js')
            .replace(/\.sass$/, '.sass.js')
            .replace(/\.scss$/, '.scss.js')
            .replace(/\.styl$/, '.styl.js')
            .replace(/node_modules/g, 'npm')
            .replace(/\.js_commonjs-proxy$/, '.js_commonjs-proxy.js')
            // 支付宝小程序不允许目录带 @
            .replace(/@/g, '_')
        );
      },
    }),
    removeSrc(options),
    fixRegeneratorRuntime(),
    nativeComponents(options, adapter, entries.pages.map(p => p.file)),
    template(options, adapter, context),
  ];

  /* istanbul ignore next */
  if (options.progress) {
    plugins.push(progress());
  }

  if (process.env.NODE_ENV === 'production') {
    plugins.unshift(
      clean({
        targets: [path.join(options.output, '*'), '!.tea'],
      })
    );
  }

  let config: RollupOptions = {
    treeshake: process.env.NODE_ENV === 'production',
    input: [entries.app, ...entries.pages.map(p => p.file), ...entries.images],
    output: {
      dir: options.output,
      format: adapter.moduleFormat,
      exports: 'named',
      sourcemap: false,
      extend: true,
    },
    preserveModules: true,
    preserveSymlinks: true,
    acornInjectPlugins: [jsx()],
    /* istanbul ignore next */
    onwarn(warning, warn) {
      if ((warning as RollupWarning).code === 'THIS_IS_UNDEFINED') return;
      if ((warning as RollupWarning).code === 'CIRCULAR_DEPENDENCY') {
        output('⚠️ : 检测到循环依赖，如果不影响项目运行，请忽略', 'yellow');
      }

      output('⚠️ : ' + warning, 'yellow');
    },
    plugins,
  };

  if (typeof options.rollupOptions === 'function') {
    config = options.rollupOptions(config);
  } else if (options.rollupOptions) {
    config = { ...config, ...options.rollupOptions };
  }

  return config;
}
