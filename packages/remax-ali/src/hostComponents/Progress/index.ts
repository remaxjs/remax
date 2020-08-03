import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface ProgressProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  percent?: number;
  showInfo?: boolean;
  strokeWidth?: string;
  activeColor?: string;
  backgroundColor?: string;
  active?: boolean;
}

export const Progress: React.ComponentType<ProgressProps> = createHostComponent<ProgressProps>('progress');
