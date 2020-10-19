import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface MovableAreaProps extends BaseProps {
  scaleArea?: boolean;
}

export const MovableArea: React.ComponentType<MovableAreaProps> = createHostComponent<MovableAreaProps>('movable-area');

MovableArea.defaultProps = {
  scaleArea: false,
};
