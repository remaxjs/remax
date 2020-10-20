import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface AudioProps extends BaseProps {
  src?: string;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
  name?: string;
  author?: string;
  onError?: (event: GenericEvent) => void;
  onPlay?: (event: GenericEvent) => void;
  onPause?: (event: GenericEvent) => void;
  onTimeUpdate?: (event: GenericEvent) => void;
  onEnded?: (event: GenericEvent) => void;
}

export const Audio: React.ComponentType<AudioProps> = createHostComponent<AudioProps>('audio');

Audio.defaultProps = {
  loop: false,
  controls: false,
};
