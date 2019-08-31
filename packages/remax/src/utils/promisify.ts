export interface PromisifyArgs<SuccessArg, FailArg> {
  success?: (args: SuccessArg) => void;
  fail?: (args: FailArg) => void;
}

function promisify<Arg, SuccessArg, FailArg>(
  api: (arg: Arg & PromisifyArgs<SuccessArg, FailArg>) => void
) {
  return (arg: Arg & PromisifyArgs<SuccessArg, FailArg>) =>
    new Promise<SuccessArg>((resolve, reject) => {
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
}

export default promisify;
