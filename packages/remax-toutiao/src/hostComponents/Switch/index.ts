import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface SwitchProps extends BaseProps {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  type?: string;
  onChange?: (e: any) => void;
  color?: string;
}

export const Switch: React.ComponentType<SwitchProps> = createHostComponent<SwitchProps>('switch');

Switch.defaultProps = {
  checked: false,
  disabled: false,
  type: 'switch',
  color: '#F85959',
};
