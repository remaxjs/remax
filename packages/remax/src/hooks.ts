import { registerLifecycle, Lifecycle, Callback } from './lifecycle';

export function useShow(callback: Callback) {
  return registerLifecycle(Lifecycle.show, callback);
}

export function useHide(callback: Callback) {
  return registerLifecycle(Lifecycle.hide, callback);
}

export function usePullDownRefresh(callback: Callback) {
  return registerLifecycle(Lifecycle.pullDownRefresh, callback);
}

export function useReachBottom(callback: Callback) {
  return registerLifecycle(Lifecycle.reachBottom, callback);
}

export function usePageScroll(callback: Callback) {
  return registerLifecycle(Lifecycle.pageScroll, callback);
}

export function useShareAppMessage(callback: Callback) {
  return registerLifecycle(Lifecycle.shareAppMessage, callback);
}

export function useTitleClick(callback: Callback) {
  return registerLifecycle(Lifecycle.titleClick, callback);
}

export function useOptionMenuClick(callback: Callback) {
  return registerLifecycle(Lifecycle.optionMenuClick, callback);
}

export function usePopMenuClick(callback: Callback) {
  return registerLifecycle(Lifecycle.popMenuClick, callback);
}

export function usePullIntercept(callback: Callback) {
  return registerLifecycle(Lifecycle.pullIntercept, callback);
}
