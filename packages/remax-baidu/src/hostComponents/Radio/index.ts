import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface RadioProps extends BaseProps {
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  color?: string;
}

export const Radio: React.ComponentType<RadioProps> = createHostComponent<RadioProps>('radio');

Radio.defaultProps = {
  disabled: false,
  checked: false,
  color: '#3c76ff',
};
