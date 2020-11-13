import { RuntimeOptions } from '@remax/framework-shared';

export function pageEvents(name: string): string[] {
  return RuntimeOptions.get('pageEvents')[name] || [];
}

export function appEvents(): string[] {
  return RuntimeOptions.get('appEvents');
}
