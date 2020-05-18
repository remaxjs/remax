import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface SwitchProps extends BaseProps {
  checked?: boolean;
  disabled?: boolean;
  type?: string;
  onChange?: (e: any) => void;
  color?: string;
}

export const Switch = createHostComponent<SwitchProps>('switch');
