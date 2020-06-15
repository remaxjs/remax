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
      title: 'Remax',
      message: message.join(' '),
    });
  }
};

function log(type: 'error' | 'warn', message: string, notify?: boolean) {
  console[type](message);

  if (notify) {
    notifier.notify({
      title: 'Remax',
      message,
    });
  }
}

function notice(message: string) {
  notifier.notify({
    title: 'Remax',
    message,
  });
}

export default {
  message: output,
  error: (message: string, notify?: boolean) => log('error', message, notify),
  warn: (message: string) => log('warn', message),
  notice,
};
