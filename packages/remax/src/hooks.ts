import { useLayoutEffect } from 'react';
import { registerLifecycle, Lifecycle, Callback } from './lifecycle';

export function useShow(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.show, callback);
  }, []);
}

export function useHide(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.hide, callback);
  }, []);
}

export function usePullDownRefresh(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.pullDownRefresh, callback);
  }, []);
}

export function useReachBottom(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.reachBottom, callback);
  }, []);
}

export function usePageScroll(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.pageScroll, callback);
  }, []);
}

export function useShareAppMessage(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.shareAppMessage, callback);
  }, []);
}

export function useTitleClick(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.titleClick, callback);
  }, []);
}

export function useOptionMenuClick(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.optionMenuClick, callback);
  }, []);
}

export function usePopMenuClick(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.popMenuClick, callback);
  }, []);
}

export function usePullIntercept(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(Lifecycle.pullIntercept, callback);
  }, []);
}
