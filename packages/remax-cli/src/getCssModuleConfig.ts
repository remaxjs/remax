function getCssModuleConfig(cssModule: boolean | RegExp) {
  if (typeof cssModule === 'boolean') {
    return cssModule;
  }

  const regStr = new RegExp(cssModule).toString().replace(/^\/|\/$/g, '');

  return {
    globalModulePaths: [new RegExp('^(?!.*' + regStr + ')')],
  };
}

export default getCssModuleConfig;
