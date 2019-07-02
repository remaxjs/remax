import * as rollup from 'rollup';
import rollupConfig from './rollupConfig';
import { RemaxOptions } from './getConfig';

export default async (options: RemaxOptions) => {
  const rollupOptions = rollupConfig(options, false);
  const bundle = await rollup.rollup(rollupOptions);
  await bundle.write(rollupOptions.output!);
};
