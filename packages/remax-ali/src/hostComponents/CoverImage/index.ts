import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface CoverImageProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  src?: string;
  onTap?: (e: any) => void;
}
const CoverImage = createHostComponent<CoverImageProps>('cover-image');

export default CoverImage;
