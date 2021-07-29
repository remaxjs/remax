import { getConfig, IOptions } from './getConfig';
import { IArgv } from './types';
import { buildEsm } from './buildEsm';
import { buildDsl } from './buildDsl';

export default function build(cwd: string = process.cwd(), argv: IArgv) {
  const options = getConfig(argv, { cwd });
  buildComponent(cwd, options);
}

// 组件构建
export function buildComponent(cwd: string, options: IOptions) {
  const { type, sourceDir, output, onTargetDir, watch, babelrc, mini = {}, esm = {} } = options;

  if (type === 'esm') {
    return buildEsm({
      cwd,
      rootPath: sourceDir,
      output,
      watch,
      babelrc,
      onTargetDir,
      esmOptions: esm,
    });
  } else if (type === 'ali' || type === 'wechat') {
    return buildDsl({
      cwd,
      sourceDir,
      output,
      watch,
      onTargetDir,
      babelrc,
      type,
      miniOptions: mini,
    });
  } else {
    throw Error('未知构建类型');
  }
}
