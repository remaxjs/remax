import { promisify } from '@alipay/remix-shared';

declare const my: any;

export const navigateTo = promisify(my.navigateTo);
export const navigateBack = promisify(my.navigateBack);
export const redirectTo = promisify(my.redirectTo);
export const reLaunch = my.reLaunch;
export const switchTab = my.switchTab;
