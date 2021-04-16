import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface IconProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className: string;
  type:
    | 'info'
    | 'warn'
    | 'waiting'
    | 'cancel'
    | 'download'
    | 'search'
    | 'clear'
    | 'success'
    | 'success_no_circle'
    | 'loading';
  size?: number;
  color?: string;
}

export const Icon = createHostComponent<IconProps>('icon') as React.ComponentType<IconProps>;
