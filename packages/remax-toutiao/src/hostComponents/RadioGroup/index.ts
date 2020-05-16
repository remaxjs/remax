import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface RadioGroupProps extends BaseProps {
  onChange?: (e: any) => void;
}

export const RadioGroup = createHostComponent<RadioGroupProps>('radio-group');
