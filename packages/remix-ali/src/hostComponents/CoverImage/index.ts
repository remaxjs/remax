import * as React from 'react';
import { createHostComponent } from '@alipay/remix-shared';

export interface CoverImageProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  src?: string;
  onTap?: (e: any) => void;
}

export const CoverImage = createHostComponent<CoverImageProps>('cover-image');
