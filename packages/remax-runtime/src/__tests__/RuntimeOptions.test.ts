import * as RuntimeOptions from '../RuntimeOptions';
import PluginDriver from '../PluginDriver';

describe('RuntimeOptions', () => {
  it('works correctly', () => {
    RuntimeOptions.apply({
      pxToRpx: false,
      debug: false,
      hostComponents: {
        button: {
          alias: {
            onClick: 'onTap',
          },
          props: ['onTap'],
        },
      },
      pageEvents: {},
      appEvents: ['onShow'],
      history: 'history',
      pluginDriver: new PluginDriver([]),
    });

    RuntimeOptions.apply({
      pxToRpx: false,
      debug: false,
      hostComponents: {
        button: {
          alias: {
            className: 'class',
          },
          props: ['class'],
        },
      },
      pageEvents: {},
      appEvents: ['onShow', 'onHide'],
      history: 'history',
      pluginDriver: new PluginDriver([]),
    });

    expect(RuntimeOptions.get('pxToRpx')).toBe(false);
    expect(RuntimeOptions.get('history')).toBe('history');
    expect(RuntimeOptions.get('hostComponents').button.alias?.onClick).toBe('onTap');
    expect(RuntimeOptions.get('hostComponents').button.alias?.className).toBe('class');
    expect(RuntimeOptions.get('appEvents')).toEqual(['onShow', 'onHide']);
  });
});
