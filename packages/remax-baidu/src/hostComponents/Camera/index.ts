import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface CameraProps extends BaseProps {
  devicePosition?: 'back' | 'front';
  flash?: 'auto' | 'on' | 'off';
  onStop?: (event: GenericEvent) => void;
  onError?: (event: GenericEvent) => void;
}

export const Camera: React.ComponentType<CameraProps> = createHostComponent<CameraProps>('camera');

Camera.defaultProps = {
  devicePosition: 'back',
  flash: 'auto',
};
