import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface MovableViewProps extends Omit<BaseProps, 'animation'> {
  direction?: string;
  inertia?: boolean;
  outOfBounds?: boolean;
  x?: number;
  y?: number;
  damping?: number;
  friction?: number;
  disabled?: boolean;
  scale?: boolean;
  scaleMin?: number;
  scaleMax?: number;
  scaleValue?: number;
  animation?: boolean;
  onChange?: (event: GenericEvent) => any;
  onScale?: (event: GenericEvent) => any;
  hTouchMove?: (event: GenericEvent) => any;
  vTouchMove?: (event: GenericEvent) => any;
}

export const MovableView: React.ComponentType<MovableViewProps> = createHostComponent<MovableViewProps>('movable-view');

MovableView.defaultProps = {
  direction: 'none',
  inertia: false,
  outOfBounds: false,
  damping: 20,
  friction: 2,
  disabled: false,
  scale: false,
  scaleMin: 0.5,
  scaleMax: 10,
  scaleValue: 1,
  animation: true,
};
