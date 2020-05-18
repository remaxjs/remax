import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface CheckboxGroupProps extends BaseProps {
  onChange?: (e: any) => void;
}

export const CheckboxGroup = createHostComponent<CheckboxGroupProps>('checkbox-group');
