import { RemaxOptions } from '@remax/types';
import events from 'events';
import output from './utils/output';
import remaxVersion from '../remaxVersion';
import { Platform } from './utils/platform';
import getConfig from '../getConfig';

interface Argv {
  target: Platform;
  watch?: boolean;
  notify?: boolean;
}

export function run(options: RemaxOptions) {
  const buildEvent = new events.EventEmitter();

  if (options.target === Platform.web) {
    // 兼容 herbox 所以用 require
    const buildWeb = require('./web').default;
    buildWeb(options);
  } else {
    const buildMini = require('./mini').default;
    buildMini(options, buildEvent);
  }

  return buildEvent;
}

export function build(argv: Argv) {
  const { target } = argv;

  process.env.REMAX_PLATFORM = target;

  const options = getConfig();

  output.message(`\n⌨️  Remax v${remaxVersion()}\n`, 'green');
  output.message(`🎯 平台 ${target}`, 'blue');

  const result = run({ ...options, ...argv });

  try {
    require('remax-stats').run();
  } catch (e) {
    // ignore
  }

  return result;
}
