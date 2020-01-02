import { useLayoutEffect, useContext } from 'react';
import { registerLifecycle, Lifecycle, Callback } from './lifecycle';
import PageInstanceContext from './PageInstanceContext';

export function useShow(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.show, callback);
  });
}

export function useReady(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.ready, callback);
  });
}

export function useHide(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.hide, callback);
  });
}

export function usePullDownRefresh(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.pullDownRefresh, callback);
  });
}

export function useReachBottom(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.reachBottom, callback);
  });
}

export function usePageScroll(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.pageScroll, callback);
  });
}

export function useShareAppMessage(
  callback: (o: {
    from: 'button' | 'menu';
    target: object | undefined;
    webViewUrl: string;
  }) => any
) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.shareAppMessage, callback);
  });
}

export function useTitleClick(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.titleClick, callback);
  });
}

export function useOptionMenuClick(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.optionMenuClick, callback);
  });
}

export function usePopMenuClick(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.popMenuClick, callback);
  });
}

export function usePullIntercept(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, Lifecycle.pullIntercept, callback);
  });
}

export function usePageQuery<Q extends {} = any>(): Q {
  const pageInstance: any = useContext(PageInstanceContext);
  return pageInstance.query;
}
