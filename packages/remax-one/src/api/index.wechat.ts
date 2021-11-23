import { promisify } from '@remax/framework-shared';

declare const wx: any;

export const navigateTo = promisify(wx.navigateTo);
export const navigateBack = promisify(wx.navigateBack);
export const redirectTo = promisify(wx.redirectTo);
export const reLaunch = promisify(wx.reLaunch);
export const switchTab = promisify(wx.switchTab);
