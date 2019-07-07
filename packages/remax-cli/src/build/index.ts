import * as rollup from 'rollup';
import rollupConfig from './rollupConfig';
import { RemaxOptions } from '../getConfig';

export default async (options: RemaxOptions, watch: boolean = false) => {
  const rollupOptions = rollupConfig(options, watch);
  if (watch) {
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
