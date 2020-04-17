import * as React from 'react';
export interface CoverViewProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  onTap?: (e: any) => void;
}
declare const CoverView: React.ForwardRefExoticComponent<CoverViewProps & {
  children?: React.ReactNode;
} & React.RefAttributes<any>>;
export default CoverView;
