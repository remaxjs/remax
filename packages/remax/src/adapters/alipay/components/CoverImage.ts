import * as React from 'react';
import factory from './factory';

export interface CoverImageProps {
  className?: string;
  style?: React.CSSProperties;
  src?: string;
  onTap?: (e: any) => void;
}
const CoverImage = factory<CoverImageProps>('cover-image');

export default CoverImage;
