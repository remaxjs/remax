import * as path from 'path';
import * as rollup from 'rollup';
import rollupConfig from '../../build/rollupConfig';
import getConfig from '../../getConfig';

export default async function build(app: string, target: string) {
  const cwd = path.resolve(__dirname, `../fixtures/${app}`);
  process.chdir(cwd);
  const config = getConfig();
  const adapter = require('../../build/adapters/' + target);
  const rollupOptions = rollupConfig(
    {
      ...config,
      cwd,
      progress: false,
      rollupOptions: {
        external: ['react', 'react-reconciler', 'scheduler'],
      },
      alias: {
        '@': 'src',
      },
    },
    false,
    adapter
  );
  const bundle = await rollup.rollup(rollupOptions);
  const result = await bundle.generate(rollupOptions.output!);
  return result.output
    .filter(c => !/(node_modules|_virtual|npm)/.test(c.fileName))
    .map(c => {
      let code = '';
      if (c.type === 'chunk') {
        code = c.code.toString();
      } else {
        code = c.source.toString();
      }
      return {
        fileName: c.fileName,
        code,
      };
    });
}

export const JEST_BUILD_TIMEOUT = 60 * 1000;
