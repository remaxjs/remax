import * as React from 'react';
import { Portal } from './ReactIs';

export function createPortal(
  children: React.ReactElement,
  containerInfo: any,
  key: string
) {
  return {
    // This tag allow us to uniquely identify this as a React Portal
    $$typeof: Portal,
    key: key == null ? null : '' + key,
    children,
    containerInfo,
    implementation: null,
  };
}
