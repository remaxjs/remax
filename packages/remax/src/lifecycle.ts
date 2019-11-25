import capitalize from './utils/capitalize';

export type Callback = (...args: any[]) => any;

export enum Lifecycle {
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
}

export function callbackName(name: string) {
  if (name.startsWith('before')) {
    return capitalize(name);
  }
  return 'on' + capitalize(name);
}

export function registerLifecycle(
  page: any,
  method: Lifecycle,
  callback: Callback
) {
  return page.registerLifecycle(method, callback);
}
