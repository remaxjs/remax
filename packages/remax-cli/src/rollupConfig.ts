import { RollupOptions, RollupWarning } from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import clear from 'rollup-plugin-clear';
import pxToUnits from 'postcss-px2units';
import getEntries from './getEntries';
import template from './plugins/template';
import components from './plugins/components';
import page from './plugins/page';
import removeSrc from './plugins/removeSrc';
import rename from './plugins/rename';
import * as React from 'react';
import * as scheduler from 'scheduler';
import { RemaxOptions } from './getConfig';

export default function rollupConfig(options: RemaxOptions, watch: boolean) {
  const entries = getEntries(options);

  const plugins = [
    commonjs({
      include: /node_modules/,
      namedExports: {
        react: Object.keys(React).filter(k => k !== 'default'),
        scheduler: Object.keys(scheduler).filter(k => k !== 'default'),
      },
    }),
    babel({
      babelrc: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [components, require.resolve('@babel/plugin-proposal-class-properties')],
      presets: [
        require.resolve('@babel/preset-typescript'),
        [require.resolve('@babel/preset-env')],
        [require.resolve('@babel/preset-react')],
      ],
    }),
    babel({
      include: entries,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [page],
    }),
    postcss({
      extract: true,
      modules: options.cssModules,
      plugins: [pxToUnits()],
    }),
    resolve({
      dedupe: ['react'],
    }),
    rename({
      include: 'src/**',
      map: input => {
        return (
          input &&
          input
            .replace(/^demo\/src\//, '')
            .replace(/\.less$/, '.less.js')
            .replace(/\.css$/, '.acss')
            .replace(/\.ts$/, '.js')
            .replace(/\.tsx$/, '.js')
        );
      },
    }),
    removeSrc({}),
    template(options),
  ];

  if (options.progress) {
    plugins.push(progress());
  }

  if (!watch) {
    plugins.unshift(
      clear({
        targets: options.output,
      }),
    );
  }

  const config: RollupOptions = {
    input: entries,
    output: {
      dir: options.output,
      format: 'esm',
      sourcemap: true,
    },
    preserveModules: true,
    preserveSymlinks: true,
    onwarn(warning, warn) {
      if ((warning as RollupWarning).code === 'THIS_IS_UNDEFINED') return;
      warn(warning);
    },
    plugins,
  };

  return config;
}
