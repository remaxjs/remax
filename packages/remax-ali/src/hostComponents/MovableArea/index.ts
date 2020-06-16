import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface MovableAreaProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  width: number;
  height: number;
}

export const MovableArea = createHostComponent<MovableAreaProps>('movable-area');
