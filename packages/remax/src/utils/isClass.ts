function fnBody(fn: any) {
  return fn
    .toString()
    .replace(/^[^{]*{\s*/, '')
    .replace(/\s*}[^}]*$/, '');
}

export default function isClass(fn: any) {
  if (typeof fn !== 'function') {
    return false;
  }

  if (/^class[\s{]/.test(toString.call(fn))) {
    return true;
  }

  // babel.js classCallCheck() & inlined
  const body = fnBody(fn);
  return /classCallCheck/.test(body) || /TypeError\("Cannot call a class as a function"\)/.test(body);
}
