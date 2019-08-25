import { IApi } from 'umi-types';
import { run } from 'remax-cli';

export default (api: IApi, opts: any = {}) => {
  api.registerCommand(
    'remax',
    {
      hide: true,
    },
    () => {
      run(process.argv.slice(3), {
        config: opts,
        app: opts.app,
        pages: api.config.routes,
      });
    },
  );
};
