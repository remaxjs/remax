import capitalize from './utils/capitalize';
import lowercase from './utils/lowercase';

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

export function registerLifecycle(
  instance: any,
  method: Lifecycle | AppLifecycle,
  callback: Callback
) {
  return instance.registerLifecycle(method, callback);
}
