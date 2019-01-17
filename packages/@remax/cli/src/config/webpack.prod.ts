
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin([
      'dist/*.*'
    ], {
      root: process.cwd(),
    }),
  ]
};