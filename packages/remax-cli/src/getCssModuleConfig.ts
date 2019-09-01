export default function getCssModuleConfig(cssModule: boolean) {
  return {
    cssModule,
    globalModulePaths: [cssModule ? /^(?!.*.*)/ : /.*/],
    generateScopedName: '[name]_[local]__[hash:base64:5]',
  };
}
