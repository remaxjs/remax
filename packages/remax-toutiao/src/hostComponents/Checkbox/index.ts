import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface CheckboxProps extends BaseProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  color?: string;
}

export const Checkbox: React.ComponentType<CheckboxProps> = createHostComponent<CheckboxProps>('checkbox');

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
};
