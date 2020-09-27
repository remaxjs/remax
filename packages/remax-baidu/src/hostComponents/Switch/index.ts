import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface SwitchProps extends BaseProps {
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  color?: string;
  type?: 'switch' | 'checkbox';
}

export const Switch: React.ComponentType<SwitchProps> = createHostComponent<SwitchProps>('switch');

Switch.defaultProps = {
  disabled: false,
  checked: false,
  color: '#3c76ff',
  type: 'switch',
};
