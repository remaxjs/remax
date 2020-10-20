import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface AnimationViewProps extends BaseProps {
  path?: string;
  loop?: boolean;
  autoPlay?: boolean;
  action?: 'play' | 'pause' | 'stop';
  hidden?: boolean;
  onEnded?: (event: GenericEvent) => void;
}

export const AnimationView: React.ComponentType<AnimationViewProps> = createHostComponent<AnimationViewProps>(
  'animation-view'
);

AnimationView.defaultProps = {
  loop: false,
  autoPlay: true,
  action: 'play',
  hidden: true,
};
