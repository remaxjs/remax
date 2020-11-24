import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface CameraProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  mode?: 'normal' | 'scanCode';
  devicePosition?: 'front' | 'back';
  flash?: 'auto' | 'on' | 'off';
  outputDimension?: '360P' | '540P' | '720P' | '1080P' | 'max';
  applyMicPermissionWhenInit?: boolean;
  frameSize?: 'small' | 'medium' | 'large';
  frameFormat?: 'rgba' | 'jpg';
  maxDuration?: number;
  onStop?: (e: any) => void;
  onError?: (e: any) => void;
  onScanCode?: (e: any) => void;
}

export const Camera = createHostComponent<CameraProps>('camera') as React.ComponentType<CameraProps>;
