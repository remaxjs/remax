/* eslint-disable */
import pages from './pages';

// @ts-ignore
global['getApp'] = () => {};
// @ts-ignore
global['getCurrentPages'] = () => pages;
// @ts-ignore
global['tt'] = {};

process.env.REMAX_PLATFORM = 'toutiao';
