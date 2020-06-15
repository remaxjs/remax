import * as path from 'path';
import notifier from 'node-notifier';

const COLORS = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};
const RESET = '\x1b[0m';

export const output = (content: string | string[], color: 'red' | 'green' | 'blue' | 'yellow') => {
  const message = Array.isArray(content) ? content : [content];
  console.log(`${COLORS[color]}%s${RESET}`, ...message);
};

function log(type: 'error' | 'warn', message: string) {
  console[type](message);
}

function notice(message: string) {
  notifier.notify({
    title: 'Remax build error',
    message,
    icon: path.join(__dirname, '../../../error.png'),
  });
}

export default {
  message: output,
  error: (message: string) => log('error', message),
  warn: (message: string) => log('warn', message),
  notice,
};
