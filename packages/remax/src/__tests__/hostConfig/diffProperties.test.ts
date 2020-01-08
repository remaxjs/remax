import diffProperties from '../../hostConfig/diffProperties';

describe('diffProperties', () => {
  it('compare props correctly', () => {
    process.env.NODE_ENV = 'development';
    expect(!!diffProperties(null, undefined)).toBeFalsy();
    expect(!!diffProperties(null, null)).toBeFalsy();
    expect(!!diffProperties(undefined, null)).toBeFalsy();
    expect(!!diffProperties(undefined, undefined)).toBeFalsy();

    expect(!!diffProperties(null, {})).toBeFalsy();
    expect(!!diffProperties({}, null)).toBeFalsy();
    expect(!!diffProperties(undefined, {})).toBeFalsy();
    expect(!!diffProperties({}, undefined)).toBeFalsy();

    expect(!!diffProperties({ k: 'v' }, {})).toBeTruthy();
    expect(!!diffProperties({}, { k: 'v' })).toBeTruthy();
    expect(!!diffProperties({ a: 'v' }, { k: 'v' })).toBeTruthy();
    expect(!!diffProperties({ a: 'v', k: 'v' }, { k: 'v' })).toBeTruthy();
    expect(!!diffProperties({ k: 'v' }, { a: 'v', k: 'v' })).toBeTruthy();

    expect(!!diffProperties({ a: null }, { a: undefined })).toBeFalsy();
    expect(!!diffProperties({ a: undefined }, { a: null })).toBeFalsy();
    expect(!!diffProperties({ a: null }, { a: null })).toBeFalsy();
    expect(!!diffProperties({ a: undefined }, { a: undefined })).toBeFalsy();

    expect(!!diffProperties({ autoFocus: true }, {})).toBeTruthy();
    expect(!!diffProperties({ children: '1' }, {})).toBeTruthy();

    const sameFn = () => void 0;
    expect(!!diffProperties({ a: sameFn }, { a: sameFn })).toBeFalsy();
    expect(
      !!diffProperties({ a: () => void 0 }, { a: () => void 0 })
    ).toBeTruthy();

    expect(
      !!diffProperties({ style: { width: 5 } }, { style: { width: 5 } })
    ).toBeFalsy();
    expect(
      !!diffProperties({ style: null }, { style: { width: 5 } })
    ).toBeTruthy();
    expect(!!diffProperties({}, { style: { width: 5 } })).toBeTruthy();
    expect(!!diffProperties({ style: { width: 5 } }, {})).toBeTruthy();
    expect(
      !!diffProperties({ style: { width: 5 } }, { style: { width: 5 } })
    ).toBeFalsy();
    expect(
      !!diffProperties({ style: { width: 5 } }, { style: { width: 6 } })
    ).toBeTruthy();
    expect(
      !!diffProperties({ style: { width: 5 } }, { style: { height: 6 } })
    ).toBeTruthy();
    expect(
      !!diffProperties(
        { style: { width: 5 }, a: '1', b: null },
        { style: { width: 5 }, a: '1', b: undefined }
      )
    ).toBeFalsy();

    expect(!!diffProperties({ children: '1' }, { children: 1 })).toBeTruthy();
  });
});
