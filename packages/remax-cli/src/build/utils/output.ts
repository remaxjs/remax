import notifier from 'node-notifier';

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

type Level = 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'silent';
let logLevel = 1;
let logLevelText: Level = 'verbose';
const levelMap = { debug: 0, verbose: 1, info: 2, warn: 3, error: 4, silent: 5 };

export default {
  get level() {
    return logLevelText;
  },
  set level(value: Level) {
    logLevelText = value;
    logLevel = levelMap[value] ?? 1;
  },
  message: (...args: Parameters<typeof output>) => {
    if (logLevel <= 2) {
      output(...args);
    }
  },
  error: (message: string, notify?: boolean) => {
    if (logLevel <= 4) {
      output(`\n🚨 ${message}`, 'red', notify);
    }
  },
  warn: (message: string, notify?: boolean) => {
    if (logLevel <= 3) {
      output(`\n⚠️ ${message}`, 'yellow', notify);
    }
  },
};
