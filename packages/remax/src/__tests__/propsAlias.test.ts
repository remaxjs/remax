import propsAlias, { getAlias } from '../propsAlias';

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
});
