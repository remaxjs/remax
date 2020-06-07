import { slash } from '../path';

describe(`slash path`, () => {
  it(`can correctly slash path`, () => {
    [
      [`foo\\bar`, `foo/bar`],
      [`foo/bar`, `foo/bar`],
      [`foo\\中文`, `foo/中文`],
      [`foo/中文`, `foo/中文`],
      [`foo/жä`, `foo/жä`],
      [`foo\\жä`, `foo/жä`],
    ].forEach(([path, expectRes]) => {
      expect(slash(path)).toBe(expectRes);
    });
  });

  it(`does not modify extended length paths`, () => {
    const extended = `\\\\?\\some\\path`;
    expect(slash(extended)).toBe(extended);
  });
});
