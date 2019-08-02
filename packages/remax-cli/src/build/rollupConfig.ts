import { RollupOptions, RollupWarning } from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import clear from 'rollup-plugin-clear';
import pxToUnits from 'postcss-px2units';
import getEntries from '../getEntries';
import template from './plugins/template';
import components from './plugins/components';
import page from './plugins/page';
import removeSrc from './plugins/removeSrc';
import rename from './plugins/rename';
import replace from 'rollup-plugin-replace';
import * as React from 'react';
import * as scheduler from 'scheduler';
import { RemaxOptions } from '../getConfig';
import app from './plugins/app';
import removeESModuleFlag from './plugins/removeESModuleFlag';
import renameImport from './plugins/renameImport';
import { Adapter } from './adapters';

export default function rollupConfig(
  options: RemaxOptions,
  argv: any,
  adapter: Adapter
) {
  const entries = getEntries(options);

  const plugins = [
    commonjs({
      include: /node_modules/,
      namedExports: {
        react: Object.keys(React).filter(k => k !== 'default'),
        scheduler: Object.keys(scheduler).filter(k => k !== 'default')
      }
    }),
    babel({
      include: entries.pages,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [page],
      presets: [
        require.resolve('@babel/preset-typescript'),
        [require.resolve('@babel/preset-env')],
        [require.resolve('@babel/preset-react')]
      ]
    }),
    babel({
      babelrc: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        renameImport(argv.target),
        components(adapter),
        require.resolve('@babel/plugin-proposal-class-properties')
      ],
      presets: [
        require.resolve('@babel/preset-typescript'),
        [require.resolve('@babel/preset-env')],
        [require.resolve('@babel/preset-react')]
      ]
    }),
    babel({
      include: entries.app,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [app]
    }),
    postcss({
      extract: true,
      modules: options.cssModules,
      plugins: [pxToUnits()]
    }),
    json({}),
    resolve({
      dedupe: [
        'react',
        'object-assign',
        'prop-types',
        'scheduler',
        'react-reconciler'
      ],
      extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.REMAX_PLATFORM': JSON.stringify(argv.target)
    }),
    rename({
      include: 'src/**',
      map: input => {
        return (
          input &&
          input
            .replace(/^demo\/src\//, '')
            .replace(/\.less$/, '.less.js')
            .replace(/\.css$/, adapter.extensions.style)
            .replace(/\.ts$/, '.js')
            .replace(/\.tsx$/, '.js')
        );
      }
    }),
    rename({
      matchAll: true,
      map: input => {
        return (
          input &&
          input
            .replace(/node_modules/, 'npm')
            .replace(/\.js_commonjs-proxy$/, '.js_commonjs-proxy.js')
        );
      }
    }),
    removeSrc({}),
    removeESModuleFlag(),
    template(options, adapter)
  ];

  if (options.progress) {
    plugins.push(progress());
  }

  if (!argv.watch) {
    plugins.unshift(
      clear({
        targets: options.output
      })
    );
  }

  const config: RollupOptions = {
    input: [
      entries.appConfigPath,
      entries.app,
      ...entries.pages,
      ...entries.pageConfigPath
    ],
    output: {
      dir: options.output,
      format: adapter.moduleFormat,
      sourcemap: true
    },
    preserveModules: true,
    preserveSymlinks: true,
    onwarn(warning, warn) {
      if ((warning as RollupWarning).code === 'THIS_IS_UNDEFINED') return;
      warn(warning);
    },
    plugins
  };

  return config;
}
