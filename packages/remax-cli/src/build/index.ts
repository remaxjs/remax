import { RemaxOptions } from '@remax/types';
import events from 'events';
import output from './utils/output';
import remaxVersion from '../remaxVersion';
import buildWeb from './web';
import buildMini from './mini';
import { Platform } from './utils/platform';
import getConfig from '../getConfig';

interface Argv {
  target: Platform;
  watch?: boolean;
  notify?: boolean;
}

export function run(options: RemaxOptions, target: Platform) {
  const buildEvent = new events.EventEmitter();

  if (target === Platform.web) {
    buildWeb(options);
  } else {
    buildMini(options, target, buildEvent);
  }

  return buildEvent;
}

export function build(argv: Argv) {
  const { target } = argv;

  process.env.REMAX_PLATFORM = target;

  const options = getConfig();

  output.message(`\n⌨️  Remax v${remaxVersion()}\n`, 'green');
  output.message(`🎯 平台 ${target}`, 'blue');

  const result = run({ ...options, ...argv }, target);

  try {
    require('remax-stats').run();
  } catch (e) {
    // ignore
  }

  return result;
}
