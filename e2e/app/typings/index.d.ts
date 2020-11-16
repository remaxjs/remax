declare module 'expect-puppeteer/lib';

declare const jestPuppeteer: any;
declare const page: import('puppeteer').Page;

declare namespace jest {
  interface Matchers<R, T> {
    toHasAspm: (metjod: string, aspm: string) => R;
  }
}
