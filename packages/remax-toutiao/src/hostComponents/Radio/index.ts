import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface RadioProps extends BaseProps {
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

export default createHostComponent<RadioProps>('radio');
