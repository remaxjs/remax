import notifier from 'node-notifier';

const COLORS = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};
const RESET = '\x1b[0m';

export const output = (
  content: string | string[],
  color: 'red' | 'green' | 'blue' | 'yellow',
  notify?: boolean
) => {
  const message = Array.isArray(content) ? content : [content];
  console.log(`${COLORS[color]}%s${RESET}`, ...message);

  if (notify) {
    notifier.notify({
      title: 'Remax',
      message: message.join(' '),
    });
  }
};

export default {
  error: (message: string, notify?: boolean) =>
    output(`\n🚨 ${message}`, 'red', notify),
  warn: (message: string, notify?: boolean) =>
    output(`\n⚠️ ${message}`, 'yellow', notify),
};
