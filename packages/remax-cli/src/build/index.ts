import events from 'events';
import output from './utils/output';
import remaxVersion from '../remaxVersion';
import buildWeb from './web';
import buildMini from './mini';
import { Platform } from './utils/platform';

export default function build(argv: any) {
  const buildEvent = new events.EventEmitter();

  const { target } = argv;
  output.message(`\n⌨️  Remax v${remaxVersion()}\n`, 'green');
  output.message(`🎯 平台 ${target}`, 'blue');

  if (target === Platform.web) {
    buildWeb(argv);
  } else {
    buildMini(argv, buildEvent);
  }

  try {
    require('remax-stats').run();
  } catch (e) {
    // ignore
  }

  return buildEvent;
}
