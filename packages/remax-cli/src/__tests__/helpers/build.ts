import * as path from 'path';
import * as rollup from 'rollup';
import API from '../../API';
import rollupConfig from '../../build/rollupConfig';
import getConfig from '../../getConfig';

interface Options {
  include: string[];
  exclude: string[];
}

export default async function build(
  app: string,
  target: string,
  options: Partial<Options> = {}
) {
  const cwd = path.resolve(__dirname, `../fixtures/${app}`);
  process.chdir(cwd);

  API.registerAdapterPlugins(target);

  const config = getConfig();
  const rollupOptions = rollupConfig(
    {
      ...config,
      cwd,
      progress: false,
      rollupOptions: {
        external: ['react', 'react-reconciler', 'scheduler'],
        treeshake: true,
      },
      alias: {
        '@': 'src',
        '@components': 'src/components',
        '@c': path.resolve(cwd, 'src/components'),
      },
    },
    false
  );
  const bundle = await rollup.rollup(rollupOptions);
  const result = await bundle.generate(
    rollupOptions.output! as rollup.OutputOptions
  );

  const exclude = options.exclude || ['node_modules', '_virtual', 'npm'];
  const include = options.include || [];
  const includeRegExp = new RegExp(`(${include.join('|')})`);
  const excludeRegExp = new RegExp(`(${exclude.join('|')})`);

  return result.output
    .filter(
      c =>
        (include.length > 0 && includeRegExp.test(c.fileName)) ||
        (exclude.length > 0 && !excludeRegExp.test(c.fileName))
    )
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
