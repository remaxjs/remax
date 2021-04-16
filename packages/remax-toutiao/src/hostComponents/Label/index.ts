import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface LabelProps extends BaseProps {
  for?: string;
}

export const Label: React.ComponentType<LabelProps> = createHostComponent<LabelProps>('label');
