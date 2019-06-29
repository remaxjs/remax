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

export default function getConfig({ dev }: { dev: boolean }) {
  const entries = getEntries();

  const plugins = [
    commonjs({
      include: /node_modules/,
      namedExports: {
        'node_modules/react/index.js': Object.keys(React).filter(k => k !== 'default'),
      },
    }),
    babel({
      babelrc: false,
      plugins: [components, require.resolve('@babel/plugin-proposal-class-properties')],
      presets: [[require.resolve('@babel/preset-env')], [require.resolve('@babel/preset-react')]],
    }),
    progress(),
    babel({
      include: entries,
      plugins: [page],
    }),
    postcss({
      extract: true,
      modules: true,
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
            .replace(/\.less$/, '.js')
            .replace(/\.css$/, '.acss')
        );
      },
    }),
    removeSrc({}),
    template(),
  ];

  if (!dev) {
    plugins.unshift(
      clear({
        targets: ['dist'],
      }),
    );
  }

  const config: RollupOptions = {
    input: entries,
    output: {
      dir: 'dist',
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
