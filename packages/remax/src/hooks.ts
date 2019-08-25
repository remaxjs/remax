import { useLayoutEffect } from 'react';
import { registerLifecycle, Lifecycle, Callback } from './lifecycle';

export function useShow(callback: Callback) {
  useLayoutEffect(() => registerLifecycle(Lifecycle.show, callback), []);
}

export function useHide(callback: Callback) {
  useLayoutEffect(() => registerLifecycle(Lifecycle.hide, callback), []);
}

export function usePullDownRefresh(callback: Callback) {
  useLayoutEffect(
    () => registerLifecycle(Lifecycle.pullDownRefresh, callback),
    [],
  );
}

export function useReachBottom(callback: Callback) {
  useLayoutEffect(() => registerLifecycle(Lifecycle.reachBottom, callback), []);
}

export function usePageScroll(callback: Callback) {
  useLayoutEffect(() => registerLifecycle(Lifecycle.pageScroll, callback), []);
}

export function useShareAppMessage(callback: Callback) {
  useLayoutEffect(
    () => registerLifecycle(Lifecycle.shareAppMessage, callback),
    [],
  );
}

export function useTitleClick(callback: Callback) {
  useLayoutEffect(() => registerLifecycle(Lifecycle.titleClick, callback), []);
}

export function useOptionMenuClick(callback: Callback) {
  useLayoutEffect(
    () => registerLifecycle(Lifecycle.optionMenuClick, callback),
    [],
  );
}

export function usePopMenuClick(callback: Callback) {
  useLayoutEffect(
    () => registerLifecycle(Lifecycle.popMenuClick, callback),
    [],
  );
}

export function usePullIntercept(callback: Callback) {
  useLayoutEffect(
    () => registerLifecycle(Lifecycle.pullIntercept, callback),
    [],
  );
}
