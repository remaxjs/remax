import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface CheckboxProps extends BaseProps {
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  color?: string;
}

export const Checkbox: React.ComponentType<CheckboxProps> = createHostComponent<CheckboxProps>('checkbox');

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  color: '#3c76ff',
};
