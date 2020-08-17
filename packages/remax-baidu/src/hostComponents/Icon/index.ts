import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface IconProps extends BaseProps {
  type:
    | 'success'
    | 'info'
    | 'warn'
    | 'waiting'
    | 'success_no_circle'
    | 'clear'
    | 'search'
    | 'personal'
    | 'setting'
    | 'top'
    | 'close'
    | 'cancel'
    | 'download'
    | 'checkboxSelected'
    | 'radioSelected'
    | 'radioUnselect'
    | 'loadingGrey';
  size?: number;
  color?: string;
}

export const Icon: React.ComponentType<IconProps> = createHostComponent<IconProps>('icon');

Icon.defaultProps = {
  size: 23,
};
