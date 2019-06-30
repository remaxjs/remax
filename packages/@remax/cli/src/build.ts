import * as rollup from 'rollup';
import rollupConfig from './rollup.config';

export default async () => {
  const config = rollupConfig({ dev: false });
  const bundle = await rollup.rollup(config);
  await bundle.write(config.output!);
};
