import * as path from 'path';
import { RemaxOptions } from 'remax-types';

export default (options: RemaxOptions) => ({
  '@': path.resolve(options.cwd, options.rootDir),
  'react-dom': path.resolve(options.cwd, 'node_modules', 'remax/esm'),
});
