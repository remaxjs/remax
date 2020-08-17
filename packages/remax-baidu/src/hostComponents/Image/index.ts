import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

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
  webp?: boolean;
  lazyLoad?: boolean;
  imageMenuPrevent?: boolean;
  preview?: boolean;
  originalSrc?: string;
  onError?: (event: any) => void;
  onLoad?: (event: any) => void;
}

export const Image: React.ComponentType<ImageProps> = createHostComponent<ImageProps>('image');

Image.defaultProps = {
  mode: 'scaleToFill',
  webp: false,
  lazyLoad: false,
  imageMenuPrevent: false,
};
