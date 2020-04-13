import * as rollup from 'rollup';
import events from 'events';
import API from '../API';
import rollupConfig from './rollupConfig';
import getConfig from '../getConfig';
import { Context } from '../types';
import runWatcher from './watcher';
import { output } from './utils/output';

const buildEmitter = new events.EventEmitter();

export default async (argv: any, context?: Context) => {
  process.env.REMAX_PLATFORM = argv.target;

  const options = {
    ...getConfig(),
    ...(context ? context.config : {}),
  };

  API.registerAdapterPlugins(argv.target, options);

  const rollupOptions: rollup.RollupOptions = rollupConfig(options, argv, context);

  if (argv.watch) {
    runWatcher(options, rollupOptions, argv, buildEmitter, context);
    try {
      require('remax-stats').run();
    } catch (e) {
      // ignore
    }
    return buildEmitter;
  } else {
    try {
      output('🚀 开始 build...', 'blue');
      const bundle = await rollup.rollup(rollupOptions);
      await bundle.write(rollupOptions.output as rollup.OutputOptions);
      output('💡 完成', 'green');
    } catch (error) {
      const name = error.code === 'PLUGIN_ERROR' ? error.plugin : error.code;
      output(`\n🚨 [${name}]: ${error.message}`, 'red');
      throw error;
    }
  }
};
