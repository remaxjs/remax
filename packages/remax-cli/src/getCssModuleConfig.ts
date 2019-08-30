function getCssModuleConfig(cssModule: boolean | RegExp) {
  let regStr = cssModule.toString();

  if (typeof cssModule === 'boolean') {
    regStr = cssModule ? '^(?!.*.*)' : '(.*)';
  } else {
    regStr = '^(?!.*' + cssModule.toString().replace(/^\/|\/$/g, '') + ')';
  }

  return {
    globalModulePaths: [new RegExp(regStr)],
    generateScopedName: '[hash:base64:4]',
  };
}

export default getCssModuleConfig;
