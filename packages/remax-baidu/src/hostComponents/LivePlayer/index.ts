import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface LivePlayerProps extends BaseProps {
  src?: string;
  autoPlay?: boolean;
  muted?: boolean;
  orientation?: 'vertical' | 'horizontal';
  objectFit?: 'contain' | 'fillCrop';
  backgroundMute?: boolean;
  minCache?: number;
  maxCache?: number;
  onStateChange?: (event: GenericEvent) => void;
  onNetstatus?: (event: GenericEvent) => void;
  onFullscreenChange?: (event: GenericEvent) => void;
}

export const LivePlayer: React.ComponentType<LivePlayerProps> = createHostComponent<LivePlayerProps>('live-player');

LivePlayer.defaultProps = {
  autoPlay: false,
  muted: false,
  orientation: 'vertical',
  objectFit: 'contain',
  backgroundMute: false,
  minCache: 1,
  maxCache: 3,
};
