import * as rollup from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import clear from 'rollup-plugin-clear';
import pxToUnits from 'postcss-px2units';
import getEntries from './getEntries';
import miniProgram from './plugins/miniProgram';
import components from './plugins/components';
import page from './plugins/page';
import rename from './plugins/rename';

/**
 * Build  remax project
 */
export default (options: any) => {
  return (cmd: any) => {
    const entries = getEntries();
    const watcher = rollup.watch([
      {
        input: entries,
        output: {
          dir: 'dist',
          format: 'esm', // immediately-invoked function expression — suitable for <script> tags
          sourcemap: true,
        },
        preserveModules: true,
        plugins: [
          progress(),
          clear({
            targets: ['dist'],
          }),
          babel({
            include: /pages\/.+\.js/,
            plugins: [page],
          }),
          babel({
            plugins: [components, require.resolve('@babel/plugin-proposal-class-properties')],
            presets: [require.resolve('@babel/preset-react')],
          }),
          postcss({
            extract: true,
            modules: true,
            plugins: [pxToUnits()],
          }),
          resolve({
            dedupe: ['react']
          }),
          commonjs({
            include: /node_modules/,
            namedExports: {
              'node_modules/react/index.js': ['Children', 'Component', 'createElement', 'useState'],
            },
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
          miniProgram(),
        ],
        watch: {
          include: ['src/**'],
        },
      },
    ]);

    watcher.on('event', (event: any) => {
      if (event.code === 'FATAL') {
        throw event.error;
      }
    });

    // stop watching
    process.on('exit', () => {
      watcher.close();
    });
  };
};
