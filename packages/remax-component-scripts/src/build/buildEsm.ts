import babel from '@remax/father-build/lib/babel';

export function buildEsm({ cwd, rootPath, output, watch, babelrc, onTargetDir, esmOptions }: any) {
  const { plugins, presets } = babelrc || {};
  const bundleOpts = {
    extraBabelPlugins: plugins,
    extraBabelPresets: presets,
    onTargetDir,
    disableTypeCheck: esmOptions?.disableTypeCheck,
  };
  return babel({
    type: 'esm',
    cwd,
    rootPath,
    output,
    watch,
    log: console.log,
    bundleOpts,
  });
}
