import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: ['src/ali.js', 'src/index.js', 'src/one.js', 'src/react.js'],
  output: {
    dir: 'modules',
    format: 'es',
  },
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    commonjs(),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
