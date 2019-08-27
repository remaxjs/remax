import * as React from 'react';
import factory from './factory';

export interface ImageProps {
  id?: string;
  src?: string;
  mode?: string;
  className?: string;
  style?: React.CSSProperties;
  lazyLoad?: string;
  onLoad?: (e: any) => void;
  onError?: (e: any) => void;
  onTap?: (e: any) => void;
  catchTap?: (e: any) => void;
}
const Image = factory<ImageProps>('image');

export default Image;
