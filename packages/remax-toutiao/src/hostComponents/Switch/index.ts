import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface SwitchProps extends BaseProps {
  checked?: boolean;
  disabled?: boolean;
  type?: string;
  onChange?: (e: any) => void;
  color?: string;
}

export default createHostComponent<SwitchProps>('switch');
