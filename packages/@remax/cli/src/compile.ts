import * as rollup from 'rollup';
import config from './config';

interface CompileOptions {
  watch?: boolean;
}

export default (options: CompileOptions = {}) => {
  return async (cmd: any) => {
    if (options.watch) {
      const watcher = rollup.watch([
        {
          ...config,
          watch: {
            include: ['src/**', 'app.js', 'app.json'],
          },
        },
      ]);

      watcher.on('event', (event: any) => {
        if (event.code === 'FATAL') {
          throw event.error;
        }
      });

      // stop watching
      process.on('exit', () => {
        watcher.close();
      });
    } else {
      const bundle = await rollup.rollup(config);
      await bundle.write(config.output!);
    }
  };
};
