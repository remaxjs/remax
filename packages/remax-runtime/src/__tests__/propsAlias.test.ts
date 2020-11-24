import { Platform } from '@remax/types';
import propsAlias, { getAlias } from '../propsAlias';
import { RuntimeOptions } from '@remax/framework-shared';

describe('props alias', () => {
  beforeAll(() => {
    RuntimeOptions.apply({
      platform: Platform.ali,
      hostComponents: {
        foo: {
          alias: {
            camelCase: 'kebab-case',
          },
          props: ['kebab-case'],
        },
      },
    });
  });

  afterAll(() => {
    RuntimeOptions.reset();
  });

  it('transform style prop correctly', () => {
    expect(
      propsAlias(
        {
          style: {
            color: '#ffffff',
            height: '2px',
            WebkitFlex: 1,
            '--color': 'red',
            '--textColor': 'blue',
            backgroundColor: 'var(--textColor)',
          },
        },
        'any'
      )
    ).toMatchSnapshot();

    expect(
      propsAlias(
        {
          style: null,
        },
        'any'
      )
    ).toMatchSnapshot();
  });

  it('transform props by component type correctly', () => {
    expect(getAlias('prop', 'any')).toBe('prop');

    expect(
      propsAlias(
        {
          bar: 'bar',
          camelCase: 'value',
        },
        'foo'
      )
    ).toEqual({
      bar: 'bar',
      'kebab-case': 'value',
    });
  });

  it('transform platform props', () => {
    expect(getAlias('ali-prop', 'any')).toBe('prop');
  });
});
