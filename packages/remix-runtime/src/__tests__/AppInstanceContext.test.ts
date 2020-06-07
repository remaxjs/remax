import AppInstanceContext from '../AppInstanceContext';
import { AppLifecycle } from '../lifecycle';

describe('App Instance Context', () => {
  it('works', () => {
    const fn = () => void 0;
    const unregister = AppInstanceContext.registerLifecycle(AppLifecycle.show, fn);

    expect(AppInstanceContext.lifecycleCallback[AppLifecycle.show][0]).toBe(fn);

    unregister();

    expect(AppInstanceContext.lifecycleCallback[AppLifecycle.show]).toHaveLength(0);
  });
});
