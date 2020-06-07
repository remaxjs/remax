const PAGE_EVENTS = __REMAX_PAGE_EVENTS__;
const APP_EVENTS = __REMAX_APP_EVENTS__;

export function pageEvents(name: string): string[] {
  return PAGE_EVENTS[name];
}

export function appEvents(): string[] {
  return APP_EVENTS;
}
