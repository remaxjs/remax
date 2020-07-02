import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface RadioProps extends BaseProps {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

export const Radio = createHostComponent<RadioProps>('radio');

Radio.defaultProps = {
  checked: false,
  disabled: false,
  color: '#F85959',
};
