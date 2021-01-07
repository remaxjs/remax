import notifier from 'node-notifier';
import type { LogLevel } from '@remax/types';

const COLORS = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};
const RESET = '\x1b[0m';

export const output = (content: string | string[], color: 'red' | 'green' | 'blue' | 'yellow', notify = false) => {
  const message = Array.isArray(content) ? content : [content];
  console.log(`${COLORS[color]}%s${RESET}`, ...message);

  if (notify) {
    notifier.notify({
      title: 'remax',
      message: message.join(' '),
    });
  }
};

const levelMap = { debug: 0, verbose: 1, info: 2, warn: 3, error: 4, silent: 5 };
let levelText: LogLevel = 'verbose';
let levelWidth = levelMap[levelText];

export default {
  get level() {
    return levelText;
  },
  set level(value: LogLevel) {
    levelText = value;
    levelWidth = levelMap[value] ?? 1;
  },
  message(...args: Parameters<typeof output>) {
    if (levelWidth <= 2) {
      output(...args);
    }
  },
  error(message: string, notify?: boolean) {
    if (levelWidth <= 4) {
      output(`\n🚨 ${message}`, 'red', notify);
    }
  },
  warn(message: string, notify?: boolean) {
    if (levelWidth <= 3) {
      output(`\n⚠️ ${message}`, 'yellow', notify);
    }
  },
};
