import * as rollup from 'rollup';
import getConfig from './config';

export default async () => {
  const config = getConfig({ dev: true });
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
};
