import * as rollup from 'rollup';
import rollupConfig from './rollupConfig';
import getConfig from '../getConfig';
import { Context } from '../types';

const COLORS = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
};
const RESET = '\x1b[0m';

const output = (content: string, color: 'red' | 'green' | 'blue') =>
  console.log(`${COLORS[color]}%s${RESET}`, content);

export default async (argv: any, context?: Context) => {
  const options = {
    ...getConfig(argv),
    ...(context ? context.config : {}),
  };

  let targetConfig;
  try {
    targetConfig = require(`./adapters/${argv.target}`);
  } catch (e) {
    console.log(e);
    throw new Error(`Target ${argv.target} is not supported yet.`);
  }

  const rollupOptions = rollupConfig(options, argv, targetConfig, context);
  if (argv.watch) {
    const watcher = rollup.watch([
      {
        ...rollupOptions,
        watch: {
          include: ['src/**', 'app.js', 'app.json'],
        },
      },
    ]);

    console.log('\x1b[34m%s\x1b[0m', '🚀 启动 watch');

    watcher.on('event', (event: any) => {
      switch (event.code) {
        case 'START':
          output('🚚 编译...', 'blue');
          break;
        case 'END':
          output('💡 完成', 'green');
          break;
        case 'ERROR':
          output(event.error, 'red');
          break;
        case 'FATAL':
          throw event.error;
        default:
          break;
      }
    });
  } else {
    output('🚀 开始 build...', 'blue');
    const bundle = await rollup.rollup(rollupOptions);
    await bundle.write(rollupOptions.output!);
    output('💡 完成', 'green');
  }
};
