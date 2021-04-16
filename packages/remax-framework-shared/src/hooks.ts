import { useLayoutEffect, useContext } from 'react';
import { Callback, lifeCycleName, registerLifecycle } from './lifecycle';
import PageInstanceContext from './PageInstanceContext';
import ComponentInstanceContext from './ComponentInstanceContext';
import AppInstanceContext from './AppInstanceContext';

export function usePageEvent(eventName: string, callback: Callback) {
  const pageInstance = useContext(PageInstanceContext);
  const lifeCycle = lifeCycleName(eventName);
  useLayoutEffect(() => {
    return registerLifecycle(pageInstance, lifeCycle, callback);
  });
}

export function useComponentInstance() {
  return useContext(ComponentInstanceContext);
}

export function usePageInstance() {
  return useContext(PageInstanceContext);
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
