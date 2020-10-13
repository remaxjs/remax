import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface LabelProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  for?: string;
  className?: string;
}

export const Label: React.ComponentType<LabelProps> = createHostComponent<LabelProps>('label');
