import propsAlias, { getAlias } from '../propsAlias';
import { isHostComponent } from '../createHostComponent';
import { TYPE_TEXT } from '../constants';

describe('propsAlias', () => {
  it('transform className prop correctly', () => {
    expect(getAlias('className')).toBe('class');
    expect(getAlias('placeholderClassName')).toBe('placeholder-class');
    expect(getAlias('className', true)).toBe('class');
    expect(getAlias('placeholderClassName', true)).toBe('placeholderClass');
  });

  it('transform function prop correctly', () => {
    expect(getAlias('onTouchStart')).toBe('bindtouchstart');
    expect(getAlias('onClick')).toBe('bindtap');
    expect(getAlias('catchClick')).toBe('catchtap');
    expect(getAlias('onLongClick')).toBe('bindlongtap');
    expect(getAlias('onClick', true)).toBe('onClick');

    expect(getAlias('onTouchStart', false, 'alipay')).toBe('onTouchStart');
    expect(getAlias('onClick', false, 'alipay')).toBe('onTap');
    expect(getAlias('catchClick', false, 'alipay')).toBe('catchTap');
    expect(getAlias('onLongClick', false, 'alipay')).toBe('onLongTap');
    expect(getAlias('onClick', true, 'alipay')).toBe('onClick');
  });

  it('transform style prop correctly', () => {
    expect(
      propsAlias({
        style: {
          color: '#ffffff',
          height: '2px',
        },
      })
    ).toMatchSnapshot();
  });

  describe('check host components', () => {
    afterEach(() => {
      process.env['REMAX_PLATFORM'] = undefined;
    });

    it('wechat', () => {
      process.env['REMAX_PLATFORM'] = 'wechat';
      require('../adapters/wechat/components/Button');
      expect(isHostComponent(TYPE_TEXT)).toBeTruthy();
      expect(isHostComponent('button')).toBeTruthy();
      expect(isHostComponent('foo')).toBeFalsy();
    });

    it('alipay', () => {
      process.env['REMAX_PLATFORM'] = 'alipay';
      require('../adapters/alipay/components/Button');
      expect(isHostComponent(TYPE_TEXT)).toBeTruthy();
      expect(isHostComponent('button')).toBeTruthy();
      expect(isHostComponent('foo')).toBeFalsy();
    });

    it('toutiao', () => {
      process.env['REMAX_PLATFORM'] = 'toutiao';
      require('../adapters/toutiao/components/Button');
      expect(isHostComponent(TYPE_TEXT)).toBeTruthy();
      expect(isHostComponent('button')).toBeTruthy();
      expect(isHostComponent('foo')).toBeFalsy();
    });
  });
});
