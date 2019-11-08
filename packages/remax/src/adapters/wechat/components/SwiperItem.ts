import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

const SwiperItem = createHostComponent<SwiperItemProps>('swiper-item');

export interface SwiperItemProps extends BaseProps {
  /** 该 swiper-item 的标识符 1.9.0 */
  itemId?: string;
}

export default SwiperItem;
