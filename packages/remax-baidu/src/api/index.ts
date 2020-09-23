import { promisify } from '@remax/shared';
export const getAppStub = getApp;

export const canIUse = swan.canIUse;
export const getSystemInfoSync = swan.getSystemInfoSync;
export const pageScrollTo = promisify(swan.pageScrollTo);
