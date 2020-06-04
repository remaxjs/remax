import createHostComponent from '../../createHostComponent';
import TextProps from './props';

export type { TextProps };

const Text = createHostComponent<TextProps>('text', {
  wechat: {
    selectable: false,
    'wechat-decode': false,
  },
});

export default Text;
