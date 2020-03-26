function getCssModuleConfig(cssModule: boolean | RegExp) {
  let modules = true;
  let localIdentRegExp = /.module./;

  if (typeof cssModule === 'boolean') {
    modules = cssModule;
  } else {
    localIdentRegExp = cssModule;
  }

  return {
    modules,
    localIdentRegExp,
  };
}

export default getCssModuleConfig;
