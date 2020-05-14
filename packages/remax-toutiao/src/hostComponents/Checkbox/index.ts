import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface CheckboxProps extends BaseProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  color?: string;
}

export default createHostComponent<CheckboxProps>('checkbox');
