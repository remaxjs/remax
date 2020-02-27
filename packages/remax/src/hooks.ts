import { useLayoutEffect, useContext, DependencyList } from 'react';
import {
  registerLifecycle,
  AppLifecycle,
  Lifecycle,
  Callback,
} from './lifecycle';
import PageInstanceContext from './PageInstanceContext';
import AppInstanceContext from './AppInstanceContext';
import nativeEffect, { Listener } from './nativeEffect';

/**
 *  Page Hooks
 */

// eslint-disable-next-line @typescript-eslint/camelcase
export function unstable_useNativeEffect(
  listener: Listener,
  deps?: DependencyList
) {
  useLayoutEffect(() => {
    return nativeEffect.connect(listener, !!deps);
  }, deps);
}

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

export function useQuery<Q extends {} = { [name: string]: string }>(): Q {
  const pageInstance: any = useContext(PageInstanceContext);
  return pageInstance.query;
}

/**
 * App Hooks
 */

export function useAppShow(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(AppInstanceContext, AppLifecycle.show, callback);
  });
}

export function useAppLaunch(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(AppInstanceContext, AppLifecycle.launch, callback);
  });
}

export function useAppError(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(AppInstanceContext, AppLifecycle.error, callback);
  });
}

export function useAppHide(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(AppInstanceContext, AppLifecycle.hide, callback);
  });
}

export function useAppPageNotFound(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(
      AppInstanceContext,
      AppLifecycle.pageNotFound,
      callback
    );
  });
}

export function useAppShareAppMessage(callback: Callback) {
  useLayoutEffect(() => {
    return registerLifecycle(
      AppInstanceContext,
      AppLifecycle.shareAppMessage,
      callback
    );
  });
}
