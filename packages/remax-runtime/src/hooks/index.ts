import { useLayoutEffect, useContext } from 'react';
import { registerLifecycle, Callback, lifeCycleName } from '../lifecycle';
import PageContext from '../PageContext';
import AppInstanceContext from '../AppInstanceContext';

/**
 *  Page Hooks
 */

export function usePageInstance() {
  return useContext(PageContext)?.page;
}

export { default as useNativeEffect } from './useNativeEffect';
export { default as useQuery } from './useQuery';

export function usePageEvent(eventName: string, callback: Callback) {
  const pageInstance = useContext(PageContext)?.page;
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
