import * as React from 'react';
import factory from './factory';

export interface ImageProps {
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
  catchTap?: (e: any) => void;
}
const Image = factory<ImageProps>('image');

export default Image;
