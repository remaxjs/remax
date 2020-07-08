import * as React from 'react';
import { Portal } from './ReactIs';

export function createPortal(children: React.ReactNode, containerInfo: any, key?: string): any {
  return {
    // This tag allow us to uniquely identify this as a React Portal
    $$typeof: Portal,
    key: key || '',
    children,
    containerInfo,
    implementation: null,
  };
}
