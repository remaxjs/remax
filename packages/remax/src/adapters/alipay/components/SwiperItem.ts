import createHostComponent from '../../../createHostComponent';

export interface SwiperItemProps {
  readonly dataset?: DOMStringMap;
  key: string;
}

const SwiperItem = createHostComponent<SwiperItemProps>('swiper-item');

export default SwiperItem;
