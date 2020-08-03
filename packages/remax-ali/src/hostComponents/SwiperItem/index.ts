import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface SwiperItemProps {
  readonly dataset?: DOMStringMap;
  key: string;
}

export const SwiperItem: React.ComponentType<SwiperItemProps> = createHostComponent<SwiperItemProps>('swiper-item');
