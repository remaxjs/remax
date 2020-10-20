import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface ArCameraProps extends BaseProps {
  key?: string;
  type?: 0 | 5 | 8;
  flash?: 'auto' | 'on' | 'off';
  onError?: (event: GenericEvent) => void;
  onLoad?: (event: GenericEvent) => void;
  onMessage?: (event: GenericEvent) => void;
  onScancode?: (event: GenericEvent) => void;
}

export const ArCamera: React.ComponentType<ArCameraProps> = createHostComponent<ArCameraProps>('ar-camera');

ArCamera.defaultProps = {
  flash: 'auto',
  type: 0,
};
