import { RollupOptions } from 'rollup';
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


const entries = getEntries();

/**
 * Build  remax project
 */
const config: RollupOptions = {
  input: entries,
  output: {
    dir: 'dist',
    format: 'esm', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
  },
  preserveModules: true,
  preserveSymlinks: true,
  plugins: [
    commonjs({
      include: /node_modules/,
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component', 'createElement', 'useState'],
      },
    }),
    babel({
      babelrc: false,
      plugins: [components, require.resolve('@babel/plugin-proposal-class-properties')],
      presets: [[require.resolve('@babel/preset-env')], [require.resolve('@babel/preset-react')]],
    }),
    progress(),
    clear({
      targets: ['dist'],
    }),
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
  ],
};

export default config;
