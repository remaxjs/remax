import factory from './factory';

const SwiperItem = factory<SwiperItemProps>('swiper-item');

export interface SwiperItemProps {
  readonly dataset?: DOMStringMap;
  itemId?: string; //  否 该 swiper-item 的标识符 1.9.0
}

export default SwiperItem;
