const ENTRY_INFO = __REMAX_ENTRY_INFO__;
const PAGE_EVENTS = __REMAX_PAGE_EVENTS__;
const APP_EVENTS = __REMAX_APP_EVENTS__;

export function pageEvents(entry: string) {
  const entryInfo = ENTRY_INFO.find((e: any) => e.name === entry);
  return ((entryInfo?.modules || []) as string[]).reduce<string[]>((acc, cur) => {
    return [...acc, ...(PAGE_EVENTS[cur] || [])];
  }, []);
}

export function appEvents(): string[] {
  return APP_EVENTS;
}
