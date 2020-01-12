import * as rollup from 'rollup';
import API from '../API';
import rollupConfig from './rollupConfig';
import getConfig from '../getConfig';
import { Context } from '../types';
import runWatcher from './watcher';
import { output } from './utils/output';

export default async (argv: any, context?: Context) => {
  const options = {
    ...getConfig(),
    ...(context ? context.config : {}),
  };

  API.registerAdapterPlugins(argv.target);

  const rollupOptions: rollup.RollupOptions = rollupConfig(
    options,
    argv,
    context
  );

  if (argv.watch) {
    runWatcher(options, rollupOptions, argv, context);
    try {
      require('remax-stats').run();
    } catch (e) {
      // ignore
    }
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
