'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index.js');
require('react-reconciler');
require('scheduler');
var React = require('react');

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && index$1._typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
  }
});

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function createHostComponent(name) {
  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return React.createElement(name, __assign(__assign({}, props), {
      ref: ref
    }), children);
  };

  return React.forwardRef(Component);
}

var View = createHostComponent('view');

var ScrollView = createHostComponent('scroll-view');

createHostComponent('swiper');

createHostComponent('swiper-item');

var MovableView = createHostComponent('movable-view');

var MovableArea = createHostComponent('movable-area');

var CoverView = createHostComponent('cover-view');

var CoverImage = createHostComponent('cover-image');

createHostComponent('icon');

var Text = createHostComponent('text');

createHostComponent('rich-text');

createHostComponent('progress');

var Button = createHostComponent('button');

createHostComponent('checkbox-group');

createHostComponent('checkbox');

var Form = createHostComponent('form');

var Input = createHostComponent('input');

createHostComponent('label');

createHostComponent('picker');

var PickerView = createHostComponent('picker-view');

createHostComponent('picker-view-column');

createHostComponent('radio-group');

createHostComponent('radio');

createHostComponent('slider');

createHostComponent('switch');

var Textarea = createHostComponent('textarea');

createHostComponent('navigator');

var Image = createHostComponent('image');

var Map = createHostComponent('map');

var Canvas = createHostComponent('canvas');

createHostComponent('web-view');

createHostComponent('lifestyle');

createHostComponent('contact-button');

createHostComponent('video');

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign$1(__assign$1({}, promisifyArg), {
        success: function success(res) {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }

          resolve(res);
        },
        fail: function fail(res) {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }

          reject(res);
        }
      }));
    });
  };
}

