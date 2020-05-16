import { createHostComponent } from '@remax/shared';

export interface SwiperItemProps {
  readonly dataset?: DOMStringMap;
  key: string;
}

export const SwiperItem = createHostComponent<SwiperItemProps>('swiper-item');
