import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface IconProps extends BaseProps {
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

export const Icon: React.ComponentType<IconProps> = createHostComponent<IconProps>('icon');

Icon.defaultProps = {
  size: 24,
};
