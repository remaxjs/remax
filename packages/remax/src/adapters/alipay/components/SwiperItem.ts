import factory from './factory';

export interface SwiperItemProps {
  readonly dataset?: DOMStringMap;
  key: string;
}

const SwiperItem = factory<SwiperItemProps>('swiper-item');

export default SwiperItem;
