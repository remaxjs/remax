import * as React from 'react';

const hasSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_PORTAL_TYPE = hasSymbol
  ? Symbol.for('react.portal')
  : 0xeaca;

export function createPortal(
  children: React.ReactElement,
  containerInfo: any,
  key: string
) {
  return {
    // This tag allow us to uniquely identify this as a React Portal
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : '' + key,
    children,
    containerInfo,
    implementation: null,
  };
}
