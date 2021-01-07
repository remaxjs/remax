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

    const lastProps = { style: { width: 1 } };
    const nextProps = { style: { width: 2, height: 1 } };
    diffProperties(lastProps, nextProps);
    diffProperties(nextProps, { style: { width: 3, height: 1 } });
    expect(nextProps).toMatchObject({ style: { width: 2, height: 1 } });
    expect(lastProps).toMatchObject({ style: { width: 1 } });
    const update = () => {
      nextProps.style = { width: 3, height: 1 };
    };
    expect(update()).toBeUndefined();
    expect(nextProps).toMatchObject({ style: { width: 3, height: 1 } });

    const sameFn = () => void 0;
    expect(!!diffProperties({ a: sameFn }, { a: sameFn })).toBeFalsy();
    expect(!!diffProperties({ a: () => void 0 }, { a: () => void 0 })).toBeTruthy();

    expect(!!diffProperties({ style: null }, { style: { width: 5 } })).toBeTruthy();
    expect(!!diffProperties({}, { style: { width: 5 } })).toBeTruthy();
    expect(!!diffProperties({ style: { width: 5 } }, {})).toBeTruthy();
    expect(!!diffProperties({ style: { width: 5 } }, { style: { width: 5 } })).toBeFalsy();
    expect(!!diffProperties({ style: { width: 5 } }, { style: { width: 6 } })).toBeTruthy();
    expect(!!diffProperties({ style: { width: 5 } }, { style: { height: 6 } })).toBeTruthy();

    expect(!!diffProperties({ placeholderStyle: null }, { placeholderStyle: { width: 5 } })).toBeTruthy();
    expect(!!diffProperties({}, { placeholderStyle: { width: 5 } })).toBeTruthy();
    expect(!!diffProperties({ placeholderStyle: { width: 5 } }, {})).toBeTruthy();
    expect(!!diffProperties({ placeholderStyle: { width: 5 } }, { placeholderStyle: { width: 5 } })).toBeFalsy();
    expect(!!diffProperties({ placeholderStyle: { width: 5 } }, { placeholderStyle: { width: 6 } })).toBeTruthy();
    expect(!!diffProperties({ placeholderStyle: { width: 5 } }, { placeholderStyle: { height: 6 } })).toBeTruthy();

    expect(
      !!diffProperties({ style: { width: 5 }, a: '1', b: null }, { style: { width: 5 }, a: '1', b: undefined })
    ).toBeFalsy();

    expect(
      !!diffProperties(
        { placeholderStyle: { width: 5 }, a: '1', b: null },
        { placeholderStyle: { width: 5 }, a: '1', b: undefined }
      )
    ).toBeFalsy();

    expect(!!diffProperties({ children: '1' }, { children: 1 })).toBeTruthy();

    expect(diffProperties({ className: 'foo' }, { style: { width: 5 } })).toEqual([
      'className',
      '',
      'style',
      null,
      'style',
      { width: 5 },
    ]);

    expect(diffProperties({ className: 'foo' }, { placeholderStyle: { width: 5 } })).toEqual([
      'className',
      '',
      'placeholderStyle',
      null,
      'placeholderStyle',
      { width: 5 },
    ]);
    expect(diffProperties({ style: { width: 5 } }, {})).toEqual(['style', { width: '' }]);
    expect(diffProperties({ style: { width: 5 } }, { className: 'foo' })).toEqual([
      'className',
      'foo',
      'style',
      { width: '' },
    ]);
    expect(diffProperties({ style: { width: 5 } }, { placeholderStyle: { width: 5 } })).toEqual([
      'placeholderStyle',
      null,
      'style',
      { width: '' },
      'placeholderStyle',
      { width: 5 },
    ]);
    expect(diffProperties({ placeholderStyle: { width: 5 } }, { style: { width: 5 } })).toEqual([
      'style',
      null,
      'placeholderStyle',
      { width: '' },
      'style',
      { width: 5 },
    ]);
  });
});
