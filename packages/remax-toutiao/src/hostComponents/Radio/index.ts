import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface RadioProps extends BaseProps {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

export const Radio: React.ComponentType<RadioProps> = createHostComponent<RadioProps>('radio');

Radio.defaultProps = {
  checked: false,
  disabled: false,
  color: '#F85959',
};
