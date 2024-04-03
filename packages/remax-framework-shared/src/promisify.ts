export interface PromisifyArgs<SuccessArg, FailArg, CompleteArg> {
  success?: (args: SuccessArg) => void;
  fail?: (args: FailArg) => void;
  complete?: (args: CompleteArg) => void;
}

export function promisify<Arg = any, SuccessArg = any, FailArg = any, CompleteArg = any>(
  api: (arg: Arg & PromisifyArgs<SuccessArg, FailArg, CompleteArg>) => any
) {
  return (arg: Arg & PromisifyArgs<SuccessArg, FailArg, CompleteArg> = {} as Arg) => {
    let task: any = null;
    const p = new Promise<{ [key: string]: any }>((resolve, reject) => {
      const promisifyArg: any = arg;
      task = api({
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
        complete: (res: CompleteArg) => {
          if (promisifyArg && typeof promisifyArg.complete === 'function') {
            promisifyArg.complete(res);
          }
          resolve(res);
        },
      });
    });

    const taskMethods = [
      'abort',
      'onHeadersReceived',
      'offHeadersReceived',
      'onProgressUpdate',
      'offProgressUpdate',
      'onChunkReceived',
      'offChunkReceived',
    ];
    task &&
      taskMethods.forEach(method => {
        if (method in task) {
          // @ts-ignore
          p[method] = task[method].bind(task);
        }
      });

    return p;
  };
}
