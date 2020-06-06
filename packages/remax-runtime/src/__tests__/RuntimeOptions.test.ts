import * as RuntimeOptions from '../RuntimeOptions';
import PluginDriver from '../PluginDriver';

describe('RuntimeOptions', () => {
  it('works correctly', () => {
    RuntimeOptions.apply({
      pxToRpx: false,
      debug: false,
      hostComponents: {},
      pageEvents: {},
      appEvents: [],
      history: 'history',
      pluginDriver: new PluginDriver([]),
    });

    expect(RuntimeOptions.get('pxToRpx')).toBe(false);
    expect(RuntimeOptions.get('history')).toBe('history');
  });
});
