import capitalize from './utils/capitalize';

declare const getCurrentPages: any;

export type Callback = () => any;

export enum Lifecycle {
  show = 'show',
  hide = 'hide',
  pullDownRefresh = 'pullDownRefresh',
  reachBottom = 'reachBottom',
  pageScroll = 'pageScroll',
  shareAppMessage = 'shareAppMessage',
  titleClick = 'titleClick',
  optionMenuClick = 'optionMenuClick',
  popMenuClick = 'popMenuClick',
  pullIntercept = 'pullIntercept',
}

export function hookName(name: string) {
  return 'use' + capitalize(name);
}

export function callbackName(name: string) {
  return 'on' + capitalize(name);
}

export function registerLifecycle(method: Lifecycle, callback: () => void) {
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  return currentPage.registerLifecycle(method, callback);
}
