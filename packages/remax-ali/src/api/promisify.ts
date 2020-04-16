export interface PromisifyArgs<SuccessArg, FailArg> {
  success?: (args: SuccessArg) => void;
  fail?: (args: FailArg) => void;
}

function promisify<Arg = any, SuccessArg = any, FailArg = any>(
  api: (arg: Arg & PromisifyArgs<SuccessArg, FailArg>) => void
) {
  return (arg: Arg & PromisifyArgs<SuccessArg, FailArg> = {} as Arg) => {
    return new Promise<SuccessArg>((resolve, reject) => {
      const promisifyArg: any = arg;

      api({
        ...promisifyArg,
        success: (res: SuccessArg) => {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }
          resolve(res);
        },
        fail: (res: FailArg) => {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }
          reject(res);
        },
      });
    });
  };
}

export default promisify;
