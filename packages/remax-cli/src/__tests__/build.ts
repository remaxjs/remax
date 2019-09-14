import * as path from 'path';
import * as rollup from 'rollup';
import rollupConfig from '../build/rollupConfig';
import { RemaxOptions } from '../getConfig';

export default async function build(
  app: string,
  target: string,
  options?: Partial<RemaxOptions>
) {
  // eslint-disable-next-line
  const adapter = require('../build/adapters/' + target);
  const rollupOptions = rollupConfig(
    {
      cssModules: false,
      cwd: path.resolve(__dirname, `./fixtures/${app}`),
      progress: false,
      rootDir: 'src',
      output: 'dist',
      UNSAFE_wechatTemplateDepth: 20,
      ...options,
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