var getAppStub = getApp;
var addCardAuth = promisify(my.addCardAuth);
var addPhoneContact = promisify(my.addPhoneContact);
var alert = promisify(my.alert);
var canIUse = my.canIUse;
var chooseAlipayContact = promisify(my.chooseAlipayContact);
var chooseCity = promisify(my.chooseCity);
var chooseContact = promisify(my.chooseContact);
var chooseImage = promisify(my.chooseImage);
var chooseLocation = promisify(my.chooseLocation);
var choosePhoneContact = promisify(my.choosePhoneContact);
var clearStorage = my.clearStorage;
var clearStorageSync = my.clearStorageSync;
var closeBluetoothAdapter = promisify(my.closeBluetoothAdapter);
var closeSocket = promisify(my.closeSocket);
var compressImage = promisify(my.compressImage);
var confirm = promisify(my.confirm);
var connectBLEDevice = promisify(my.connectBLEDevice);
var connectSocket = promisify(my.connectSocket);
var createAnimation = my.createAnimation;
var createCanvasContext = my.createCanvasContext;
var createIntersectionObserver = my.createIntersectionObserver;
var createMapContext = my.createMapContext;
var createSelectorQuery = my.createSelectorQuery;
var createWebViewContext = my.createWebViewContext;
var datePicker = promisify(my.datePicker);
var disconnectBLEDevice = promisify(my.disconnectBLEDevice);
var downloadFile = promisify(my.downloadFile);
var getAuthCode = promisify(my.getAuthCode);
var getAuthUserInfo = promisify(my.getAuthUserInfo);
var getBatteryInfo = promisify(my.getBatteryInfo);
var getBatteryInfoSync = my.getBatteryInfoSync;
var getBeacons = promisify(my.getBeacons);
var getBLEDeviceCharacteristics = promisify(my.getBLEDeviceCharacteristics);
var getBLEDeviceServices = promisify(my.getBLEDeviceServices);
var getBluetoothAdapterState = promisify(my.getBluetoothAdapterState);
var getBluetoothDevices = promisify(my.getBluetoothDevices);
var getClipboard = promisify(my.getClipboard);
var getConnectedBluetoothDevices = promisify(my.getConnectedBluetoothDevices);
var getFileInfo = promisify(my.getFileInfo);
var getImageInfo = promisify(my.getImageInfo);
var getLocation = promisify(my.getLocation);
var getNetworkType = promisify(my.getNetworkType);
var getPhoneNumber = promisify(my.getPhoneNumber);
var getRunData = promisify(my.getRunData);
var getRunScene = promisify(my.getRunScene);
var getSavedFileInfo = promisify(my.getSavedFileInfo);
var getSavedFileList = promisify(my.getSavedFileList);
var getScreenBrightness = promisify(my.getScreenBrightness);
var getServerTime = promisify(my.getServerTime);
var getSetting = promisify(my.getSetting);
var getStorage = promisify(my.getStorage);
var getStorageInfo = promisify(my.getStorageInfo);
var getStorageInfoSync = my.getStorageInfoSync;
var getStorageSync = my.getStorageSync;
var getSystemInfo = promisify(my.getSystemInfo);
var getSystemInfoSync = my.getSystemInfoSync;
var getTitleColor = promisify(my.getTitleColor);
var getUpdateManager = my.getUpdateManager;
var hideAddToDesktopMenu = my.hideAddToDesktopMenu;
var hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
var hideAllFavoriteMenu = my.hideAllFavoriteMenu;
var hideBackHome = my.hideBackHome;
var hideFavoriteMenu = my.hideFavoriteMenu;
var hideKeyboard = my.hideKeyboard;
var hideLoading = my.hideLoading;
var hideNavigationBarLoading = my.hideNavigationBarLoading;
var hideShareMenu = my.hideShareMenu;
var hideTabBar = my.hideTabBar;
var hideTabBarRedDot = my.hideTabBarRedDot;
var hideToast = my.hideToast;
var loadFontFace = promisify(my.loadFontFace);
var makePhoneCall = my.makePhoneCall;
var multiLevelSelect = promisify(my.multiLevelSelect);
var navigateBack = promisify(my.navigateBack);
var navigateBackMiniProgram = promisify(my.navigateBackMiniProgram);
var navigateTo = promisify(my.navigateTo);
var navigateToMiniProgram = promisify(my.navigateToMiniProgram);
var notifyBLECharacteristicValueChange = promisify(my.notifyBLECharacteristicValueChange);
var offAccelerometerChange = my.offAccelerometerChange;
var offBLECharacteristicValueChange = my.offBLECharacteristicValueChange;
var offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
var offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
var offBluetoothDeviceFound = my.offBluetoothDeviceFound;
var offCompassChange = my.offCompassChange;
var offGyroscopeChange = my.offGyroscopeChange;
var offMemoryWarning = my.offMemoryWarning;
var offNetworkStatusChange = my.offNetworkStatusChange;
var offSocketClose = my.offSocketClose;
var offSocketError = my.offSocketError;
var offSocketMessage = my.offSocketMessage;
var offSocketOpen = my.offSocketOpen;
var offUserCaptureScreen = my.offUserCaptureScreen;
var onAccelerometerChange = my.onAccelerometerChange;
var onBeaconServiceChange = my.onBeaconServiceChange;
var onBeaconUpdate = my.onBeaconUpdate;
var onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
var onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
var onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
var onBluetoothDeviceFound = my.onBluetoothDeviceFound;
var onCompassChange = my.onCompassChange;
var onGyroscopeChange = my.onGyroscopeChange;
var onMemoryWarning = my.onMemoryWarning;
var onNetworkStatusChange = my.onNetworkStatusChange;
var onSocketClose = my.onSocketClose;
var onSocketError = my.onSocketError;
var onSocketMessage = my.onSocketMessage;
var onSocketOpen = my.onSocketOpen;
var onUserCaptureScreen = my.onUserCaptureScreen;
var openBluetoothAdapter = my.openBluetoothAdapter;
var openCardDetail = my.openCardDetail;
var openCardList = my.openCardList;
var openKBVoucherDetail = my.openKBVoucherDetail;
var openLocation = promisify(my.openLocation);
var openMerchantCardList = my.openMerchantCardList;
var openMerchantTicketList = my.openMerchantTicketList;
var openMerchantVoucherList = my.openMerchantVoucherList;
var openSetting = promisify(my.openSetting);
var openTicketDetail = my.openTicketDetail;
var openTicketList = my.openTicketList;
var openVoucherDetail = my.openVoucherDetail;
var openVoucherList = my.openVoucherList;
var optionsSelect = my.optionsSelect;
var pageScrollTo = promisify(my.pageScrollTo);
var previewImage = promisify(my.previewImage);
var prompt = promisify(my.prompt);
var readBLECharacteristicValue = promisify(my.readBLECharacteristicValue);
var redirectTo = promisify(my.redirectTo);
var reLaunch = promisify(my.reLaunch);
var removeSavedFile = promisify(my.removeSavedFile);
var removeStorage = promisify(my.removeStorage);
var removeStorageSync = my.removeStorageSync;
var removeTabBarBadge = promisify(my.removeTabBarBadge);
var reportAnalytics = my.reportAnalytics;
var request = promisify(my.request);
var rsa = promisify(my.rsa);
var saveFile = promisify(my.saveFile);
var saveImage = promisify(my.saveImage);
var scan = promisify(my.scan);
var SDKVersion = my.SDKVersion;
var sendSocketMessage = promisify(my.sendSocketMessage);
var setBackgroundColor = promisify(my.setBackgroundColor);
var setBackgroundTextStyle = promisify(my.setBackgroundTextStyle);
var setCanPullDown = my.setCanPullDown;
var setClipboard = promisify(my.setClipboard);
var setKeepScreenOn = promisify(my.setKeepScreenOn);
var setNavigationBar = promisify(my.setNavigationBar);
var setOptionMenu = my.setOptionMenu;
var setScreenBrightness = promisify(my.setScreenBrightness);
var setStorage = promisify(my.setStorage);
var setStorageSync = my.setStorageSync;
var setTabBarBadge = promisify(my.setTabBarBadge);
var setTabBarItem = promisify(my.setTabBarItem);
var setTabBarStyle = promisify(my.setTabBarStyle);
var showActionSheet = promisify(my.showActionSheet);
var showAuthGuide = my.showAuthGuide;
var showLoading = promisify(my.showLoading);
var showNavigationBarLoading = promisify(my.showNavigationBarLoading);
var showSharePanel = my.showSharePanel;
var showTabBar = promisify(my.showTabBar);
var showTabBarRedDot = promisify(my.showTabBarRedDot);
var showToast = promisify(my.showToast);
var startBeaconDiscovery = promisify(my.startBeaconDiscovery);
var startBluetoothDevicesDiscovery = promisify(my.startBluetoothDevicesDiscovery);
var startPullDownRefresh = promisify(my.startPullDownRefresh);
var startZMVerify = my.startZMVerify;
var stopBeaconDiscovery = promisify(my.stopBeaconDiscovery);
var stopBluetoothDevicesDiscovery = promisify(my.stopBluetoothDevicesDiscovery);
var stopPullDownRefresh = promisify(my.stopPullDownRefresh);
var switchTab = promisify(my.switchTab);
var textRiskIdentification = promisify(my.textRiskIdentification);
var tradePay = promisify(my.tradePay);
var uploadFile = promisify(my.uploadFile);
var vibrate = promisify(my.vibrate);
var vibrateLong = promisify(my.vibrateLong);
var vibrateShort = promisify(my.vibrateShort);
var watchShake = my.watchShake;
var writeBLECharacteristicValue = promisify(my.writeBLECharacteristicValue);
var createVideoContext = my.createVideoContext;
var getOpenUserInfo = promisify(my.getOpenUserInfo);

var View$1 = function View() {};
var Text$1 = function Text() {};

var View$2 = function View() {};
var Text$2 = function Text() {};

function View$3() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  switch (index$1.Platform.current) {
    case 'alipay':
      return React.createElement(View, props);

    case 'wechat':
      return React.createElement(View$1, props);

    case 'toutiao':
      return React.createElement(View$2, props);
  }
}

function Text$3() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  switch (index$1.Platform.current) {
    case 'alipay':
      return React.createElement(Text, props);

    case 'wechat':
      return React.createElement(Text$1, props);

    case 'toutiao':
      return React.createElement(Text$2, props);
  }
}

var _page = function _page() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(Text$3, null));

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = index$1._asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve(1);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {}

  return React.createElement(View$3, null, React.createElement(View$3, index$1._extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view"
  }, props), "foo"), TextElement);
};

var index = Page(index$1.createPageConfig(_page), true);

exports.default = index;
