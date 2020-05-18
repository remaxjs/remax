import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface LabelProps extends BaseProps {
  for?: string;
}

export const Label = createHostComponent<LabelProps>('label');
