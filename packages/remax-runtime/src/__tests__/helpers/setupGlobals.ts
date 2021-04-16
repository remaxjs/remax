/* eslint-disable */
import pages from './pages';
import createAppConfig from './../../createAppConfig';

// @ts-ignore
global['getApp'] = () => createAppConfig(({ children }: any) => children);
// @ts-ignore
global['getCurrentPages'] = () => pages;
