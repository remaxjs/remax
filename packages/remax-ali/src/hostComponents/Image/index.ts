import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface ImageProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  src?: string;
  mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix';
  style?: React.CSSProperties;
  lazyLoad?: boolean;
  onLoad?: (e: any) => void;
  onError?: (e: any) => void;
  onTap?: (e: any) => void;
  onClick?: (e: any) => void;
  catchTap?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
}

export const Image = createHostComponent<ImageProps>('image') as React.ComponentType<ImageProps>;
