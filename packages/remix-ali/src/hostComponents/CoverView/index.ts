import * as React from 'react';
import { createHostComponent } from '@alipay/remix-shared';

export interface CoverViewProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  onTap?: (e: any) => void;
}

export const CoverView = createHostComponent<CoverViewProps>('cover-view');
