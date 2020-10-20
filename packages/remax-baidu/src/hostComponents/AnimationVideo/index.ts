import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface AnimationVideoProps extends BaseProps {
  resourceWidth?: number;
  resourceHeight?: number;
  canvasStyle?: React.CSSProperties;
  path?: string;
  loop?: boolean;
  autoPlay?: boolean;
  onStarted?: (event: GenericEvent) => void;
  onEnded?: (event: GenericEvent) => void;
}

export const AnimationVideo: React.ComponentType<AnimationVideoProps> = createHostComponent<AnimationVideoProps>(
  'animation-video'
);

AnimationVideo.defaultProps = {
  resourceWidth: 800,
  resourceHeight: 400,
  canvasStyle: {
    width: '400px',
    height: '400px',
  },
  loop: false,
  autoPlay: false,
};
