import * as React from 'react';

import { BaseProps } from '../../types/component';
import { createHostComponent } from '@remax/runtime';

export interface ImageProps extends BaseProps {
  src?: string;
  mode?:
    | 'scaleToFill'
    | 'aspectFit'
    | 'aspectFill'
    | 'widthFix'
    | 'top'
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right';
  style?: React.CSSProperties;
  lazyLoad?: boolean;
  onLoad?: (e: any) => void;
  onError?: (e: any) => void;
  onTap?: (e: any) => void;
  onClick?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
}

export const Image: React.ComponentType<ImageProps> = createHostComponent<ImageProps>('image');

Image.defaultProps = {
  mode: 'scaleToFill',
  lazyLoad: false,
};
