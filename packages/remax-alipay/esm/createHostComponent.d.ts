import * as React from 'react';
export default function createHostComponent<P = any>(
  name: string
): React.ForwardRefExoticComponent<React.PropsWithoutRef<React.PropsWithChildren<P>> & React.RefAttributes<any>>;
