import output from './utils/output';
import remaxVersion from '../remaxVersion';
import buildWeb from './web';
import buildMini from './mini';
import { Platform } from './utils/platform';

export default function build(argv: any) {
  const { target } = argv;
  output.message(`\n⌨️  Remax v${remaxVersion()}\n`, 'green');
  output.message(`🎯 平台 ${target}`, 'blue');

  const result = target === Platform.web ? buildWeb(argv) : buildMini(argv);

  try {
    require('remax-stats').run();
  } catch (e) {
    // ignore
  }

  return result;
}
