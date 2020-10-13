let global: any;

if (typeof my !== 'undefined') {
  // eslint-disable-next-line no-undef
  global = my;
}

if (typeof wx !== 'undefined') {
  // eslint-disable-next-line no-undef
  global = wx;
}

if (typeof tt !== 'undefined') {
  // eslint-disable-next-line no-undef
  global = tt;
}

export default global;
