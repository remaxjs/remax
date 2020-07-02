import createHostComponent from '../../createHostComponent';
import ImageProps from './props';
import * as props from './props';

export type { ImageProps };

const Image = createHostComponent<ImageProps>('image', null, props.defaults);

export default Image;
