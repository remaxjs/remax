/* eslint-disable */
import pages from './pages';
import createAppConfig from './../../createAppConfig';

const app = createAppConfig(({ children }: any) => children);
// @ts-ignore
global['getApp'] = () => app;
// @ts-ignore
global['getCurrentPages'] = () => pages;
