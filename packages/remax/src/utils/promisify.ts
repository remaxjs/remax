export interface PromisifyArgs<SuccessArg, FailArg> {
  success?: (args: SuccessArg) => void;
  fail?: (args: FailArg) => void;
}

function promisify<Arg, SuccessArg, FailArg>(
  api: (arg: Arg & PromisifyArgs<SuccessArg, FailArg>) => void
) {
  return (arg: Arg & PromisifyArgs<SuccessArg, FailArg>) => {
    return new Promise<SuccessArg>((resolve, reject) => {
      api({
        ...arg,
        success: (res: SuccessArg) => {
          if (arg && typeof arg.success === 'function') {
            arg.success(res);
          }
          resolve(res);
        },
        fail: (res: FailArg) => {
          if (arg && typeof arg.fail === 'function') {
            arg.fail(res);
          }
          reject(res);
        },
      });
    });
  };
}

export function optionalPromisify<Arg, SuccessArg, FailArg>(
  api: (arg?: Arg & PromisifyArgs<SuccessArg, FailArg>) => void
) {
  return (arg?: Arg & PromisifyArgs<SuccessArg, FailArg>) => {
    return new Promise<SuccessArg>((resolve, reject) => {
      const promisifyArg: any = arg || {
        success: (res: SuccessArg) => {
          resolve(res);
        },
        fail: (res: FailArg) => {
          reject(res);
        },
      };

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
