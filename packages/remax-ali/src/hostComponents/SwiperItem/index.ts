import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface SwiperItemProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  key: string;
}

export const SwiperItem = createHostComponent<SwiperItemProps>('swiper-item') as React.ComponentType<SwiperItemProps>;
