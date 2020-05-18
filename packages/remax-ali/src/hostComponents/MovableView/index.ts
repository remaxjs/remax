import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface MovableViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  width: number;
  height: number;
  direction?: 'all' | 'vertical' | 'horizontal' | 'none';
  x?: number;
  y?: number;
  disabled?: boolean;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
  onTouchChange?: (e: any) => void;
  onChangeEnd?: (e: any) => void;
}

export const MovableView = createHostComponent<MovableViewProps>('movable-view');
