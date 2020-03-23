import { useLayoutEffect, useContext, DependencyList } from 'react';
import {
  registerLifecycle,
  AppLifecycle,
  Lifecycle,
  Callback,
  lifeCycleName,
} from './lifecycle';
import PageInstanceContext from './PageInstanceContext';
import AppInstanceContext from './AppInstanceContext';
import nativeEffect, { Listener } from './nativeEffect';

function warn(message: string) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(message);
  }
}

/**
 *  Page Hooks
 */

// eslint-disable-next-line @typescript-eslint/camelcase
export function usePageInstance() {
  return useContext(PageInstanceContext);
}

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
    warn(
      'useShow 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.show, callback);
  });
}

export function useReady(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    warn(
      'useReady 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.ready, callback);
  });
}

export function useHide(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    warn(
      'useHide 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.hide, callback);
  });
}

export function usePullDownRefresh(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    warn(
      'usePullDownRefresh 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.pullDownRefresh, callback);
  });
}

export function useReachBottom(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    warn(
      'useReachBottom 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.reachBottom, callback);
  });
}

export function usePageScroll(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    warn(
      'usePageScroll 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
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
    warn(
      'useShareAppMessage 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.shareAppMessage, callback);
  });
}

export function useTitleClick(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    warn(
      'useTitleClick 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.titleClick, callback);
  });
}

export function useOptionMenuClick(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    warn(
      'useOptionMenuClick 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.optionMenuClick, callback);
  });
}

export function usePopMenuClick(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    warn(
      'usePopMenuClick 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.popMenuClick, callback);
  });
}

export function usePullIntercept(callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  useLayoutEffect(() => {
    warn(
      'usePullIntercept 即将废弃，请使用 usePageEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(pageInstance, Lifecycle.pullIntercept, callback);
  });
}

export function useQuery<Q extends {} = { [name: string]: string }>(): Q {
  const pageInstance: any = useContext(PageInstanceContext);
  return pageInstance.query;
}

export function usePageEvent(eventName: string, callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  const lifeCycle = lifeCycleName(eventName);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, lifeCycle, callback);
  });
}

/**
 * App Hooks
 */

export function useAppEvent(eventName: string, callback: Callback) {
  const lifeCycle = lifeCycleName(eventName);
  useLayoutEffect(() => {
    return registerLifecycle(AppInstanceContext, lifeCycle, callback);
  });
}

export function useAppShow(callback: Callback) {
  useLayoutEffect(() => {
    warn(
      'useAppShow 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(AppInstanceContext, AppLifecycle.show, callback);
  });
}

export function useAppLaunch(callback: Callback) {
  useLayoutEffect(() => {
    warn(
      'useAppLaunch 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(AppInstanceContext, AppLifecycle.launch, callback);
  });
}

export function useAppError(callback: Callback) {
  useLayoutEffect(() => {
    warn(
      'useAppError 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(AppInstanceContext, AppLifecycle.error, callback);
  });
}

export function useAppHide(callback: Callback) {
  useLayoutEffect(() => {
    warn(
      'useAppHide 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(AppInstanceContext, AppLifecycle.hide, callback);
  });
}

export function useAppPageNotFound(callback: Callback) {
  useLayoutEffect(() => {
    warn(
      'useAppPageNotFound 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(
      AppInstanceContext,
      AppLifecycle.pageNotFound,
      callback
    );
  });
}

export function useAppShareAppMessage(callback: Callback) {
  useLayoutEffect(() => {
    warn(
      'useAppShareAppMessage 即将废弃，请使用 useAppEvent 代替。详情参考：https://remaxjs.org/guide/framework'
    );
    return registerLifecycle(
      AppInstanceContext,
      AppLifecycle.shareAppMessage,
      callback
    );
  });
}
