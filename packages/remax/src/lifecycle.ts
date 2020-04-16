import capitalize from './utils/capitalize';
import lowercase from './utils/lowercase';

export type Callback = (...args: any[]) => any;

export enum Lifecycle {
  load = 'load',
  show = 'show',
  hide = 'hide',
  ready = 'ready',
  pullDownRefresh = 'pullDownRefresh',
  reachBottom = 'reachBottom',
  pageScroll = 'pageScroll',
  shareAppMessage = 'shareAppMessage',
  titleClick = 'titleClick',
  optionMenuClick = 'optionMenuClick',
  popMenuClick = 'popMenuClick',
  pullIntercept = 'pullIntercept',
  back = 'back',
  keyboardHeight = 'keyboardHeight',
  tabItemTap = 'tabItemTap',
  beforeTabItemTap = 'beforeTabItemTap',
  resize = 'resize',
  unload = 'unload',
}

export enum AppLifecycle {
  launch = 'launch',
  show = 'show',
  hide = 'hide',
  error = 'error',
  shareAppMessage = 'shareAppMessage',
  pageNotFound = 'pageNotFound',
}

export function lifeCycleName(name: string): Lifecycle {
  if (name.startsWith('before')) {
    return name as Lifecycle;
  }
  return lowercase(name.slice(2)) as Lifecycle;
}

export function callbackName(name: string) {
  if (name.startsWith('before')) {
    return capitalize(name);
  }
  return 'on' + capitalize(name);
}

export function registerLifecycle(instance: any, method: Lifecycle | AppLifecycle, callback: Callback) {
  return instance.registerLifecycle(method, callback);
}

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
