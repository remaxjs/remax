import { createHostComponent } from '@alipay/remix-shared';

export interface SwiperItemProps {
  readonly dataset?: DOMStringMap;
  key: string;
}

export const SwiperItem = createHostComponent<SwiperItemProps>('swiper-item');
