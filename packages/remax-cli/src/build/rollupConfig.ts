import { RollupOptions, RollupWarning } from 'rollup';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import postcss from '@meck/rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import clear from 'rollup-plugin-clear';
import alias from 'rollup-plugin-alias';
import copy from 'rollup-plugin-copy';
import stub from './plugins/stub';
import pxToUnits from '@remax/postcss-px2units';
import getEntries from '../getEntries';
import getCssModuleConfig from '../getCssModuleConfig';
import template from './plugins/template';
import components from './plugins/components';
import page from './plugins/page';
import removeSrc from './plugins/removeSrc';
import removeConfig from './plugins/removeConfig';
import rename from './plugins/rename';
import replace from 'rollup-plugin-replace';
import * as React from 'react';
import * as scheduler from 'scheduler';
import { RemaxOptions } from '../getConfig';
import app from './plugins/app';
import removeESModuleFlag from './plugins/removeESModuleFlag';
import adapters, { Adapter } from './adapters';
import { Context } from '../types';

export default function rollupConfig(
  options: RemaxOptions,
  argv: any,
  adapter: Adapter,
  context?: Context
) {
  const babelConfig = {
    presets: [
      require.resolve('@babel/preset-typescript'),
      require.resolve('@babel/preset-env'),
    ],
    plugins: [
      require.resolve('@babel/plugin-proposal-class-properties'),
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      require.resolve('@babel/plugin-syntax-jsx'),
      [
        require.resolve('@babel/plugin-proposal-decorators'),
        {
          decoratorsBeforeExport: true,
        },
      ],
    ],
  };

  if (adapter.name !== 'alipay') {
    babelConfig.plugins.unshift(
      require.resolve('babel-plugin-transform-async-to-promises')
    );
  }

  const stubModules: string[] = [];

  adapters.forEach(name => {
    if (adapter.name !== name) {
      const packageName = `remax/lib/adapters/${name}`;
      stubModules.push(packageName);
    }
  });

  const entries = getEntries(options, adapter, context);
  const cssModuleConfig = getCssModuleConfig(options.cssModules);

  const plugins = [
    copy({
      targets: [
        {
          src: ['src/native/*'],
          dest: 'dist',
        },
      ],
      copyOnce: true,
    }),
    alias({
      resolve: [
        '',
        '.ts',
        '.js',
        '.tsx',
        '.jsx',
        '/index.js',
        '/index.jsx',
        '/index.ts',
        '/index.tsx',
      ],
      '@': path.resolve(options.cwd, 'src'),
      ...options.alias,
    }),
    url({
      limit: 0,
      fileName: '[dirname][name][extname]',
      publicPath: '/',
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        react: Object.keys(React).filter(k => k !== 'default'),
        scheduler: Object.keys(scheduler).filter(k => k !== 'default'),
      },
    }),
    stub({
      modules: stubModules,
    }),
    babel({
      include: entries.pages.map(p => p.file),
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [page, ...babelConfig.plugins],
      presets: babelConfig.presets,
    }),
    babel({
      include: entries.app,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [app, ...babelConfig.plugins],
      presets: babelConfig.presets,
    }),
    babel({
      babelrc: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [components(adapter), ...babelConfig.plugins],
      presets: babelConfig.presets.concat([
        require.resolve('@babel/preset-react'),
      ]),
    }),
    postcss({
      extract: true,
      modules: cssModuleConfig,
      plugins: [pxToUnits()],
    }),
    json({}),
    resolve({
      dedupe: [
        'react',
        'object-assign',
        'prop-types',
        'scheduler',
        'react-reconciler',
      ],
      extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.REMAX_PLATFORM': JSON.stringify(argv.target),
      'process.env.REMAX_DEBUG': JSON.stringify(process.env.REMAX_DEBUG),
    }),
    rename({
      include: 'src/**',
      map: input => {
        if (!input) {
          return input;
        }

        input = input
          .replace(/^demo\/src\//, '')
          // stlye
          .replace(/\.less$/, '.less.js')
          .replace(/\.sass$/, '.sass.js')
          .replace(/\.scss$/, '.scss.js')
          .replace(/\.styl$/, '.styl.js')
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
    rename({
      matchAll: true,
      map: input => {
        return (
          input &&
          input
            .replace(/node_modules/g, 'npm')
            .replace(/\.js_commonjs-proxy$/, '.js_commonjs-proxy.js')
        );
      },
    }),
    removeSrc({}),
    removeConfig(),
    removeESModuleFlag(),
    template(options, adapter, context),
  ];

  if (options.progress) {
    plugins.push(progress());
  }

  if (!argv.watch) {
    plugins.unshift(
      clear({
        targets: options.output,
      })
    );
  }

  const config: RollupOptions = {
    input: [entries.app, ...entries.pages.map(p => p.file)],
    output: {
      dir: options.output,
      format: adapter.moduleFormat,
      exports: 'named',
      sourcemap: false,
    },
    preserveModules: true,
    preserveSymlinks: true,
    onwarn(warning, warn) {
      if ((warning as RollupWarning).code === 'THIS_IS_UNDEFINED') return;
      if ((warning as RollupWarning).code === 'CIRCULAR_DEPENDENCY') return;
      warn(warning);
    },
    plugins,
  };

  return config;
}
