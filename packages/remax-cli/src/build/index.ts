import * as rollup from 'rollup';
import rollupConfig from './rollupConfig';
import getConfig from '../getConfig';

export default async (argv: any) => {
  const options = getConfig();

  let targetConfig;
  try {
    targetConfig = require(`@remax/${argv.target}/config`);
  } catch (e) {
    console.log(e);
    throw new Error(`Target ${argv.target} is not supported yet.`);
  }

  const rollupOptions = rollupConfig(options, argv, targetConfig);
  if (argv.watch) {
    const watcher = rollup.watch([
      {
        ...rollupOptions,
        watch: {
          include: ['src/**', 'app.js', 'app.json'],
        },
      },
    ]);

    watcher.on('event', (event: any) => {
      console.log(event.code);
      switch (event.code) {
        case 'ERROR':
          console.error(event.error);
          break;
        case 'FATAL':
          throw event.error;
        default:
          break;
      }
    });
  } else {
    const bundle = await rollup.rollup(rollupOptions);
    await bundle.write(rollupOptions.output!);
  }
};
