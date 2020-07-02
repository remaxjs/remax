import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface CheckboxProps extends BaseProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  color?: string;
}

export const Checkbox = createHostComponent<CheckboxProps>('checkbox');

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
};
