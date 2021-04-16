import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface MovableViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  direction?: 'all' | 'vertical' | 'horizontal' | 'none';
  x?: number;
  y?: number;
  disabled?: boolean;
  outOfBounds?: boolean;
  damping?: number;
  friction?: number;
  scale?: boolean;
  scaleMin?: number;
  scaleMax?: number;
  scaleValue?: number;
  animation?: boolean;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
  onTouchChange?: (e: any) => void;
  onChange?: (e: any) => void;
  onChangeEnd?: (e: any) => void;
  onScale?: (e: any) => void;
}

export const MovableView = createHostComponent<MovableViewProps>(
  'movable-view'
) as React.ComponentType<MovableViewProps>;
