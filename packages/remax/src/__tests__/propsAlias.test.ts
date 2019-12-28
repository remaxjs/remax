import { hostComponents } from 'remax.macro';
import propsAlias, { getAlias } from '../propsAlias';

describe('props alias', () => {
  it('transform className prop correctly', () => {
    expect(getAlias('className', 'any')).toBe('class');

    expect(
      propsAlias(
        {
          className: 'class-name',
        },
        'any'
      )
    ).toEqual({
      class: 'class-name',
    });
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
  });

  it('transform props by component type correctly', () => {
    expect(getAlias('prop', 'any')).toBe('prop');

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
        'foo'
      )
    ).toEqual({
      bar: 'bar',
      'kebab-case': 'value',
    });
  });
});
