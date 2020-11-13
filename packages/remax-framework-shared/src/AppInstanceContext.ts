import { AppLifecycle } from './lifecycle';

const AppInstanceContext = {
  lifecycleCallback: {} as any,
  registerLifecycle(lifecycle: AppLifecycle, callback: () => any) {
    this.lifecycleCallback[lifecycle] = this.lifecycleCallback[lifecycle] || [];

    this.lifecycleCallback[lifecycle].push(callback);

    return () => {
      this.lifecycleCallback[lifecycle].splice(this.lifecycleCallback[lifecycle].indexOf(callback), 1);
    };
  },
};

export default AppInstanceContext;
