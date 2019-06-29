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

  // stop watching
  process.on('exit', () => {
    watcher.close();
  });
};
