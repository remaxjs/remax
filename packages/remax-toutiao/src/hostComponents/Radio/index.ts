import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface RadioProps extends BaseProps {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

export const Radio = createHostComponent<RadioProps>('radio');
