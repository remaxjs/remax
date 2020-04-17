import * as React from 'react';
export interface CoverImageProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  src?: string;
  onTap?: (e: any) => void;
}
declare const CoverImage: React.ForwardRefExoticComponent<CoverImageProps & {
  children?: React.ReactNode;
} & React.RefAttributes<any>>;
export default CoverImage;
