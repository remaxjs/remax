import { useLayoutEffect, useContext, DependencyList } from 'react';
import { registerLifecycle, Callback, lifeCycleName } from './lifecycle';
import PageInstanceContext from './PageInstanceContext';
import AppInstanceContext from './AppInstanceContext';
import nativeEffect, { Listener } from './nativeEffect';

/**
 *  Page Hooks
 */

export function usePageInstance() {
  return useContext(PageInstanceContext);
}

// eslint-disable-next-line @typescript-eslint/camelcase
export function unstable_useNativeEffect(listener: Listener, deps?: DependencyList) {
  useLayoutEffect(() => {
    return nativeEffect.connect(listener, !!deps);
  }, deps);
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
