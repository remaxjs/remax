import { RemaxConfig } from 'remax-types';

export function validate(options: RemaxConfig) {
  return options.mode === 'hybrid';
}

export const appName = 'remaxApp';
