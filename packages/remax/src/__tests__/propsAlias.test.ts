import { hostComponents } from 'remax.macro';
import propsAlias, { getAlias } from '../propsAlias';
import { isHostComponent } from '../createHostComponent';
import { TYPE_TEXT } from '../constants';

describe('props alias', () => {
  it('transform className prop correctly', () => {
    expect(getAlias('className')).toBe('class');
    expect(getAlias('placeholderClassName')).toBe('placeholder-class');
    expect(getAlias('className', true)).toBe('class');
    expect(getAlias('placeholderClassName', true)).toBe('placeholderClass');

    expect(
      propsAlias({
        className: 'class-name',
        placeholderClassName: 'placeholder-class-name',
      })
    ).toEqual({
      class: 'class-name',
      'placeholder-class': 'placeholder-class-name',
    });
    expect(
      propsAlias(
        {
          className: 'class-name',
          placeholderClassName: 'placeholder-class-name',
        },
        true
      )
    ).toEqual({
      class: 'class-name',
      placeholderClass: 'placeholder-class-name',
    });
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

  it('transform props by component type correctly', () => {
    expect(getAlias('prop')).toBe('prop');

    hostComponents.set('foo', {
      props: ['bar', 'camelCase'],
      alias: {
        camelCase: 'kebab-case',
      },
    });

    expect(
      propsAlias(
        {
          bar: 'bar',
          camelCase: 'value',
        },
        false,
        undefined,
        undefined,
        'foo'
      )
    ).toEqual({
      bar: 'bar',
      'kebab-case': 'value',
    });
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
