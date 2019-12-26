import plainStyle from '../../utils/plainStyle';

describe('plainStyle pxToRpx', () => {
  it('transform inline style floating point values correctly', () => {
    let style = plainStyle({ width: '100px' }, true);
    expect(style.indexOf('100rpx') > -1).toBeTruthy();

    style = plainStyle({ width: '100.55555px' }, true);
    expect(style.indexOf('100.56rpx') > -1).toBeTruthy();
  });
});
