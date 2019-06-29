import * as rollup from 'rollup';
import getConfig from './config';

export default async () => {
  const config = getConfig({ dev: false });
  const bundle = await rollup.rollup(config);
  await bundle.write(config.output!);
};
