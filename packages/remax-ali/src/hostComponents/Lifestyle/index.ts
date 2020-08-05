import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface LifestyleProps {
  readonly dataset?: DOMStringMap;
  publicId: string;
  onFollow?: (e: any) => void;
}

export const Lifestyle: React.ComponentType<LifestyleProps> = createHostComponent<LifestyleProps>('lifestyle');
