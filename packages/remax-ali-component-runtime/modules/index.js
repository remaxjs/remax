import './createHostComponent-0cac2bb7.js';
import {
  c as createCommonjsModule,
  r as react,
  o as objectAssign,
  a as checkPropTypes_1,
  b as commonjsGlobal,
} from './index-c3dc9930.js';

var scheduler_production_min = createCommonjsModule(function (module, exports) {
  var f, g, h, k, l;
  if ('undefined' === typeof window || 'function' !== typeof MessageChannel) {
    var p = null,
      q = null,
      t = function () {
        if (null !== p)
          try {
            var a = exports.unstable_now();
            p(!0, a);
            p = null;
          } catch (b) {
            throw (setTimeout(t, 0), b);
          }
      },
      u = Date.now();
    exports.unstable_now = function () {
      return Date.now() - u;
    };
    f = function (a) {
      null !== p ? setTimeout(f, 0, a) : ((p = a), setTimeout(t, 0));
    };
    g = function (a, b) {
      q = setTimeout(a, b);
    };
    h = function () {
      clearTimeout(q);
    };
    k = function () {
      return !1;
    };
    l = exports.unstable_forceFrameRate = function () {};
  } else {
    var w = window.performance,
      x = window.Date,
      y = window.setTimeout,
      z = window.clearTimeout;
    if ('undefined' !== typeof console) {
      var A = window.cancelAnimationFrame;
      'function' !== typeof window.requestAnimationFrame &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
        );
      'function' !== typeof A &&
        console.error(
          "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
        );
    }
    if ('object' === typeof w && 'function' === typeof w.now)
      exports.unstable_now = function () {
        return w.now();
      };
    else {
      var B = x.now();
      exports.unstable_now = function () {
        return x.now() - B;
      };
    }
    var C = !1,
      D = null,
      E = -1,
      F = 5,
      G = 0;
    k = function () {
      return exports.unstable_now() >= G;
    };
    l = function () {};
    exports.unstable_forceFrameRate = function (a) {
      0 > a || 125 < a
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported'
          )
        : (F = 0 < a ? Math.floor(1e3 / a) : 5);
    };
    var H = new MessageChannel(),
      I = H.port2;
    H.port1.onmessage = function () {
      if (null !== D) {
        var a = exports.unstable_now();
        G = a + F;
        try {
          D(!0, a) ? I.postMessage(null) : ((C = !1), (D = null));
        } catch (b) {
          throw (I.postMessage(null), b);
        }
      } else C = !1;
    };
    f = function (a) {
      D = a;
      C || ((C = !0), I.postMessage(null));
    };
    g = function (a, b) {
      E = y(function () {
        a(exports.unstable_now());
      }, b);
    };
    h = function () {
      z(E);
      E = -1;
    };
  }
  function J(a, b) {
    var c = a.length;
    a.push(b);
    a: for (;;) {
      var d = (c - 1) >>> 1,
        e = a[d];
      if (void 0 !== e && 0 < K(e, b)) (a[d] = b), (a[c] = e), (c = d);
      else break a;
    }
  }
  function L(a) {
    a = a[0];
    return void 0 === a ? null : a;
  }
  function M(a) {
    var b = a[0];
    if (void 0 !== b) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length; d < e; ) {
          var m = 2 * (d + 1) - 1,
            n = a[m],
            v = m + 1,
            r = a[v];
          if (void 0 !== n && 0 > K(n, c))
            void 0 !== r && 0 > K(r, n) ? ((a[d] = r), (a[v] = c), (d = v)) : ((a[d] = n), (a[m] = c), (d = m));
          else if (void 0 !== r && 0 > K(r, c)) (a[d] = r), (a[v] = c), (d = v);
          else break a;
        }
      }
      return b;
    }
    return null;
  }
  function K(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  var N = [],
    O = [],
    P = 1,
    Q = null,
    R = 3,
    S = !1,
    T = !1,
    U = !1;
  function V(a) {
    for (var b = L(O); null !== b; ) {
      if (null === b.callback) M(O);
      else if (b.startTime <= a) M(O), (b.sortIndex = b.expirationTime), J(N, b);
      else break;
      b = L(O);
    }
  }
  function W(a) {
    U = !1;
    V(a);
    if (!T)
      if (null !== L(N)) (T = !0), f(X);
      else {
        var b = L(O);
        null !== b && g(W, b.startTime - a);
      }
  }
  function X(a, b) {
    T = !1;
    U && ((U = !1), h());
    S = !0;
    var c = R;
    try {
      V(b);
      for (Q = L(N); null !== Q && (!(Q.expirationTime > b) || (a && !k())); ) {
        var d = Q.callback;
        if (null !== d) {
          Q.callback = null;
          R = Q.priorityLevel;
          var e = d(Q.expirationTime <= b);
          b = exports.unstable_now();
          'function' === typeof e ? (Q.callback = e) : Q === L(N) && M(N);
          V(b);
        } else M(N);
        Q = L(N);
      }
      if (null !== Q) var m = !0;
      else {
        var n = L(O);
        null !== n && g(W, n.startTime - b);
        m = !1;
      }
      return m;
    } finally {
      (Q = null), (R = c), (S = !1);
    }
  }
  function Y(a) {
    switch (a) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1e4;
      default:
        return 5e3;
    }
  }
  var Z = l;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function (a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function () {
    T || S || ((T = !0), f(X));
  };
  exports.unstable_getCurrentPriorityLevel = function () {
    return R;
  };
  exports.unstable_getFirstCallbackNode = function () {
    return L(N);
  };
  exports.unstable_next = function (a) {
    switch (R) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = R;
    }
    var c = R;
    R = b;
    try {
      return a();
    } finally {
      R = c;
    }
  };
  exports.unstable_pauseExecution = function () {};
  exports.unstable_requestPaint = Z;
  exports.unstable_runWithPriority = function (a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = R;
    R = a;
    try {
      return b();
    } finally {
      R = c;
    }
  };
  exports.unstable_scheduleCallback = function (a, b, c) {
    var d = exports.unstable_now();
    if ('object' === typeof c && null !== c) {
      var e = c.delay;
      e = 'number' === typeof e && 0 < e ? d + e : d;
      c = 'number' === typeof c.timeout ? c.timeout : Y(a);
    } else (c = Y(a)), (e = d);
    c = e + c;
    a = { id: P++, callback: b, priorityLevel: a, startTime: e, expirationTime: c, sortIndex: -1 };
    e > d
      ? ((a.sortIndex = e), J(O, a), null === L(N) && a === L(O) && (U ? h() : (U = !0), g(W, e - d)))
      : ((a.sortIndex = c), J(N, a), T || S || ((T = !0), f(X)));
    return a;
  };
  exports.unstable_shouldYield = function () {
    var a = exports.unstable_now();
    V(a);
    var b = L(N);
    return (
      (b !== Q &&
        null !== Q &&
        null !== b &&
        null !== b.callback &&
        b.startTime <= a &&
        b.expirationTime < Q.expirationTime) ||
      k()
    );
  };
  exports.unstable_wrapCallback = function (a) {
    var b = R;
    return function () {
      var c = R;
      R = b;
      try {
        return a.apply(this, arguments);
      } finally {
        R = c;
      }
    };
  };
});

var scheduler_development = createCommonjsModule(function (module, exports) {
  {
    (function () {
      var enableSchedulerDebugging = false;
      var enableProfiling = true;

      var requestHostCallback;
      var requestHostTimeout;
      var cancelHostTimeout;
      var shouldYieldToHost;
      var requestPaint;

      if (
        // If Scheduler runs in a non-DOM environment, it falls back to a naive
        // implementation using setTimeout.
        typeof window === 'undefined' || // Check if MessageChannel is supported, too.
        typeof MessageChannel !== 'function'
      ) {
        // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
        // fallback to a naive implementation.
        var _callback = null;
        var _timeoutID = null;

        var _flushCallback = function () {
          if (_callback !== null) {
            try {
              var currentTime = exports.unstable_now();
              var hasRemainingTime = true;

              _callback(hasRemainingTime, currentTime);

              _callback = null;
            } catch (e) {
              setTimeout(_flushCallback, 0);
              throw e;
            }
          }
        };

        var initialTime = Date.now();

        exports.unstable_now = function () {
          return Date.now() - initialTime;
        };

        requestHostCallback = function (cb) {
          if (_callback !== null) {
            // Protect against re-entrancy.
            setTimeout(requestHostCallback, 0, cb);
          } else {
            _callback = cb;
            setTimeout(_flushCallback, 0);
          }
        };

        requestHostTimeout = function (cb, ms) {
          _timeoutID = setTimeout(cb, ms);
        };

        cancelHostTimeout = function () {
          clearTimeout(_timeoutID);
        };

        shouldYieldToHost = function () {
          return false;
        };

        requestPaint = exports.unstable_forceFrameRate = function () {};
      } else {
        // Capture local references to native APIs, in case a polyfill overrides them.
        var performance = window.performance;
        var _Date = window.Date;
        var _setTimeout = window.setTimeout;
        var _clearTimeout = window.clearTimeout;

        if (typeof console !== 'undefined') {
          // TODO: Scheduler no longer requires these methods to be polyfilled. But
          // maybe we want to continue warning if they don't exist, to preserve the
          // option to rely on it in the future?
          var requestAnimationFrame = window.requestAnimationFrame;
          var cancelAnimationFrame = window.cancelAnimationFrame; // TODO: Remove fb.me link

          if (typeof requestAnimationFrame !== 'function') {
            // Using console['error'] to evade Babel and ESLint
            console['error'](
              "This browser doesn't support requestAnimationFrame. " +
                'Make sure that you load a ' +
                'polyfill in older browsers. https://fb.me/react-polyfills'
            );
          }

          if (typeof cancelAnimationFrame !== 'function') {
            // Using console['error'] to evade Babel and ESLint
            console['error'](
              "This browser doesn't support cancelAnimationFrame. " +
                'Make sure that you load a ' +
                'polyfill in older browsers. https://fb.me/react-polyfills'
            );
          }
        }

        if (typeof performance === 'object' && typeof performance.now === 'function') {
          exports.unstable_now = function () {
            return performance.now();
          };
        } else {
          var _initialTime = _Date.now();

          exports.unstable_now = function () {
            return _Date.now() - _initialTime;
          };
        }

        var isMessageLoopRunning = false;
        var scheduledHostCallback = null;
        var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
        // thread, like user events. By default, it yields multiple times per frame.
        // It does not attempt to align with frame boundaries, since most tasks don't
        // need to be frame aligned; for those that do, use requestAnimationFrame.

        var yieldInterval = 5;
        var deadline = 0; // TODO: Make this configurable

        {
          // `isInputPending` is not available. Since we have no way of knowing if
          // there's pending input, always yield at the end of the frame.
          shouldYieldToHost = function () {
            return exports.unstable_now() >= deadline;
          }; // Since we yield every frame regardless, `requestPaint` has no effect.

          requestPaint = function () {};
        }

        exports.unstable_forceFrameRate = function (fps) {
          if (fps < 0 || fps > 125) {
            // Using console['error'] to evade Babel and ESLint
            console['error'](
              'forceFrameRate takes a positive int between 0 and 125, ' +
                'forcing framerates higher than 125 fps is not unsupported'
            );
            return;
          }

          if (fps > 0) {
            yieldInterval = Math.floor(1000 / fps);
          } else {
            // reset the framerate
            yieldInterval = 5;
          }
        };

        var performWorkUntilDeadline = function () {
          if (scheduledHostCallback !== null) {
            var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
            // cycle. This means there's always time remaining at the beginning of
            // the message event.

            deadline = currentTime + yieldInterval;
            var hasTimeRemaining = true;

            try {
              var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

              if (!hasMoreWork) {
                isMessageLoopRunning = false;
                scheduledHostCallback = null;
              } else {
                // If there's more work, schedule the next message event at the end
                // of the preceding one.
                port.postMessage(null);
              }
            } catch (error) {
              // If a scheduler task throws, exit the current browser task so the
              // error can be observed.
              port.postMessage(null);
              throw error;
            }
          } else {
            isMessageLoopRunning = false;
          } // Yielding to the browser will give it a chance to paint, so we can
        };

        var channel = new MessageChannel();
        var port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;

        requestHostCallback = function (callback) {
          scheduledHostCallback = callback;

          if (!isMessageLoopRunning) {
            isMessageLoopRunning = true;
            port.postMessage(null);
          }
        };

        requestHostTimeout = function (callback, ms) {
          taskTimeoutID = _setTimeout(function () {
            callback(exports.unstable_now());
          }, ms);
        };

        cancelHostTimeout = function () {
          _clearTimeout(taskTimeoutID);

          taskTimeoutID = -1;
        };
      }

      function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        siftUp(heap, node, index);
      }
      function peek(heap) {
        var first = heap[0];
        return first === undefined ? null : first;
      }
      function pop(heap) {
        var first = heap[0];

        if (first !== undefined) {
          var last = heap.pop();

          if (last !== first) {
            heap[0] = last;
            siftDown(heap, last, 0);
          }

          return first;
        } else {
          return null;
        }
      }

      function siftUp(heap, node, i) {
        var index = i;

        while (true) {
          var parentIndex = (index - 1) >>> 1;
          var parent = heap[parentIndex];

          if (parent !== undefined && compare(parent, node) > 0) {
            // The parent is larger. Swap positions.
            heap[parentIndex] = node;
            heap[index] = parent;
            index = parentIndex;
          } else {
            // The parent is smaller. Exit.
            return;
          }
        }
      }

      function siftDown(heap, node, i) {
        var index = i;
        var length = heap.length;

        while (index < length) {
          var leftIndex = (index + 1) * 2 - 1;
          var left = heap[leftIndex];
          var rightIndex = leftIndex + 1;
          var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

          if (left !== undefined && compare(left, node) < 0) {
            if (right !== undefined && compare(right, left) < 0) {
              heap[index] = right;
              heap[rightIndex] = node;
              index = rightIndex;
            } else {
              heap[index] = left;
              heap[leftIndex] = node;
              index = leftIndex;
            }
          } else if (right !== undefined && compare(right, node) < 0) {
            heap[index] = right;
            heap[rightIndex] = node;
            index = rightIndex;
          } else {
            // Neither child is smaller. Exit.
            return;
          }
        }
      }

      function compare(a, b) {
        // Compare sort index first, then task id.
        var diff = a.sortIndex - b.sortIndex;
        return diff !== 0 ? diff : a.id - b.id;
      }

      // TODO: Use symbols?
      var NoPriority = 0;
      var ImmediatePriority = 1;
      var UserBlockingPriority = 2;
      var NormalPriority = 3;
      var LowPriority = 4;
      var IdlePriority = 5;

      var runIdCounter = 0;
      var mainThreadIdCounter = 0;
      var profilingStateSize = 4;
      var sharedProfilingBuffer = // $FlowFixMe Flow doesn't know about SharedArrayBuffer
        typeof SharedArrayBuffer === 'function'
          ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) // $FlowFixMe Flow doesn't know about ArrayBuffer
          : typeof ArrayBuffer === 'function'
          ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT)
          : null; // Don't crash the init path on IE9
      var profilingState = sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : []; // We can't read this but it helps save bytes for null checks

      var PRIORITY = 0;
      var CURRENT_TASK_ID = 1;
      var CURRENT_RUN_ID = 2;
      var QUEUE_SIZE = 3;

      {
        profilingState[PRIORITY] = NoPriority; // This is maintained with a counter, because the size of the priority queue
        // array might include canceled tasks.

        profilingState[QUEUE_SIZE] = 0;
        profilingState[CURRENT_TASK_ID] = 0;
      } // Bytes per element is 4

      var INITIAL_EVENT_LOG_SIZE = 131072;
      var MAX_EVENT_LOG_SIZE = 524288; // Equivalent to 2 megabytes

      var eventLogSize = 0;
      var eventLogBuffer = null;
      var eventLog = null;
      var eventLogIndex = 0;
      var TaskStartEvent = 1;
      var TaskCompleteEvent = 2;
      var TaskErrorEvent = 3;
      var TaskCancelEvent = 4;
      var TaskRunEvent = 5;
      var TaskYieldEvent = 6;
      var SchedulerSuspendEvent = 7;
      var SchedulerResumeEvent = 8;

      function logEvent(entries) {
        if (eventLog !== null) {
          var offset = eventLogIndex;
          eventLogIndex += entries.length;

          if (eventLogIndex + 1 > eventLogSize) {
            eventLogSize *= 2;

            if (eventLogSize > MAX_EVENT_LOG_SIZE) {
              // Using console['error'] to evade Babel and ESLint
              console['error'](
                "Scheduler Profiling: Event log exceeded maximum size. Don't " +
                  'forget to call `stopLoggingProfilingEvents()`.'
              );
              stopLoggingProfilingEvents();
              return;
            }

            var newEventLog = new Int32Array(eventLogSize * 4);
            newEventLog.set(eventLog);
            eventLogBuffer = newEventLog.buffer;
            eventLog = newEventLog;
          }

          eventLog.set(entries, offset);
        }
      }

      function startLoggingProfilingEvents() {
        eventLogSize = INITIAL_EVENT_LOG_SIZE;
        eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
        eventLog = new Int32Array(eventLogBuffer);
        eventLogIndex = 0;
      }
      function stopLoggingProfilingEvents() {
        var buffer = eventLogBuffer;
        eventLogSize = 0;
        eventLogBuffer = null;
        eventLog = null;
        eventLogIndex = 0;
        return buffer;
      }
      function markTaskStart(task, ms) {
        {
          profilingState[QUEUE_SIZE]++;

          if (eventLog !== null) {
            // performance.now returns a float, representing milliseconds. When the
            // event is logged, it's coerced to an int. Convert to microseconds to
            // maintain extra degrees of precision.
            logEvent([TaskStartEvent, ms * 1000, task.id, task.priorityLevel]);
          }
        }
      }
      function markTaskCompleted(task, ms) {
        {
          profilingState[PRIORITY] = NoPriority;
          profilingState[CURRENT_TASK_ID] = 0;
          profilingState[QUEUE_SIZE]--;

          if (eventLog !== null) {
            logEvent([TaskCompleteEvent, ms * 1000, task.id]);
          }
        }
      }
      function markTaskCanceled(task, ms) {
        {
          profilingState[QUEUE_SIZE]--;

          if (eventLog !== null) {
            logEvent([TaskCancelEvent, ms * 1000, task.id]);
          }
        }
      }
      function markTaskErrored(task, ms) {
        {
          profilingState[PRIORITY] = NoPriority;
          profilingState[CURRENT_TASK_ID] = 0;
          profilingState[QUEUE_SIZE]--;

          if (eventLog !== null) {
            logEvent([TaskErrorEvent, ms * 1000, task.id]);
          }
        }
      }
      function markTaskRun(task, ms) {
        {
          runIdCounter++;
          profilingState[PRIORITY] = task.priorityLevel;
          profilingState[CURRENT_TASK_ID] = task.id;
          profilingState[CURRENT_RUN_ID] = runIdCounter;

          if (eventLog !== null) {
            logEvent([TaskRunEvent, ms * 1000, task.id, runIdCounter]);
          }
        }
      }
      function markTaskYield(task, ms) {
        {
          profilingState[PRIORITY] = NoPriority;
          profilingState[CURRENT_TASK_ID] = 0;
          profilingState[CURRENT_RUN_ID] = 0;

          if (eventLog !== null) {
            logEvent([TaskYieldEvent, ms * 1000, task.id, runIdCounter]);
          }
        }
      }
      function markSchedulerSuspended(ms) {
        {
          mainThreadIdCounter++;

          if (eventLog !== null) {
            logEvent([SchedulerSuspendEvent, ms * 1000, mainThreadIdCounter]);
          }
        }
      }
      function markSchedulerUnsuspended(ms) {
        {
          if (eventLog !== null) {
            logEvent([SchedulerResumeEvent, ms * 1000, mainThreadIdCounter]);
          }
        }
      }

      /* eslint-disable no-var */
      // Math.pow(2, 30) - 1
      // 0b111111111111111111111111111111

      var maxSigned31BitInt = 1073741823; // Times out immediately

      var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

      var USER_BLOCKING_PRIORITY = 250;
      var NORMAL_PRIORITY_TIMEOUT = 5000;
      var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

      var IDLE_PRIORITY = maxSigned31BitInt; // Tasks are stored on a min heap

      var taskQueue = [];
      var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

      var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
      var currentTask = null;
      var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

      var isPerformingWork = false;
      var isHostCallbackScheduled = false;
      var isHostTimeoutScheduled = false;

      function advanceTimers(currentTime) {
        // Check for tasks that are no longer delayed and add them to the queue.
        var timer = peek(timerQueue);

        while (timer !== null) {
          if (timer.callback === null) {
            // Timer was cancelled.
            pop(timerQueue);
          } else if (timer.startTime <= currentTime) {
            // Timer fired. Transfer to the task queue.
            pop(timerQueue);
            timer.sortIndex = timer.expirationTime;
            push(taskQueue, timer);

            {
              markTaskStart(timer, currentTime);
              timer.isQueued = true;
            }
          } else {
            // Remaining timers are pending.
            return;
          }

          timer = peek(timerQueue);
        }
      }

      function handleTimeout(currentTime) {
        isHostTimeoutScheduled = false;
        advanceTimers(currentTime);

        if (!isHostCallbackScheduled) {
          if (peek(taskQueue) !== null) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
          } else {
            var firstTimer = peek(timerQueue);

            if (firstTimer !== null) {
              requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
            }
          }
        }
      }

      function flushWork(hasTimeRemaining, initialTime) {
        {
          markSchedulerUnsuspended(initialTime);
        } // We'll need a host callback the next time work is scheduled.

        isHostCallbackScheduled = false;

        if (isHostTimeoutScheduled) {
          // We scheduled a timeout but it's no longer needed. Cancel it.
          isHostTimeoutScheduled = false;
          cancelHostTimeout();
        }

        isPerformingWork = true;
        var previousPriorityLevel = currentPriorityLevel;

        try {
          if (enableProfiling) {
            try {
              return workLoop(hasTimeRemaining, initialTime);
            } catch (error) {
              if (currentTask !== null) {
                var currentTime = exports.unstable_now();
                markTaskErrored(currentTask, currentTime);
                currentTask.isQueued = false;
              }

              throw error;
            }
          } else {
            // No catch in prod codepath.
            return workLoop(hasTimeRemaining, initialTime);
          }
        } finally {
          currentTask = null;
          currentPriorityLevel = previousPriorityLevel;
          isPerformingWork = false;

          {
            var _currentTime = exports.unstable_now();

            markSchedulerSuspended(_currentTime);
          }
        }
      }

      function workLoop(hasTimeRemaining, initialTime) {
        var currentTime = initialTime;
        advanceTimers(currentTime);
        currentTask = peek(taskQueue);

        while (currentTask !== null && !enableSchedulerDebugging) {
          if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
            // This currentTask hasn't expired, and we've reached the deadline.
            break;
          }

          var callback = currentTask.callback;

          if (callback !== null) {
            currentTask.callback = null;
            currentPriorityLevel = currentTask.priorityLevel;
            var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
            markTaskRun(currentTask, currentTime);
            var continuationCallback = callback(didUserCallbackTimeout);
            currentTime = exports.unstable_now();

            if (typeof continuationCallback === 'function') {
              currentTask.callback = continuationCallback;
              markTaskYield(currentTask, currentTime);
            } else {
              {
                markTaskCompleted(currentTask, currentTime);
                currentTask.isQueued = false;
              }

              if (currentTask === peek(taskQueue)) {
                pop(taskQueue);
              }
            }

            advanceTimers(currentTime);
          } else {
            pop(taskQueue);
          }

          currentTask = peek(taskQueue);
        } // Return whether there's additional work

        if (currentTask !== null) {
          return true;
        } else {
          var firstTimer = peek(timerQueue);

          if (firstTimer !== null) {
            requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }

          return false;
        }
      }

      function unstable_runWithPriority(priorityLevel, eventHandler) {
        switch (priorityLevel) {
          case ImmediatePriority:
          case UserBlockingPriority:
          case NormalPriority:
          case LowPriority:
          case IdlePriority:
            break;

          default:
            priorityLevel = NormalPriority;
        }

        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;

        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      }

      function unstable_next(eventHandler) {
        var priorityLevel;

        switch (currentPriorityLevel) {
          case ImmediatePriority:
          case UserBlockingPriority:
          case NormalPriority:
            // Shift down to normal priority
            priorityLevel = NormalPriority;
            break;

          default:
            // Anything lower than normal priority should remain at the current level.
            priorityLevel = currentPriorityLevel;
            break;
        }

        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;

        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      }

      function unstable_wrapCallback(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function () {
          // This is a fork of runWithPriority, inlined for performance.
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = parentPriorityLevel;

          try {
            return callback.apply(this, arguments);
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        };
      }

      function timeoutForPriorityLevel(priorityLevel) {
        switch (priorityLevel) {
          case ImmediatePriority:
            return IMMEDIATE_PRIORITY_TIMEOUT;

          case UserBlockingPriority:
            return USER_BLOCKING_PRIORITY;

          case IdlePriority:
            return IDLE_PRIORITY;

          case LowPriority:
            return LOW_PRIORITY_TIMEOUT;

          case NormalPriority:
          default:
            return NORMAL_PRIORITY_TIMEOUT;
        }
      }

      function unstable_scheduleCallback(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        var startTime;
        var timeout;

        if (typeof options === 'object' && options !== null) {
          var delay = options.delay;

          if (typeof delay === 'number' && delay > 0) {
            startTime = currentTime + delay;
          } else {
            startTime = currentTime;
          }

          timeout = typeof options.timeout === 'number' ? options.timeout : timeoutForPriorityLevel(priorityLevel);
        } else {
          timeout = timeoutForPriorityLevel(priorityLevel);
          startTime = currentTime;
        }

        var expirationTime = startTime + timeout;
        var newTask = {
          id: taskIdCounter++,
          callback: callback,
          priorityLevel: priorityLevel,
          startTime: startTime,
          expirationTime: expirationTime,
          sortIndex: -1,
        };

        {
          newTask.isQueued = false;
        }

        if (startTime > currentTime) {
          // This is a delayed task.
          newTask.sortIndex = startTime;
          push(timerQueue, newTask);

          if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
            // All tasks are delayed, and this is the task with the earliest delay.
            if (isHostTimeoutScheduled) {
              // Cancel an existing timeout.
              cancelHostTimeout();
            } else {
              isHostTimeoutScheduled = true;
            } // Schedule a timeout.

            requestHostTimeout(handleTimeout, startTime - currentTime);
          }
        } else {
          newTask.sortIndex = expirationTime;
          push(taskQueue, newTask);

          {
            markTaskStart(newTask, currentTime);
            newTask.isQueued = true;
          } // Schedule a host callback, if needed. If we're already performing work,
          // wait until the next time we yield.

          if (!isHostCallbackScheduled && !isPerformingWork) {
            isHostCallbackScheduled = true;
            requestHostCallback(flushWork);
          }
        }

        return newTask;
      }

      function unstable_pauseExecution() {}

      function unstable_continueExecution() {
        if (!isHostCallbackScheduled && !isPerformingWork) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        }
      }

      function unstable_getFirstCallbackNode() {
        return peek(taskQueue);
      }

      function unstable_cancelCallback(task) {
        {
          if (task.isQueued) {
            var currentTime = exports.unstable_now();
            markTaskCanceled(task, currentTime);
            task.isQueued = false;
          }
        } // Null out the callback to indicate the task has been canceled. (Can't
        // remove from the queue because you can't remove arbitrary nodes from an
        // array based heap, only the first one.)

        task.callback = null;
      }

      function unstable_getCurrentPriorityLevel() {
        return currentPriorityLevel;
      }

      function unstable_shouldYield() {
        var currentTime = exports.unstable_now();
        advanceTimers(currentTime);
        var firstTask = peek(taskQueue);
        return (
          (firstTask !== currentTask &&
            currentTask !== null &&
            firstTask !== null &&
            firstTask.callback !== null &&
            firstTask.startTime <= currentTime &&
            firstTask.expirationTime < currentTask.expirationTime) ||
          shouldYieldToHost()
        );
      }

      var unstable_requestPaint = requestPaint;
      var unstable_Profiling = {
        startLoggingProfilingEvents: startLoggingProfilingEvents,
        stopLoggingProfilingEvents: stopLoggingProfilingEvents,
        sharedProfilingBuffer: sharedProfilingBuffer,
      };

      exports.unstable_IdlePriority = IdlePriority;
      exports.unstable_ImmediatePriority = ImmediatePriority;
      exports.unstable_LowPriority = LowPriority;
      exports.unstable_NormalPriority = NormalPriority;
      exports.unstable_Profiling = unstable_Profiling;
      exports.unstable_UserBlockingPriority = UserBlockingPriority;
      exports.unstable_cancelCallback = unstable_cancelCallback;
      exports.unstable_continueExecution = unstable_continueExecution;
      exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
      exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
      exports.unstable_next = unstable_next;
      exports.unstable_pauseExecution = unstable_pauseExecution;
      exports.unstable_requestPaint = unstable_requestPaint;
      exports.unstable_runWithPriority = unstable_runWithPriority;
      exports.unstable_scheduleCallback = unstable_scheduleCallback;
      exports.unstable_shouldYield = unstable_shouldYield;
      exports.unstable_wrapCallback = unstable_wrapCallback;
    })();
  }
});

var scheduler = createCommonjsModule(function (module) {
  {
    module.exports = scheduler_development;
  }
});

var reactReconciler_production_min = createCommonjsModule(function (module) {
  /** @license React v0.25.1
   * react-reconciler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  module.exports = function $$$reconciler($$$hostConfig) {
    var aa = objectAssign,
      ba = react,
      m = scheduler;
    function n(a) {
      for (var b = 'https://reactjs.org/docs/error-decoder.html?invariant=' + a, c = 1; c < arguments.length; c++)
        b += '&args[]=' + encodeURIComponent(arguments[c]);
      return (
        'Minified React error #' +
        a +
        '; visit ' +
        b +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    var p = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    p.hasOwnProperty('ReactCurrentDispatcher') || (p.ReactCurrentDispatcher = { current: null });
    p.hasOwnProperty('ReactCurrentBatchConfig') || (p.ReactCurrentBatchConfig = { suspense: null });
    var u = 'function' === typeof Symbol && Symbol.for,
      ca = u ? Symbol.for('react.element') : 60103,
      da = u ? Symbol.for('react.portal') : 60106,
      ea = u ? Symbol.for('react.fragment') : 60107,
      fa = u ? Symbol.for('react.strict_mode') : 60108,
      ha = u ? Symbol.for('react.profiler') : 60114,
      ia = u ? Symbol.for('react.provider') : 60109,
      ja = u ? Symbol.for('react.context') : 60110,
      ka = u ? Symbol.for('react.concurrent_mode') : 60111,
      la = u ? Symbol.for('react.forward_ref') : 60112,
      ma = u ? Symbol.for('react.suspense') : 60113,
      na = u ? Symbol.for('react.suspense_list') : 60120,
      oa = u ? Symbol.for('react.memo') : 60115,
      pa = u ? Symbol.for('react.lazy') : 60116,
      qa = u ? Symbol.for('react.block') : 60121,
      ra = 'function' === typeof Symbol && Symbol.iterator;
    function sa(a) {
      if (null === a || 'object' !== typeof a) return null;
      a = (ra && a[ra]) || a['@@iterator'];
      return 'function' === typeof a ? a : null;
    }
    function ta(a) {
      if (-1 === a._status) {
        a._status = 0;
        var b = a._ctor;
        b = b();
        a._result = b;
        b.then(
          function (b) {
            0 === a._status && ((b = b.default), (a._status = 1), (a._result = b));
          },
          function (b) {
            0 === a._status && ((a._status = 2), (a._result = b));
          }
        );
      }
    }
    function ua(a) {
      if (null == a) return null;
      if ('function' === typeof a) return a.displayName || a.name || null;
      if ('string' === typeof a) return a;
      switch (a) {
        case ea:
          return 'Fragment';
        case da:
          return 'Portal';
        case ha:
          return 'Profiler';
        case fa:
          return 'StrictMode';
        case ma:
          return 'Suspense';
        case na:
          return 'SuspenseList';
      }
      if ('object' === typeof a)
        switch (a.$$typeof) {
          case ja:
            return 'Context.Consumer';
          case ia:
            return 'Context.Provider';
          case la:
            var b = a.render;
            b = b.displayName || b.name || '';
            return a.displayName || ('' !== b ? 'ForwardRef(' + b + ')' : 'ForwardRef');
          case oa:
            return ua(a.type);
          case qa:
            return ua(a.render);
          case pa:
            if ((a = 1 === a._status ? a._result : null)) return ua(a);
        }
      return null;
    }
    function va(a) {
      var b = a,
        c = a;
      if (a.alternate) for (; b.return; ) b = b.return;
      else {
        a = b;
        do (b = a), 0 !== (b.effectTag & 1026) && (c = b.return), (a = b.return);
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function wa(a) {
      if (va(a) !== a) throw Error(n(188));
    }
    function xa(a) {
      var b = a.alternate;
      if (!b) {
        b = va(a);
        if (null === b) throw Error(n(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c) return wa(e), a;
            if (f === d) return wa(e), b;
            f = f.sibling;
          }
          throw Error(n(188));
        }
        if (c.return !== d.return) (c = e), (d = f);
        else {
          for (var g = !1, h = e.child; h; ) {
            if (h === c) {
              g = !0;
              c = e;
              d = f;
              break;
            }
            if (h === d) {
              g = !0;
              d = e;
              c = f;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f.child; h; ) {
              if (h === c) {
                g = !0;
                c = f;
                d = e;
                break;
              }
              if (h === d) {
                g = !0;
                d = f;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g) throw Error(n(189));
          }
        }
        if (c.alternate !== d) throw Error(n(190));
      }
      if (3 !== c.tag) throw Error(n(188));
      return c.stateNode.current === c ? a : b;
    }
    function ya(a) {
      a = xa(a);
      if (!a) return null;
      for (var b = a; ; ) {
        if (5 === b.tag || 6 === b.tag) return b;
        if (b.child) (b.child.return = b), (b = b.child);
        else {
          if (b === a) break;
          for (; !b.sibling; ) {
            if (!b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return null;
    }
    function za(a) {
      a = xa(a);
      if (!a) return null;
      for (var b = a; ; ) {
        if (5 === b.tag || 6 === b.tag) return b;
        if (b.child && 4 !== b.tag) (b.child.return = b), (b = b.child);
        else {
          if (b === a) break;
          for (; !b.sibling; ) {
            if (!b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return null;
    }
    var Aa = $$$hostConfig.getPublicInstance,
      Ba = $$$hostConfig.getRootHostContext,
      Ca = $$$hostConfig.getChildHostContext,
      Da = $$$hostConfig.prepareForCommit,
      Ea = $$$hostConfig.resetAfterCommit,
      Fa = $$$hostConfig.createInstance,
      Ga = $$$hostConfig.appendInitialChild,
      Ha = $$$hostConfig.finalizeInitialChildren,
      Ia = $$$hostConfig.prepareUpdate,
      Ja = $$$hostConfig.shouldSetTextContent,
      Ka = $$$hostConfig.shouldDeprioritizeSubtree,
      La = $$$hostConfig.createTextInstance,
      Ma = $$$hostConfig.setTimeout,
      Na = $$$hostConfig.clearTimeout,
      Oa = $$$hostConfig.noTimeout,
      Pa = $$$hostConfig.isPrimaryRenderer,
      Qa = $$$hostConfig.supportsMutation,
      Ra = $$$hostConfig.supportsPersistence,
      Sa = $$$hostConfig.supportsHydration,
      Ta = $$$hostConfig.appendChild,
      Ua = $$$hostConfig.appendChildToContainer,
      Va = $$$hostConfig.commitTextUpdate,
      Wa = $$$hostConfig.commitMount,
      Xa = $$$hostConfig.commitUpdate,
      Ya = $$$hostConfig.insertBefore,
      Za = $$$hostConfig.insertInContainerBefore,
      $a = $$$hostConfig.removeChild,
      ab = $$$hostConfig.removeChildFromContainer,
      bb = $$$hostConfig.resetTextContent,
      cb = $$$hostConfig.hideInstance,
      db = $$$hostConfig.hideTextInstance,
      eb = $$$hostConfig.unhideInstance,
      fb = $$$hostConfig.unhideTextInstance,
      gb = $$$hostConfig.cloneInstance,
      hb = $$$hostConfig.createContainerChildSet,
      ib = $$$hostConfig.appendChildToContainerChildSet,
      jb = $$$hostConfig.finalizeContainerChildren,
      kb = $$$hostConfig.replaceContainerChildren,
      lb = $$$hostConfig.cloneHiddenInstance,
      mb = $$$hostConfig.cloneHiddenTextInstance,
      nb = $$$hostConfig.canHydrateInstance,
      ob = $$$hostConfig.canHydrateTextInstance,
      pb = $$$hostConfig.isSuspenseInstancePending,
      qb = $$$hostConfig.isSuspenseInstanceFallback,
      rb = $$$hostConfig.getNextHydratableSibling,
      sb = $$$hostConfig.getFirstHydratableChild,
      tb = $$$hostConfig.hydrateInstance,
      ub = $$$hostConfig.hydrateTextInstance,
      vb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
      wb = $$$hostConfig.commitHydratedContainer,
      xb = $$$hostConfig.commitHydratedSuspenseInstance,
      yb = /^(.*)[\\\/]/;
    function zb(a) {
      var b = '';
      do {
        a: switch (a.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var c = '';
            break a;
          default:
            var d = a._debugOwner,
              e = a._debugSource,
              f = ua(a.type);
            c = null;
            d && (c = ua(d.type));
            d = f;
            f = '';
            e
              ? (f = ' (at ' + e.fileName.replace(yb, '') + ':' + e.lineNumber + ')')
              : c && (f = ' (created by ' + c + ')');
            c = '\n    in ' + (d || 'Unknown') + f;
        }
        b += c;
        a = a.return;
      } while (a);
      return b;
    }
    var Ab = [],
      Bb = -1;
    function B(a) {
      0 > Bb || ((a.current = Ab[Bb]), (Ab[Bb] = null), Bb--);
    }
    function C(a, b) {
      Bb++;
      Ab[Bb] = a.current;
      a.current = b;
    }
    var Cb = {},
      D = { current: Cb },
      E = { current: !1 },
      Db = Cb;
    function Eb(a, b) {
      var c = a.type.contextTypes;
      if (!c) return Cb;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
      var e = {},
        f;
      for (f in c) e[f] = b[f];
      d &&
        ((a = a.stateNode),
        (a.__reactInternalMemoizedUnmaskedChildContext = b),
        (a.__reactInternalMemoizedMaskedChildContext = e));
      return e;
    }
    function F(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function Fb() {
      B(E);
      B(D);
    }
    function Gb(a, b, c) {
      if (D.current !== Cb) throw Error(n(168));
      C(D, b);
      C(E, c);
    }
    function Hb(a, b, c) {
      var d = a.stateNode;
      a = b.childContextTypes;
      if ('function' !== typeof d.getChildContext) return c;
      d = d.getChildContext();
      for (var e in d) if (!(e in a)) throw Error(n(108, ua(b) || 'Unknown', e));
      return aa({}, c, {}, d);
    }
    function Ib(a) {
      a = ((a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext) || Cb;
      Db = D.current;
      C(D, a);
      C(E, E.current);
      return !0;
    }
    function Jb(a, b, c) {
      var d = a.stateNode;
      if (!d) throw Error(n(169));
      c ? ((a = Hb(a, b, Db)), (d.__reactInternalMemoizedMergedChildContext = a), B(E), B(D), C(D, a)) : B(E);
      C(E, c);
    }
    var Kb = m.unstable_runWithPriority,
      Lb = m.unstable_scheduleCallback,
      Mb = m.unstable_cancelCallback,
      Nb = m.unstable_requestPaint,
      Ob = m.unstable_now,
      Pb = m.unstable_getCurrentPriorityLevel,
      Qb = m.unstable_ImmediatePriority,
      Rb = m.unstable_UserBlockingPriority,
      Sb = m.unstable_NormalPriority,
      Tb = m.unstable_LowPriority,
      Ub = m.unstable_IdlePriority,
      Vb = {},
      Wb = m.unstable_shouldYield,
      Xb = void 0 !== Nb ? Nb : function () {},
      Yb = null,
      Zb = null,
      $b = !1,
      ac = Ob(),
      G =
        1e4 > ac
          ? Ob
          : function () {
              return Ob() - ac;
            };
    function bc() {
      switch (Pb()) {
        case Qb:
          return 99;
        case Rb:
          return 98;
        case Sb:
          return 97;
        case Tb:
          return 96;
        case Ub:
          return 95;
        default:
          throw Error(n(332));
      }
    }
    function cc(a) {
      switch (a) {
        case 99:
          return Qb;
        case 98:
          return Rb;
        case 97:
          return Sb;
        case 96:
          return Tb;
        case 95:
          return Ub;
        default:
          throw Error(n(332));
      }
    }
    function dc(a, b) {
      a = cc(a);
      return Kb(a, b);
    }
    function ec(a, b, c) {
      a = cc(a);
      return Lb(a, b, c);
    }
    function fc(a) {
      null === Yb ? ((Yb = [a]), (Zb = Lb(Qb, gc))) : Yb.push(a);
      return Vb;
    }
    function H() {
      if (null !== Zb) {
        var a = Zb;
        Zb = null;
        Mb(a);
      }
      gc();
    }
    function gc() {
      if (!$b && null !== Yb) {
        $b = !0;
        var a = 0;
        try {
          var b = Yb;
          dc(99, function () {
            for (; a < b.length; a++) {
              var c = b[a];
              do c = c(!0);
              while (null !== c);
            }
          });
          Yb = null;
        } catch (c) {
          throw (null !== Yb && (Yb = Yb.slice(a + 1)), Lb(Qb, H), c);
        } finally {
          $b = !1;
        }
      }
    }
    function hc(a, b, c) {
      c /= 10;
      return 1073741821 - ((((1073741821 - a + b / 10) / c) | 0) + 1) * c;
    }
    function ic(a, b) {
      return (a === b && (0 !== a || 1 / a === 1 / b)) || (a !== a && b !== b);
    }
    var jc = 'function' === typeof Object.is ? Object.is : ic,
      kc = Object.prototype.hasOwnProperty;
    function lc(a, b) {
      if (jc(a, b)) return !0;
      if ('object' !== typeof a || null === a || 'object' !== typeof b || null === b) return !1;
      var c = Object.keys(a),
        d = Object.keys(b);
      if (c.length !== d.length) return !1;
      for (d = 0; d < c.length; d++) if (!kc.call(b, c[d]) || !jc(a[c[d]], b[c[d]])) return !1;
      return !0;
    }
    function mc(a, b) {
      if (a && a.defaultProps) {
        b = aa({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      }
      return b;
    }
    var nc = { current: null },
      oc = null,
      pc = null,
      qc = null;
    function rc() {
      qc = pc = oc = null;
    }
    function sc(a, b) {
      a = a.type._context;
      Pa ? (C(nc, a._currentValue), (a._currentValue = b)) : (C(nc, a._currentValue2), (a._currentValue2 = b));
    }
    function tc(a) {
      var b = nc.current;
      B(nc);
      a = a.type._context;
      Pa ? (a._currentValue = b) : (a._currentValue2 = b);
    }
    function uc(a, b) {
      for (; null !== a; ) {
        var c = a.alternate;
        if (a.childExpirationTime < b)
          (a.childExpirationTime = b), null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
        else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;
        else break;
        a = a.return;
      }
    }
    function vc(a, b) {
      oc = a;
      qc = pc = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (a.expirationTime >= b && (wc = !0), (a.firstContext = null));
    }
    function I(a, b) {
      if (qc !== a && !1 !== b && 0 !== b) {
        if ('number' !== typeof b || 1073741823 === b) (qc = a), (b = 1073741823);
        b = { context: a, observedBits: b, next: null };
        if (null === pc) {
          if (null === oc) throw Error(n(308));
          pc = b;
          oc.dependencies = { expirationTime: 0, firstContext: b, responders: null };
        } else pc = pc.next = b;
      }
      return Pa ? a._currentValue : a._currentValue2;
    }
    var xc = !1;
    function yc(a) {
      a.updateQueue = { baseState: a.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
    }
    function zc(a, b) {
      a = a.updateQueue;
      b.updateQueue === a &&
        (b.updateQueue = { baseState: a.baseState, baseQueue: a.baseQueue, shared: a.shared, effects: a.effects });
    }
    function Ac(a, b) {
      a = { expirationTime: a, suspenseConfig: b, tag: 0, payload: null, callback: null, next: null };
      return (a.next = a);
    }
    function Bc(a, b) {
      a = a.updateQueue;
      if (null !== a) {
        a = a.shared;
        var c = a.pending;
        null === c ? (b.next = b) : ((b.next = c.next), (c.next = b));
        a.pending = b;
      }
    }
    function Cc(a, b) {
      var c = a.alternate;
      null !== c && zc(c, a);
      a = a.updateQueue;
      c = a.baseQueue;
      null === c ? ((a.baseQueue = b.next = b), (b.next = b)) : ((b.next = c.next), (c.next = b));
    }
    function Dc(a, b, c, d) {
      var e = a.updateQueue;
      xc = !1;
      var f = e.baseQueue,
        g = e.shared.pending;
      if (null !== g) {
        if (null !== f) {
          var h = f.next;
          f.next = g.next;
          g.next = h;
        }
        f = g;
        e.shared.pending = null;
        h = a.alternate;
        null !== h && ((h = h.updateQueue), null !== h && (h.baseQueue = g));
      }
      if (null !== f) {
        h = f.next;
        var k = e.baseState,
          l = 0,
          q = null,
          r = null,
          w = null;
        if (null !== h) {
          var z = h;
          do {
            g = z.expirationTime;
            if (g < d) {
              var Q = {
                expirationTime: z.expirationTime,
                suspenseConfig: z.suspenseConfig,
                tag: z.tag,
                payload: z.payload,
                callback: z.callback,
                next: null,
              };
              null === w ? ((r = w = Q), (q = k)) : (w = w.next = Q);
              g > l && (l = g);
            } else {
              null !== w &&
                (w = w.next = {
                  expirationTime: 1073741823,
                  suspenseConfig: z.suspenseConfig,
                  tag: z.tag,
                  payload: z.payload,
                  callback: z.callback,
                  next: null,
                });
              Ec(g, z.suspenseConfig);
              a: {
                var A = a,
                  v = z;
                g = b;
                Q = c;
                switch (v.tag) {
                  case 1:
                    A = v.payload;
                    if ('function' === typeof A) {
                      k = A.call(Q, k, g);
                      break a;
                    }
                    k = A;
                    break a;
                  case 3:
                    A.effectTag = (A.effectTag & -4097) | 64;
                  case 0:
                    A = v.payload;
                    g = 'function' === typeof A ? A.call(Q, k, g) : A;
                    if (null === g || void 0 === g) break a;
                    k = aa({}, k, g);
                    break a;
                  case 2:
                    xc = !0;
                }
              }
              null !== z.callback && ((a.effectTag |= 32), (g = e.effects), null === g ? (e.effects = [z]) : g.push(z));
            }
            z = z.next;
            if (null === z || z === h)
              if (((g = e.shared.pending), null === g)) break;
              else (z = f.next = g.next), (g.next = h), (e.baseQueue = f = g), (e.shared.pending = null);
          } while (1);
        }
        null === w ? (q = k) : (w.next = r);
        e.baseState = q;
        e.baseQueue = w;
        Gc(l);
        a.expirationTime = l;
        a.memoizedState = k;
      }
    }
    function Hc(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a)
        for (b = 0; b < a.length; b++) {
          var d = a[b],
            e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = e;
            e = c;
            if ('function' !== typeof d) throw Error(n(191, d));
            d.call(e);
          }
        }
    }
    var Ic = p.ReactCurrentBatchConfig,
      Jc = new ba.Component().refs;
    function Kc(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : aa({}, b, c);
      a.memoizedState = c;
      0 === a.expirationTime && (a.updateQueue.baseState = c);
    }
    var Oc = {
      isMounted: function (a) {
        return (a = a._reactInternalFiber) ? va(a) === a : !1;
      },
      enqueueSetState: function (a, b, c) {
        a = a._reactInternalFiber;
        var d = Lc(),
          e = Ic.suspense;
        d = Mc(d, a, e);
        e = Ac(d, e);
        e.payload = b;
        void 0 !== c && null !== c && (e.callback = c);
        Bc(a, e);
        Nc(a, d);
      },
      enqueueReplaceState: function (a, b, c) {
        a = a._reactInternalFiber;
        var d = Lc(),
          e = Ic.suspense;
        d = Mc(d, a, e);
        e = Ac(d, e);
        e.tag = 1;
        e.payload = b;
        void 0 !== c && null !== c && (e.callback = c);
        Bc(a, e);
        Nc(a, d);
      },
      enqueueForceUpdate: function (a, b) {
        a = a._reactInternalFiber;
        var c = Lc(),
          d = Ic.suspense;
        c = Mc(c, a, d);
        d = Ac(c, d);
        d.tag = 2;
        void 0 !== b && null !== b && (d.callback = b);
        Bc(a, d);
        Nc(a, c);
      },
    };
    function Pc(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return 'function' === typeof a.shouldComponentUpdate
        ? a.shouldComponentUpdate(d, f, g)
        : b.prototype && b.prototype.isPureReactComponent
        ? !lc(c, d) || !lc(e, f)
        : !0;
    }
    function Qc(a, b, c) {
      var d = !1,
        e = Cb;
      var f = b.contextType;
      'object' === typeof f && null !== f
        ? (f = I(f))
        : ((e = F(b) ? Db : D.current), (d = b.contextTypes), (f = (d = null !== d && void 0 !== d) ? Eb(a, e) : Cb));
      b = new b(c, f);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Oc;
      a.stateNode = b;
      b._reactInternalFiber = a;
      d &&
        ((a = a.stateNode),
        (a.__reactInternalMemoizedUnmaskedChildContext = e),
        (a.__reactInternalMemoizedMaskedChildContext = f));
      return b;
    }
    function Rc(a, b, c, d) {
      a = b.state;
      'function' === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      'function' === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Oc.enqueueReplaceState(b, b.state, null);
    }
    function Sc(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = Jc;
      yc(a);
      var f = b.contextType;
      'object' === typeof f && null !== f ? (e.context = I(f)) : ((f = F(b) ? Db : D.current), (e.context = Eb(a, f)));
      Dc(a, c, e, d);
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      'function' === typeof f && (Kc(a, b, f, c), (e.state = a.memoizedState));
      'function' === typeof b.getDerivedStateFromProps ||
        'function' === typeof e.getSnapshotBeforeUpdate ||
        ('function' !== typeof e.UNSAFE_componentWillMount && 'function' !== typeof e.componentWillMount) ||
        ((b = e.state),
        'function' === typeof e.componentWillMount && e.componentWillMount(),
        'function' === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(),
        b !== e.state && Oc.enqueueReplaceState(e, e.state, null),
        Dc(a, c, e, d),
        (e.state = a.memoizedState));
      'function' === typeof e.componentDidMount && (a.effectTag |= 4);
    }
    var Tc = Array.isArray;
    function Uc(a, b, c) {
      a = c.ref;
      if (null !== a && 'function' !== typeof a && 'object' !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag) throw Error(n(309));
            var d = c.stateNode;
          }
          if (!d) throw Error(n(147, a));
          var e = '' + a;
          if (null !== b && null !== b.ref && 'function' === typeof b.ref && b.ref._stringRef === e) return b.ref;
          b = function (a) {
            var b = d.refs;
            b === Jc && (b = d.refs = {});
            null === a ? delete b[e] : (b[e] = a);
          };
          b._stringRef = e;
          return b;
        }
        if ('string' !== typeof a) throw Error(n(284));
        if (!c._owner) throw Error(n(290, a));
      }
      return a;
    }
    function Vc(a, b) {
      if ('textarea' !== a.type)
        throw Error(
          n(
            31,
            '[object Object]' === Object.prototype.toString.call(b)
              ? 'object with keys {' + Object.keys(b).join(', ') + '}'
              : b,
            ''
          )
        );
    }
    function Wc(a) {
      function b(b, c) {
        if (a) {
          var d = b.lastEffect;
          null !== d ? ((d.nextEffect = c), (b.lastEffect = c)) : (b.firstEffect = b.lastEffect = c);
          c.nextEffect = null;
          c.effectTag = 8;
        }
      }
      function c(c, d) {
        if (!a) return null;
        for (; null !== d; ) b(c, d), (d = d.sibling);
        return null;
      }
      function d(b, a) {
        for (b = new Map(); null !== a; ) null !== a.key ? b.set(a.key, a) : b.set(a.index, a), (a = a.sibling);
        return b;
      }
      function e(a, b) {
        a = Xc(a, b);
        a.index = 0;
        a.sibling = null;
        return a;
      }
      function f(b, c, d) {
        b.index = d;
        if (!a) return c;
        d = b.alternate;
        if (null !== d) return (d = d.index), d < c ? ((b.effectTag = 2), c) : d;
        b.effectTag = 2;
        return c;
      }
      function g(b) {
        a && null === b.alternate && (b.effectTag = 2);
        return b;
      }
      function h(b, a, c, d) {
        if (null === a || 6 !== a.tag) return (a = Yc(c, b.mode, d)), (a.return = b), a;
        a = e(a, c);
        a.return = b;
        return a;
      }
      function k(a, b, c, d) {
        if (null !== b && b.elementType === c.type)
          return (d = e(b, c.props)), (d.ref = Uc(a, b, c)), (d.return = a), d;
        d = Zc(c.type, c.key, c.props, null, a.mode, d);
        d.ref = Uc(a, b, c);
        d.return = a;
        return d;
      }
      function l(a, b, c, d) {
        if (
          null === b ||
          4 !== b.tag ||
          b.stateNode.containerInfo !== c.containerInfo ||
          b.stateNode.implementation !== c.implementation
        )
          return (b = $c(c, a.mode, d)), (b.return = a), b;
        b = e(b, c.children || []);
        b.return = a;
        return b;
      }
      function q(b, a, c, d, f) {
        if (null === a || 7 !== a.tag) return (a = ad(c, b.mode, d, f)), (a.return = b), a;
        a = e(a, c);
        a.return = b;
        return a;
      }
      function r(a, b, c) {
        if ('string' === typeof b || 'number' === typeof b) return (b = Yc('' + b, a.mode, c)), (b.return = a), b;
        if ('object' === typeof b && null !== b) {
          switch (b.$$typeof) {
            case ca:
              return (c = Zc(b.type, b.key, b.props, null, a.mode, c)), (c.ref = Uc(a, null, b)), (c.return = a), c;
            case da:
              return (b = $c(b, a.mode, c)), (b.return = a), b;
          }
          if (Tc(b) || sa(b)) return (b = ad(b, a.mode, c, null)), (b.return = a), b;
          Vc(a, b);
        }
        return null;
      }
      function w(b, a, c, d) {
        var e = null !== a ? a.key : null;
        if ('string' === typeof c || 'number' === typeof c) return null !== e ? null : h(b, a, '' + c, d);
        if ('object' === typeof c && null !== c) {
          switch (c.$$typeof) {
            case ca:
              return c.key === e ? (c.type === ea ? q(b, a, c.props.children, d, e) : k(b, a, c, d)) : null;
            case da:
              return c.key === e ? l(b, a, c, d) : null;
          }
          if (Tc(c) || sa(c)) return null !== e ? null : q(b, a, c, d, null);
          Vc(b, c);
        }
        return null;
      }
      function z(b, a, c, d, e) {
        if ('string' === typeof d || 'number' === typeof d) return (b = b.get(c) || null), h(a, b, '' + d, e);
        if ('object' === typeof d && null !== d) {
          switch (d.$$typeof) {
            case ca:
              return (
                (b = b.get(null === d.key ? c : d.key) || null),
                d.type === ea ? q(a, b, d.props.children, e, d.key) : k(a, b, d, e)
              );
            case da:
              return (b = b.get(null === d.key ? c : d.key) || null), l(a, b, d, e);
          }
          if (Tc(d) || sa(d)) return (b = b.get(c) || null), q(a, b, d, e, null);
          Vc(a, d);
        }
        return null;
      }
      function Q(e, g, h, k) {
        for (var l = null, v = null, t = g, x = (g = 0), q = null; null !== t && x < h.length; x++) {
          t.index > x ? ((q = t), (t = null)) : (q = t.sibling);
          var y = w(e, t, h[x], k);
          if (null === y) {
            null === t && (t = q);
            break;
          }
          a && t && null === y.alternate && b(e, t);
          g = f(y, g, x);
          null === v ? (l = y) : (v.sibling = y);
          v = y;
          t = q;
        }
        if (x === h.length) return c(e, t), l;
        if (null === t) {
          for (; x < h.length; x++)
            (t = r(e, h[x], k)), null !== t && ((g = f(t, g, x)), null === v ? (l = t) : (v.sibling = t), (v = t));
          return l;
        }
        for (t = d(e, t); x < h.length; x++)
          (q = z(t, e, x, h[x], k)),
            null !== q &&
              (a && null !== q.alternate && t.delete(null === q.key ? x : q.key),
              (g = f(q, g, x)),
              null === v ? (l = q) : (v.sibling = q),
              (v = q));
        a &&
          t.forEach(function (a) {
            return b(e, a);
          });
        return l;
      }
      function A(e, g, h, k) {
        var t = sa(h);
        if ('function' !== typeof t) throw Error(n(150));
        h = t.call(h);
        if (null == h) throw Error(n(151));
        for (var l = (t = null), v = g, x = (g = 0), q = null, y = h.next(); null !== v && !y.done; x++, y = h.next()) {
          v.index > x ? ((q = v), (v = null)) : (q = v.sibling);
          var A = w(e, v, y.value, k);
          if (null === A) {
            null === v && (v = q);
            break;
          }
          a && v && null === A.alternate && b(e, v);
          g = f(A, g, x);
          null === l ? (t = A) : (l.sibling = A);
          l = A;
          v = q;
        }
        if (y.done) return c(e, v), t;
        if (null === v) {
          for (; !y.done; x++, y = h.next())
            (y = r(e, y.value, k)), null !== y && ((g = f(y, g, x)), null === l ? (t = y) : (l.sibling = y), (l = y));
          return t;
        }
        for (v = d(e, v); !y.done; x++, y = h.next())
          (y = z(v, e, x, y.value, k)),
            null !== y &&
              (a && null !== y.alternate && v.delete(null === y.key ? x : y.key),
              (g = f(y, g, x)),
              null === l ? (t = y) : (l.sibling = y),
              (l = y));
        a &&
          v.forEach(function (a) {
            return b(e, a);
          });
        return t;
      }
      return function (a, d, f, h) {
        var k = 'object' === typeof f && null !== f && f.type === ea && null === f.key;
        k && (f = f.props.children);
        var l = 'object' === typeof f && null !== f;
        if (l)
          switch (f.$$typeof) {
            case ca:
              a: {
                l = f.key;
                for (k = d; null !== k; ) {
                  if (k.key === l) {
                    switch (k.tag) {
                      case 7:
                        if (f.type === ea) {
                          c(a, k.sibling);
                          d = e(k, f.props.children);
                          d.return = a;
                          a = d;
                          break a;
                        }
                        break;
                      default:
                        if (k.elementType === f.type) {
                          c(a, k.sibling);
                          d = e(k, f.props);
                          d.ref = Uc(a, k, f);
                          d.return = a;
                          a = d;
                          break a;
                        }
                    }
                    c(a, k);
                    break;
                  } else b(a, k);
                  k = k.sibling;
                }
                f.type === ea
                  ? ((d = ad(f.props.children, a.mode, h, f.key)), (d.return = a), (a = d))
                  : ((h = Zc(f.type, f.key, f.props, null, a.mode, h)), (h.ref = Uc(a, d, f)), (h.return = a), (a = h));
              }
              return g(a);
            case da:
              a: {
                for (k = f.key; null !== d; ) {
                  if (d.key === k)
                    if (
                      4 === d.tag &&
                      d.stateNode.containerInfo === f.containerInfo &&
                      d.stateNode.implementation === f.implementation
                    ) {
                      c(a, d.sibling);
                      d = e(d, f.children || []);
                      d.return = a;
                      a = d;
                      break a;
                    } else {
                      c(a, d);
                      break;
                    }
                  else b(a, d);
                  d = d.sibling;
                }
                d = $c(f, a.mode, h);
                d.return = a;
                a = d;
              }
              return g(a);
          }
        if ('string' === typeof f || 'number' === typeof f)
          return (
            (f = '' + f),
            null !== d && 6 === d.tag
              ? (c(a, d.sibling), (d = e(d, f)), (d.return = a), (a = d))
              : (c(a, d), (d = Yc(f, a.mode, h)), (d.return = a), (a = d)),
            g(a)
          );
        if (Tc(f)) return Q(a, d, f, h);
        if (sa(f)) return A(a, d, f, h);
        l && Vc(a, f);
        if ('undefined' === typeof f && !k)
          switch (a.tag) {
            case 1:
            case 0:
              throw ((a = a.type), Error(n(152, a.displayName || a.name || 'Component')));
          }
        return c(a, d);
      };
    }
    var bd = Wc(!0),
      cd = Wc(!1),
      dd = {},
      J = { current: dd },
      ed = { current: dd },
      fd = { current: dd };
    function gd(a) {
      if (a === dd) throw Error(n(174));
      return a;
    }
    function hd(a, b) {
      C(fd, b);
      C(ed, a);
      C(J, dd);
      a = Ba(b);
      B(J);
      C(J, a);
    }
    function id() {
      B(J);
      B(ed);
      B(fd);
    }
    function jd(a) {
      var b = gd(fd.current),
        c = gd(J.current);
      b = Ca(c, a.type, b);
      c !== b && (C(ed, a), C(J, b));
    }
    function kd(a) {
      ed.current === a && (B(J), B(ed));
    }
    var K = { current: 0 };
    function ld(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && ((c = c.dehydrated), null === c || pb(c) || qb(c))) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.effectTag & 64)) return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    function md(a, b) {
      return { responder: a, props: b };
    }
    var nd = p.ReactCurrentDispatcher,
      L = p.ReactCurrentBatchConfig,
      od = 0,
      M = null,
      N = null,
      O = null,
      pd = !1;
    function P() {
      throw Error(n(321));
    }
    function qd(a, b) {
      if (null === b) return !1;
      for (var c = 0; c < b.length && c < a.length; c++) if (!jc(a[c], b[c])) return !1;
      return !0;
    }
    function rd(a, b, c, d, e, f) {
      od = f;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.expirationTime = 0;
      nd.current = null === a || null === a.memoizedState ? sd : td;
      a = c(d, e);
      if (b.expirationTime === od) {
        f = 0;
        do {
          b.expirationTime = 0;
          if (!(25 > f)) throw Error(n(301));
          f += 1;
          O = N = null;
          b.updateQueue = null;
          nd.current = ud;
          a = c(d, e);
        } while (b.expirationTime === od);
      }
      nd.current = vd;
      b = null !== N && null !== N.next;
      od = 0;
      O = N = M = null;
      pd = !1;
      if (b) throw Error(n(300));
      return a;
    }
    function wd() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? (M.memoizedState = O = a) : (O = O.next = a);
      return O;
    }
    function xd() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b) (O = b), (N = a);
      else {
        if (null === a) throw Error(n(310));
        N = a;
        a = {
          memoizedState: N.memoizedState,
          baseState: N.baseState,
          baseQueue: N.baseQueue,
          queue: N.queue,
          next: null,
        };
        null === O ? (M.memoizedState = O = a) : (O = O.next = a);
      }
      return O;
    }
    function yd(a, b) {
      return 'function' === typeof b ? b(a) : b;
    }
    function zd(a) {
      var b = xd(),
        c = b.queue;
      if (null === c) throw Error(n(311));
      c.lastRenderedReducer = a;
      var d = N,
        e = d.baseQueue,
        f = c.pending;
      if (null !== f) {
        if (null !== e) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
      }
      if (null !== e) {
        e = e.next;
        d = d.baseState;
        var h = (g = f = null),
          k = e;
        do {
          var l = k.expirationTime;
          if (l < od) {
            var q = {
              expirationTime: k.expirationTime,
              suspenseConfig: k.suspenseConfig,
              action: k.action,
              eagerReducer: k.eagerReducer,
              eagerState: k.eagerState,
              next: null,
            };
            null === h ? ((g = h = q), (f = d)) : (h = h.next = q);
            l > M.expirationTime && ((M.expirationTime = l), Gc(l));
          } else
            null !== h &&
              (h = h.next = {
                expirationTime: 1073741823,
                suspenseConfig: k.suspenseConfig,
                action: k.action,
                eagerReducer: k.eagerReducer,
                eagerState: k.eagerState,
                next: null,
              }),
              Ec(l, k.suspenseConfig),
              (d = k.eagerReducer === a ? k.eagerState : a(d, k.action));
          k = k.next;
        } while (null !== k && k !== e);
        null === h ? (f = d) : (h.next = g);
        jc(d, b.memoizedState) || (wc = !0);
        b.memoizedState = d;
        b.baseState = f;
        b.baseQueue = h;
        c.lastRenderedState = d;
      }
      return [b.memoizedState, c.dispatch];
    }
    function Ad(a) {
      var b = xd(),
        c = b.queue;
      if (null === c) throw Error(n(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch,
        e = c.pending,
        f = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = (e = e.next);
        do (f = a(f, g.action)), (g = g.next);
        while (g !== e);
        jc(f, b.memoizedState) || (wc = !0);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d];
    }
    function Bd(a) {
      var b = wd();
      'function' === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: yd, lastRenderedState: a };
      a = a.dispatch = Cd.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function Dd(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = M.updateQueue;
      null === b
        ? ((b = { lastEffect: null }), (M.updateQueue = b), (b.lastEffect = a.next = a))
        : ((c = b.lastEffect),
          null === c ? (b.lastEffect = a.next = a) : ((d = c.next), (c.next = a), (a.next = d), (b.lastEffect = a)));
      return a;
    }
    function Ed() {
      return xd().memoizedState;
    }
    function Fd(a, b, c, d) {
      var e = wd();
      M.effectTag |= a;
      e.memoizedState = Dd(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function Gd(a, b, c, d) {
      var e = xd();
      d = void 0 === d ? null : d;
      var f = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f = g.destroy;
        if (null !== d && qd(d, g.deps)) {
          Dd(b, c, f, d);
          return;
        }
      }
      M.effectTag |= a;
      e.memoizedState = Dd(1 | b, c, f, d);
    }
    function Hd(a, b) {
      return Fd(516, 4, a, b);
    }
    function Id(a, b) {
      return Gd(516, 4, a, b);
    }
    function Jd(a, b) {
      return Gd(4, 2, a, b);
    }
    function Kd(a, b) {
      if ('function' === typeof b)
        return (
          (a = a()),
          b(a),
          function () {
            b(null);
          }
        );
      if (null !== b && void 0 !== b)
        return (
          (a = a()),
          (b.current = a),
          function () {
            b.current = null;
          }
        );
    }
    function Ld(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return Gd(4, 2, Kd.bind(null, b, a), c);
    }
    function Md() {}
    function Nd(a, b) {
      wd().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }
    function Od(a, b) {
      var c = xd();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && qd(b, d[1])) return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function Pd(a, b) {
      var c = xd();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && qd(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function Qd(a, b, c) {
      var d = bc();
      dc(98 > d ? 98 : d, function () {
        a(!0);
      });
      dc(97 < d ? 97 : d, function () {
        var d = L.suspense;
        L.suspense = void 0 === b ? null : b;
        try {
          a(!1), c();
        } finally {
          L.suspense = d;
        }
      });
    }
    function Cd(a, b, c) {
      var d = Lc(),
        e = Ic.suspense;
      d = Mc(d, a, e);
      e = { expirationTime: d, suspenseConfig: e, action: c, eagerReducer: null, eagerState: null, next: null };
      var f = b.pending;
      null === f ? (e.next = e) : ((e.next = f.next), (f.next = e));
      b.pending = e;
      f = a.alternate;
      if (a === M || (null !== f && f === M)) (pd = !0), (e.expirationTime = od), (M.expirationTime = od);
      else {
        if (
          0 === a.expirationTime &&
          (null === f || 0 === f.expirationTime) &&
          ((f = b.lastRenderedReducer), null !== f)
        )
          try {
            var g = b.lastRenderedState,
              h = f(g, c);
            e.eagerReducer = f;
            e.eagerState = h;
            if (jc(h, g)) return;
          } catch (k) {
          } finally {
          }
        Nc(a, d);
      }
    }
    var vd = {
        readContext: I,
        useCallback: P,
        useContext: P,
        useEffect: P,
        useImperativeHandle: P,
        useLayoutEffect: P,
        useMemo: P,
        useReducer: P,
        useRef: P,
        useState: P,
        useDebugValue: P,
        useResponder: P,
        useDeferredValue: P,
        useTransition: P,
      },
      sd = {
        readContext: I,
        useCallback: Nd,
        useContext: I,
        useEffect: Hd,
        useImperativeHandle: function (a, b, c) {
          c = null !== c && void 0 !== c ? c.concat([a]) : null;
          return Fd(4, 2, Kd.bind(null, b, a), c);
        },
        useLayoutEffect: function (a, b) {
          return Fd(4, 2, a, b);
        },
        useMemo: function (a, b) {
          var c = wd();
          b = void 0 === b ? null : b;
          a = a();
          c.memoizedState = [a, b];
          return a;
        },
        useReducer: function (a, b, c) {
          var d = wd();
          b = void 0 !== c ? c(b) : b;
          d.memoizedState = d.baseState = b;
          a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
          a = a.dispatch = Cd.bind(null, M, a);
          return [d.memoizedState, a];
        },
        useRef: function (a) {
          var b = wd();
          a = { current: a };
          return (b.memoizedState = a);
        },
        useState: Bd,
        useDebugValue: Md,
        useResponder: md,
        useDeferredValue: function (a, b) {
          var c = Bd(a),
            d = c[0],
            e = c[1];
          Hd(
            function () {
              var c = L.suspense;
              L.suspense = void 0 === b ? null : b;
              try {
                e(a);
              } finally {
                L.suspense = c;
              }
            },
            [a, b]
          );
          return d;
        },
        useTransition: function (a) {
          var b = Bd(!1),
            c = b[0];
          b = b[1];
          return [Nd(Qd.bind(null, b, a), [b, a]), c];
        },
      },
      td = {
        readContext: I,
        useCallback: Od,
        useContext: I,
        useEffect: Id,
        useImperativeHandle: Ld,
        useLayoutEffect: Jd,
        useMemo: Pd,
        useReducer: zd,
        useRef: Ed,
        useState: function () {
          return zd(yd);
        },
        useDebugValue: Md,
        useResponder: md,
        useDeferredValue: function (a, b) {
          var c = zd(yd),
            d = c[0],
            e = c[1];
          Id(
            function () {
              var c = L.suspense;
              L.suspense = void 0 === b ? null : b;
              try {
                e(a);
              } finally {
                L.suspense = c;
              }
            },
            [a, b]
          );
          return d;
        },
        useTransition: function (a) {
          var b = zd(yd),
            c = b[0];
          b = b[1];
          return [Od(Qd.bind(null, b, a), [b, a]), c];
        },
      },
      ud = {
        readContext: I,
        useCallback: Od,
        useContext: I,
        useEffect: Id,
        useImperativeHandle: Ld,
        useLayoutEffect: Jd,
        useMemo: Pd,
        useReducer: Ad,
        useRef: Ed,
        useState: function () {
          return Ad(yd);
        },
        useDebugValue: Md,
        useResponder: md,
        useDeferredValue: function (a, b) {
          var c = Ad(yd),
            d = c[0],
            e = c[1];
          Id(
            function () {
              var c = L.suspense;
              L.suspense = void 0 === b ? null : b;
              try {
                e(a);
              } finally {
                L.suspense = c;
              }
            },
            [a, b]
          );
          return d;
        },
        useTransition: function (a) {
          var b = Ad(yd),
            c = b[0];
          b = b[1];
          return [Od(Qd.bind(null, b, a), [b, a]), c];
        },
      },
      Rd = null,
      Sd = null,
      Td = !1;
    function Ud(a, b) {
      var c = Vd(5, null, null, 0);
      c.elementType = 'DELETED';
      c.type = 'DELETED';
      c.stateNode = b;
      c.return = a;
      c.effectTag = 8;
      null !== a.lastEffect ? ((a.lastEffect.nextEffect = c), (a.lastEffect = c)) : (a.firstEffect = a.lastEffect = c);
    }
    function Wd(a, b) {
      switch (a.tag) {
        case 5:
          return (b = nb(b, a.type, a.pendingProps)), null !== b ? ((a.stateNode = b), !0) : !1;
        case 6:
          return (b = ob(b, a.pendingProps)), null !== b ? ((a.stateNode = b), !0) : !1;
        case 13:
          return !1;
        default:
          return !1;
      }
    }
    function Xd(a) {
      if (Td) {
        var b = Sd;
        if (b) {
          var c = b;
          if (!Wd(a, b)) {
            b = rb(c);
            if (!b || !Wd(a, b)) {
              a.effectTag = (a.effectTag & -1025) | 2;
              Td = !1;
              Rd = a;
              return;
            }
            Ud(Rd, c);
          }
          Rd = a;
          Sd = sb(b);
        } else (a.effectTag = (a.effectTag & -1025) | 2), (Td = !1), (Rd = a);
      }
    }
    function Yd(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      Rd = a;
    }
    function Zd(a) {
      if (!Sa || a !== Rd) return !1;
      if (!Td) return Yd(a), (Td = !0), !1;
      var b = a.type;
      if (5 !== a.tag || ('head' !== b && 'body' !== b && !Ja(b, a.memoizedProps)))
        for (b = Sd; b; ) Ud(a, b), (b = rb(b));
      Yd(a);
      if (13 === a.tag) {
        if (!Sa) throw Error(n(316));
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(n(317));
        Sd = vb(a);
      } else Sd = Rd ? rb(a.stateNode) : null;
      return !0;
    }
    function $d() {
      Sa && ((Sd = Rd = null), (Td = !1));
    }
    var ae = p.ReactCurrentOwner,
      wc = !1;
    function R(a, b, c, d) {
      b.child = null === a ? cd(b, null, c, d) : bd(b, a.child, c, d);
    }
    function be(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      vc(b, e);
      d = rd(a, b, c, d, f, e);
      if (null !== a && !wc)
        return (
          (b.updateQueue = a.updateQueue),
          (b.effectTag &= -517),
          a.expirationTime <= e && (a.expirationTime = 0),
          ce(a, b, e)
        );
      b.effectTag |= 1;
      R(a, b, d, e);
      return b.child;
    }
    function de(a, b, c, d, e, f) {
      if (null === a) {
        var g = c.type;
        if (
          'function' === typeof g &&
          !ee(g) &&
          void 0 === g.defaultProps &&
          null === c.compare &&
          void 0 === c.defaultProps
        )
          return (b.tag = 15), (b.type = g), fe(a, b, g, d, e, f);
        a = Zc(c.type, null, d, null, b.mode, f);
        a.ref = b.ref;
        a.return = b;
        return (b.child = a);
      }
      g = a.child;
      if (e < f && ((e = g.memoizedProps), (c = c.compare), (c = null !== c ? c : lc), c(e, d) && a.ref === b.ref))
        return ce(a, b, f);
      b.effectTag |= 1;
      a = Xc(g, d);
      a.ref = b.ref;
      a.return = b;
      return (b.child = a);
    }
    function fe(a, b, c, d, e, f) {
      return null !== a && lc(a.memoizedProps, d) && a.ref === b.ref && ((wc = !1), e < f)
        ? ((b.expirationTime = a.expirationTime), ce(a, b, f))
        : ge(a, b, c, d, f);
    }
    function he(a, b) {
      var c = b.ref;
      if ((null === a && null !== c) || (null !== a && a.ref !== c)) b.effectTag |= 128;
    }
    function ge(a, b, c, d, e) {
      var f = F(c) ? Db : D.current;
      f = Eb(b, f);
      vc(b, e);
      c = rd(a, b, c, d, f, e);
      if (null !== a && !wc)
        return (
          (b.updateQueue = a.updateQueue),
          (b.effectTag &= -517),
          a.expirationTime <= e && (a.expirationTime = 0),
          ce(a, b, e)
        );
      b.effectTag |= 1;
      R(a, b, c, e);
      return b.child;
    }
    function ie(a, b, c, d, e) {
      if (F(c)) {
        var f = !0;
        Ib(b);
      } else f = !1;
      vc(b, e);
      if (null === b.stateNode)
        null !== a && ((a.alternate = null), (b.alternate = null), (b.effectTag |= 2)),
          Qc(b, c, d),
          Sc(b, c, d, e),
          (d = !0);
      else if (null === a) {
        var g = b.stateNode,
          h = b.memoizedProps;
        g.props = h;
        var k = g.context,
          l = c.contextType;
        'object' === typeof l && null !== l ? (l = I(l)) : ((l = F(c) ? Db : D.current), (l = Eb(b, l)));
        var q = c.getDerivedStateFromProps,
          r = 'function' === typeof q || 'function' === typeof g.getSnapshotBeforeUpdate;
        r ||
          ('function' !== typeof g.UNSAFE_componentWillReceiveProps &&
            'function' !== typeof g.componentWillReceiveProps) ||
          ((h !== d || k !== l) && Rc(b, g, d, l));
        xc = !1;
        var w = b.memoizedState;
        g.state = w;
        Dc(b, d, g, e);
        k = b.memoizedState;
        h !== d || w !== k || E.current || xc
          ? ('function' === typeof q && (Kc(b, c, q, d), (k = b.memoizedState)),
            (h = xc || Pc(b, c, h, d, w, k, l))
              ? (r ||
                  ('function' !== typeof g.UNSAFE_componentWillMount && 'function' !== typeof g.componentWillMount) ||
                  ('function' === typeof g.componentWillMount && g.componentWillMount(),
                  'function' === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()),
                'function' === typeof g.componentDidMount && (b.effectTag |= 4))
              : ('function' === typeof g.componentDidMount && (b.effectTag |= 4),
                (b.memoizedProps = d),
                (b.memoizedState = k)),
            (g.props = d),
            (g.state = k),
            (g.context = l),
            (d = h))
          : ('function' === typeof g.componentDidMount && (b.effectTag |= 4), (d = !1));
      } else
        (g = b.stateNode),
          zc(a, b),
          (h = b.memoizedProps),
          (g.props = b.type === b.elementType ? h : mc(b.type, h)),
          (k = g.context),
          (l = c.contextType),
          'object' === typeof l && null !== l ? (l = I(l)) : ((l = F(c) ? Db : D.current), (l = Eb(b, l))),
          (q = c.getDerivedStateFromProps),
          (r = 'function' === typeof q || 'function' === typeof g.getSnapshotBeforeUpdate) ||
            ('function' !== typeof g.UNSAFE_componentWillReceiveProps &&
              'function' !== typeof g.componentWillReceiveProps) ||
            ((h !== d || k !== l) && Rc(b, g, d, l)),
          (xc = !1),
          (k = b.memoizedState),
          (g.state = k),
          Dc(b, d, g, e),
          (w = b.memoizedState),
          h !== d || k !== w || E.current || xc
            ? ('function' === typeof q && (Kc(b, c, q, d), (w = b.memoizedState)),
              (q = xc || Pc(b, c, h, d, k, w, l))
                ? (r ||
                    ('function' !== typeof g.UNSAFE_componentWillUpdate &&
                      'function' !== typeof g.componentWillUpdate) ||
                    ('function' === typeof g.componentWillUpdate && g.componentWillUpdate(d, w, l),
                    'function' === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, w, l)),
                  'function' === typeof g.componentDidUpdate && (b.effectTag |= 4),
                  'function' === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256))
                : ('function' !== typeof g.componentDidUpdate ||
                    (h === a.memoizedProps && k === a.memoizedState) ||
                    (b.effectTag |= 4),
                  'function' !== typeof g.getSnapshotBeforeUpdate ||
                    (h === a.memoizedProps && k === a.memoizedState) ||
                    (b.effectTag |= 256),
                  (b.memoizedProps = d),
                  (b.memoizedState = w)),
              (g.props = d),
              (g.state = w),
              (g.context = l),
              (d = q))
            : ('function' !== typeof g.componentDidUpdate ||
                (h === a.memoizedProps && k === a.memoizedState) ||
                (b.effectTag |= 4),
              'function' !== typeof g.getSnapshotBeforeUpdate ||
                (h === a.memoizedProps && k === a.memoizedState) ||
                (b.effectTag |= 256),
              (d = !1));
      return je(a, b, c, d, f, e);
    }
    function je(a, b, c, d, e, f) {
      he(a, b);
      var g = 0 !== (b.effectTag & 64);
      if (!d && !g) return e && Jb(b, c, !1), ce(a, b, f);
      d = b.stateNode;
      ae.current = b;
      var h = g && 'function' !== typeof c.getDerivedStateFromError ? null : d.render();
      b.effectTag |= 1;
      null !== a && g ? ((b.child = bd(b, a.child, null, f)), (b.child = bd(b, null, h, f))) : R(a, b, h, f);
      b.memoizedState = d.state;
      e && Jb(b, c, !0);
      return b.child;
    }
    function le(a) {
      var b = a.stateNode;
      b.pendingContext ? Gb(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Gb(a, b.context, !1);
      hd(a, b.containerInfo);
    }
    var me = { dehydrated: null, retryTime: 0 };
    function ne(a, b, c) {
      var d = b.mode,
        e = b.pendingProps,
        f = K.current,
        g = !1,
        h;
      (h = 0 !== (b.effectTag & 64)) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
      h
        ? ((g = !0), (b.effectTag &= -65))
        : (null !== a && null === a.memoizedState) ||
          void 0 === e.fallback ||
          !0 === e.unstable_avoidThisFallback ||
          (f |= 1);
      C(K, f & 1);
      if (null === a) {
        void 0 !== e.fallback && Xd(b);
        if (g) {
          g = e.fallback;
          e = ad(null, d, 0, null);
          e.return = b;
          if (0 === (b.mode & 2))
            for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a; )
              (a.return = e), (a = a.sibling);
          c = ad(g, d, c, null);
          c.return = b;
          e.sibling = c;
          b.memoizedState = me;
          b.child = e;
          return c;
        }
        d = e.children;
        b.memoizedState = null;
        return (b.child = cd(b, null, d, c));
      }
      if (null !== a.memoizedState) {
        a = a.child;
        d = a.sibling;
        if (g) {
          e = e.fallback;
          c = Xc(a, a.pendingProps);
          c.return = b;
          if (0 === (b.mode & 2) && ((g = null !== b.memoizedState ? b.child.child : b.child), g !== a.child))
            for (c.child = g; null !== g; ) (g.return = c), (g = g.sibling);
          d = Xc(d, e);
          d.return = b;
          c.sibling = d;
          c.childExpirationTime = 0;
          b.memoizedState = me;
          b.child = c;
          return d;
        }
        c = bd(b, a.child, e.children, c);
        b.memoizedState = null;
        return (b.child = c);
      }
      a = a.child;
      if (g) {
        g = e.fallback;
        e = ad(null, d, 0, null);
        e.return = b;
        e.child = a;
        null !== a && (a.return = e);
        if (0 === (b.mode & 2))
          for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a; )
            (a.return = e), (a = a.sibling);
        c = ad(g, d, c, null);
        c.return = b;
        e.sibling = c;
        c.effectTag |= 2;
        e.childExpirationTime = 0;
        b.memoizedState = me;
        b.child = e;
        return c;
      }
      b.memoizedState = null;
      return (b.child = bd(b, a, e.children, c));
    }
    function oe(a, b) {
      a.expirationTime < b && (a.expirationTime = b);
      var c = a.alternate;
      null !== c && c.expirationTime < b && (c.expirationTime = b);
      uc(a.return, b);
    }
    function pe(a, b, c, d, e, f) {
      var g = a.memoizedState;
      null === g
        ? (a.memoizedState = {
            isBackwards: b,
            rendering: null,
            renderingStartTime: 0,
            last: d,
            tail: c,
            tailExpiration: 0,
            tailMode: e,
            lastEffect: f,
          })
        : ((g.isBackwards = b),
          (g.rendering = null),
          (g.renderingStartTime = 0),
          (g.last = d),
          (g.tail = c),
          (g.tailExpiration = 0),
          (g.tailMode = e),
          (g.lastEffect = f));
    }
    function qe(a, b, c) {
      var d = b.pendingProps,
        e = d.revealOrder,
        f = d.tail;
      R(a, b, d.children, c);
      d = K.current;
      if (0 !== (d & 2)) (d = (d & 1) | 2), (b.effectTag |= 64);
      else {
        if (null !== a && 0 !== (a.effectTag & 64))
          a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && oe(a, c);
            else if (19 === a.tag) oe(a, c);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
        d &= 1;
      }
      C(K, d);
      if (0 === (b.mode & 2)) b.memoizedState = null;
      else
        switch (e) {
          case 'forwards':
            c = b.child;
            for (e = null; null !== c; ) (a = c.alternate), null !== a && null === ld(a) && (e = c), (c = c.sibling);
            c = e;
            null === c ? ((e = b.child), (b.child = null)) : ((e = c.sibling), (c.sibling = null));
            pe(b, !1, e, c, f, b.lastEffect);
            break;
          case 'backwards':
            c = null;
            e = b.child;
            for (b.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === ld(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            pe(b, !0, c, null, f, b.lastEffect);
            break;
          case 'together':
            pe(b, !1, null, null, void 0, b.lastEffect);
            break;
          default:
            b.memoizedState = null;
        }
      return b.child;
    }
    function ce(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      var d = b.expirationTime;
      0 !== d && Gc(d);
      if (b.childExpirationTime < c) return null;
      if (null !== a && b.child !== a.child) throw Error(n(153));
      if (null !== b.child) {
        a = b.child;
        c = Xc(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; )
          (a = a.sibling), (c = c.sibling = Xc(a, a.pendingProps)), (c.return = b);
        c.sibling = null;
      }
      return b.child;
    }
    function re(a) {
      a.effectTag |= 4;
    }
    var se, te, ue, ve;
    if (Qa)
      (se = function (a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) Ga(a, c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      }),
        (te = function () {}),
        (ue = function (a, b, c, d, e) {
          a = a.memoizedProps;
          if (a !== d) {
            var f = b.stateNode,
              g = gd(J.current);
            c = Ia(f, c, a, d, e, g);
            (b.updateQueue = c) && re(b);
          }
        }),
        (ve = function (a, b, c, d) {
          c !== d && re(b);
        });
    else if (Ra) {
      se = function (a, b, c, d) {
        for (var e = b.child; null !== e; ) {
          if (5 === e.tag) {
            var f = e.stateNode;
            c && d && (f = lb(f, e.type, e.memoizedProps, e));
            Ga(a, f);
          } else if (6 === e.tag) (f = e.stateNode), c && d && (f = mb(f, e.memoizedProps, e)), Ga(a, f);
          else if (4 !== e.tag) {
            if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
              var g = e.child;
              if (
                null !== g &&
                (null !== g.child && ((g.child.return = g), se(a, g, !0, f)), (f = g.sibling), null !== f)
              ) {
                f.return = e;
                e = f;
                continue;
              }
            }
            if (null !== e.child) {
              e.child.return = e;
              e = e.child;
              continue;
            }
          }
          if (e === b) break;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === b) return;
            e = e.return;
          }
          e.sibling.return = e.return;
          e = e.sibling;
        }
      };
      var we = function (a, b, c, d) {
        for (var e = b.child; null !== e; ) {
          if (5 === e.tag) {
            var f = e.stateNode;
            c && d && (f = lb(f, e.type, e.memoizedProps, e));
            ib(a, f);
          } else if (6 === e.tag) (f = e.stateNode), c && d && (f = mb(f, e.memoizedProps, e)), ib(a, f);
          else if (4 !== e.tag) {
            if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
              var g = e.child;
              if (
                null !== g &&
                (null !== g.child && ((g.child.return = g), we(a, g, !0, f)), (f = g.sibling), null !== f)
              ) {
                f.return = e;
                e = f;
                continue;
              }
            }
            if (null !== e.child) {
              e.child.return = e;
              e = e.child;
              continue;
            }
          }
          if (e === b) break;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === b) return;
            e = e.return;
          }
          e.sibling.return = e.return;
          e = e.sibling;
        }
      };
      te = function (a) {
        var b = a.stateNode;
        if (null !== a.firstEffect) {
          var c = b.containerInfo,
            d = hb(c);
          we(d, a, !1, !1);
          b.pendingChildren = d;
          re(a);
          jb(c, d);
        }
      };
      ue = function (a, b, c, d, e) {
        var f = a.stateNode,
          g = a.memoizedProps;
        if ((a = null === b.firstEffect) && g === d) b.stateNode = f;
        else {
          var h = b.stateNode,
            k = gd(J.current),
            l = null;
          g !== d && (l = Ia(h, c, g, d, e, k));
          a && null === l
            ? (b.stateNode = f)
            : ((f = gb(f, l, c, g, d, b, a, h)),
              Ha(f, c, d, e, k) && re(b),
              (b.stateNode = f),
              a ? re(b) : se(f, b, !1, !1));
        }
      };
      ve = function (a, b, c, d) {
        c !== d
          ? ((a = gd(fd.current)), (c = gd(J.current)), (b.stateNode = La(d, a, c, b)), re(b))
          : (b.stateNode = a.stateNode);
      };
    } else (te = function () {}), (ue = function () {}), (ve = function () {});
    function xe(a, b) {
      switch (a.tailMode) {
        case 'hidden':
          b = a.tail;
          for (var c = null; null !== b; ) null !== b.alternate && (c = b), (b = b.sibling);
          null === c ? (a.tail = null) : (c.sibling = null);
          break;
        case 'collapsed':
          c = a.tail;
          for (var d = null; null !== c; ) null !== c.alternate && (d = c), (c = c.sibling);
          null === d ? (b || null === a.tail ? (a.tail = null) : (a.tail.sibling = null)) : (d.sibling = null);
      }
    }
    function ye(a, b, c) {
      var d = b.pendingProps;
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;
        case 1:
          return F(b.type) && Fb(), null;
        case 3:
          return (
            id(),
            B(E),
            B(D),
            (d = b.stateNode),
            d.pendingContext && ((d.context = d.pendingContext), (d.pendingContext = null)),
            (null === a || null === a.child) && Zd(b) && re(b),
            te(b),
            null
          );
        case 5:
          kd(b);
          var e = gd(fd.current);
          c = b.type;
          if (null !== a && null != b.stateNode) ue(a, b, c, d, e), a.ref !== b.ref && (b.effectTag |= 128);
          else {
            if (!d) {
              if (null === b.stateNode) throw Error(n(166));
              return null;
            }
            a = gd(J.current);
            if (Zd(b)) {
              if (!Sa) throw Error(n(175));
              a = tb(b.stateNode, b.type, b.memoizedProps, e, a, b);
              b.updateQueue = a;
              null !== a && re(b);
            } else {
              var f = Fa(c, d, e, a, b);
              se(f, b, !1, !1);
              b.stateNode = f;
              Ha(f, c, d, e, a) && re(b);
            }
            null !== b.ref && (b.effectTag |= 128);
          }
          return null;
        case 6:
          if (a && null != b.stateNode) ve(a, b, a.memoizedProps, d);
          else {
            if ('string' !== typeof d && null === b.stateNode) throw Error(n(166));
            a = gd(fd.current);
            e = gd(J.current);
            if (Zd(b)) {
              if (!Sa) throw Error(n(176));
              ub(b.stateNode, b.memoizedProps, b) && re(b);
            } else b.stateNode = La(d, a, e, b);
          }
          return null;
        case 13:
          B(K);
          d = b.memoizedState;
          if (0 !== (b.effectTag & 64)) return (b.expirationTime = c), b;
          d = null !== d;
          e = !1;
          null === a
            ? void 0 !== b.memoizedProps.fallback && Zd(b)
            : ((c = a.memoizedState),
              (e = null !== c),
              d ||
                null === c ||
                ((c = a.child.sibling),
                null !== c &&
                  ((f = b.firstEffect),
                  null !== f
                    ? ((b.firstEffect = c), (c.nextEffect = f))
                    : ((b.firstEffect = b.lastEffect = c), (c.nextEffect = null)),
                  (c.effectTag = 8))));
          if (d && !e && 0 !== (b.mode & 2))
            if ((null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback) || 0 !== (K.current & 1))
              S === ze && (S = Ae);
            else {
              if (S === ze || S === Ae) S = Be;
              0 !== Ce && null !== T && (De(T, U), Ee(T, Ce));
            }
          Ra && d && (b.effectTag |= 4);
          Qa && (d || e) && (b.effectTag |= 4);
          return null;
        case 4:
          return id(), te(b), null;
        case 10:
          return tc(b), null;
        case 17:
          return F(b.type) && Fb(), null;
        case 19:
          B(K);
          d = b.memoizedState;
          if (null === d) return null;
          e = 0 !== (b.effectTag & 64);
          f = d.rendering;
          if (null === f)
            if (e) xe(d, !1);
            else {
              if (S !== ze || (null !== a && 0 !== (a.effectTag & 64)))
                for (a = b.child; null !== a; ) {
                  f = ld(a);
                  if (null !== f) {
                    b.effectTag |= 64;
                    xe(d, !1);
                    a = f.updateQueue;
                    null !== a && ((b.updateQueue = a), (b.effectTag |= 4));
                    null === d.lastEffect && (b.firstEffect = null);
                    b.lastEffect = d.lastEffect;
                    a = c;
                    for (d = b.child; null !== d; )
                      (e = d),
                        (c = a),
                        (e.effectTag &= 2),
                        (e.nextEffect = null),
                        (e.firstEffect = null),
                        (e.lastEffect = null),
                        (f = e.alternate),
                        null === f
                          ? ((e.childExpirationTime = 0),
                            (e.expirationTime = c),
                            (e.child = null),
                            (e.memoizedProps = null),
                            (e.memoizedState = null),
                            (e.updateQueue = null),
                            (e.dependencies = null))
                          : ((e.childExpirationTime = f.childExpirationTime),
                            (e.expirationTime = f.expirationTime),
                            (e.child = f.child),
                            (e.memoizedProps = f.memoizedProps),
                            (e.memoizedState = f.memoizedState),
                            (e.updateQueue = f.updateQueue),
                            (c = f.dependencies),
                            (e.dependencies =
                              null === c
                                ? null
                                : {
                                    expirationTime: c.expirationTime,
                                    firstContext: c.firstContext,
                                    responders: c.responders,
                                  })),
                        (d = d.sibling);
                    C(K, (K.current & 1) | 2);
                    return b.child;
                  }
                  a = a.sibling;
                }
            }
          else {
            if (!e)
              if (((a = ld(f)), null !== a)) {
                if (
                  ((b.effectTag |= 64),
                  (e = !0),
                  (a = a.updateQueue),
                  null !== a && ((b.updateQueue = a), (b.effectTag |= 4)),
                  xe(d, !0),
                  null === d.tail && 'hidden' === d.tailMode && !f.alternate)
                )
                  return (b = b.lastEffect = d.lastEffect), null !== b && (b.nextEffect = null), null;
              } else
                2 * G() - d.renderingStartTime > d.tailExpiration &&
                  1 < c &&
                  ((b.effectTag |= 64), (e = !0), xe(d, !1), (b.expirationTime = b.childExpirationTime = c - 1));
            d.isBackwards
              ? ((f.sibling = b.child), (b.child = f))
              : ((a = d.last), null !== a ? (a.sibling = f) : (b.child = f), (d.last = f));
          }
          return null !== d.tail
            ? (0 === d.tailExpiration && (d.tailExpiration = G() + 500),
              (a = d.tail),
              (d.rendering = a),
              (d.tail = a.sibling),
              (d.lastEffect = b.lastEffect),
              (d.renderingStartTime = G()),
              (a.sibling = null),
              (b = K.current),
              C(K, e ? (b & 1) | 2 : b & 1),
              a)
            : null;
      }
      throw Error(n(156, b.tag));
    }
    function Fe(a) {
      switch (a.tag) {
        case 1:
          F(a.type) && Fb();
          var b = a.effectTag;
          return b & 4096 ? ((a.effectTag = (b & -4097) | 64), a) : null;
        case 3:
          id();
          B(E);
          B(D);
          b = a.effectTag;
          if (0 !== (b & 64)) throw Error(n(285));
          a.effectTag = (b & -4097) | 64;
          return a;
        case 5:
          return kd(a), null;
        case 13:
          return B(K), (b = a.effectTag), b & 4096 ? ((a.effectTag = (b & -4097) | 64), a) : null;
        case 19:
          return B(K), null;
        case 4:
          return id(), null;
        case 10:
          return tc(a), null;
        default:
          return null;
      }
    }
    function Ge(a, b) {
      return { value: a, source: b, stack: zb(b) };
    }
    var He = 'function' === typeof WeakSet ? WeakSet : Set;
    function Ie(a, b) {
      var c = b.source,
        d = b.stack;
      null === d && null !== c && (d = zb(c));
      null !== c && ua(c.type);
      b = b.value;
      null !== a && 1 === a.tag && ua(a.type);
      try {
        console.error(b);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Je(a, b) {
      try {
        (b.props = a.memoizedProps), (b.state = a.memoizedState), b.componentWillUnmount();
      } catch (c) {
        Ke(a, c);
      }
    }
    function Le(a) {
      var b = a.ref;
      if (null !== b)
        if ('function' === typeof b)
          try {
            b(null);
          } catch (c) {
            Ke(a, c);
          }
        else b.current = null;
    }
    function Me(a, b) {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (b.effectTag & 256 && null !== a) {
            var c = a.memoizedProps,
              d = a.memoizedState;
            a = b.stateNode;
            b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : mc(b.type, c), d);
            a.__reactInternalSnapshotBeforeUpdate = b;
          }
          return;
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(n(163));
    }
    function Ne(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = (b = b.next);
        do {
          if ((c.tag & a) === a) {
            var d = c.destroy;
            c.destroy = void 0;
            void 0 !== d && d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Oe(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = (b = b.next);
        do {
          if ((c.tag & a) === a) {
            var d = c.create;
            c.destroy = d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Pe(a, b, c) {
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          Oe(3, c);
          return;
        case 1:
          a = c.stateNode;
          if (c.effectTag & 4)
            if (null === b) a.componentDidMount();
            else {
              var d = c.elementType === c.type ? b.memoizedProps : mc(c.type, b.memoizedProps);
              a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
            }
          b = c.updateQueue;
          null !== b && Hc(c, b, a);
          return;
        case 3:
          b = c.updateQueue;
          if (null !== b) {
            a = null;
            if (null !== c.child)
              switch (c.child.tag) {
                case 5:
                  a = Aa(c.child.stateNode);
                  break;
                case 1:
                  a = c.child.stateNode;
              }
            Hc(c, b, a);
          }
          return;
        case 5:
          a = c.stateNode;
          null === b && c.effectTag & 4 && Wa(a, c.type, c.memoizedProps, c);
          return;
        case 6:
          return;
        case 4:
          return;
        case 12:
          return;
        case 13:
          Sa &&
            null === c.memoizedState &&
            ((c = c.alternate),
            null !== c && ((c = c.memoizedState), null !== c && ((c = c.dehydrated), null !== c && xb(c))));
          return;
        case 19:
        case 17:
        case 20:
        case 21:
          return;
      }
      throw Error(n(163));
    }
    function Qe(a, b, c) {
      'function' === typeof Re && Re(b);
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          a = b.updateQueue;
          if (null !== a && ((a = a.lastEffect), null !== a)) {
            var d = a.next;
            dc(97 < c ? 97 : c, function () {
              var a = d;
              do {
                var c = a.destroy;
                if (void 0 !== c) {
                  var g = b;
                  try {
                    c();
                  } catch (h) {
                    Ke(g, h);
                  }
                }
                a = a.next;
              } while (a !== d);
            });
          }
          break;
        case 1:
          Le(b);
          c = b.stateNode;
          'function' === typeof c.componentWillUnmount && Je(b, c);
          break;
        case 5:
          Le(b);
          break;
        case 4:
          Qa ? Se(a, b, c) : Ra && Te(b);
      }
    }
    function Ue(a, b, c) {
      for (var d = b; ; )
        if ((Qe(a, d, c), null === d.child || (Qa && 4 === d.tag))) {
          if (d === b) break;
          for (; null === d.sibling; ) {
            if (null === d.return || d.return === b) return;
            d = d.return;
          }
          d.sibling.return = d.return;
          d = d.sibling;
        } else (d.child.return = d), (d = d.child);
    }
    function Ve(a) {
      var b = a.alternate;
      a.return = null;
      a.child = null;
      a.memoizedState = null;
      a.updateQueue = null;
      a.dependencies = null;
      a.alternate = null;
      a.firstEffect = null;
      a.lastEffect = null;
      a.pendingProps = null;
      a.memoizedProps = null;
      a.stateNode = null;
      null !== b && Ve(b);
    }
    function Te(a) {
      if (Ra) {
        a = a.stateNode.containerInfo;
        var b = hb(a);
        kb(a, b);
      }
    }
    function We(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Xe(a) {
      if (Qa) {
        a: {
          for (var b = a.return; null !== b; ) {
            if (We(b)) {
              var c = b;
              break a;
            }
            b = b.return;
          }
          throw Error(n(160));
        }
        b = c.stateNode;
        switch (c.tag) {
          case 5:
            var d = !1;
            break;
          case 3:
            b = b.containerInfo;
            d = !0;
            break;
          case 4:
            b = b.containerInfo;
            d = !0;
            break;
          default:
            throw Error(n(161));
        }
        c.effectTag & 16 && (bb(b), (c.effectTag &= -17));
        a: b: for (c = a; ; ) {
          for (; null === c.sibling; ) {
            if (null === c.return || We(c.return)) {
              c = null;
              break a;
            }
            c = c.return;
          }
          c.sibling.return = c.return;
          for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag; ) {
            if (c.effectTag & 2) continue b;
            if (null === c.child || 4 === c.tag) continue b;
            else (c.child.return = c), (c = c.child);
          }
          if (!(c.effectTag & 2)) {
            c = c.stateNode;
            break a;
          }
        }
        d ? Ye(a, c, b) : Ze(a, c, b);
      }
    }
    function Ye(a, b, c) {
      var d = a.tag,
        e = 5 === d || 6 === d;
      if (e) (a = e ? a.stateNode : a.stateNode.instance), b ? Za(c, a, b) : Ua(c, a);
      else if (4 !== d && ((a = a.child), null !== a))
        for (Ye(a, b, c), a = a.sibling; null !== a; ) Ye(a, b, c), (a = a.sibling);
    }
    function Ze(a, b, c) {
      var d = a.tag,
        e = 5 === d || 6 === d;
      if (e) (a = e ? a.stateNode : a.stateNode.instance), b ? Ya(c, a, b) : Ta(c, a);
      else if (4 !== d && ((a = a.child), null !== a))
        for (Ze(a, b, c), a = a.sibling; null !== a; ) Ze(a, b, c), (a = a.sibling);
    }
    function Se(a, b, c) {
      for (var d = b, e = !1, f, g; ; ) {
        if (!e) {
          e = d.return;
          a: for (;;) {
            if (null === e) throw Error(n(160));
            f = e.stateNode;
            switch (e.tag) {
              case 5:
                g = !1;
                break a;
              case 3:
                f = f.containerInfo;
                g = !0;
                break a;
              case 4:
                f = f.containerInfo;
                g = !0;
                break a;
            }
            e = e.return;
          }
          e = !0;
        }
        if (5 === d.tag || 6 === d.tag) Ue(a, d, c), g ? ab(f, d.stateNode) : $a(f, d.stateNode);
        else if (4 === d.tag) {
          if (null !== d.child) {
            f = d.stateNode.containerInfo;
            g = !0;
            d.child.return = d;
            d = d.child;
            continue;
          }
        } else if ((Qe(a, d, c), null !== d.child)) {
          d.child.return = d;
          d = d.child;
          continue;
        }
        if (d === b) break;
        for (; null === d.sibling; ) {
          if (null === d.return || d.return === b) return;
          d = d.return;
          4 === d.tag && (e = !1);
        }
        d.sibling.return = d.return;
        d = d.sibling;
      }
    }
    function $e(a, b) {
      if (Qa) {
        switch (b.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            Ne(3, b);
            return;
          case 1:
            return;
          case 5:
            var c = b.stateNode;
            if (null != c) {
              var d = b.memoizedProps;
              a = null !== a ? a.memoizedProps : d;
              var e = b.type,
                f = b.updateQueue;
              b.updateQueue = null;
              null !== f && Xa(c, f, e, a, d, b);
            }
            return;
          case 6:
            if (null === b.stateNode) throw Error(n(162));
            c = b.memoizedProps;
            Va(b.stateNode, null !== a ? a.memoizedProps : c, c);
            return;
          case 3:
            Sa && ((b = b.stateNode), b.hydrate && ((b.hydrate = !1), wb(b.containerInfo)));
            return;
          case 12:
            return;
          case 13:
            af(b);
            bf(b);
            return;
          case 19:
            bf(b);
            return;
          case 17:
            return;
        }
        throw Error(n(163));
      }
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          Ne(3, b);
          return;
        case 12:
          return;
        case 13:
          af(b);
          bf(b);
          return;
        case 19:
          bf(b);
          return;
        case 3:
          Sa && ((c = b.stateNode), c.hydrate && ((c.hydrate = !1), wb(c.containerInfo)));
      }
      a: if (Ra) {
        switch (b.tag) {
          case 1:
          case 5:
          case 6:
          case 20:
            break a;
          case 3:
          case 4:
            b = b.stateNode;
            kb(b.containerInfo, b.pendingChildren);
            break a;
        }
        throw Error(n(163));
      }
    }
    function af(a) {
      var b = a;
      if (null === a.memoizedState) var c = !1;
      else (c = !0), (b = a.child), (cf = G());
      if (Qa && null !== b)
        a: if (((a = b), Qa))
          for (b = a; ; ) {
            if (5 === b.tag) {
              var d = b.stateNode;
              c ? cb(d) : eb(b.stateNode, b.memoizedProps);
            } else if (6 === b.tag) (d = b.stateNode), c ? db(d) : fb(d, b.memoizedProps);
            else if (13 === b.tag && null !== b.memoizedState && null === b.memoizedState.dehydrated) {
              d = b.child.sibling;
              d.return = b;
              b = d;
              continue;
            } else if (null !== b.child) {
              b.child.return = b;
              b = b.child;
              continue;
            }
            if (b === a) break a;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) break a;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
    }
    function bf(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new He());
        b.forEach(function (b) {
          var d = df.bind(null, a, b);
          c.has(b) || (c.add(b), b.then(d, d));
        });
      }
    }
    var ef = 'function' === typeof WeakMap ? WeakMap : Map;
    function ff(a, b, c) {
      c = Ac(c, null);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function () {
        gf || ((gf = !0), (hf = d));
        Ie(a, b);
      };
      return c;
    }
    function jf(a, b, c) {
      c = Ac(c, null);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ('function' === typeof d) {
        var e = b.value;
        c.payload = function () {
          Ie(a, b);
          return d(e);
        };
      }
      var f = a.stateNode;
      null !== f &&
        'function' === typeof f.componentDidCatch &&
        (c.callback = function () {
          'function' !== typeof d && (null === kf ? (kf = new Set([this])) : kf.add(this), Ie(a, b));
          var c = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c ? c : '' });
        });
      return c;
    }
    var lf = Math.ceil,
      mf = p.ReactCurrentDispatcher,
      nf = p.ReactCurrentOwner,
      V = 0,
      of = 8,
      pf = 16,
      qf = 32,
      ze = 0,
      rf = 1,
      sf = 2,
      Ae = 3,
      Be = 4,
      tf = 5,
      W = V,
      T = null,
      X = null,
      U = 0,
      S = ze,
      uf = null,
      vf = 1073741823,
      wf = 1073741823,
      xf = null,
      Ce = 0,
      yf = !1,
      cf = 0,
      zf = 500,
      Y = null,
      gf = !1,
      hf = null,
      kf = null,
      Af = !1,
      Bf = null,
      Cf = 90,
      Df = null,
      Ef = 0,
      Ff = null,
      Gf = 0;
    function Lc() {
      return (W & (pf | qf)) !== V
        ? 1073741821 - ((G() / 10) | 0)
        : 0 !== Gf
        ? Gf
        : (Gf = 1073741821 - ((G() / 10) | 0));
    }
    function Mc(a, b, c) {
      b = b.mode;
      if (0 === (b & 2)) return 1073741823;
      var d = bc();
      if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
      if ((W & pf) !== V) return U;
      if (null !== c) a = hc(a, c.timeoutMs | 0 || 5e3, 250);
      else
        switch (d) {
          case 99:
            a = 1073741823;
            break;
          case 98:
            a = hc(a, 150, 100);
            break;
          case 97:
          case 96:
            a = hc(a, 5e3, 250);
            break;
          case 95:
            a = 2;
            break;
          default:
            throw Error(n(326));
        }
      null !== T && a === U && --a;
      return a;
    }
    function Nc(a, b) {
      if (50 < Ef) throw ((Ef = 0), (Ff = null), Error(n(185)));
      a = Hf(a, b);
      if (null !== a) {
        var c = bc();
        1073741823 === b ? ((W & of) !== V && (W & (pf | qf)) === V ? If(a) : (Z(a), W === V && H())) : Z(a);
        (W & 4) === V ||
          (98 !== c && 99 !== c) ||
          (null === Df ? (Df = new Map([[a, b]])) : ((c = Df.get(a)), (void 0 === c || c > b) && Df.set(a, b)));
      }
    }
    function Hf(a, b) {
      a.expirationTime < b && (a.expirationTime = b);
      var c = a.alternate;
      null !== c && c.expirationTime < b && (c.expirationTime = b);
      var d = a.return,
        e = null;
      if (null === d && 3 === a.tag) e = a.stateNode;
      else
        for (; null !== d; ) {
          c = d.alternate;
          d.childExpirationTime < b && (d.childExpirationTime = b);
          null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
          if (null === d.return && 3 === d.tag) {
            e = d.stateNode;
            break;
          }
          d = d.return;
        }
      null !== e && (T === e && (Gc(b), S === Be && De(e, U)), Ee(e, b));
      return e;
    }
    function Jf(a) {
      var b = a.lastExpiredTime;
      if (0 !== b) return b;
      b = a.firstPendingTime;
      if (!Kf(a, b)) return b;
      var c = a.lastPingedTime;
      a = a.nextKnownPendingLevel;
      a = c > a ? c : a;
      return 2 >= a && b !== a ? 0 : a;
    }
    function Z(a) {
      if (0 !== a.lastExpiredTime)
        (a.callbackExpirationTime = 1073741823), (a.callbackPriority = 99), (a.callbackNode = fc(If.bind(null, a)));
      else {
        var b = Jf(a),
          c = a.callbackNode;
        if (0 === b) null !== c && ((a.callbackNode = null), (a.callbackExpirationTime = 0), (a.callbackPriority = 90));
        else {
          var d = Lc();
          1073741823 === b
            ? (d = 99)
            : 1 === b || 2 === b
            ? (d = 95)
            : ((d = 10 * (1073741821 - b) - 10 * (1073741821 - d)),
              (d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95));
          if (null !== c) {
            var e = a.callbackPriority;
            if (a.callbackExpirationTime === b && e >= d) return;
            c !== Vb && Mb(c);
          }
          a.callbackExpirationTime = b;
          a.callbackPriority = d;
          b =
            1073741823 === b ? fc(If.bind(null, a)) : ec(d, Lf.bind(null, a), { timeout: 10 * (1073741821 - b) - G() });
          a.callbackNode = b;
        }
      }
    }
    function Lf(a, b) {
      Gf = 0;
      if (b) return (b = Lc()), Mf(a, b), Z(a), null;
      var c = Jf(a);
      if (0 !== c) {
        b = a.callbackNode;
        if ((W & (pf | qf)) !== V) throw Error(n(327));
        Nf();
        (a === T && c === U) || Of(a, c);
        if (null !== X) {
          var d = W;
          W |= pf;
          var e = Pf();
          do
            try {
              Qf();
              break;
            } catch (h) {
              Rf(a, h);
            }
          while (1);
          rc();
          W = d;
          mf.current = e;
          if (S === rf) throw ((b = uf), Of(a, c), De(a, c), Z(a), b);
          if (null === X)
            switch (
              ((e = a.finishedWork = a.current.alternate), (a.finishedExpirationTime = c), (d = S), (T = null), d)
            ) {
              case ze:
              case rf:
                throw Error(n(345));
              case sf:
                Mf(a, 2 < c ? 2 : c);
                break;
              case Ae:
                De(a, c);
                d = a.lastSuspendedTime;
                c === d && (a.nextKnownPendingLevel = Sf(e));
                if (1073741823 === vf && ((e = cf + zf - G()), 10 < e)) {
                  if (yf) {
                    var f = a.lastPingedTime;
                    if (0 === f || f >= c) {
                      a.lastPingedTime = c;
                      Of(a, c);
                      break;
                    }
                  }
                  f = Jf(a);
                  if (0 !== f && f !== c) break;
                  if (0 !== d && d !== c) {
                    a.lastPingedTime = d;
                    break;
                  }
                  a.timeoutHandle = Ma(Tf.bind(null, a), e);
                  break;
                }
                Tf(a);
                break;
              case Be:
                De(a, c);
                d = a.lastSuspendedTime;
                c === d && (a.nextKnownPendingLevel = Sf(e));
                if (yf && ((e = a.lastPingedTime), 0 === e || e >= c)) {
                  a.lastPingedTime = c;
                  Of(a, c);
                  break;
                }
                e = Jf(a);
                if (0 !== e && e !== c) break;
                if (0 !== d && d !== c) {
                  a.lastPingedTime = d;
                  break;
                }
                1073741823 !== wf
                  ? (d = 10 * (1073741821 - wf) - G())
                  : 1073741823 === vf
                  ? (d = 0)
                  : ((d = 10 * (1073741821 - vf) - 5e3),
                    (e = G()),
                    (c = 10 * (1073741821 - c) - e),
                    (d = e - d),
                    0 > d && (d = 0),
                    (d =
                      (120 > d
                        ? 120
                        : 480 > d
                        ? 480
                        : 1080 > d
                        ? 1080
                        : 1920 > d
                        ? 1920
                        : 3e3 > d
                        ? 3e3
                        : 4320 > d
                        ? 4320
                        : 1960 * lf(d / 1960)) - d),
                    c < d && (d = c));
                if (10 < d) {
                  a.timeoutHandle = Ma(Tf.bind(null, a), d);
                  break;
                }
                Tf(a);
                break;
              case tf:
                if (1073741823 !== vf && null !== xf) {
                  f = vf;
                  var g = xf;
                  d = g.busyMinDurationMs | 0;
                  0 >= d
                    ? (d = 0)
                    : ((e = g.busyDelayMs | 0),
                      (f = G() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5e3))),
                      (d = f <= e ? 0 : e + d - f));
                  if (10 < d) {
                    De(a, c);
                    a.timeoutHandle = Ma(Tf.bind(null, a), d);
                    break;
                  }
                }
                Tf(a);
                break;
              default:
                throw Error(n(329));
            }
          Z(a);
          if (a.callbackNode === b) return Lf.bind(null, a);
        }
      }
      return null;
    }
    function If(a) {
      var b = a.lastExpiredTime;
      b = 0 !== b ? b : 1073741823;
      if ((W & (pf | qf)) !== V) throw Error(n(327));
      Nf();
      (a === T && b === U) || Of(a, b);
      if (null !== X) {
        var c = W;
        W |= pf;
        var d = Pf();
        do
          try {
            Uf();
            break;
          } catch (e) {
            Rf(a, e);
          }
        while (1);
        rc();
        W = c;
        mf.current = d;
        if (S === rf) throw ((c = uf), Of(a, b), De(a, b), Z(a), c);
        if (null !== X) throw Error(n(261));
        a.finishedWork = a.current.alternate;
        a.finishedExpirationTime = b;
        T = null;
        Tf(a);
        Z(a);
      }
      return null;
    }
    function Vf(a, b) {
      Mf(a, b);
      Z(a);
      (W & (pf | qf)) === V && H();
    }
    function Wf() {
      if (null !== Df) {
        var a = Df;
        Df = null;
        a.forEach(function (a, c) {
          Mf(c, a);
          Z(c);
        });
        H();
      }
    }
    function Xf(a, b) {
      var c = W;
      W |= 1;
      try {
        return a(b);
      } finally {
        (W = c), W === V && H();
      }
    }
    function Yf(a, b) {
      if ((W & (pf | qf)) !== V) throw Error(n(187));
      var c = W;
      W |= 1;
      try {
        return dc(99, a.bind(null, b));
      } finally {
        (W = c), H();
      }
    }
    function Of(a, b) {
      a.finishedWork = null;
      a.finishedExpirationTime = 0;
      var c = a.timeoutHandle;
      c !== Oa && ((a.timeoutHandle = Oa), Na(c));
      if (null !== X)
        for (c = X.return; null !== c; ) {
          var d = c;
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && Fb();
              break;
            case 3:
              id();
              B(E);
              B(D);
              break;
            case 5:
              kd(d);
              break;
            case 4:
              id();
              break;
            case 13:
              B(K);
              break;
            case 19:
              B(K);
              break;
            case 10:
              tc(d);
          }
          c = c.return;
        }
      T = a;
      X = Xc(a.current, null);
      U = b;
      S = ze;
      uf = null;
      wf = vf = 1073741823;
      xf = null;
      Ce = 0;
      yf = !1;
    }
    function Rf(a, b) {
      do {
        try {
          rc();
          nd.current = vd;
          if (pd)
            for (var c = M.memoizedState; null !== c; ) {
              var d = c.queue;
              null !== d && (d.pending = null);
              c = c.next;
            }
          od = 0;
          O = N = M = null;
          pd = !1;
          if (null === X || null === X.return) return (S = rf), (uf = b), (X = null);
          a: {
            var e = a,
              f = X.return,
              g = X,
              h = b;
            b = U;
            g.effectTag |= 2048;
            g.firstEffect = g.lastEffect = null;
            if (null !== h && 'object' === typeof h && 'function' === typeof h.then) {
              var k = h;
              if (0 === (g.mode & 2)) {
                var l = g.alternate;
                l
                  ? ((g.updateQueue = l.updateQueue),
                    (g.memoizedState = l.memoizedState),
                    (g.expirationTime = l.expirationTime))
                  : ((g.updateQueue = null), (g.memoizedState = null));
              }
              var q = 0 !== (K.current & 1),
                r = f;
              do {
                var w;
                if ((w = 13 === r.tag)) {
                  var z = r.memoizedState;
                  if (null !== z) w = null !== z.dehydrated ? !0 : !1;
                  else {
                    var Q = r.memoizedProps;
                    w = void 0 === Q.fallback ? !1 : !0 !== Q.unstable_avoidThisFallback ? !0 : q ? !1 : !0;
                  }
                }
                if (w) {
                  var A = r.updateQueue;
                  if (null === A) {
                    var v = new Set();
                    v.add(k);
                    r.updateQueue = v;
                  } else A.add(k);
                  if (0 === (r.mode & 2)) {
                    r.effectTag |= 64;
                    g.effectTag &= -2981;
                    if (1 === g.tag)
                      if (null === g.alternate) g.tag = 17;
                      else {
                        var t = Ac(1073741823, null);
                        t.tag = 2;
                        Bc(g, t);
                      }
                    g.expirationTime = 1073741823;
                    break a;
                  }
                  h = void 0;
                  g = b;
                  var x = e.pingCache;
                  null === x
                    ? ((x = e.pingCache = new ef()), (h = new Set()), x.set(k, h))
                    : ((h = x.get(k)), void 0 === h && ((h = new Set()), x.set(k, h)));
                  if (!h.has(g)) {
                    h.add(g);
                    var ke = cg.bind(null, e, k, g);
                    k.then(ke, ke);
                  }
                  r.effectTag |= 4096;
                  r.expirationTime = b;
                  break a;
                }
                r = r.return;
              } while (null !== r);
              h = Error(
                (ua(g.type) || 'A React component') +
                  ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.' +
                  zb(g)
              );
            }
            S !== tf && (S = sf);
            h = Ge(h, g);
            r = f;
            do {
              switch (r.tag) {
                case 3:
                  k = h;
                  r.effectTag |= 4096;
                  r.expirationTime = b;
                  var Zf = ff(r, k, b);
                  Cc(r, Zf);
                  break a;
                case 1:
                  k = h;
                  var $f = r.type,
                    Fc = r.stateNode;
                  if (
                    0 === (r.effectTag & 64) &&
                    ('function' === typeof $f.getDerivedStateFromError ||
                      (null !== Fc && 'function' === typeof Fc.componentDidCatch && (null === kf || !kf.has(Fc))))
                  ) {
                    r.effectTag |= 4096;
                    r.expirationTime = b;
                    var ag = jf(r, k, b);
                    Cc(r, ag);
                    break a;
                  }
              }
              r = r.return;
            } while (null !== r);
          }
          X = dg(X);
        } catch (bg) {
          b = bg;
          continue;
        }
        break;
      } while (1);
    }
    function Pf() {
      var a = mf.current;
      mf.current = vd;
      return null === a ? vd : a;
    }
    function Ec(a, b) {
      a < vf && 2 < a && (vf = a);
      null !== b && a < wf && 2 < a && ((wf = a), (xf = b));
    }
    function Gc(a) {
      a > Ce && (Ce = a);
    }
    function Uf() {
      for (; null !== X; ) X = eg(X);
    }
    function Qf() {
      for (; null !== X && !Wb(); ) X = eg(X);
    }
    function eg(a) {
      var b = fg(a.alternate, a, U);
      a.memoizedProps = a.pendingProps;
      null === b && (b = dg(a));
      nf.current = null;
      return b;
    }
    function dg(a) {
      X = a;
      do {
        var b = X.alternate;
        a = X.return;
        if (0 === (X.effectTag & 2048)) {
          b = ye(b, X, U);
          if (1 === U || 1 !== X.childExpirationTime) {
            for (var c = 0, d = X.child; null !== d; ) {
              var e = d.expirationTime,
                f = d.childExpirationTime;
              e > c && (c = e);
              f > c && (c = f);
              d = d.sibling;
            }
            X.childExpirationTime = c;
          }
          if (null !== b) return b;
          null !== a &&
            0 === (a.effectTag & 2048) &&
            (null === a.firstEffect && (a.firstEffect = X.firstEffect),
            null !== X.lastEffect &&
              (null !== a.lastEffect && (a.lastEffect.nextEffect = X.firstEffect), (a.lastEffect = X.lastEffect)),
            1 < X.effectTag &&
              (null !== a.lastEffect ? (a.lastEffect.nextEffect = X) : (a.firstEffect = X), (a.lastEffect = X)));
        } else {
          b = Fe(X);
          if (null !== b) return (b.effectTag &= 2047), b;
          null !== a && ((a.firstEffect = a.lastEffect = null), (a.effectTag |= 2048));
        }
        b = X.sibling;
        if (null !== b) return b;
        X = a;
      } while (null !== X);
      S === ze && (S = tf);
      return null;
    }
    function Sf(a) {
      var b = a.expirationTime;
      a = a.childExpirationTime;
      return b > a ? b : a;
    }
    function Tf(a) {
      var b = bc();
      dc(99, gg.bind(null, a, b));
      return null;
    }
    function gg(a, b) {
      do Nf();
      while (null !== Bf);
      if ((W & (pf | qf)) !== V) throw Error(n(327));
      var c = a.finishedWork,
        d = a.finishedExpirationTime;
      if (null === c) return null;
      a.finishedWork = null;
      a.finishedExpirationTime = 0;
      if (c === a.current) throw Error(n(177));
      a.callbackNode = null;
      a.callbackExpirationTime = 0;
      a.callbackPriority = 90;
      a.nextKnownPendingLevel = 0;
      var e = Sf(c);
      a.firstPendingTime = e;
      d <= a.lastSuspendedTime
        ? (a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0)
        : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
      d <= a.lastPingedTime && (a.lastPingedTime = 0);
      d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
      a === T && ((X = T = null), (U = 0));
      1 < c.effectTag
        ? null !== c.lastEffect
          ? ((c.lastEffect.nextEffect = c), (e = c.firstEffect))
          : (e = c)
        : (e = c.firstEffect);
      if (null !== e) {
        var f = W;
        W |= qf;
        nf.current = null;
        Da(a.containerInfo);
        Y = e;
        do
          try {
            hg();
          } catch (t) {
            if (null === Y) throw Error(n(330));
            Ke(Y, t);
            Y = Y.nextEffect;
          }
        while (null !== Y);
        Y = e;
        do
          try {
            for (var g = a, h = b; null !== Y; ) {
              var k = Y.effectTag;
              k & 16 && Qa && bb(Y.stateNode);
              if (k & 128) {
                var l = Y.alternate;
                if (null !== l) {
                  var q = l.ref;
                  null !== q && ('function' === typeof q ? q(null) : (q.current = null));
                }
              }
              switch (k & 1038) {
                case 2:
                  Xe(Y);
                  Y.effectTag &= -3;
                  break;
                case 6:
                  Xe(Y);
                  Y.effectTag &= -3;
                  $e(Y.alternate, Y);
                  break;
                case 1024:
                  Y.effectTag &= -1025;
                  break;
                case 1028:
                  Y.effectTag &= -1025;
                  $e(Y.alternate, Y);
                  break;
                case 4:
                  $e(Y.alternate, Y);
                  break;
                case 8:
                  var r = g,
                    w = Y,
                    z = h;
                  Qa ? Se(r, w, z) : Ue(r, w, z);
                  Ve(w);
              }
              Y = Y.nextEffect;
            }
          } catch (t) {
            if (null === Y) throw Error(n(330));
            Ke(Y, t);
            Y = Y.nextEffect;
          }
        while (null !== Y);
        Ea(a.containerInfo);
        a.current = c;
        Y = e;
        do
          try {
            for (k = a; null !== Y; ) {
              var Q = Y.effectTag;
              Q & 36 && Pe(k, Y.alternate, Y);
              if (Q & 128) {
                l = void 0;
                var A = Y.ref;
                if (null !== A) {
                  var v = Y.stateNode;
                  switch (Y.tag) {
                    case 5:
                      l = Aa(v);
                      break;
                    default:
                      l = v;
                  }
                  'function' === typeof A ? A(l) : (A.current = l);
                }
              }
              Y = Y.nextEffect;
            }
          } catch (t) {
            if (null === Y) throw Error(n(330));
            Ke(Y, t);
            Y = Y.nextEffect;
          }
        while (null !== Y);
        Y = null;
        Xb();
        W = f;
      } else a.current = c;
      if (Af) (Af = !1), (Bf = a), (Cf = b);
      else for (Y = e; null !== Y; ) (b = Y.nextEffect), (Y.nextEffect = null), (Y = b);
      b = a.firstPendingTime;
      0 === b && (kf = null);
      1073741823 === b ? (a === Ff ? Ef++ : ((Ef = 0), (Ff = a))) : (Ef = 0);
      'function' === typeof ig && ig(c.stateNode, d);
      Z(a);
      if (gf) throw ((gf = !1), (a = hf), (hf = null), a);
      if ((W & of) !== V) return null;
      H();
      return null;
    }
    function hg() {
      for (; null !== Y; ) {
        var a = Y.effectTag;
        0 !== (a & 256) && Me(Y.alternate, Y);
        0 === (a & 512) ||
          Af ||
          ((Af = !0),
          ec(97, function () {
            Nf();
            return null;
          }));
        Y = Y.nextEffect;
      }
    }
    function Nf() {
      if (90 !== Cf) {
        var a = 97 < Cf ? 97 : Cf;
        Cf = 90;
        return dc(a, jg);
      }
    }
    function jg() {
      if (null === Bf) return !1;
      var a = Bf;
      Bf = null;
      if ((W & (pf | qf)) !== V) throw Error(n(331));
      var b = W;
      W |= qf;
      for (a = a.current.firstEffect; null !== a; ) {
        try {
          var c = a;
          if (0 !== (c.effectTag & 512))
            switch (c.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                Ne(5, c), Oe(5, c);
            }
        } catch (d) {
          if (null === a) throw Error(n(330));
          Ke(a, d);
        }
        c = a.nextEffect;
        a.nextEffect = null;
        a = c;
      }
      W = b;
      H();
      return !0;
    }
    function kg(a, b, c) {
      b = Ge(c, b);
      b = ff(a, b, 1073741823);
      Bc(a, b);
      a = Hf(a, 1073741823);
      null !== a && Z(a);
    }
    function Ke(a, b) {
      if (3 === a.tag) kg(a, a, b);
      else
        for (var c = a.return; null !== c; ) {
          if (3 === c.tag) {
            kg(c, a, b);
            break;
          } else if (1 === c.tag) {
            var d = c.stateNode;
            if (
              'function' === typeof c.type.getDerivedStateFromError ||
              ('function' === typeof d.componentDidCatch && (null === kf || !kf.has(d)))
            ) {
              a = Ge(b, a);
              a = jf(c, a, 1073741823);
              Bc(c, a);
              c = Hf(c, 1073741823);
              null !== c && Z(c);
              break;
            }
          }
          c = c.return;
        }
    }
    function cg(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      T === a && U === c
        ? S === Be || (S === Ae && 1073741823 === vf && G() - cf < zf)
          ? Of(a, U)
          : (yf = !0)
        : Kf(a, c) && ((b = a.lastPingedTime), (0 !== b && b < c) || ((a.lastPingedTime = c), Z(a)));
    }
    function df(a, b) {
      var c = a.stateNode;
      null !== c && c.delete(b);
      b = 0;
      0 === b && ((b = Lc()), (b = Mc(b, a, null)));
      a = Hf(a, b);
      null !== a && Z(a);
    }
    var fg;
    fg = function (a, b, c) {
      var d = b.expirationTime;
      if (null !== a) {
        var e = b.pendingProps;
        if (a.memoizedProps !== e || E.current) wc = !0;
        else {
          if (d < c) {
            wc = !1;
            switch (b.tag) {
              case 3:
                le(b);
                $d();
                break;
              case 5:
                jd(b);
                if (b.mode & 4 && 1 !== c && Ka(b.type, e)) return (b.expirationTime = b.childExpirationTime = 1), null;
                break;
              case 1:
                F(b.type) && Ib(b);
                break;
              case 4:
                hd(b, b.stateNode.containerInfo);
                break;
              case 10:
                sc(b, b.memoizedProps.value);
                break;
              case 13:
                if (null !== b.memoizedState) {
                  d = b.child.childExpirationTime;
                  if (0 !== d && d >= c) return ne(a, b, c);
                  C(K, K.current & 1);
                  b = ce(a, b, c);
                  return null !== b ? b.sibling : null;
                }
                C(K, K.current & 1);
                break;
              case 19:
                d = b.childExpirationTime >= c;
                if (0 !== (a.effectTag & 64)) {
                  if (d) return qe(a, b, c);
                  b.effectTag |= 64;
                }
                e = b.memoizedState;
                null !== e && ((e.rendering = null), (e.tail = null));
                C(K, K.current);
                if (!d) return null;
            }
            return ce(a, b, c);
          }
          wc = !1;
        }
      } else wc = !1;
      b.expirationTime = 0;
      switch (b.tag) {
        case 2:
          d = b.type;
          null !== a && ((a.alternate = null), (b.alternate = null), (b.effectTag |= 2));
          a = b.pendingProps;
          e = Eb(b, D.current);
          vc(b, c);
          e = rd(null, b, d, a, e, c);
          b.effectTag |= 1;
          if ('object' === typeof e && null !== e && 'function' === typeof e.render && void 0 === e.$$typeof) {
            b.tag = 1;
            b.memoizedState = null;
            b.updateQueue = null;
            if (F(d)) {
              var f = !0;
              Ib(b);
            } else f = !1;
            b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
            yc(b);
            var g = d.getDerivedStateFromProps;
            'function' === typeof g && Kc(b, d, g, a);
            e.updater = Oc;
            b.stateNode = e;
            e._reactInternalFiber = b;
            Sc(b, d, a, c);
            b = je(null, b, d, !0, f, c);
          } else (b.tag = 0), R(null, b, e, c), (b = b.child);
          return b;
        case 16:
          a: {
            e = b.elementType;
            null !== a && ((a.alternate = null), (b.alternate = null), (b.effectTag |= 2));
            a = b.pendingProps;
            ta(e);
            if (1 !== e._status) throw e._result;
            e = e._result;
            b.type = e;
            f = b.tag = lg(e);
            a = mc(e, a);
            switch (f) {
              case 0:
                b = ge(null, b, e, a, c);
                break a;
              case 1:
                b = ie(null, b, e, a, c);
                break a;
              case 11:
                b = be(null, b, e, a, c);
                break a;
              case 14:
                b = de(null, b, e, mc(e.type, a), d, c);
                break a;
            }
            throw Error(n(306, e, ''));
          }
          return b;
        case 0:
          return (d = b.type), (e = b.pendingProps), (e = b.elementType === d ? e : mc(d, e)), ge(a, b, d, e, c);
        case 1:
          return (d = b.type), (e = b.pendingProps), (e = b.elementType === d ? e : mc(d, e)), ie(a, b, d, e, c);
        case 3:
          le(b);
          d = b.updateQueue;
          if (null === a || null === d) throw Error(n(282));
          d = b.pendingProps;
          e = b.memoizedState;
          e = null !== e ? e.element : null;
          zc(a, b);
          Dc(b, d, null, c);
          d = b.memoizedState.element;
          if (d === e) $d(), (b = ce(a, b, c));
          else {
            if ((e = b.stateNode.hydrate))
              Sa ? ((Sd = sb(b.stateNode.containerInfo)), (Rd = b), (e = Td = !0)) : (e = !1);
            if (e)
              for (c = cd(b, null, d, c), b.child = c; c; ) (c.effectTag = (c.effectTag & -3) | 1024), (c = c.sibling);
            else R(a, b, d, c), $d();
            b = b.child;
          }
          return b;
        case 5:
          return (
            jd(b),
            null === a && Xd(b),
            (d = b.type),
            (e = b.pendingProps),
            (f = null !== a ? a.memoizedProps : null),
            (g = e.children),
            Ja(d, e) ? (g = null) : null !== f && Ja(d, f) && (b.effectTag |= 16),
            he(a, b),
            b.mode & 4 && 1 !== c && Ka(d, e)
              ? ((b.expirationTime = b.childExpirationTime = 1), (b = null))
              : (R(a, b, g, c), (b = b.child)),
            b
          );
        case 6:
          return null === a && Xd(b), null;
        case 13:
          return ne(a, b, c);
        case 4:
          return (
            hd(b, b.stateNode.containerInfo),
            (d = b.pendingProps),
            null === a ? (b.child = bd(b, null, d, c)) : R(a, b, d, c),
            b.child
          );
        case 11:
          return (d = b.type), (e = b.pendingProps), (e = b.elementType === d ? e : mc(d, e)), be(a, b, d, e, c);
        case 7:
          return R(a, b, b.pendingProps, c), b.child;
        case 8:
          return R(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return R(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            g = b.memoizedProps;
            f = e.value;
            sc(b, f);
            if (null !== g) {
              var h = g.value;
              f = jc(h, f)
                ? 0
                : ('function' === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;
              if (0 === f) {
                if (g.children === e.children && !E.current) {
                  b = ce(a, b, c);
                  break a;
                }
              } else
                for (h = b.child, null !== h && (h.return = b); null !== h; ) {
                  var k = h.dependencies;
                  if (null !== k) {
                    g = h.child;
                    for (var l = k.firstContext; null !== l; ) {
                      if (l.context === d && 0 !== (l.observedBits & f)) {
                        1 === h.tag && ((l = Ac(c, null)), (l.tag = 2), Bc(h, l));
                        h.expirationTime < c && (h.expirationTime = c);
                        l = h.alternate;
                        null !== l && l.expirationTime < c && (l.expirationTime = c);
                        uc(h.return, c);
                        k.expirationTime < c && (k.expirationTime = c);
                        break;
                      }
                      l = l.next;
                    }
                  } else g = 10 === h.tag ? (h.type === b.type ? null : h.child) : h.child;
                  if (null !== g) g.return = h;
                  else
                    for (g = h; null !== g; ) {
                      if (g === b) {
                        g = null;
                        break;
                      }
                      h = g.sibling;
                      if (null !== h) {
                        h.return = g.return;
                        g = h;
                        break;
                      }
                      g = g.return;
                    }
                  h = g;
                }
            }
            R(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return (
            (e = b.type),
            (f = b.pendingProps),
            (d = f.children),
            vc(b, c),
            (e = I(e, f.unstable_observedBits)),
            (d = d(e)),
            (b.effectTag |= 1),
            R(a, b, d, c),
            b.child
          );
        case 14:
          return (e = b.type), (f = mc(e, b.pendingProps)), (f = mc(e.type, f)), de(a, b, e, f, d, c);
        case 15:
          return fe(a, b, b.type, b.pendingProps, d, c);
        case 17:
          return (
            (d = b.type),
            (e = b.pendingProps),
            (e = b.elementType === d ? e : mc(d, e)),
            null !== a && ((a.alternate = null), (b.alternate = null), (b.effectTag |= 2)),
            (b.tag = 1),
            F(d) ? ((a = !0), Ib(b)) : (a = !1),
            vc(b, c),
            Qc(b, d, e),
            Sc(b, d, e, c),
            je(null, b, d, !0, a, c)
          );
        case 19:
          return qe(a, b, c);
      }
      throw Error(n(156, b.tag));
    };
    var mg = { current: !1 },
      ig = null,
      Re = null;
    function ng(a) {
      if ('undefined' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (b.isDisabled || !b.supportsFiber) return !0;
      try {
        var c = b.inject(a);
        ig = function (a) {
          try {
            b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
          } catch (e) {}
        };
        Re = function (a) {
          try {
            b.onCommitFiberUnmount(c, a);
          } catch (e) {}
        };
      } catch (d) {}
      return !0;
    }
    function og(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.effectTag = 0;
      this.lastEffect = this.firstEffect = this.nextEffect = null;
      this.childExpirationTime = this.expirationTime = 0;
      this.alternate = null;
    }
    function Vd(a, b, c, d) {
      return new og(a, b, c, d);
    }
    function ee(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function lg(a) {
      if ('function' === typeof a) return ee(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === la) return 11;
        if (a === oa) return 14;
      }
      return 2;
    }
    function Xc(a, b) {
      var c = a.alternate;
      null === c
        ? ((c = Vd(a.tag, b, a.key, a.mode)),
          (c.elementType = a.elementType),
          (c.type = a.type),
          (c.stateNode = a.stateNode),
          (c.alternate = a),
          (a.alternate = c))
        : ((c.pendingProps = b),
          (c.effectTag = 0),
          (c.nextEffect = null),
          (c.firstEffect = null),
          (c.lastEffect = null));
      c.childExpirationTime = a.childExpirationTime;
      c.expirationTime = a.expirationTime;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies =
        null === b
          ? null
          : { expirationTime: b.expirationTime, firstContext: b.firstContext, responders: b.responders };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Zc(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if ('function' === typeof a) ee(a) && (g = 1);
      else if ('string' === typeof a) g = 5;
      else
        a: switch (a) {
          case ea:
            return ad(c.children, e, f, b);
          case ka:
            g = 8;
            e |= 7;
            break;
          case fa:
            g = 8;
            e |= 1;
            break;
          case ha:
            return (a = Vd(12, c, b, e | 8)), (a.elementType = ha), (a.type = ha), (a.expirationTime = f), a;
          case ma:
            return (a = Vd(13, c, b, e)), (a.type = ma), (a.elementType = ma), (a.expirationTime = f), a;
          case na:
            return (a = Vd(19, c, b, e)), (a.elementType = na), (a.expirationTime = f), a;
          default:
            if ('object' === typeof a && null !== a)
              switch (a.$$typeof) {
                case ia:
                  g = 10;
                  break a;
                case ja:
                  g = 9;
                  break a;
                case la:
                  g = 11;
                  break a;
                case oa:
                  g = 14;
                  break a;
                case pa:
                  g = 16;
                  d = null;
                  break a;
                case qa:
                  g = 22;
                  break a;
              }
            throw Error(n(130, null == a ? a : typeof a, ''));
        }
      b = Vd(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.expirationTime = f;
      return b;
    }
    function ad(a, b, c, d) {
      a = Vd(7, a, d, b);
      a.expirationTime = c;
      return a;
    }
    function Yc(a, b, c) {
      a = Vd(6, a, null, b);
      a.expirationTime = c;
      return a;
    }
    function $c(a, b, c) {
      b = Vd(4, null !== a.children ? a.children : [], a.key, b);
      b.expirationTime = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function pg(a, b, c) {
      this.tag = b;
      this.current = null;
      this.containerInfo = a;
      this.pingCache = this.pendingChildren = null;
      this.finishedExpirationTime = 0;
      this.finishedWork = null;
      this.timeoutHandle = Oa;
      this.pendingContext = this.context = null;
      this.hydrate = c;
      this.callbackNode = null;
      this.callbackPriority = 90;
      this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
    }
    function Kf(a, b) {
      var c = a.firstSuspendedTime;
      a = a.lastSuspendedTime;
      return 0 !== c && c >= b && a <= b;
    }
    function De(a, b) {
      var c = a.firstSuspendedTime,
        d = a.lastSuspendedTime;
      c < b && (a.firstSuspendedTime = b);
      if (d > b || 0 === c) a.lastSuspendedTime = b;
      b <= a.lastPingedTime && (a.lastPingedTime = 0);
      b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
    }
    function Ee(a, b) {
      b > a.firstPendingTime && (a.firstPendingTime = b);
      var c = a.firstSuspendedTime;
      0 !== c &&
        (b >= c
          ? (a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0)
          : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1),
        b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
    }
    function Mf(a, b) {
      var c = a.lastExpiredTime;
      if (0 === c || c > b) a.lastExpiredTime = b;
    }
    var qg = null;
    function rg(a) {
      if (null === qg)
        try {
          var b = ('require' + Math.random()).slice(0, 7);
          qg = (module && module[b])('timers').setImmediate;
        } catch (c) {
          qg = function (a) {
            var b = new MessageChannel();
            b.port1.onmessage = a;
            b.port2.postMessage(void 0);
          };
        }
      return qg(a);
    }
    function sg(a) {
      var b = a._reactInternalFiber;
      if (void 0 === b) {
        if ('function' === typeof a.render) throw Error(n(188));
        throw Error(n(268, Object.keys(a)));
      }
      a = ya(b);
      return null === a ? null : a.stateNode;
    }
    function tg(a, b) {
      a = a.memoizedState;
      null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
    }
    function ug(a, b) {
      tg(a, b);
      (a = a.alternate) && tg(a, b);
    }
    var vg = p.IsSomeRendererActing,
      wg = 'function' === typeof m.unstable_flushAllWithoutAsserting,
      xg =
        m.unstable_flushAllWithoutAsserting ||
        function () {
          for (var a = !1; Nf(); ) a = !0;
          return a;
        };
    function yg(a) {
      try {
        xg(),
          rg(function () {
            xg() ? yg(a) : a();
          });
      } catch (b) {
        a(b);
      }
    }
    var zg = 0,
      Ag = !1,
      Bg = {
        __proto__: null,
        createContainer: function (a, b, c) {
          a = new pg(a, b, c);
          b = Vd(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
          a.current = b;
          b.stateNode = a;
          yc(b);
          return a;
        },
        updateContainer: function (a, b, c, d) {
          var e = b.current,
            f = Lc(),
            g = Ic.suspense;
          f = Mc(f, e, g);
          a: if (c) {
            c = c._reactInternalFiber;
            b: {
              if (va(c) !== c || 1 !== c.tag) throw Error(n(170));
              var h = c;
              do {
                switch (h.tag) {
                  case 3:
                    h = h.stateNode.context;
                    break b;
                  case 1:
                    if (F(h.type)) {
                      h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                      break b;
                    }
                }
                h = h.return;
              } while (null !== h);
              throw Error(n(171));
            }
            if (1 === c.tag) {
              var k = c.type;
              if (F(k)) {
                c = Hb(c, k, h);
                break a;
              }
            }
            c = h;
          } else c = Cb;
          null === b.context ? (b.context = c) : (b.pendingContext = c);
          b = Ac(f, g);
          b.payload = { element: a };
          d = void 0 === d ? null : d;
          null !== d && (b.callback = d);
          Bc(e, b);
          Nc(e, f);
          return f;
        },
        batchedEventUpdates: function (a, b) {
          var c = W;
          W |= 2;
          try {
            return a(b);
          } finally {
            (W = c), W === V && H();
          }
        },
        batchedUpdates: Xf,
        unbatchedUpdates: function (a, b) {
          var c = W;
          W &= -2;
          W |= of;
          try {
            return a(b);
          } finally {
            (W = c), W === V && H();
          }
        },
        deferredUpdates: function (a) {
          return dc(97, a);
        },
        syncUpdates: function (a, b, c, d) {
          return dc(99, a.bind(null, b, c, d));
        },
        discreteUpdates: function (a, b, c, d, e) {
          var f = W;
          W |= 4;
          try {
            return dc(98, a.bind(null, b, c, d, e));
          } finally {
            (W = f), W === V && H();
          }
        },
        flushDiscreteUpdates: function () {
          (W & (1 | pf | qf)) === V && (Wf(), Nf());
        },
        flushControlled: function (a) {
          var b = W;
          W |= 1;
          try {
            dc(99, a);
          } finally {
            (W = b), W === V && H();
          }
        },
        flushSync: Yf,
        flushPassiveEffects: Nf,
        IsThisRendererActing: mg,
        getPublicRootInstance: function (a) {
          a = a.current;
          if (!a.child) return null;
          switch (a.child.tag) {
            case 5:
              return Aa(a.child.stateNode);
            default:
              return a.child.stateNode;
          }
        },
        attemptSynchronousHydration: function (a) {
          switch (a.tag) {
            case 3:
              var b = a.stateNode;
              b.hydrate && Vf(b, b.firstPendingTime);
              break;
            case 13:
              Yf(function () {
                return Nc(a, 1073741823);
              }),
                (b = hc(Lc(), 150, 100)),
                ug(a, b);
          }
        },
        attemptUserBlockingHydration: function (a) {
          if (13 === a.tag) {
            var b = hc(Lc(), 150, 100);
            Nc(a, b);
            ug(a, b);
          }
        },
        attemptContinuousHydration: function (a) {
          13 === a.tag && (Nc(a, 3), ug(a, 3));
        },
        attemptHydrationAtCurrentPriority: function (a) {
          if (13 === a.tag) {
            var b = Lc();
            b = Mc(b, a, null);
            Nc(a, b);
            ug(a, b);
          }
        },
        findHostInstance: sg,
        findHostInstanceWithWarning: function (a) {
          return sg(a);
        },
        findHostInstanceWithNoPortals: function (a) {
          a = za(a);
          return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
        },
        shouldSuspend: function () {
          return !1;
        },
        injectIntoDevTools: function (a) {
          var b = a.findFiberByHostInstance;
          return ng(
            aa({}, a, {
              overrideHookState: null,
              overrideProps: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: p.ReactCurrentDispatcher,
              findHostInstanceByFiber: function (a) {
                a = ya(a);
                return null === a ? null : a.stateNode;
              },
              findFiberByHostInstance: function (a) {
                return b ? b(a) : null;
              },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null,
            })
          );
        },
        act: function (a) {
          function b() {
            zg--;
            vg.current = c;
            mg.current = d;
          }
          !1 === Ag &&
            ((Ag = !0),
            console.error(
              'act(...) is not supported in production builds of React, and might not behave as expected.'
            ));
          zg++;
          var c = vg.current;
          var d = mg.current;
          vg.current = !0;
          mg.current = !0;
          try {
            var e = Xf(a);
          } catch (f) {
            throw (b(), f);
          }
          if (null !== e && 'object' === typeof e && 'function' === typeof e.then)
            return {
              then: function (a, d) {
                e.then(
                  function () {
                    1 < zg || (!0 === wg && !0 === c)
                      ? (b(), a())
                      : yg(function (c) {
                          b();
                          c ? d(c) : a();
                        });
                  },
                  function (a) {
                    b();
                    d(a);
                  }
                );
              },
            };
          try {
            1 !== zg || (!1 !== wg && !1 !== c) || xg(), b();
          } catch (f) {
            throw (b(), f);
          }
          return {
            then: function (a) {
              a();
            },
          };
        },
      },
      Cg = (Bg && Bg['default']) || Bg;
    module.exports = Cg.default || Cg;

    var $$$renderer = module.exports;
    module.exports = $$$reconciler;
    return $$$renderer;
  };
});

var schedulerTracing_development = createCommonjsModule(function (module, exports) {
  {
    (function () {
      var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

      var interactionIDCounter = 0;
      var threadIDCounter = 0; // Set of currently traced interactions.
      // Interactions "stack"–
      // Meaning that newly traced interactions are appended to the previously active set.
      // When an interaction goes out of scope, the previous set (if any) is restored.

      exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

      exports.__subscriberRef = null;

      {
        exports.__interactionsRef = {
          current: new Set(),
        };
        exports.__subscriberRef = {
          current: null,
        };
      }
      function unstable_clear(callback) {
        var prevInteractions = exports.__interactionsRef.current;
        exports.__interactionsRef.current = new Set();

        try {
          return callback();
        } finally {
          exports.__interactionsRef.current = prevInteractions;
        }
      }
      function unstable_getCurrent() {
        {
          return exports.__interactionsRef.current;
        }
      }
      function unstable_getThreadID() {
        return ++threadIDCounter;
      }
      function unstable_trace(name, timestamp, callback) {
        var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

        var interaction = {
          __count: 1,
          id: interactionIDCounter++,
          name: name,
          timestamp: timestamp,
        };
        var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
        // To do that, clone the current interactions.
        // The previous set will be restored upon completion.

        var interactions = new Set(prevInteractions);
        interactions.add(interaction);
        exports.__interactionsRef.current = interactions;
        var subscriber = exports.__subscriberRef.current;
        var returnValue;

        try {
          if (subscriber !== null) {
            subscriber.onInteractionTraced(interaction);
          }
        } finally {
          try {
            if (subscriber !== null) {
              subscriber.onWorkStarted(interactions, threadID);
            }
          } finally {
            try {
              returnValue = callback();
            } finally {
              exports.__interactionsRef.current = prevInteractions;

              try {
                if (subscriber !== null) {
                  subscriber.onWorkStopped(interactions, threadID);
                }
              } finally {
                interaction.__count--; // If no async work was scheduled for this interaction,
                // Notify subscribers that it's completed.

                if (subscriber !== null && interaction.__count === 0) {
                  subscriber.onInteractionScheduledWorkCompleted(interaction);
                }
              }
            }
          }
        }

        return returnValue;
      }
      function unstable_wrap(callback) {
        var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

        var wrappedInteractions = exports.__interactionsRef.current;
        var subscriber = exports.__subscriberRef.current;

        if (subscriber !== null) {
          subscriber.onWorkScheduled(wrappedInteractions, threadID);
        } // Update the pending async work count for the current interactions.
        // Update after calling subscribers in case of error.

        wrappedInteractions.forEach(function (interaction) {
          interaction.__count++;
        });
        var hasRun = false;

        function wrapped() {
          var prevInteractions = exports.__interactionsRef.current;
          exports.__interactionsRef.current = wrappedInteractions;
          subscriber = exports.__subscriberRef.current;

          try {
            var returnValue;

            try {
              if (subscriber !== null) {
                subscriber.onWorkStarted(wrappedInteractions, threadID);
              }
            } finally {
              try {
                returnValue = callback.apply(undefined, arguments);
              } finally {
                exports.__interactionsRef.current = prevInteractions;

                if (subscriber !== null) {
                  subscriber.onWorkStopped(wrappedInteractions, threadID);
                }
              }
            }

            return returnValue;
          } finally {
            if (!hasRun) {
              // We only expect a wrapped function to be executed once,
              // But in the event that it's executed more than once–
              // Only decrement the outstanding interaction counts once.
              hasRun = true; // Update pending async counts for all wrapped interactions.
              // If this was the last scheduled async work for any of them,
              // Mark them as completed.

              wrappedInteractions.forEach(function (interaction) {
                interaction.__count--;

                if (subscriber !== null && interaction.__count === 0) {
                  subscriber.onInteractionScheduledWorkCompleted(interaction);
                }
              });
            }
          }
        }

        wrapped.cancel = function cancel() {
          subscriber = exports.__subscriberRef.current;

          try {
            if (subscriber !== null) {
              subscriber.onWorkCanceled(wrappedInteractions, threadID);
            }
          } finally {
            // Update pending async counts for all wrapped interactions.
            // If this was the last scheduled async work for any of them,
            // Mark them as completed.
            wrappedInteractions.forEach(function (interaction) {
              interaction.__count--;

              if (subscriber && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            });
          }
        };

        return wrapped;
      }

      var subscribers = null;

      {
        subscribers = new Set();
      }

      function unstable_subscribe(subscriber) {
        {
          subscribers.add(subscriber);

          if (subscribers.size === 1) {
            exports.__subscriberRef.current = {
              onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
              onInteractionTraced: onInteractionTraced,
              onWorkCanceled: onWorkCanceled,
              onWorkScheduled: onWorkScheduled,
              onWorkStarted: onWorkStarted,
              onWorkStopped: onWorkStopped,
            };
          }
        }
      }
      function unstable_unsubscribe(subscriber) {
        {
          subscribers.delete(subscriber);

          if (subscribers.size === 0) {
            exports.__subscriberRef.current = null;
          }
        }
      }

      function onInteractionTraced(interaction) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function (subscriber) {
          try {
            subscriber.onInteractionTraced(interaction);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });

        if (didCatchError) {
          throw caughtError;
        }
      }

      function onInteractionScheduledWorkCompleted(interaction) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function (subscriber) {
          try {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });

        if (didCatchError) {
          throw caughtError;
        }
      }

      function onWorkScheduled(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function (subscriber) {
          try {
            subscriber.onWorkScheduled(interactions, threadID);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });

        if (didCatchError) {
          throw caughtError;
        }
      }

      function onWorkStarted(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function (subscriber) {
          try {
            subscriber.onWorkStarted(interactions, threadID);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });

        if (didCatchError) {
          throw caughtError;
        }
      }

      function onWorkStopped(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function (subscriber) {
          try {
            subscriber.onWorkStopped(interactions, threadID);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });

        if (didCatchError) {
          throw caughtError;
        }
      }

      function onWorkCanceled(interactions, threadID) {
        var didCatchError = false;
        var caughtError = null;
        subscribers.forEach(function (subscriber) {
          try {
            subscriber.onWorkCanceled(interactions, threadID);
          } catch (error) {
            if (!didCatchError) {
              didCatchError = true;
              caughtError = error;
            }
          }
        });

        if (didCatchError) {
          throw caughtError;
        }
      }

      exports.unstable_clear = unstable_clear;
      exports.unstable_getCurrent = unstable_getCurrent;
      exports.unstable_getThreadID = unstable_getThreadID;
      exports.unstable_subscribe = unstable_subscribe;
      exports.unstable_trace = unstable_trace;
      exports.unstable_unsubscribe = unstable_unsubscribe;
      exports.unstable_wrap = unstable_wrap;
    })();
  }
});

var tracing = createCommonjsModule(function (module) {
  {
    module.exports = schedulerTracing_development;
  }
});

var reactReconciler_development = createCommonjsModule(function (module) {
  {
    module.exports = function $$$reconciler($$$hostConfig) {
      var _assign = objectAssign;
      var React = react;
      var checkPropTypes = checkPropTypes_1;
      var Scheduler = scheduler;
      var tracing$1 = tracing;

      var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
      // Current owner and dispatcher used to share the same ref,
      // but PR #14548 split them out to better support the react-debug-tools package.

      if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
        ReactSharedInternals.ReactCurrentDispatcher = {
          current: null,
        };
      }

      if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
        ReactSharedInternals.ReactCurrentBatchConfig = {
          suspense: null,
        };
      }

      // by calls to these methods by a Babel plugin.
      //
      // In PROD (or in packages without access to React internals),
      // they are left as they are instead.

      function warn(format) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          printWarning('warn', format, args);
        }
      }
      function error(format) {
        {
          for (
            var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning('error', format, args);
        }
      }

      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var hasExistingStack =
            args.length > 0 &&
            typeof args[args.length - 1] === 'string' &&
            args[args.length - 1].indexOf('\n    in') === 0;

          if (!hasExistingStack) {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();

            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
          }

          var argsWithFormat = args.map(function (item) {
            return '' + item;
          }); // Careful: RN currently depends on this prefix

          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat);

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            var argIndex = 0;
            var message =
              'Warning: ' +
              format.replace(/%s/g, function () {
                return args[argIndex++];
              });
            throw new Error(message);
          } catch (x) {}
        }
      }

      var FunctionComponent = 0;
      var ClassComponent = 1;
      var IndeterminateComponent = 2; // Before we know whether it is function or class

      var HostRoot = 3; // Root of a host tree. Could be nested inside another node.

      var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.

      var HostComponent = 5;
      var HostText = 6;
      var Fragment = 7;
      var Mode = 8;
      var ContextConsumer = 9;
      var ContextProvider = 10;
      var ForwardRef = 11;
      var Profiler = 12;
      var SuspenseComponent = 13;
      var MemoComponent = 14;
      var SimpleMemoComponent = 15;
      var LazyComponent = 16;
      var IncompleteClassComponent = 17;
      var DehydratedFragment = 18;
      var SuspenseListComponent = 19;
      var FundamentalComponent = 20;
      var ScopeComponent = 21;
      var Block = 22;

      /**
       * `ReactInstanceMap` maintains a mapping from a public facing stateful
       * instance (key) and the internal representation (value). This allows public
       * methods to accept the user facing instance as an argument and map them back
       * to internal methods.
       *
       * Note that this module is currently shared and assumed to be stateless.
       * If this becomes an actual Map, that will break.
       */
      function get(key) {
        return key._reactInternalFiber;
      }
      function set(key, value) {
        key._reactInternalFiber = value;
      }

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') {
          return null;
        }

        var maybeIterator =
          (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL];

        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }

        return null;
      }

      var Uninitialized = -1;
      var Pending = 0;
      var Resolved = 1;
      var Rejected = 2;
      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved ? lazyComponent._result : null;
      }
      function initializeLazyComponentType(lazyComponent) {
        if (lazyComponent._status === Uninitialized) {
          lazyComponent._status = Pending;
          var ctor = lazyComponent._ctor;
          var thenable = ctor();
          lazyComponent._result = thenable;
          thenable.then(
            function (moduleObject) {
              if (lazyComponent._status === Pending) {
                var defaultExport = moduleObject.default;

                {
                  if (defaultExport === undefined) {
                    error(
                      'lazy: Expected the result of a dynamic import() call. ' +
                        'Instead received: %s\n\nYour code should look like: \n  ' +
                        "const MyComponent = lazy(() => import('./MyComponent'))",
                      moduleObject
                    );
                  }
                }

                lazyComponent._status = Resolved;
                lazyComponent._result = defaultExport;
              }
            },
            function (error) {
              if (lazyComponent._status === Pending) {
                lazyComponent._status = Rejected;
                lazyComponent._result = error;
              }
            }
          );
        }
      }

      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
      }

      function getComponentName(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }

        {
          if (typeof type.tag === 'number') {
            error(
              'Received an unexpected object in getComponentName(). ' +
                'This is likely a bug in React. Please file an issue.'
            );
          }
        }

        if (typeof type === 'function') {
          return type.displayName || type.name || null;
        }

        if (typeof type === 'string') {
          return type;
        }

        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return 'Fragment';

          case REACT_PORTAL_TYPE:
            return 'Portal';

          case REACT_PROFILER_TYPE:
            return 'Profiler';

          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';

          case REACT_SUSPENSE_TYPE:
            return 'Suspense';

          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }

        if (typeof type === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return 'Context.Consumer';

            case REACT_PROVIDER_TYPE:
              return 'Context.Provider';

            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');

            case REACT_MEMO_TYPE:
              return getComponentName(type.type);

            case REACT_BLOCK_TYPE:
              return getComponentName(type.render);

            case REACT_LAZY_TYPE: {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);

              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }

              break;
            }
          }
        }

        return null;
      }

      // Don't change these two values. They're used by React Dev Tools.
      var NoEffect =
        /*              */
        0;
      var PerformedWork =
        /*         */
        1; // You can change the rest (and add more).

      var Placement =
        /*             */
        2;
      var Update =
        /*                */
        4;
      var PlacementAndUpdate =
        /*    */
        6;
      var Deletion =
        /*              */
        8;
      var ContentReset =
        /*          */
        16;
      var Callback =
        /*              */
        32;
      var DidCapture =
        /*            */
        64;
      var Ref =
        /*                   */
        128;
      var Snapshot =
        /*              */
        256;
      var Passive =
        /*               */
        512;
      var Hydrating =
        /*             */
        1024;
      var HydratingAndUpdate =
        /*    */
        1028; // Passive & Update & Callback & Ref & Snapshot

      var LifecycleEffectMask =
        /*   */
        932; // Union of all host effects

      var HostEffectMask =
        /*        */
        2047;
      var Incomplete =
        /*            */
        2048;
      var ShouldCapture =
        /*         */
        4096;

      var enableProfilerTimer = true; // Trace which interactions trigger each commit.

      var enableFundamentalAPI = false; // Experimental Scope support.
      var warnAboutStringRefs = false;

      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      function getNearestMountedFiber(fiber) {
        var node = fiber;
        var nearestMounted = fiber;

        if (!fiber.alternate) {
          // If there is no alternate, this might be a new tree that isn't inserted
          // yet. If it is, then it will have a pending insertion effect on it.
          var nextNode = node;

          do {
            node = nextNode;

            if ((node.effectTag & (Placement | Hydrating)) !== NoEffect) {
              // This is an insertion or in-progress hydration. The nearest possible
              // mounted fiber is the parent but we need to continue to figure out
              // if that one is still mounted.
              nearestMounted = node.return;
            }

            nextNode = node.return;
          } while (nextNode);
        } else {
          while (node.return) {
            node = node.return;
          }
        }

        if (node.tag === HostRoot) {
          // TODO: Check if this was a nested HostRoot when used with
          // renderContainerIntoSubtree.
          return nearestMounted;
        } // If we didn't hit the root, that means that we're in an disconnected tree
        // that has been unmounted.

        return null;
      }
      function isFiberMounted(fiber) {
        return getNearestMountedFiber(fiber) === fiber;
      }
      function isMounted(component) {
        {
          var owner = ReactCurrentOwner.current;

          if (owner !== null && owner.tag === ClassComponent) {
            var ownerFiber = owner;
            var instance = ownerFiber.stateNode;

            if (!instance._warnedAboutRefsInRender) {
              error(
                '%s is accessing isMounted inside its render() function. ' +
                  'render() should be a pure function of props and state. It should ' +
                  'never access something that requires stale data from the previous ' +
                  'render, such as refs. Move this logic to componentDidMount and ' +
                  'componentDidUpdate instead.',
                getComponentName(ownerFiber.type) || 'A component'
              );
            }

            instance._warnedAboutRefsInRender = true;
          }
        }

        var fiber = get(component);

        if (!fiber) {
          return false;
        }

        return getNearestMountedFiber(fiber) === fiber;
      }

      function assertIsMounted(fiber) {
        if (!(getNearestMountedFiber(fiber) === fiber)) {
          {
            throw Error('Unable to find node on an unmounted component.');
          }
        }
      }

      function findCurrentFiberUsingSlowPath(fiber) {
        var alternate = fiber.alternate;

        if (!alternate) {
          // If there is no alternate, then we only need to check if it is mounted.
          var nearestMounted = getNearestMountedFiber(fiber);

          if (!(nearestMounted !== null)) {
            {
              throw Error('Unable to find node on an unmounted component.');
            }
          }

          if (nearestMounted !== fiber) {
            return null;
          }

          return fiber;
        } // If we have two possible branches, we'll walk backwards up to the root
        // to see what path the root points to. On the way we may hit one of the
        // special cases and we'll deal with them.

        var a = fiber;
        var b = alternate;

        while (true) {
          var parentA = a.return;

          if (parentA === null) {
            // We're at the root.
            break;
          }

          var parentB = parentA.alternate;

          if (parentB === null) {
            // There is no alternate. This is an unusual case. Currently, it only
            // happens when a Suspense component is hidden. An extra fragment fiber
            // is inserted in between the Suspense fiber and its children. Skip
            // over this extra fragment fiber and proceed to the next parent.
            var nextParent = parentA.return;

            if (nextParent !== null) {
              a = b = nextParent;
              continue;
            } // If there's no parent, we're at the root.

            break;
          } // If both copies of the parent fiber point to the same child, we can
          // assume that the child is current. This happens when we bailout on low
          // priority: the bailed out fiber's child reuses the current child.

          if (parentA.child === parentB.child) {
            var child = parentA.child;

            while (child) {
              if (child === a) {
                // We've determined that A is the current branch.
                assertIsMounted(parentA);
                return fiber;
              }

              if (child === b) {
                // We've determined that B is the current branch.
                assertIsMounted(parentA);
                return alternate;
              }

              child = child.sibling;
            } // We should never have an alternate for any mounting node. So the only
            // way this could possibly happen is if this was unmounted, if at all.

            {
              {
                throw Error('Unable to find node on an unmounted component.');
              }
            }
          }

          if (a.return !== b.return) {
            // The return pointer of A and the return pointer of B point to different
            // fibers. We assume that return pointers never criss-cross, so A must
            // belong to the child set of A.return, and B must belong to the child
            // set of B.return.
            a = parentA;
            b = parentB;
          } else {
            // The return pointers point to the same fiber. We'll have to use the
            // default, slow path: scan the child sets of each parent alternate to see
            // which child belongs to which set.
            //
            // Search parent A's child set
            var didFindChild = false;
            var _child = parentA.child;

            while (_child) {
              if (_child === a) {
                didFindChild = true;
                a = parentA;
                b = parentB;
                break;
              }

              if (_child === b) {
                didFindChild = true;
                b = parentA;
                a = parentB;
                break;
              }

              _child = _child.sibling;
            }

            if (!didFindChild) {
              // Search parent B's child set
              _child = parentB.child;

              while (_child) {
                if (_child === a) {
                  didFindChild = true;
                  a = parentB;
                  b = parentA;
                  break;
                }

                if (_child === b) {
                  didFindChild = true;
                  b = parentB;
                  a = parentA;
                  break;
                }

                _child = _child.sibling;
              }

              if (!didFindChild) {
                {
                  throw Error(
                    'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'
                  );
                }
              }
            }
          }

          if (!(a.alternate === b)) {
            {
              throw Error(
                "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
              );
            }
          }
        } // If the root is not a host container, we're in a disconnected tree. I.e.
        // unmounted.

        if (!(a.tag === HostRoot)) {
          {
            throw Error('Unable to find node on an unmounted component.');
          }
        }

        if (a.stateNode.current === a) {
          // We've determined that A is the current branch.
          return fiber;
        } // Otherwise B has to be current branch.

        return alternate;
      }
      function findCurrentHostFiber(parent) {
        var currentParent = findCurrentFiberUsingSlowPath(parent);

        if (!currentParent) {
          return null;
        } // Next we'll drill down this component to find the first HostComponent/Text.

        var node = currentParent;

        while (true) {
          if (node.tag === HostComponent || node.tag === HostText) {
            return node;
          } else if (node.child) {
            node.child.return = node;
            node = node.child;
            continue;
          }

          if (node === currentParent) {
            return null;
          }

          while (!node.sibling) {
            if (!node.return || node.return === currentParent) {
              return null;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        } // Flow needs the return null here, but ESLint complains about it.
        // eslint-disable-next-line no-unreachable

        return null;
      }
      function findCurrentHostFiberWithNoPortals(parent) {
        var currentParent = findCurrentFiberUsingSlowPath(parent);

        if (!currentParent) {
          return null;
        } // Next we'll drill down this component to find the first HostComponent/Text.

        var node = currentParent;

        while (true) {
          if (node.tag === HostComponent || node.tag === HostText || enableFundamentalAPI) {
            return node;
          } else if (node.child && node.tag !== HostPortal) {
            node.child.return = node;
            node = node.child;
            continue;
          }

          if (node === currentParent) {
            return null;
          }

          while (!node.sibling) {
            if (!node.return || node.return === currentParent) {
              return null;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        } // Flow needs the return null here, but ESLint complains about it.
        // eslint-disable-next-line no-unreachable

        return null;
      }

      // This is a host config that's used for the `react-reconciler` package on npm.
      // It is only used by third-party renderers.
      //
      // Its API lets you pass the host config as an argument.
      // However, inside the `react-reconciler` we treat host config as a module.
      // This file is a shim between two worlds.
      //
      // It works because the `react-reconciler` bundle is wrapped in something like:
      //
      // module.exports = function ($$$config) {
      //   /* reconciler code */
      // }
      //
      // So `$$$config` looks like a global variable, but it's
      // really an argument to a top-level wrapping function.
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      // eslint-disable-line no-undef
      var getPublicInstance = $$$hostConfig.getPublicInstance;
      var getRootHostContext = $$$hostConfig.getRootHostContext;
      var getChildHostContext = $$$hostConfig.getChildHostContext;
      var prepareForCommit = $$$hostConfig.prepareForCommit;
      var resetAfterCommit = $$$hostConfig.resetAfterCommit;
      var createInstance = $$$hostConfig.createInstance;
      var appendInitialChild = $$$hostConfig.appendInitialChild;
      var finalizeInitialChildren = $$$hostConfig.finalizeInitialChildren;
      var prepareUpdate = $$$hostConfig.prepareUpdate;
      var shouldSetTextContent = $$$hostConfig.shouldSetTextContent;
      var shouldDeprioritizeSubtree = $$$hostConfig.shouldDeprioritizeSubtree;
      var createTextInstance = $$$hostConfig.createTextInstance;
      var scheduleTimeout = $$$hostConfig.setTimeout;
      var cancelTimeout = $$$hostConfig.clearTimeout;
      var noTimeout = $$$hostConfig.noTimeout;
      var now = $$$hostConfig.now;
      var isPrimaryRenderer = $$$hostConfig.isPrimaryRenderer;
      var warnsIfNotActing = $$$hostConfig.warnsIfNotActing;
      var supportsMutation = $$$hostConfig.supportsMutation;
      var supportsPersistence = $$$hostConfig.supportsPersistence;
      var supportsHydration = $$$hostConfig.supportsHydration;
      var DEPRECATED_mountResponderInstance = $$$hostConfig.DEPRECATED_mountResponderInstance;
      var DEPRECATED_unmountResponderInstance = $$$hostConfig.DEPRECATED_unmountResponderInstance;
      var getFundamentalComponentInstance = $$$hostConfig.getFundamentalComponentInstance;
      var mountFundamentalComponent = $$$hostConfig.mountFundamentalComponent;
      var shouldUpdateFundamentalComponent = $$$hostConfig.shouldUpdateFundamentalComponent;
      var getInstanceFromNode = $$$hostConfig.getInstanceFromNode;
      var beforeRemoveInstance = $$$hostConfig.beforeRemoveInstance; // -------------------
      //      Mutation
      //     (optional)
      // -------------------

      var appendChild = $$$hostConfig.appendChild;
      var appendChildToContainer = $$$hostConfig.appendChildToContainer;
      var commitTextUpdate = $$$hostConfig.commitTextUpdate;
      var commitMount = $$$hostConfig.commitMount;
      var commitUpdate = $$$hostConfig.commitUpdate;
      var insertBefore = $$$hostConfig.insertBefore;
      var insertInContainerBefore = $$$hostConfig.insertInContainerBefore;
      var removeChild = $$$hostConfig.removeChild;
      var removeChildFromContainer = $$$hostConfig.removeChildFromContainer;
      var resetTextContent = $$$hostConfig.resetTextContent;
      var hideInstance = $$$hostConfig.hideInstance;
      var hideTextInstance = $$$hostConfig.hideTextInstance;
      var unhideInstance = $$$hostConfig.unhideInstance;
      var unhideTextInstance = $$$hostConfig.unhideTextInstance;
      var updateFundamentalComponent = $$$hostConfig.updateFundamentalComponent;
      var unmountFundamentalComponent = $$$hostConfig.unmountFundamentalComponent; // -------------------
      //     Persistence
      //     (optional)
      // -------------------

      var cloneInstance = $$$hostConfig.cloneInstance;
      var createContainerChildSet = $$$hostConfig.createContainerChildSet;
      var appendChildToContainerChildSet = $$$hostConfig.appendChildToContainerChildSet;
      var finalizeContainerChildren = $$$hostConfig.finalizeContainerChildren;
      var replaceContainerChildren = $$$hostConfig.replaceContainerChildren;
      var cloneHiddenInstance = $$$hostConfig.cloneHiddenInstance;
      var cloneHiddenTextInstance = $$$hostConfig.cloneHiddenTextInstance;
      var cloneFundamentalInstance = $$$hostConfig.cloneInstance; // -------------------
      //     Hydration
      //     (optional)
      // -------------------

      var canHydrateInstance = $$$hostConfig.canHydrateInstance;
      var canHydrateTextInstance = $$$hostConfig.canHydrateTextInstance;
      var canHydrateSuspenseInstance = $$$hostConfig.canHydrateSuspenseInstance;
      var isSuspenseInstancePending = $$$hostConfig.isSuspenseInstancePending;
      var isSuspenseInstanceFallback = $$$hostConfig.isSuspenseInstanceFallback;
      var registerSuspenseInstanceRetry = $$$hostConfig.registerSuspenseInstanceRetry;
      var getNextHydratableSibling = $$$hostConfig.getNextHydratableSibling;
      var getFirstHydratableChild = $$$hostConfig.getFirstHydratableChild;
      var hydrateInstance = $$$hostConfig.hydrateInstance;
      var hydrateTextInstance = $$$hostConfig.hydrateTextInstance;
      var hydrateSuspenseInstance = $$$hostConfig.hydrateSuspenseInstance;
      var getNextHydratableInstanceAfterSuspenseInstance = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance;
      var commitHydratedContainer = $$$hostConfig.commitHydratedContainer;
      var commitHydratedSuspenseInstance = $$$hostConfig.commitHydratedSuspenseInstance;
      var clearSuspenseBoundary = $$$hostConfig.clearSuspenseBoundary;
      var clearSuspenseBoundaryFromContainer = $$$hostConfig.clearSuspenseBoundaryFromContainer;
      var didNotMatchHydratedContainerTextInstance = $$$hostConfig.didNotMatchHydratedContainerTextInstance;
      var didNotMatchHydratedTextInstance = $$$hostConfig.didNotMatchHydratedTextInstance;
      var didNotHydrateContainerInstance = $$$hostConfig.didNotHydrateContainerInstance;
      var didNotHydrateInstance = $$$hostConfig.didNotHydrateInstance;
      var didNotFindHydratableContainerInstance = $$$hostConfig.didNotFindHydratableContainerInstance;
      var didNotFindHydratableContainerTextInstance = $$$hostConfig.didNotFindHydratableContainerTextInstance;
      var didNotFindHydratableContainerSuspenseInstance = $$$hostConfig.didNotFindHydratableContainerSuspenseInstance;
      var didNotFindHydratableInstance = $$$hostConfig.didNotFindHydratableInstance;
      var didNotFindHydratableTextInstance = $$$hostConfig.didNotFindHydratableTextInstance;
      var didNotFindHydratableSuspenseInstance = $$$hostConfig.didNotFindHydratableSuspenseInstance;

      var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
      function describeComponentFrame(name, source, ownerName) {
        var sourceInfo = '';

        if (source) {
          var path = source.fileName;
          var fileName = path.replace(BEFORE_SLASH_RE, '');

          {
            // In DEV, include code for a common special case:
            // prefer "folder/index.js" instead of just "index.js".
            if (/^index\./.test(fileName)) {
              var match = path.match(BEFORE_SLASH_RE);

              if (match) {
                var pathBeforeSlash = match[1];

                if (pathBeforeSlash) {
                  var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                  fileName = folderName + '/' + fileName;
                }
              }
            }
          }

          sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
        } else if (ownerName) {
          sourceInfo = ' (created by ' + ownerName + ')';
        }

        return '\n    in ' + (name || 'Unknown') + sourceInfo;
      }

      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

      function describeFiber(fiber) {
        switch (fiber.tag) {
          case HostRoot:
          case HostPortal:
          case HostText:
          case Fragment:
          case ContextProvider:
          case ContextConsumer:
            return '';

          default:
            var owner = fiber._debugOwner;
            var source = fiber._debugSource;
            var name = getComponentName(fiber.type);
            var ownerName = null;

            if (owner) {
              ownerName = getComponentName(owner.type);
            }

            return describeComponentFrame(name, source, ownerName);
        }
      }

      function getStackByFiberInDevAndProd(workInProgress) {
        var info = '';
        var node = workInProgress;

        do {
          info += describeFiber(node);
          node = node.return;
        } while (node);

        return info;
      }
      var current = null;
      var isRendering = false;
      function getCurrentFiberOwnerNameInDevOrNull() {
        {
          if (current === null) {
            return null;
          }

          var owner = current._debugOwner;

          if (owner !== null && typeof owner !== 'undefined') {
            return getComponentName(owner.type);
          }
        }

        return null;
      }
      function getCurrentFiberStackInDev() {
        {
          if (current === null) {
            return '';
          } // Safe because if current fiber exists, we are reconciling,
          // and it is guaranteed to be the work-in-progress version.

          return getStackByFiberInDevAndProd(current);
        }
      }
      function resetCurrentFiber() {
        {
          ReactDebugCurrentFrame.getCurrentStack = null;
          current = null;
          isRendering = false;
        }
      }
      function setCurrentFiber(fiber) {
        {
          ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackInDev;
          current = fiber;
          isRendering = false;
        }
      }
      function setIsRendering(rendering) {
        {
          isRendering = rendering;
        }
      }

      // Prefix measurements so that it's possible to filter them.
      // Longer prefixes are hard to read in DevTools.
      var reactEmoji = '\u269B';
      var warningEmoji = '\u26D4';
      var supportsUserTiming =
        typeof performance !== 'undefined' &&
        typeof performance.mark === 'function' &&
        typeof performance.clearMarks === 'function' &&
        typeof performance.measure === 'function' &&
        typeof performance.clearMeasures === 'function'; // Keep track of current fiber so that we know the path to unwind on pause.
      // TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?

      var currentFiber = null; // If we're in the middle of user code, which fiber and method is it?
      // Reusing `currentFiber` would be confusing for this because user code fiber
      // can change during commit phase too, but we don't need to unwind it (since
      // lifecycles in the commit phase don't resemble a tree).

      var currentPhase = null;
      var currentPhaseFiber = null; // Did lifecycle hook schedule an update? This is often a performance problem,
      // so we will keep track of it, and include it in the report.
      // Track commits caused by cascading updates.

      var isCommitting = false;
      var hasScheduledUpdateInCurrentCommit = false;
      var hasScheduledUpdateInCurrentPhase = false;
      var commitCountInCurrentWorkLoop = 0;
      var effectCountInCurrentCommit = 0;
      // to avoid stretch the commit phase with measurement overhead.

      var labelsInCurrentCommit = new Set();

      var formatMarkName = function (markName) {
        return reactEmoji + ' ' + markName;
      };

      var formatLabel = function (label, warning) {
        var prefix = warning ? warningEmoji + ' ' : reactEmoji + ' ';
        var suffix = warning ? ' Warning: ' + warning : '';
        return '' + prefix + label + suffix;
      };

      var beginMark = function (markName) {
        performance.mark(formatMarkName(markName));
      };

      var clearMark = function (markName) {
        performance.clearMarks(formatMarkName(markName));
      };

      var endMark = function (label, markName, warning) {
        var formattedMarkName = formatMarkName(markName);
        var formattedLabel = formatLabel(label, warning);

        try {
          performance.measure(formattedLabel, formattedMarkName);
        } catch (err) {} // If previous mark was missing for some reason, this will throw.
        // This could only happen if React crashed in an unexpected place earlier.
        // Don't pile on with more errors.
        // Clear marks immediately to avoid growing buffer.

        performance.clearMarks(formattedMarkName);
        performance.clearMeasures(formattedLabel);
      };

      var getFiberMarkName = function (label, debugID) {
        return label + ' (#' + debugID + ')';
      };

      var getFiberLabel = function (componentName, isMounted, phase) {
        if (phase === null) {
          // These are composite component total time measurements.
          return componentName + ' [' + (isMounted ? 'update' : 'mount') + ']';
        } else {
          // Composite component methods.
          return componentName + '.' + phase;
        }
      };

      var beginFiberMark = function (fiber, phase) {
        var componentName = getComponentName(fiber.type) || 'Unknown';
        var debugID = fiber._debugID;
        var isMounted = fiber.alternate !== null;
        var label = getFiberLabel(componentName, isMounted, phase);

        if (isCommitting && labelsInCurrentCommit.has(label)) {
          // During the commit phase, we don't show duplicate labels because
          // there is a fixed overhead for every measurement, and we don't
          // want to stretch the commit phase beyond necessary.
          return false;
        }

        labelsInCurrentCommit.add(label);
        var markName = getFiberMarkName(label, debugID);
        beginMark(markName);
        return true;
      };

      var clearFiberMark = function (fiber, phase) {
        var componentName = getComponentName(fiber.type) || 'Unknown';
        var debugID = fiber._debugID;
        var isMounted = fiber.alternate !== null;
        var label = getFiberLabel(componentName, isMounted, phase);
        var markName = getFiberMarkName(label, debugID);
        clearMark(markName);
      };

      var endFiberMark = function (fiber, phase, warning) {
        var componentName = getComponentName(fiber.type) || 'Unknown';
        var debugID = fiber._debugID;
        var isMounted = fiber.alternate !== null;
        var label = getFiberLabel(componentName, isMounted, phase);
        var markName = getFiberMarkName(label, debugID);
        endMark(label, markName, warning);
      };

      var shouldIgnoreFiber = function (fiber) {
        // Host components should be skipped in the timeline.
        // We could check typeof fiber.type, but does this work with RN?
        switch (fiber.tag) {
          case HostRoot:
          case HostComponent:
          case HostText:
          case HostPortal:
          case Fragment:
          case ContextProvider:
          case ContextConsumer:
          case Mode:
            return true;

          default:
            return false;
        }
      };

      var clearPendingPhaseMeasurement = function () {
        if (currentPhase !== null && currentPhaseFiber !== null) {
          clearFiberMark(currentPhaseFiber, currentPhase);
        }

        currentPhaseFiber = null;
        currentPhase = null;
        hasScheduledUpdateInCurrentPhase = false;
      };

      var pauseTimers = function () {
        // Stops all currently active measurements so that they can be resumed
        // if we continue in a later deferred loop from the same unit of work.
        var fiber = currentFiber;

        while (fiber) {
          if (fiber._debugIsCurrentlyTiming) {
            endFiberMark(fiber, null, null);
          }

          fiber = fiber.return;
        }
      };

      var resumeTimersRecursively = function (fiber) {
        if (fiber.return !== null) {
          resumeTimersRecursively(fiber.return);
        }

        if (fiber._debugIsCurrentlyTiming) {
          beginFiberMark(fiber, null);
        }
      };

      var resumeTimers = function () {
        // Resumes all measurements that were active during the last deferred loop.
        if (currentFiber !== null) {
          resumeTimersRecursively(currentFiber);
        }
      };

      function recordEffect() {
        {
          effectCountInCurrentCommit++;
        }
      }
      function recordScheduleUpdate() {
        {
          if (isCommitting) {
            hasScheduledUpdateInCurrentCommit = true;
          }

          if (
            currentPhase !== null &&
            currentPhase !== 'componentWillMount' &&
            currentPhase !== 'componentWillReceiveProps'
          ) {
            hasScheduledUpdateInCurrentPhase = true;
          }
        }
      }
      function startWorkTimer(fiber) {
        {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
            return;
          } // If we pause, this is the fiber to unwind from.

          currentFiber = fiber;

          if (!beginFiberMark(fiber, null)) {
            return;
          }

          fiber._debugIsCurrentlyTiming = true;
        }
      }
      function cancelWorkTimer(fiber) {
        {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
            return;
          } // Remember we shouldn't complete measurement for this fiber.
          // Otherwise flamechart will be deep even for small updates.

          fiber._debugIsCurrentlyTiming = false;
          clearFiberMark(fiber, null);
        }
      }
      function stopWorkTimer(fiber) {
        {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
            return;
          } // If we pause, its parent is the fiber to unwind from.

          currentFiber = fiber.return;

          if (!fiber._debugIsCurrentlyTiming) {
            return;
          }

          fiber._debugIsCurrentlyTiming = false;
          endFiberMark(fiber, null, null);
        }
      }
      function stopFailedWorkTimer(fiber) {
        {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) {
            return;
          } // If we pause, its parent is the fiber to unwind from.

          currentFiber = fiber.return;

          if (!fiber._debugIsCurrentlyTiming) {
            return;
          }

          fiber._debugIsCurrentlyTiming = false;
          var warning =
            fiber.tag === SuspenseComponent
              ? 'Rendering was suspended'
              : 'An error was thrown inside this error boundary';
          endFiberMark(fiber, null, warning);
        }
      }
      function startPhaseTimer(fiber, phase) {
        {
          if (!supportsUserTiming) {
            return;
          }

          clearPendingPhaseMeasurement();

          if (!beginFiberMark(fiber, phase)) {
            return;
          }

          currentPhaseFiber = fiber;
          currentPhase = phase;
        }
      }
      function stopPhaseTimer() {
        {
          if (!supportsUserTiming) {
            return;
          }

          if (currentPhase !== null && currentPhaseFiber !== null) {
            var warning = hasScheduledUpdateInCurrentPhase ? 'Scheduled a cascading update' : null;
            endFiberMark(currentPhaseFiber, currentPhase, warning);
          }

          currentPhase = null;
          currentPhaseFiber = null;
        }
      }
      function startWorkLoopTimer(nextUnitOfWork) {
        {
          currentFiber = nextUnitOfWork;

          if (!supportsUserTiming) {
            return;
          }

          commitCountInCurrentWorkLoop = 0; // This is top level call.
          // Any other measurements are performed within.

          beginMark('(React Tree Reconciliation)'); // Resume any measurements that were in progress during the last loop.

          resumeTimers();
        }
      }
      function stopWorkLoopTimer(interruptedBy, didCompleteRoot) {
        {
          if (!supportsUserTiming) {
            return;
          }

          var warning = null;

          if (interruptedBy !== null) {
            if (interruptedBy.tag === HostRoot) {
              warning = 'A top-level update interrupted the previous render';
            } else {
              var componentName = getComponentName(interruptedBy.type) || 'Unknown';
              warning = 'An update to ' + componentName + ' interrupted the previous render';
            }
          } else if (commitCountInCurrentWorkLoop > 1) {
            warning = 'There were cascading updates';
          }

          commitCountInCurrentWorkLoop = 0;
          var label = didCompleteRoot
            ? '(React Tree Reconciliation: Completed Root)'
            : '(React Tree Reconciliation: Yielded)'; // Pause any measurements until the next loop.

          pauseTimers();
          endMark(label, '(React Tree Reconciliation)', warning);
        }
      }
      function startCommitTimer() {
        {
          if (!supportsUserTiming) {
            return;
          }

          isCommitting = true;
          hasScheduledUpdateInCurrentCommit = false;
          labelsInCurrentCommit.clear();
          beginMark('(Committing Changes)');
        }
      }
      function stopCommitTimer() {
        {
          if (!supportsUserTiming) {
            return;
          }

          var warning = null;

          if (hasScheduledUpdateInCurrentCommit) {
            warning = 'Lifecycle hook scheduled a cascading update';
          } else if (commitCountInCurrentWorkLoop > 0) {
            warning = 'Caused by a cascading update in earlier commit';
          }

          hasScheduledUpdateInCurrentCommit = false;
          commitCountInCurrentWorkLoop++;
          isCommitting = false;
          labelsInCurrentCommit.clear();
          endMark('(Committing Changes)', '(Committing Changes)', warning);
        }
      }
      function startCommitSnapshotEffectsTimer() {
        {
          if (!supportsUserTiming) {
            return;
          }

          effectCountInCurrentCommit = 0;
          beginMark('(Committing Snapshot Effects)');
        }
      }
      function stopCommitSnapshotEffectsTimer() {
        {
          if (!supportsUserTiming) {
            return;
          }

          var count = effectCountInCurrentCommit;
          effectCountInCurrentCommit = 0;
          endMark('(Committing Snapshot Effects: ' + count + ' Total)', '(Committing Snapshot Effects)', null);
        }
      }
      function startCommitHostEffectsTimer() {
        {
          if (!supportsUserTiming) {
            return;
          }

          effectCountInCurrentCommit = 0;
          beginMark('(Committing Host Effects)');
        }
      }
      function stopCommitHostEffectsTimer() {
        {
          if (!supportsUserTiming) {
            return;
          }

          var count = effectCountInCurrentCommit;
          effectCountInCurrentCommit = 0;
          endMark('(Committing Host Effects: ' + count + ' Total)', '(Committing Host Effects)', null);
        }
      }
      function startCommitLifeCyclesTimer() {
        {
          if (!supportsUserTiming) {
            return;
          }

          effectCountInCurrentCommit = 0;
          beginMark('(Calling Lifecycle Methods)');
        }
      }
      function stopCommitLifeCyclesTimer() {
        {
          if (!supportsUserTiming) {
            return;
          }

          var count = effectCountInCurrentCommit;
          effectCountInCurrentCommit = 0;
          endMark('(Calling Lifecycle Methods: ' + count + ' Total)', '(Calling Lifecycle Methods)', null);
        }
      }

      var valueStack = [];
      var fiberStack;

      {
        fiberStack = [];
      }

      var index = -1;

      function createCursor(defaultValue) {
        return {
          current: defaultValue,
        };
      }

      function pop(cursor, fiber) {
        if (index < 0) {
          {
            error('Unexpected pop.');
          }

          return;
        }

        {
          if (fiber !== fiberStack[index]) {
            error('Unexpected Fiber popped.');
          }
        }

        cursor.current = valueStack[index];
        valueStack[index] = null;

        {
          fiberStack[index] = null;
        }

        index--;
      }

      function push(cursor, value, fiber) {
        index++;
        valueStack[index] = cursor.current;

        {
          fiberStack[index] = fiber;
        }

        cursor.current = value;
      }

      var warnedAboutMissingGetChildContext;

      {
        warnedAboutMissingGetChildContext = {};
      }

      var emptyContextObject = {};

      {
        Object.freeze(emptyContextObject);
      } // A cursor to the current merged context object on the stack.

      var contextStackCursor = createCursor(emptyContextObject); // A cursor to a boolean indicating whether the context has changed.

      var didPerformWorkStackCursor = createCursor(false); // Keep track of the previous context object that was on the stack.
      // We use this to get access to the parent context after we have already
      // pushed the next context provider, and now need to merge their contexts.

      var previousContext = emptyContextObject;

      function getUnmaskedContext(workInProgress, Component, didPushOwnContextIfProvider) {
        {
          if (didPushOwnContextIfProvider && isContextProvider(Component)) {
            // If the fiber is a context provider itself, when we read its context
            // we may have already pushed its own child context on the stack. A context
            // provider should not "see" its own child context. Therefore we read the
            // previous (parent) context instead for a context provider.
            return previousContext;
          }

          return contextStackCursor.current;
        }
      }

      function cacheContext(workInProgress, unmaskedContext, maskedContext) {
        {
          var instance = workInProgress.stateNode;
          instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
          instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
        }
      }

      function getMaskedContext(workInProgress, unmaskedContext) {
        {
          var type = workInProgress.type;
          var contextTypes = type.contextTypes;

          if (!contextTypes) {
            return emptyContextObject;
          } // Avoid recreating masked context unless unmasked context has changed.
          // Failing to do this will result in unnecessary calls to componentWillReceiveProps.
          // This may trigger infinite loops if componentWillReceiveProps calls setState.

          var instance = workInProgress.stateNode;

          if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
            return instance.__reactInternalMemoizedMaskedChildContext;
          }

          var context = {};

          for (var key in contextTypes) {
            context[key] = unmaskedContext[key];
          }

          {
            var name = getComponentName(type) || 'Unknown';
            checkPropTypes(contextTypes, context, 'context', name, getCurrentFiberStackInDev);
          } // Cache unmasked context so we can avoid recreating masked context unless necessary.
          // Context is created before the class component is instantiated so check for instance.

          if (instance) {
            cacheContext(workInProgress, unmaskedContext, context);
          }

          return context;
        }
      }

      function hasContextChanged() {
        {
          return didPerformWorkStackCursor.current;
        }
      }

      function isContextProvider(type) {
        {
          var childContextTypes = type.childContextTypes;
          return childContextTypes !== null && childContextTypes !== undefined;
        }
      }

      function popContext(fiber) {
        {
          pop(didPerformWorkStackCursor, fiber);
          pop(contextStackCursor, fiber);
        }
      }

      function popTopLevelContextObject(fiber) {
        {
          pop(didPerformWorkStackCursor, fiber);
          pop(contextStackCursor, fiber);
        }
      }

      function pushTopLevelContextObject(fiber, context, didChange) {
        {
          if (!(contextStackCursor.current === emptyContextObject)) {
            {
              throw Error(
                'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }

          push(contextStackCursor, context, fiber);
          push(didPerformWorkStackCursor, didChange, fiber);
        }
      }

      function processChildContext(fiber, type, parentContext) {
        {
          var instance = fiber.stateNode;
          var childContextTypes = type.childContextTypes; // TODO (bvaughn) Replace this behavior with an invariant() in the future.
          // It has only been added in Fiber to match the (unintentional) behavior in Stack.

          if (typeof instance.getChildContext !== 'function') {
            {
              var componentName = getComponentName(type) || 'Unknown';

              if (!warnedAboutMissingGetChildContext[componentName]) {
                warnedAboutMissingGetChildContext[componentName] = true;

                error(
                  '%s.childContextTypes is specified but there is no getChildContext() method ' +
                    'on the instance. You can either define getChildContext() on %s or remove ' +
                    'childContextTypes from it.',
                  componentName,
                  componentName
                );
              }
            }

            return parentContext;
          }

          var childContext;
          startPhaseTimer(fiber, 'getChildContext');
          childContext = instance.getChildContext();
          stopPhaseTimer();

          for (var contextKey in childContext) {
            if (!(contextKey in childContextTypes)) {
              {
                throw Error(
                  (getComponentName(type) || 'Unknown') +
                    '.getChildContext(): key "' +
                    contextKey +
                    '" is not defined in childContextTypes.'
                );
              }
            }
          }

          {
            var name = getComponentName(type) || 'Unknown';
            checkPropTypes(
              childContextTypes,
              childContext,
              'child context',
              name, // In practice, there is one case in which we won't get a stack. It's when
              // somebody calls unstable_renderSubtreeIntoContainer() and we process
              // context from the parent component instance. The stack will be missing
              // because it's outside of the reconciliation, and so the pointer has not
              // been set. This is rare and doesn't matter. We'll also remove that API.
              getCurrentFiberStackInDev
            );
          }

          return _assign({}, parentContext, {}, childContext);
        }
      }

      function pushContextProvider(workInProgress) {
        {
          var instance = workInProgress.stateNode; // We push the context as early as possible to ensure stack integrity.
          // If the instance does not exist yet, we will push null at first,
          // and replace it on the stack later when invalidating the context.

          var memoizedMergedChildContext =
            (instance && instance.__reactInternalMemoizedMergedChildContext) || emptyContextObject; // Remember the parent context so we can merge with it later.
          // Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.

          previousContext = contextStackCursor.current;
          push(contextStackCursor, memoizedMergedChildContext, workInProgress);
          push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress);
          return true;
        }
      }

      function invalidateContextProvider(workInProgress, type, didChange) {
        {
          var instance = workInProgress.stateNode;

          if (!instance) {
            {
              throw Error(
                'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }

          if (didChange) {
            // Merge parent and own context.
            // Skip this if we're not updating due to sCU.
            // This avoids unnecessarily recomputing memoized values.
            var mergedContext = processChildContext(workInProgress, type, previousContext);
            instance.__reactInternalMemoizedMergedChildContext = mergedContext; // Replace the old (or empty) context with the new one.
            // It is important to unwind the context in the reverse order.

            pop(didPerformWorkStackCursor, workInProgress);
            pop(contextStackCursor, workInProgress); // Now push the new context and mark that it has changed.

            push(contextStackCursor, mergedContext, workInProgress);
            push(didPerformWorkStackCursor, didChange, workInProgress);
          } else {
            pop(didPerformWorkStackCursor, workInProgress);
            push(didPerformWorkStackCursor, didChange, workInProgress);
          }
        }
      }

      function findCurrentUnmaskedContext(fiber) {
        {
          // Currently this is only used with renderSubtreeIntoContainer; not sure if it
          // makes sense elsewhere
          if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent)) {
            {
              throw Error(
                'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }

          var node = fiber;

          do {
            switch (node.tag) {
              case HostRoot:
                return node.stateNode.context;

              case ClassComponent: {
                var Component = node.type;

                if (isContextProvider(Component)) {
                  return node.stateNode.__reactInternalMemoizedMergedChildContext;
                }

                break;
              }
            }

            node = node.return;
          } while (node !== null);

          {
            {
              throw Error(
                'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }
        }
      }

      var BlockingRoot = 1;
      var ConcurrentRoot = 2;

      var Scheduler_runWithPriority = Scheduler.unstable_runWithPriority,
        Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback,
        Scheduler_cancelCallback = Scheduler.unstable_cancelCallback,
        Scheduler_shouldYield = Scheduler.unstable_shouldYield,
        Scheduler_requestPaint = Scheduler.unstable_requestPaint,
        Scheduler_now = Scheduler.unstable_now,
        Scheduler_getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
        Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority,
        Scheduler_UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
        Scheduler_NormalPriority = Scheduler.unstable_NormalPriority,
        Scheduler_LowPriority = Scheduler.unstable_LowPriority,
        Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;

      {
        // Provide explicit error message when production+profiling bundle of e.g.
        // react-dom is used with production (non-profiling) bundle of
        // scheduler/tracing
        if (!(tracing$1.__interactionsRef != null && tracing$1.__interactionsRef.current != null)) {
          {
            throw Error(
              'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling'
            );
          }
        }
      }

      var fakeCallbackNode = {}; // Except for NoPriority, these correspond to Scheduler priorities. We use
      // ascending numbers so we can compare them like numbers. They start at 90 to
      // avoid clashing with Scheduler's priorities.

      var ImmediatePriority = 99;
      var UserBlockingPriority = 98;
      var NormalPriority = 97;
      var LowPriority = 96;
      var IdlePriority = 95; // NoPriority is the absence of priority. Also React-only.

      var NoPriority = 90;
      var shouldYield = Scheduler_shouldYield;
      var requestPaint = Scheduler_requestPaint !== undefined ? Scheduler_requestPaint : function () {}; // Fall back gracefully if we're running an older version of Scheduler.
      var syncQueue = null;
      var immediateQueueCallbackNode = null;
      var isFlushingSyncQueue = false;
      var initialTimeMs = Scheduler_now(); // If the initial timestamp is reasonably small, use Scheduler's `now` directly.
      // This will be the case for modern browsers that support `performance.now`. In
      // older browsers, Scheduler falls back to `Date.now`, which returns a Unix
      // timestamp. In that case, subtract the module initialization time to simulate
      // the behavior of performance.now and keep our times small enough to fit
      // within 32 bits.
      // TODO: Consider lifting this into Scheduler.

      var now$1 =
        initialTimeMs < 10000
          ? Scheduler_now
          : function () {
              return Scheduler_now() - initialTimeMs;
            };
      function getCurrentPriorityLevel() {
        switch (Scheduler_getCurrentPriorityLevel()) {
          case Scheduler_ImmediatePriority:
            return ImmediatePriority;

          case Scheduler_UserBlockingPriority:
            return UserBlockingPriority;

          case Scheduler_NormalPriority:
            return NormalPriority;

          case Scheduler_LowPriority:
            return LowPriority;

          case Scheduler_IdlePriority:
            return IdlePriority;

          default: {
            {
              throw Error('Unknown priority level.');
            }
          }
        }
      }

      function reactPriorityToSchedulerPriority(reactPriorityLevel) {
        switch (reactPriorityLevel) {
          case ImmediatePriority:
            return Scheduler_ImmediatePriority;

          case UserBlockingPriority:
            return Scheduler_UserBlockingPriority;

          case NormalPriority:
            return Scheduler_NormalPriority;

          case LowPriority:
            return Scheduler_LowPriority;

          case IdlePriority:
            return Scheduler_IdlePriority;

          default: {
            {
              throw Error('Unknown priority level.');
            }
          }
        }
      }

      function runWithPriority(reactPriorityLevel, fn) {
        var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_runWithPriority(priorityLevel, fn);
      }
      function scheduleCallback(reactPriorityLevel, callback, options) {
        var priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_scheduleCallback(priorityLevel, callback, options);
      }
      function scheduleSyncCallback(callback) {
        // Push this callback into an internal queue. We'll flush these either in
        // the next tick, or earlier if something calls `flushSyncCallbackQueue`.
        if (syncQueue === null) {
          syncQueue = [callback]; // Flush the queue in the next tick, at the earliest.

          immediateQueueCallbackNode = Scheduler_scheduleCallback(
            Scheduler_ImmediatePriority,
            flushSyncCallbackQueueImpl
          );
        } else {
          // Push onto existing queue. Don't need to schedule a callback because
          // we already scheduled one when we created the queue.
          syncQueue.push(callback);
        }

        return fakeCallbackNode;
      }
      function cancelCallback(callbackNode) {
        if (callbackNode !== fakeCallbackNode) {
          Scheduler_cancelCallback(callbackNode);
        }
      }
      function flushSyncCallbackQueue() {
        if (immediateQueueCallbackNode !== null) {
          var node = immediateQueueCallbackNode;
          immediateQueueCallbackNode = null;
          Scheduler_cancelCallback(node);
        }

        flushSyncCallbackQueueImpl();
      }

      function flushSyncCallbackQueueImpl() {
        if (!isFlushingSyncQueue && syncQueue !== null) {
          // Prevent re-entrancy.
          isFlushingSyncQueue = true;
          var i = 0;

          try {
            var _isSync = true;
            var queue = syncQueue;
            runWithPriority(ImmediatePriority, function () {
              for (; i < queue.length; i++) {
                var callback = queue[i];

                do {
                  callback = callback(_isSync);
                } while (callback !== null);
              }
            });
            syncQueue = null;
          } catch (error) {
            // If something throws, leave the remaining callbacks on the queue.
            if (syncQueue !== null) {
              syncQueue = syncQueue.slice(i + 1);
            } // Resume flushing in the next tick

            Scheduler_scheduleCallback(Scheduler_ImmediatePriority, flushSyncCallbackQueue);
            throw error;
          } finally {
            isFlushingSyncQueue = false;
          }
        }
      }

      var NoMode = 0;
      var StrictMode = 1; // TODO: Remove BlockingMode and ConcurrentMode by reading from the root
      // tag instead

      var BlockingMode = 2;
      var ConcurrentMode = 4;
      var ProfileMode = 8;

      // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
      // Math.pow(2, 30) - 1
      // 0b111111111111111111111111111111
      var MAX_SIGNED_31_BIT_INT = 1073741823;

      var NoWork = 0; // TODO: Think of a better name for Never. The key difference with Idle is that
      // Never work can be committed in an inconsistent state without tearing the UI.
      // The main example is offscreen content, like a hidden subtree. So one possible
      // name is Offscreen. However, it also includes dehydrated Suspense boundaries,
      // which are inconsistent in the sense that they haven't finished yet, but
      // aren't visibly inconsistent because the server rendered HTML matches what the
      // hydrated tree would look like.

      var Never = 1; // Idle is slightly higher priority than Never. It must completely finish in
      // order to be consistent.

      var Idle = 2; // Continuous Hydration is slightly higher than Idle and is used to increase
      // priority of hover targets.

      var ContinuousHydration = 3;
      var Sync = MAX_SIGNED_31_BIT_INT;
      var Batched = Sync - 1;
      var UNIT_SIZE = 10;
      var MAGIC_NUMBER_OFFSET = Batched - 1; // 1 unit of expiration time represents 10ms.

      function msToExpirationTime(ms) {
        // Always subtract from the offset so that we don't clash with the magic number for NoWork.
        return MAGIC_NUMBER_OFFSET - ((ms / UNIT_SIZE) | 0);
      }
      function expirationTimeToMs(expirationTime) {
        return (MAGIC_NUMBER_OFFSET - expirationTime) * UNIT_SIZE;
      }

      function ceiling(num, precision) {
        return (((num / precision) | 0) + 1) * precision;
      }

      function computeExpirationBucket(currentTime, expirationInMs, bucketSizeMs) {
        return (
          MAGIC_NUMBER_OFFSET -
          ceiling(MAGIC_NUMBER_OFFSET - currentTime + expirationInMs / UNIT_SIZE, bucketSizeMs / UNIT_SIZE)
        );
      } // TODO: This corresponds to Scheduler's NormalPriority, not LowPriority. Update
      // the names to reflect.

      var LOW_PRIORITY_EXPIRATION = 5000;
      var LOW_PRIORITY_BATCH_SIZE = 250;
      function computeAsyncExpiration(currentTime) {
        return computeExpirationBucket(currentTime, LOW_PRIORITY_EXPIRATION, LOW_PRIORITY_BATCH_SIZE);
      }
      function computeSuspenseExpiration(currentTime, timeoutMs) {
        // TODO: Should we warn if timeoutMs is lower than the normal pri expiration time?
        return computeExpirationBucket(currentTime, timeoutMs, LOW_PRIORITY_BATCH_SIZE);
      } // We intentionally set a higher expiration time for interactive updates in
      // dev than in production.
      //
      // If the main thread is being blocked so long that you hit the expiration,
      // it's a problem that could be solved with better scheduling.
      //
      // People will be more likely to notice this and fix it with the long
      // expiration time in development.
      //
      // In production we opt for better UX at the risk of masking scheduling
      // problems, by expiring fast.

      var HIGH_PRIORITY_EXPIRATION = 500;
      var HIGH_PRIORITY_BATCH_SIZE = 100;
      function computeInteractiveExpiration(currentTime) {
        return computeExpirationBucket(currentTime, HIGH_PRIORITY_EXPIRATION, HIGH_PRIORITY_BATCH_SIZE);
      }
      function inferPriorityFromExpirationTime(currentTime, expirationTime) {
        if (expirationTime === Sync) {
          return ImmediatePriority;
        }

        if (expirationTime === Never || expirationTime === Idle) {
          return IdlePriority;
        }

        var msUntil = expirationTimeToMs(expirationTime) - expirationTimeToMs(currentTime);

        if (msUntil <= 0) {
          return ImmediatePriority;
        }

        if (msUntil <= HIGH_PRIORITY_EXPIRATION + HIGH_PRIORITY_BATCH_SIZE) {
          return UserBlockingPriority;
        }

        if (msUntil <= LOW_PRIORITY_EXPIRATION + LOW_PRIORITY_BATCH_SIZE) {
          return NormalPriority;
        } // TODO: Handle LowPriority
        // Assume anything lower has idle priority

        return IdlePriority;
      }

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      function is(x, y) {
        return (
          (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
        );
      }

      var objectIs = typeof Object.is === 'function' ? Object.is : is;

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      /**
       * Performs equality by iterating through keys on an object and returning false
       * when any key has values which are not strictly equal between the arguments.
       * Returns true when the values of all keys are strictly equal.
       */

      function shallowEqual(objA, objB) {
        if (objectIs(objA, objB)) {
          return true;
        }

        if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
          return false;
        }

        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);

        if (keysA.length !== keysB.length) {
          return false;
        } // Test for A's keys different from B.

        for (var i = 0; i < keysA.length; i++) {
          if (!hasOwnProperty.call(objB, keysA[i]) || !objectIs(objA[keysA[i]], objB[keysA[i]])) {
            return false;
          }
        }

        return true;
      }

      var ReactStrictModeWarnings = {
        recordUnsafeLifecycleWarnings: function (fiber, instance) {},
        flushPendingUnsafeLifecycleWarnings: function () {},
        recordLegacyContextWarning: function (fiber, instance) {},
        flushLegacyContextWarning: function () {},
        discardPendingWarnings: function () {},
      };

      {
        var findStrictRoot = function (fiber) {
          var maybeStrictRoot = null;
          var node = fiber;

          while (node !== null) {
            if (node.mode & StrictMode) {
              maybeStrictRoot = node;
            }

            node = node.return;
          }

          return maybeStrictRoot;
        };

        var setToSortedString = function (set) {
          var array = [];
          set.forEach(function (value) {
            array.push(value);
          });
          return array.sort().join(', ');
        };

        var pendingComponentWillMountWarnings = [];
        var pendingUNSAFE_ComponentWillMountWarnings = [];
        var pendingComponentWillReceivePropsWarnings = [];
        var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
        var pendingComponentWillUpdateWarnings = [];
        var pendingUNSAFE_ComponentWillUpdateWarnings = []; // Tracks components we have already warned about.

        var didWarnAboutUnsafeLifecycles = new Set();

        ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (fiber, instance) {
          // Dedup strategy: Warn once per component.
          if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
            return;
          }

          if (
            typeof instance.componentWillMount === 'function' && // Don't warn about react-lifecycles-compat polyfilled components.
            instance.componentWillMount.__suppressDeprecationWarning !== true
          ) {
            pendingComponentWillMountWarnings.push(fiber);
          }

          if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillMount === 'function') {
            pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
          }

          if (
            typeof instance.componentWillReceiveProps === 'function' &&
            instance.componentWillReceiveProps.__suppressDeprecationWarning !== true
          ) {
            pendingComponentWillReceivePropsWarnings.push(fiber);
          }

          if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
            pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
          }

          if (
            typeof instance.componentWillUpdate === 'function' &&
            instance.componentWillUpdate.__suppressDeprecationWarning !== true
          ) {
            pendingComponentWillUpdateWarnings.push(fiber);
          }

          if (fiber.mode & StrictMode && typeof instance.UNSAFE_componentWillUpdate === 'function') {
            pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
          }
        };

        ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function () {
          // We do an initial pass to gather component names
          var componentWillMountUniqueNames = new Set();

          if (pendingComponentWillMountWarnings.length > 0) {
            pendingComponentWillMountWarnings.forEach(function (fiber) {
              componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingComponentWillMountWarnings = [];
          }

          var UNSAFE_componentWillMountUniqueNames = new Set();

          if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
            pendingUNSAFE_ComponentWillMountWarnings.forEach(function (fiber) {
              UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type) || 'Component');
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingUNSAFE_ComponentWillMountWarnings = [];
          }

          var componentWillReceivePropsUniqueNames = new Set();

          if (pendingComponentWillReceivePropsWarnings.length > 0) {
            pendingComponentWillReceivePropsWarnings.forEach(function (fiber) {
              componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingComponentWillReceivePropsWarnings = [];
          }

          var UNSAFE_componentWillReceivePropsUniqueNames = new Set();

          if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
            pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function (fiber) {
              UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type) || 'Component');
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
          }

          var componentWillUpdateUniqueNames = new Set();

          if (pendingComponentWillUpdateWarnings.length > 0) {
            pendingComponentWillUpdateWarnings.forEach(function (fiber) {
              componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingComponentWillUpdateWarnings = [];
          }

          var UNSAFE_componentWillUpdateUniqueNames = new Set();

          if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
            pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function (fiber) {
              UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type) || 'Component');
              didWarnAboutUnsafeLifecycles.add(fiber.type);
            });
            pendingUNSAFE_ComponentWillUpdateWarnings = [];
          } // Finally, we flush all the warnings
          // UNSAFE_ ones before the deprecated ones, since they'll be 'louder'

          if (UNSAFE_componentWillMountUniqueNames.size > 0) {
            var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);

            error(
              'Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. ' +
                'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' +
                '* Move code with side effects to componentDidMount, and set initial state in the constructor.\n' +
                '\nPlease update the following components: %s',
              sortedNames
            );
          }

          if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
            var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);

            error(
              'Using UNSAFE_componentWillReceiveProps in strict mode is not recommended ' +
                'and may indicate bugs in your code. ' +
                'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' +
                '* Move data fetching code or side effects to componentDidUpdate.\n' +
                "* If you're updating state whenever props change, " +
                'refactor your code to use memoization techniques or move it to ' +
                'static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n' +
                '\nPlease update the following components: %s',
              _sortedNames
            );
          }

          if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
            var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);

            error(
              'Using UNSAFE_componentWillUpdate in strict mode is not recommended ' +
                'and may indicate bugs in your code. ' +
                'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' +
                '* Move data fetching code or side effects to componentDidUpdate.\n' +
                '\nPlease update the following components: %s',
              _sortedNames2
            );
          }

          if (componentWillMountUniqueNames.size > 0) {
            var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);

            warn(
              'componentWillMount has been renamed, and is not recommended for use. ' +
                'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' +
                '* Move code with side effects to componentDidMount, and set initial state in the constructor.\n' +
                '* Rename componentWillMount to UNSAFE_componentWillMount to suppress ' +
                'this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. ' +
                'To rename all deprecated lifecycles to their new names, you can run ' +
                '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' +
                '\nPlease update the following components: %s',
              _sortedNames3
            );
          }

          if (componentWillReceivePropsUniqueNames.size > 0) {
            var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);

            warn(
              'componentWillReceiveProps has been renamed, and is not recommended for use. ' +
                'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' +
                '* Move data fetching code or side effects to componentDidUpdate.\n' +
                "* If you're updating state whenever props change, refactor your " +
                'code to use memoization techniques or move it to ' +
                'static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n' +
                '* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress ' +
                'this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. ' +
                'To rename all deprecated lifecycles to their new names, you can run ' +
                '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' +
                '\nPlease update the following components: %s',
              _sortedNames4
            );
          }

          if (componentWillUpdateUniqueNames.size > 0) {
            var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);

            warn(
              'componentWillUpdate has been renamed, and is not recommended for use. ' +
                'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' +
                '* Move data fetching code or side effects to componentDidUpdate.\n' +
                '* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress ' +
                'this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. ' +
                'To rename all deprecated lifecycles to their new names, you can run ' +
                '`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n' +
                '\nPlease update the following components: %s',
              _sortedNames5
            );
          }
        };

        var pendingLegacyContextWarning = new Map(); // Tracks components we have already warned about.

        var didWarnAboutLegacyContext = new Set();

        ReactStrictModeWarnings.recordLegacyContextWarning = function (fiber, instance) {
          var strictRoot = findStrictRoot(fiber);

          if (strictRoot === null) {
            error(
              'Expected to find a StrictMode component in a strict mode tree. ' +
                'This error is likely caused by a bug in React. Please file an issue.'
            );

            return;
          } // Dedup strategy: Warn once per component.

          if (didWarnAboutLegacyContext.has(fiber.type)) {
            return;
          }

          var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);

          if (
            fiber.type.contextTypes != null ||
            fiber.type.childContextTypes != null ||
            (instance !== null && typeof instance.getChildContext === 'function')
          ) {
            if (warningsForRoot === undefined) {
              warningsForRoot = [];
              pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
            }

            warningsForRoot.push(fiber);
          }
        };

        ReactStrictModeWarnings.flushLegacyContextWarning = function () {
          pendingLegacyContextWarning.forEach(function (fiberArray, strictRoot) {
            if (fiberArray.length === 0) {
              return;
            }

            var firstFiber = fiberArray[0];
            var uniqueNames = new Set();
            fiberArray.forEach(function (fiber) {
              uniqueNames.add(getComponentName(fiber.type) || 'Component');
              didWarnAboutLegacyContext.add(fiber.type);
            });
            var sortedNames = setToSortedString(uniqueNames);
            var firstComponentStack = getStackByFiberInDevAndProd(firstFiber);

            error(
              'Legacy context API has been detected within a strict-mode tree.' +
                '\n\nThe old API will be supported in all 16.x releases, but applications ' +
                'using it should migrate to the new version.' +
                '\n\nPlease update the following components: %s' +
                '\n\nLearn more about this warning here: https://fb.me/react-legacy-context' +
                '%s',
              sortedNames,
              firstComponentStack
            );
          });
        };

        ReactStrictModeWarnings.discardPendingWarnings = function () {
          pendingComponentWillMountWarnings = [];
          pendingUNSAFE_ComponentWillMountWarnings = [];
          pendingComponentWillReceivePropsWarnings = [];
          pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
          pendingComponentWillUpdateWarnings = [];
          pendingUNSAFE_ComponentWillUpdateWarnings = [];
          pendingLegacyContextWarning = new Map();
        };
      }

      var resolveFamily = null; // $FlowFixMe Flow gets confused by a WeakSet feature check below.

      var failedBoundaries = null;
      var setRefreshHandler = function (handler) {
        {
          resolveFamily = handler;
        }
      };
      function resolveFunctionForHotReloading(type) {
        {
          if (resolveFamily === null) {
            // Hot reloading is disabled.
            return type;
          }

          var family = resolveFamily(type);

          if (family === undefined) {
            return type;
          } // Use the latest known implementation.

          return family.current;
        }
      }
      function resolveClassForHotReloading(type) {
        // No implementation differences.
        return resolveFunctionForHotReloading(type);
      }
      function resolveForwardRefForHotReloading(type) {
        {
          if (resolveFamily === null) {
            // Hot reloading is disabled.
            return type;
          }

          var family = resolveFamily(type);

          if (family === undefined) {
            // Check if we're dealing with a real forwardRef. Don't want to crash early.
            if (type !== null && type !== undefined && typeof type.render === 'function') {
              // ForwardRef is special because its resolved .type is an object,
              // but it's possible that we only have its inner render function in the map.
              // If that inner render function is different, we'll build a new forwardRef type.
              var currentRender = resolveFunctionForHotReloading(type.render);

              if (type.render !== currentRender) {
                var syntheticType = {
                  $$typeof: REACT_FORWARD_REF_TYPE,
                  render: currentRender,
                };

                if (type.displayName !== undefined) {
                  syntheticType.displayName = type.displayName;
                }

                return syntheticType;
              }
            }

            return type;
          } // Use the latest known implementation.

          return family.current;
        }
      }
      function isCompatibleFamilyForHotReloading(fiber, element) {
        {
          if (resolveFamily === null) {
            // Hot reloading is disabled.
            return false;
          }

          var prevType = fiber.elementType;
          var nextType = element.type; // If we got here, we know types aren't === equal.

          var needsCompareFamilies = false;
          var $$typeofNextType = typeof nextType === 'object' && nextType !== null ? nextType.$$typeof : null;

          switch (fiber.tag) {
            case ClassComponent: {
              if (typeof nextType === 'function') {
                needsCompareFamilies = true;
              }

              break;
            }

            case FunctionComponent: {
              if (typeof nextType === 'function') {
                needsCompareFamilies = true;
              } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                // We don't know the inner type yet.
                // We're going to assume that the lazy inner type is stable,
                // and so it is sufficient to avoid reconciling it away.
                // We're not going to unwrap or actually use the new lazy type.
                needsCompareFamilies = true;
              }

              break;
            }

            case ForwardRef: {
              if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
                needsCompareFamilies = true;
              } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                needsCompareFamilies = true;
              }

              break;
            }

            case MemoComponent:
            case SimpleMemoComponent: {
              if ($$typeofNextType === REACT_MEMO_TYPE) {
                // TODO: if it was but can no longer be simple,
                // we shouldn't set this.
                needsCompareFamilies = true;
              } else if ($$typeofNextType === REACT_LAZY_TYPE) {
                needsCompareFamilies = true;
              }

              break;
            }

            default:
              return false;
          } // Check if both types have a family and it's the same one.

          if (needsCompareFamilies) {
            // Note: memo() and forwardRef() we'll compare outer rather than inner type.
            // This means both of them need to be registered to preserve state.
            // If we unwrapped and compared the inner types for wrappers instead,
            // then we would risk falsely saying two separate memo(Foo)
            // calls are equivalent because they wrap the same Foo function.
            var prevFamily = resolveFamily(prevType);

            if (prevFamily !== undefined && prevFamily === resolveFamily(nextType)) {
              return true;
            }
          }

          return false;
        }
      }
      function markFailedErrorBoundaryForHotReloading(fiber) {
        {
          if (resolveFamily === null) {
            // Hot reloading is disabled.
            return;
          }

          if (typeof WeakSet !== 'function') {
            return;
          }

          if (failedBoundaries === null) {
            failedBoundaries = new WeakSet();
          }

          failedBoundaries.add(fiber);
        }
      }
      var scheduleRefresh = function (root, update) {
        {
          if (resolveFamily === null) {
            // Hot reloading is disabled.
            return;
          }

          var staleFamilies = update.staleFamilies,
            updatedFamilies = update.updatedFamilies;
          flushPassiveEffects();
          flushSync(function () {
            scheduleFibersWithFamiliesRecursively(root.current, updatedFamilies, staleFamilies);
          });
        }
      };
      var scheduleRoot = function (root, element) {
        {
          if (root.context !== emptyContextObject) {
            // Super edge case: root has a legacy _renderSubtree context
            // but we don't know the parentComponent so we can't pass it.
            // Just ignore. We'll delete this with _renderSubtree code path later.
            return;
          }

          flushPassiveEffects();
          syncUpdates(function () {
            updateContainer(element, root, null, null);
          });
        }
      };

      function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
        {
          var alternate = fiber.alternate,
            child = fiber.child,
            sibling = fiber.sibling,
            tag = fiber.tag,
            type = fiber.type;
          var candidateType = null;

          switch (tag) {
            case FunctionComponent:
            case SimpleMemoComponent:
            case ClassComponent:
              candidateType = type;
              break;

            case ForwardRef:
              candidateType = type.render;
              break;
          }

          if (resolveFamily === null) {
            throw new Error('Expected resolveFamily to be set during hot reload.');
          }

          var needsRender = false;
          var needsRemount = false;

          if (candidateType !== null) {
            var family = resolveFamily(candidateType);

            if (family !== undefined) {
              if (staleFamilies.has(family)) {
                needsRemount = true;
              } else if (updatedFamilies.has(family)) {
                if (tag === ClassComponent) {
                  needsRemount = true;
                } else {
                  needsRender = true;
                }
              }
            }
          }

          if (failedBoundaries !== null) {
            if (failedBoundaries.has(fiber) || (alternate !== null && failedBoundaries.has(alternate))) {
              needsRemount = true;
            }
          }

          if (needsRemount) {
            fiber._debugNeedsRemount = true;
          }

          if (needsRemount || needsRender) {
            scheduleWork(fiber, Sync);
          }

          if (child !== null && !needsRemount) {
            scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
          }

          if (sibling !== null) {
            scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
          }
        }
      }

      var findHostInstancesForRefresh = function (root, families) {
        {
          var hostInstances = new Set();
          var types = new Set(
            families.map(function (family) {
              return family.current;
            })
          );
          findHostInstancesForMatchingFibersRecursively(root.current, types, hostInstances);
          return hostInstances;
        }
      };

      function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
        {
          var child = fiber.child,
            sibling = fiber.sibling,
            tag = fiber.tag,
            type = fiber.type;
          var candidateType = null;

          switch (tag) {
            case FunctionComponent:
            case SimpleMemoComponent:
            case ClassComponent:
              candidateType = type;
              break;

            case ForwardRef:
              candidateType = type.render;
              break;
          }

          var didMatch = false;

          if (candidateType !== null) {
            if (types.has(candidateType)) {
              didMatch = true;
            }
          }

          if (didMatch) {
            // We have a match. This only drills down to the closest host components.
            // There's no need to search deeper because for the purpose of giving
            // visual feedback, "flashing" outermost parent rectangles is sufficient.
            findHostInstancesForFiberShallowly(fiber, hostInstances);
          } else {
            // If there's no match, maybe there will be one further down in the child tree.
            if (child !== null) {
              findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
            }
          }

          if (sibling !== null) {
            findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
          }
        }
      }

      function findHostInstancesForFiberShallowly(fiber, hostInstances) {
        {
          var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);

          if (foundHostInstances) {
            return;
          } // If we didn't find any host children, fallback to closest host parent.

          var node = fiber;

          while (true) {
            switch (node.tag) {
              case HostComponent:
                hostInstances.add(node.stateNode);
                return;

              case HostPortal:
                hostInstances.add(node.stateNode.containerInfo);
                return;

              case HostRoot:
                hostInstances.add(node.stateNode.containerInfo);
                return;
            }

            if (node.return === null) {
              throw new Error('Expected to reach root first.');
            }

            node = node.return;
          }
        }
      }

      function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
        {
          var node = fiber;
          var foundHostInstances = false;

          while (true) {
            if (node.tag === HostComponent) {
              // We got a match.
              foundHostInstances = true;
              hostInstances.add(node.stateNode); // There may still be more, so keep searching.
            } else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }

            if (node === fiber) {
              return foundHostInstances;
            }

            while (node.sibling === null) {
              if (node.return === null || node.return === fiber) {
                return foundHostInstances;
              }

              node = node.return;
            }

            node.sibling.return = node.return;
            node = node.sibling;
          }
        }

        return false;
      }

      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          // Resolve default props. Taken from ReactElement
          var props = _assign({}, baseProps);

          var defaultProps = Component.defaultProps;

          for (var propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }

          return props;
        }

        return baseProps;
      }
      function readLazyComponentType(lazyComponent) {
        initializeLazyComponentType(lazyComponent);

        if (lazyComponent._status !== Resolved) {
          throw lazyComponent._result;
        }

        return lazyComponent._result;
      }

      var valueCursor = createCursor(null);
      var rendererSigil;

      {
        // Use this to detect multiple renderers using the same context
        rendererSigil = {};
      }

      var currentlyRenderingFiber = null;
      var lastContextDependency = null;
      var lastContextWithAllBitsObserved = null;
      var isDisallowedContextReadInDEV = false;
      function resetContextDependencies() {
        // This is called right before React yields execution, to ensure `readContext`
        // cannot be called outside the render phase.
        currentlyRenderingFiber = null;
        lastContextDependency = null;
        lastContextWithAllBitsObserved = null;

        {
          isDisallowedContextReadInDEV = false;
        }
      }
      function enterDisallowedContextReadInDEV() {
        {
          isDisallowedContextReadInDEV = true;
        }
      }
      function exitDisallowedContextReadInDEV() {
        {
          isDisallowedContextReadInDEV = false;
        }
      }
      function pushProvider(providerFiber, nextValue) {
        var context = providerFiber.type._context;

        if (isPrimaryRenderer) {
          push(valueCursor, context._currentValue, providerFiber);
          context._currentValue = nextValue;

          {
            if (
              context._currentRenderer !== undefined &&
              context._currentRenderer !== null &&
              context._currentRenderer !== rendererSigil
            ) {
              error(
                'Detected multiple renderers concurrently rendering the ' +
                  'same context provider. This is currently unsupported.'
              );
            }

            context._currentRenderer = rendererSigil;
          }
        } else {
          push(valueCursor, context._currentValue2, providerFiber);
          context._currentValue2 = nextValue;

          {
            if (
              context._currentRenderer2 !== undefined &&
              context._currentRenderer2 !== null &&
              context._currentRenderer2 !== rendererSigil
            ) {
              error(
                'Detected multiple renderers concurrently rendering the ' +
                  'same context provider. This is currently unsupported.'
              );
            }

            context._currentRenderer2 = rendererSigil;
          }
        }
      }
      function popProvider(providerFiber) {
        var currentValue = valueCursor.current;
        pop(valueCursor, providerFiber);
        var context = providerFiber.type._context;

        if (isPrimaryRenderer) {
          context._currentValue = currentValue;
        } else {
          context._currentValue2 = currentValue;
        }
      }
      function calculateChangedBits(context, newValue, oldValue) {
        if (objectIs(oldValue, newValue)) {
          // No change
          return 0;
        } else {
          var changedBits =
            typeof context._calculateChangedBits === 'function'
              ? context._calculateChangedBits(oldValue, newValue)
              : MAX_SIGNED_31_BIT_INT;

          {
            if ((changedBits & MAX_SIGNED_31_BIT_INT) !== changedBits) {
              error(
                'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s',
                changedBits
              );
            }
          }

          return changedBits | 0;
        }
      }
      function scheduleWorkOnParentPath(parent, renderExpirationTime) {
        // Update the child expiration time of all the ancestors, including
        // the alternates.
        var node = parent;

        while (node !== null) {
          var alternate = node.alternate;

          if (node.childExpirationTime < renderExpirationTime) {
            node.childExpirationTime = renderExpirationTime;

            if (alternate !== null && alternate.childExpirationTime < renderExpirationTime) {
              alternate.childExpirationTime = renderExpirationTime;
            }
          } else if (alternate !== null && alternate.childExpirationTime < renderExpirationTime) {
            alternate.childExpirationTime = renderExpirationTime;
          } else {
            // Neither alternate was updated, which means the rest of the
            // ancestor path already has sufficient priority.
            break;
          }

          node = node.return;
        }
      }
      function propagateContextChange(workInProgress, context, changedBits, renderExpirationTime) {
        var fiber = workInProgress.child;

        if (fiber !== null) {
          // Set the return pointer of the child to the work-in-progress fiber.
          fiber.return = workInProgress;
        }

        while (fiber !== null) {
          var nextFiber = void 0; // Visit this fiber.

          var list = fiber.dependencies;

          if (list !== null) {
            nextFiber = fiber.child;
            var dependency = list.firstContext;

            while (dependency !== null) {
              // Check if the context matches.
              if (dependency.context === context && (dependency.observedBits & changedBits) !== 0) {
                // Match! Schedule an update on this fiber.
                if (fiber.tag === ClassComponent) {
                  // Schedule a force update on the work-in-progress.
                  var update = createUpdate(renderExpirationTime, null);
                  update.tag = ForceUpdate; // TODO: Because we don't have a work-in-progress, this will add the
                  // update to the current fiber, too, which means it will persist even if
                  // this render is thrown away. Since it's a race condition, not sure it's
                  // worth fixing.

                  enqueueUpdate(fiber, update);
                }

                if (fiber.expirationTime < renderExpirationTime) {
                  fiber.expirationTime = renderExpirationTime;
                }

                var alternate = fiber.alternate;

                if (alternate !== null && alternate.expirationTime < renderExpirationTime) {
                  alternate.expirationTime = renderExpirationTime;
                }

                scheduleWorkOnParentPath(fiber.return, renderExpirationTime); // Mark the expiration time on the list, too.

                if (list.expirationTime < renderExpirationTime) {
                  list.expirationTime = renderExpirationTime;
                } // Since we already found a match, we can stop traversing the
                // dependency list.

                break;
              }

              dependency = dependency.next;
            }
          } else if (fiber.tag === ContextProvider) {
            // Don't scan deeper if this is a matching provider
            nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
          } else {
            // Traverse down.
            nextFiber = fiber.child;
          }

          if (nextFiber !== null) {
            // Set the return pointer of the child to the work-in-progress fiber.
            nextFiber.return = fiber;
          } else {
            // No child. Traverse to next sibling.
            nextFiber = fiber;

            while (nextFiber !== null) {
              if (nextFiber === workInProgress) {
                // We're back to the root of this subtree. Exit.
                nextFiber = null;
                break;
              }

              var sibling = nextFiber.sibling;

              if (sibling !== null) {
                // Set the return pointer of the sibling to the work-in-progress fiber.
                sibling.return = nextFiber.return;
                nextFiber = sibling;
                break;
              } // No more siblings. Traverse up.

              nextFiber = nextFiber.return;
            }
          }

          fiber = nextFiber;
        }
      }
      function prepareToReadContext(workInProgress, renderExpirationTime) {
        currentlyRenderingFiber = workInProgress;
        lastContextDependency = null;
        lastContextWithAllBitsObserved = null;
        var dependencies = workInProgress.dependencies;

        if (dependencies !== null) {
          var firstContext = dependencies.firstContext;

          if (firstContext !== null) {
            if (dependencies.expirationTime >= renderExpirationTime) {
              // Context list has a pending update. Mark that this fiber performed work.
              markWorkInProgressReceivedUpdate();
            } // Reset the work-in-progress list

            dependencies.firstContext = null;
          }
        }
      }
      function readContext(context, observedBits) {
        {
          // This warning would fire if you read context inside a Hook like useMemo.
          // Unlike the class check below, it's not enforced in production for perf.
          if (isDisallowedContextReadInDEV) {
            error(
              'Context can only be read while React is rendering. ' +
                'In classes, you can read it in the render method or getDerivedStateFromProps. ' +
                'In function components, you can read it directly in the function body, but not ' +
                'inside Hooks like useReducer() or useMemo().'
            );
          }
        }

        if (lastContextWithAllBitsObserved === context);
        else if (observedBits === false || observedBits === 0);
        else {
          var resolvedObservedBits; // Avoid deopting on observable arguments or heterogeneous types.

          if (typeof observedBits !== 'number' || observedBits === MAX_SIGNED_31_BIT_INT) {
            // Observe all updates.
            lastContextWithAllBitsObserved = context;
            resolvedObservedBits = MAX_SIGNED_31_BIT_INT;
          } else {
            resolvedObservedBits = observedBits;
          }

          var contextItem = {
            context: context,
            observedBits: resolvedObservedBits,
            next: null,
          };

          if (lastContextDependency === null) {
            if (!(currentlyRenderingFiber !== null)) {
              {
                throw Error(
                  'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
                );
              }
            } // This is the first dependency for this component. Create a new list.

            lastContextDependency = contextItem;
            currentlyRenderingFiber.dependencies = {
              expirationTime: NoWork,
              firstContext: contextItem,
              responders: null,
            };
          } else {
            // Append a new context item.
            lastContextDependency = lastContextDependency.next = contextItem;
          }
        }

        return isPrimaryRenderer ? context._currentValue : context._currentValue2;
      }

      var UpdateState = 0;
      var ReplaceState = 1;
      var ForceUpdate = 2;
      var CaptureUpdate = 3; // Global state that is reset at the beginning of calling `processUpdateQueue`.
      // It should only be read right after calling `processUpdateQueue`, via
      // `checkHasForceUpdateAfterProcessing`.

      var hasForceUpdate = false;
      var didWarnUpdateInsideUpdate;
      var currentlyProcessingQueue;

      {
        didWarnUpdateInsideUpdate = false;
        currentlyProcessingQueue = null;
      }

      function initializeUpdateQueue(fiber) {
        var queue = {
          baseState: fiber.memoizedState,
          baseQueue: null,
          shared: {
            pending: null,
          },
          effects: null,
        };
        fiber.updateQueue = queue;
      }
      function cloneUpdateQueue(current, workInProgress) {
        // Clone the update queue from current. Unless it's already a clone.
        var queue = workInProgress.updateQueue;
        var currentQueue = current.updateQueue;

        if (queue === currentQueue) {
          var clone = {
            baseState: currentQueue.baseState,
            baseQueue: currentQueue.baseQueue,
            shared: currentQueue.shared,
            effects: currentQueue.effects,
          };
          workInProgress.updateQueue = clone;
        }
      }
      function createUpdate(expirationTime, suspenseConfig) {
        var update = {
          expirationTime: expirationTime,
          suspenseConfig: suspenseConfig,
          tag: UpdateState,
          payload: null,
          callback: null,
          next: null,
        };
        update.next = update;

        {
          update.priority = getCurrentPriorityLevel();
        }

        return update;
      }
      function enqueueUpdate(fiber, update) {
        var updateQueue = fiber.updateQueue;

        if (updateQueue === null) {
          // Only occurs if the fiber has been unmounted.
          return;
        }

        var sharedQueue = updateQueue.shared;
        var pending = sharedQueue.pending;

        if (pending === null) {
          // This is the first update. Create a circular list.
          update.next = update;
        } else {
          update.next = pending.next;
          pending.next = update;
        }

        sharedQueue.pending = update;

        {
          if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
            error(
              'An update (setState, replaceState, or forceUpdate) was scheduled ' +
                'from inside an update function. Update functions should be pure, ' +
                'with zero side-effects. Consider using componentDidUpdate or a ' +
                'callback.'
            );

            didWarnUpdateInsideUpdate = true;
          }
        }
      }
      function enqueueCapturedUpdate(workInProgress, update) {
        var current = workInProgress.alternate;

        if (current !== null) {
          // Ensure the work-in-progress queue is a clone
          cloneUpdateQueue(current, workInProgress);
        } // Captured updates go only on the work-in-progress queue.

        var queue = workInProgress.updateQueue; // Append the update to the end of the list.

        var last = queue.baseQueue;

        if (last === null) {
          queue.baseQueue = update.next = update;
          update.next = update;
        } else {
          update.next = last.next;
          last.next = update;
        }
      }

      function getStateFromUpdate(workInProgress, queue, update, prevState, nextProps, instance) {
        switch (update.tag) {
          case ReplaceState: {
            var payload = update.payload;

            if (typeof payload === 'function') {
              // Updater function
              {
                enterDisallowedContextReadInDEV();

                if (workInProgress.mode & StrictMode) {
                  payload.call(instance, prevState, nextProps);
                }
              }

              var nextState = payload.call(instance, prevState, nextProps);

              {
                exitDisallowedContextReadInDEV();
              }

              return nextState;
            } // State object

            return payload;
          }

          case CaptureUpdate: {
            workInProgress.effectTag = (workInProgress.effectTag & ~ShouldCapture) | DidCapture;
          }
          // Intentional fallthrough

          case UpdateState: {
            var _payload = update.payload;
            var partialState;

            if (typeof _payload === 'function') {
              // Updater function
              {
                enterDisallowedContextReadInDEV();

                if (workInProgress.mode & StrictMode) {
                  _payload.call(instance, prevState, nextProps);
                }
              }

              partialState = _payload.call(instance, prevState, nextProps);

              {
                exitDisallowedContextReadInDEV();
              }
            } else {
              // Partial state object
              partialState = _payload;
            }

            if (partialState === null || partialState === undefined) {
              // Null and undefined are treated as no-ops.
              return prevState;
            } // Merge the partial state and the previous state.

            return _assign({}, prevState, partialState);
          }

          case ForceUpdate: {
            hasForceUpdate = true;
            return prevState;
          }
        }

        return prevState;
      }

      function processUpdateQueue(workInProgress, props, instance, renderExpirationTime) {
        // This is always non-null on a ClassComponent or HostRoot
        var queue = workInProgress.updateQueue;
        hasForceUpdate = false;

        {
          currentlyProcessingQueue = queue.shared;
        } // The last rebase update that is NOT part of the base state.

        var baseQueue = queue.baseQueue; // The last pending update that hasn't been processed yet.

        var pendingQueue = queue.shared.pending;

        if (pendingQueue !== null) {
          // We have new updates that haven't been processed yet.
          // We'll add them to the base queue.
          if (baseQueue !== null) {
            // Merge the pending queue and the base queue.
            var baseFirst = baseQueue.next;
            var pendingFirst = pendingQueue.next;
            baseQueue.next = pendingFirst;
            pendingQueue.next = baseFirst;
          }

          baseQueue = pendingQueue;
          queue.shared.pending = null; // TODO: Pass `current` as argument

          var current = workInProgress.alternate;

          if (current !== null) {
            var currentQueue = current.updateQueue;

            if (currentQueue !== null) {
              currentQueue.baseQueue = pendingQueue;
            }
          }
        } // These values may change as we process the queue.

        if (baseQueue !== null) {
          var first = baseQueue.next; // Iterate through the list of updates to compute the result.

          var newState = queue.baseState;
          var newExpirationTime = NoWork;
          var newBaseState = null;
          var newBaseQueueFirst = null;
          var newBaseQueueLast = null;

          if (first !== null) {
            var update = first;

            do {
              var updateExpirationTime = update.expirationTime;

              if (updateExpirationTime < renderExpirationTime) {
                // Priority is insufficient. Skip this update. If this is the first
                // skipped update, the previous update/state is the new base
                // update/state.
                var clone = {
                  expirationTime: update.expirationTime,
                  suspenseConfig: update.suspenseConfig,
                  tag: update.tag,
                  payload: update.payload,
                  callback: update.callback,
                  next: null,
                };

                if (newBaseQueueLast === null) {
                  newBaseQueueFirst = newBaseQueueLast = clone;
                  newBaseState = newState;
                } else {
                  newBaseQueueLast = newBaseQueueLast.next = clone;
                } // Update the remaining priority in the queue.

                if (updateExpirationTime > newExpirationTime) {
                  newExpirationTime = updateExpirationTime;
                }
              } else {
                // This update does have sufficient priority.
                if (newBaseQueueLast !== null) {
                  var _clone = {
                    expirationTime: Sync,
                    // This update is going to be committed so we never want uncommit it.
                    suspenseConfig: update.suspenseConfig,
                    tag: update.tag,
                    payload: update.payload,
                    callback: update.callback,
                    next: null,
                  };
                  newBaseQueueLast = newBaseQueueLast.next = _clone;
                } // Mark the event time of this update as relevant to this render pass.
                // TODO: This should ideally use the true event time of this update rather than
                // its priority which is a derived and not reverseable value.
                // TODO: We should skip this update if it was already committed but currently
                // we have no way of detecting the difference between a committed and suspended
                // update here.

                markRenderEventTimeAndConfig(updateExpirationTime, update.suspenseConfig); // Process this update.

                newState = getStateFromUpdate(workInProgress, queue, update, newState, props, instance);
                var callback = update.callback;

                if (callback !== null) {
                  workInProgress.effectTag |= Callback;
                  var effects = queue.effects;

                  if (effects === null) {
                    queue.effects = [update];
                  } else {
                    effects.push(update);
                  }
                }
              }

              update = update.next;

              if (update === null || update === first) {
                pendingQueue = queue.shared.pending;

                if (pendingQueue === null) {
                  break;
                } else {
                  // An update was scheduled from inside a reducer. Add the new
                  // pending updates to the end of the list and keep processing.
                  update = baseQueue.next = pendingQueue.next;
                  pendingQueue.next = first;
                  queue.baseQueue = baseQueue = pendingQueue;
                  queue.shared.pending = null;
                }
              }
            } while (true);
          }

          if (newBaseQueueLast === null) {
            newBaseState = newState;
          } else {
            newBaseQueueLast.next = newBaseQueueFirst;
          }

          queue.baseState = newBaseState;
          queue.baseQueue = newBaseQueueLast; // Set the remaining expiration time to be whatever is remaining in the queue.
          // This should be fine because the only two other things that contribute to
          // expiration time are props and context. We're already in the middle of the
          // begin phase by the time we start processing the queue, so we've already
          // dealt with the props. Context in components that specify
          // shouldComponentUpdate is tricky; but we'll have to account for
          // that regardless.

          markUnprocessedUpdateTime(newExpirationTime);
          workInProgress.expirationTime = newExpirationTime;
          workInProgress.memoizedState = newState;
        }

        {
          currentlyProcessingQueue = null;
        }
      }

      function callCallback(callback, context) {
        if (!(typeof callback === 'function')) {
          {
            throw Error('Invalid argument passed as callback. Expected a function. Instead received: ' + callback);
          }
        }

        callback.call(context);
      }

      function resetHasForceUpdateBeforeProcessing() {
        hasForceUpdate = false;
      }
      function checkHasForceUpdateAfterProcessing() {
        return hasForceUpdate;
      }
      function commitUpdateQueue(finishedWork, finishedQueue, instance) {
        // Commit the effects
        var effects = finishedQueue.effects;
        finishedQueue.effects = null;

        if (effects !== null) {
          for (var i = 0; i < effects.length; i++) {
            var effect = effects[i];
            var callback = effect.callback;

            if (callback !== null) {
              effect.callback = null;
              callCallback(callback, instance);
            }
          }
        }
      }

      var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
      function requestCurrentSuspenseConfig() {
        return ReactCurrentBatchConfig.suspense;
      }

      var fakeInternalInstance = {};
      var isArray = Array.isArray; // React.Component uses a shared frozen object by default.
      // We'll use it to determine whether we need to initialize legacy refs.

      var emptyRefsObject = new React.Component().refs;
      var didWarnAboutStateAssignmentForComponent;
      var didWarnAboutUninitializedState;
      var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
      var didWarnAboutLegacyLifecyclesAndDerivedState;
      var didWarnAboutUndefinedDerivedState;
      var warnOnUndefinedDerivedState;
      var warnOnInvalidCallback;
      var didWarnAboutDirectlyAssigningPropsToState;
      var didWarnAboutContextTypeAndContextTypes;
      var didWarnAboutInvalidateContextType;

      {
        didWarnAboutStateAssignmentForComponent = new Set();
        didWarnAboutUninitializedState = new Set();
        didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
        didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
        didWarnAboutDirectlyAssigningPropsToState = new Set();
        didWarnAboutUndefinedDerivedState = new Set();
        didWarnAboutContextTypeAndContextTypes = new Set();
        didWarnAboutInvalidateContextType = new Set();
        var didWarnOnInvalidCallback = new Set();

        warnOnInvalidCallback = function (callback, callerName) {
          if (callback === null || typeof callback === 'function') {
            return;
          }

          var key = callerName + '_' + callback;

          if (!didWarnOnInvalidCallback.has(key)) {
            didWarnOnInvalidCallback.add(key);

            error(
              '%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.',
              callerName,
              callback
            );
          }
        };

        warnOnUndefinedDerivedState = function (type, partialState) {
          if (partialState === undefined) {
            var componentName = getComponentName(type) || 'Component';

            if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
              didWarnAboutUndefinedDerivedState.add(componentName);

              error(
                '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' +
                  'You have returned undefined.',
                componentName
              );
            }
          }
        }; // This is so gross but it's at least non-critical and can be removed if
        // it causes problems. This is meant to give a nicer error message for
        // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
        // ...)) which otherwise throws a "_processChildContext is not a function"
        // exception.

        Object.defineProperty(fakeInternalInstance, '_processChildContext', {
          enumerable: false,
          value: function () {
            {
              {
                throw Error(
                  "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
                );
              }
            }
          },
        });
        Object.freeze(fakeInternalInstance);
      }

      function applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, nextProps) {
        var prevState = workInProgress.memoizedState;

        {
          if (workInProgress.mode & StrictMode) {
            // Invoke the function an extra time to help detect side-effects.
            getDerivedStateFromProps(nextProps, prevState);
          }
        }

        var partialState = getDerivedStateFromProps(nextProps, prevState);

        {
          warnOnUndefinedDerivedState(ctor, partialState);
        } // Merge the partial state and the previous state.

        var memoizedState =
          partialState === null || partialState === undefined ? prevState : _assign({}, prevState, partialState);
        workInProgress.memoizedState = memoizedState; // Once the update queue is empty, persist the derived state onto the
        // base state.

        if (workInProgress.expirationTime === NoWork) {
          // Queue is always non-null for classes
          var updateQueue = workInProgress.updateQueue;
          updateQueue.baseState = memoizedState;
        }
      }
      var classComponentUpdater = {
        isMounted: isMounted,
        enqueueSetState: function (inst, payload, callback) {
          var fiber = get(inst);
          var currentTime = requestCurrentTimeForUpdate();
          var suspenseConfig = requestCurrentSuspenseConfig();
          var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
          var update = createUpdate(expirationTime, suspenseConfig);
          update.payload = payload;

          if (callback !== undefined && callback !== null) {
            {
              warnOnInvalidCallback(callback, 'setState');
            }

            update.callback = callback;
          }

          enqueueUpdate(fiber, update);
          scheduleWork(fiber, expirationTime);
        },
        enqueueReplaceState: function (inst, payload, callback) {
          var fiber = get(inst);
          var currentTime = requestCurrentTimeForUpdate();
          var suspenseConfig = requestCurrentSuspenseConfig();
          var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
          var update = createUpdate(expirationTime, suspenseConfig);
          update.tag = ReplaceState;
          update.payload = payload;

          if (callback !== undefined && callback !== null) {
            {
              warnOnInvalidCallback(callback, 'replaceState');
            }

            update.callback = callback;
          }

          enqueueUpdate(fiber, update);
          scheduleWork(fiber, expirationTime);
        },
        enqueueForceUpdate: function (inst, callback) {
          var fiber = get(inst);
          var currentTime = requestCurrentTimeForUpdate();
          var suspenseConfig = requestCurrentSuspenseConfig();
          var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
          var update = createUpdate(expirationTime, suspenseConfig);
          update.tag = ForceUpdate;

          if (callback !== undefined && callback !== null) {
            {
              warnOnInvalidCallback(callback, 'forceUpdate');
            }

            update.callback = callback;
          }

          enqueueUpdate(fiber, update);
          scheduleWork(fiber, expirationTime);
        },
      };

      function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
        var instance = workInProgress.stateNode;

        if (typeof instance.shouldComponentUpdate === 'function') {
          {
            if (workInProgress.mode & StrictMode) {
              // Invoke the function an extra time to help detect side-effects.
              instance.shouldComponentUpdate(newProps, newState, nextContext);
            }
          }

          startPhaseTimer(workInProgress, 'shouldComponentUpdate');
          var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
          stopPhaseTimer();

          {
            if (shouldUpdate === undefined) {
              error(
                '%s.shouldComponentUpdate(): Returned undefined instead of a ' +
                  'boolean value. Make sure to return true or false.',
                getComponentName(ctor) || 'Component'
              );
            }
          }

          return shouldUpdate;
        }

        if (ctor.prototype && ctor.prototype.isPureReactComponent) {
          return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
        }

        return true;
      }

      function checkClassInstance(workInProgress, ctor, newProps) {
        var instance = workInProgress.stateNode;

        {
          var name = getComponentName(ctor) || 'Component';
          var renderPresent = instance.render;

          if (!renderPresent) {
            if (ctor.prototype && typeof ctor.prototype.render === 'function') {
              error(
                '%s(...): No `render` method found on the returned component ' +
                  'instance: did you accidentally return an object from the constructor?',
                name
              );
            } else {
              error(
                '%s(...): No `render` method found on the returned component ' +
                  'instance: you may have forgotten to define `render`.',
                name
              );
            }
          }

          if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
            error(
              'getInitialState was defined on %s, a plain JavaScript class. ' +
                'This is only supported for classes created using React.createClass. ' +
                'Did you mean to define a state property instead?',
              name
            );
          }

          if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
            error(
              'getDefaultProps was defined on %s, a plain JavaScript class. ' +
                'This is only supported for classes created using React.createClass. ' +
                'Use a static property to define defaultProps instead.',
              name
            );
          }

          if (instance.propTypes) {
            error(
              'propTypes was defined as an instance property on %s. Use a static ' +
                'property to define propTypes instead.',
              name
            );
          }

          if (instance.contextType) {
            error(
              'contextType was defined as an instance property on %s. Use a static ' +
                'property to define contextType instead.',
              name
            );
          }

          {
            if (instance.contextTypes) {
              error(
                'contextTypes was defined as an instance property on %s. Use a static ' +
                  'property to define contextTypes instead.',
                name
              );
            }

            if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
              didWarnAboutContextTypeAndContextTypes.add(ctor);

              error(
                '%s declares both contextTypes and contextType static properties. ' +
                  'The legacy contextTypes property will be ignored.',
                name
              );
            }
          }

          if (typeof instance.componentShouldUpdate === 'function') {
            error(
              '%s has a method called ' +
                'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
                'The name is phrased as a question because the function is ' +
                'expected to return a value.',
              name
            );
          }

          if (
            ctor.prototype &&
            ctor.prototype.isPureReactComponent &&
            typeof instance.shouldComponentUpdate !== 'undefined'
          ) {
            error(
              '%s has a method called shouldComponentUpdate(). ' +
                'shouldComponentUpdate should not be used when extending React.PureComponent. ' +
                'Please extend React.Component if shouldComponentUpdate is used.',
              getComponentName(ctor) || 'A pure component'
            );
          }

          if (typeof instance.componentDidUnmount === 'function') {
            error(
              '%s has a method called ' +
                'componentDidUnmount(). But there is no such lifecycle method. ' +
                'Did you mean componentWillUnmount()?',
              name
            );
          }

          if (typeof instance.componentDidReceiveProps === 'function') {
            error(
              '%s has a method called ' +
                'componentDidReceiveProps(). But there is no such lifecycle method. ' +
                'If you meant to update the state in response to changing props, ' +
                'use componentWillReceiveProps(). If you meant to fetch data or ' +
                'run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
              name
            );
          }

          if (typeof instance.componentWillRecieveProps === 'function') {
            error(
              '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
              name
            );
          }

          if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
            error(
              '%s has a method called ' +
                'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
              name
            );
          }

          var hasMutatedProps = instance.props !== newProps;

          if (instance.props !== undefined && hasMutatedProps) {
            error(
              '%s(...): When calling super() in `%s`, make sure to pass ' +
                "up the same props that your component's constructor was passed.",
              name,
              name
            );
          }

          if (instance.defaultProps) {
            error(
              'Setting defaultProps as an instance property on %s is not supported and will be ignored.' +
                ' Instead, define defaultProps as a static property on %s.',
              name,
              name
            );
          }

          if (
            typeof instance.getSnapshotBeforeUpdate === 'function' &&
            typeof instance.componentDidUpdate !== 'function' &&
            !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)
          ) {
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);

            error(
              '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' +
                'This component defines getSnapshotBeforeUpdate() only.',
              getComponentName(ctor)
            );
          }

          if (typeof instance.getDerivedStateFromProps === 'function') {
            error(
              '%s: getDerivedStateFromProps() is defined as an instance method ' +
                'and will be ignored. Instead, declare it as a static method.',
              name
            );
          }

          if (typeof instance.getDerivedStateFromError === 'function') {
            error(
              '%s: getDerivedStateFromError() is defined as an instance method ' +
                'and will be ignored. Instead, declare it as a static method.',
              name
            );
          }

          if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
            error(
              '%s: getSnapshotBeforeUpdate() is defined as a static method ' +
                'and will be ignored. Instead, declare it as an instance method.',
              name
            );
          }

          var _state = instance.state;

          if (_state && (typeof _state !== 'object' || isArray(_state))) {
            error('%s.state: must be set to an object or null', name);
          }

          if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
            error(
              '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().',
              name
            );
          }
        }
      }

      function adoptClassInstance(workInProgress, instance) {
        instance.updater = classComponentUpdater;
        workInProgress.stateNode = instance; // The instance needs access to the fiber so that it can schedule updates

        set(instance, workInProgress);

        {
          instance._reactInternalInstance = fakeInternalInstance;
        }
      }

      function constructClassInstance(workInProgress, ctor, props) {
        var isLegacyContextConsumer = false;
        var unmaskedContext = emptyContextObject;
        var context = emptyContextObject;
        var contextType = ctor.contextType;

        {
          if ('contextType' in ctor) {
            var isValid = // Allow null for conditional declaration
              contextType === null ||
              (contextType !== undefined &&
                contextType.$$typeof === REACT_CONTEXT_TYPE &&
                contextType._context === undefined); // Not a <Context.Consumer>

            if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
              didWarnAboutInvalidateContextType.add(ctor);
              var addendum = '';

              if (contextType === undefined) {
                addendum =
                  ' However, it is set to undefined. ' +
                  'This can be caused by a typo or by mixing up named and default imports. ' +
                  'This can also happen due to a circular dependency, so ' +
                  'try moving the createContext() call to a separate file.';
              } else if (typeof contextType !== 'object') {
                addendum = ' However, it is set to a ' + typeof contextType + '.';
              } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                addendum = ' Did you accidentally pass the Context.Provider instead?';
              } else if (contextType._context !== undefined) {
                // <Context.Consumer>
                addendum = ' Did you accidentally pass the Context.Consumer instead?';
              } else {
                addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
              }

              error(
                '%s defines an invalid contextType. ' +
                  'contextType should point to the Context object returned by React.createContext().%s',
                getComponentName(ctor) || 'Component',
                addendum
              );
            }
          }
        }

        if (typeof contextType === 'object' && contextType !== null) {
          context = readContext(contextType);
        } else {
          unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
          var contextTypes = ctor.contextTypes;
          isLegacyContextConsumer = contextTypes !== null && contextTypes !== undefined;
          context = isLegacyContextConsumer ? getMaskedContext(workInProgress, unmaskedContext) : emptyContextObject;
        } // Instantiate twice to help detect side-effects.

        {
          if (workInProgress.mode & StrictMode) {
            new ctor(props, context); // eslint-disable-line no-new
          }
        }

        var instance = new ctor(props, context);
        var state = (workInProgress.memoizedState =
          instance.state !== null && instance.state !== undefined ? instance.state : null);
        adoptClassInstance(workInProgress, instance);

        {
          if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
            var componentName = getComponentName(ctor) || 'Component';

            if (!didWarnAboutUninitializedState.has(componentName)) {
              didWarnAboutUninitializedState.add(componentName);

              error(
                '`%s` uses `getDerivedStateFromProps` but its initial state is ' +
                  '%s. This is not recommended. Instead, define the initial state by ' +
                  'assigning an object to `this.state` in the constructor of `%s`. ' +
                  'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
                componentName,
                instance.state === null ? 'null' : 'undefined',
                componentName
              );
            }
          } // If new component APIs are defined, "unsafe" lifecycles won't be called.
          // Warn about these lifecycles if they are present.
          // Don't warn about react-lifecycles-compat polyfilled methods though.

          if (
            typeof ctor.getDerivedStateFromProps === 'function' ||
            typeof instance.getSnapshotBeforeUpdate === 'function'
          ) {
            var foundWillMountName = null;
            var foundWillReceivePropsName = null;
            var foundWillUpdateName = null;

            if (
              typeof instance.componentWillMount === 'function' &&
              instance.componentWillMount.__suppressDeprecationWarning !== true
            ) {
              foundWillMountName = 'componentWillMount';
            } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
              foundWillMountName = 'UNSAFE_componentWillMount';
            }

            if (
              typeof instance.componentWillReceiveProps === 'function' &&
              instance.componentWillReceiveProps.__suppressDeprecationWarning !== true
            ) {
              foundWillReceivePropsName = 'componentWillReceiveProps';
            } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
              foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
            }

            if (
              typeof instance.componentWillUpdate === 'function' &&
              instance.componentWillUpdate.__suppressDeprecationWarning !== true
            ) {
              foundWillUpdateName = 'componentWillUpdate';
            } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
              foundWillUpdateName = 'UNSAFE_componentWillUpdate';
            }

            if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
              var _componentName = getComponentName(ctor) || 'Component';

              var newApiName =
                typeof ctor.getDerivedStateFromProps === 'function'
                  ? 'getDerivedStateFromProps()'
                  : 'getSnapshotBeforeUpdate()';

              if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);

                error(
                  'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
                    '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' +
                    'The above lifecycles should be removed. Learn more about this warning here:\n' +
                    'https://fb.me/react-unsafe-component-lifecycles',
                  _componentName,
                  newApiName,
                  foundWillMountName !== null ? '\n  ' + foundWillMountName : '',
                  foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '',
                  foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : ''
                );
              }
            }
          }
        } // Cache unmasked context so we can avoid recreating masked context unless necessary.
        // ReactFiberContext usually updates this cache but can't for newly-created instances.

        if (isLegacyContextConsumer) {
          cacheContext(workInProgress, unmaskedContext, context);
        }

        return instance;
      }

      function callComponentWillMount(workInProgress, instance) {
        startPhaseTimer(workInProgress, 'componentWillMount');
        var oldState = instance.state;

        if (typeof instance.componentWillMount === 'function') {
          instance.componentWillMount();
        }

        if (typeof instance.UNSAFE_componentWillMount === 'function') {
          instance.UNSAFE_componentWillMount();
        }

        stopPhaseTimer();

        if (oldState !== instance.state) {
          {
            error(
              '%s.componentWillMount(): Assigning directly to this.state is ' +
                "deprecated (except inside a component's " +
                'constructor). Use setState instead.',
              getComponentName(workInProgress.type) || 'Component'
            );
          }

          classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
      }

      function callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext) {
        var oldState = instance.state;
        startPhaseTimer(workInProgress, 'componentWillReceiveProps');

        if (typeof instance.componentWillReceiveProps === 'function') {
          instance.componentWillReceiveProps(newProps, nextContext);
        }

        if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
          instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
        }

        stopPhaseTimer();

        if (instance.state !== oldState) {
          {
            var componentName = getComponentName(workInProgress.type) || 'Component';

            if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
              didWarnAboutStateAssignmentForComponent.add(componentName);

              error(
                '%s.componentWillReceiveProps(): Assigning directly to ' +
                  "this.state is deprecated (except inside a component's " +
                  'constructor). Use setState instead.',
                componentName
              );
            }
          }

          classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
      } // Invokes the mount life-cycles on a previously never rendered instance.

      function mountClassInstance(workInProgress, ctor, newProps, renderExpirationTime) {
        {
          checkClassInstance(workInProgress, ctor, newProps);
        }

        var instance = workInProgress.stateNode;
        instance.props = newProps;
        instance.state = workInProgress.memoizedState;
        instance.refs = emptyRefsObject;
        initializeUpdateQueue(workInProgress);
        var contextType = ctor.contextType;

        if (typeof contextType === 'object' && contextType !== null) {
          instance.context = readContext(contextType);
        } else {
          var unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
          instance.context = getMaskedContext(workInProgress, unmaskedContext);
        }

        {
          if (instance.state === newProps) {
            var componentName = getComponentName(ctor) || 'Component';

            if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
              didWarnAboutDirectlyAssigningPropsToState.add(componentName);

              error(
                '%s: It is not recommended to assign props directly to state ' +
                  "because updates to props won't be reflected in state. " +
                  'In most cases, it is better to use props directly.',
                componentName
              );
            }
          }

          if (workInProgress.mode & StrictMode) {
            ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
          }

          {
            ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);
          }
        }

        processUpdateQueue(workInProgress, newProps, instance, renderExpirationTime);
        instance.state = workInProgress.memoizedState;
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;

        if (typeof getDerivedStateFromProps === 'function') {
          applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
          instance.state = workInProgress.memoizedState;
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for components using the new APIs.

        if (
          typeof ctor.getDerivedStateFromProps !== 'function' &&
          typeof instance.getSnapshotBeforeUpdate !== 'function' &&
          (typeof instance.UNSAFE_componentWillMount === 'function' ||
            typeof instance.componentWillMount === 'function')
        ) {
          callComponentWillMount(workInProgress, instance); // If we had additional state updates during this life-cycle, let's
          // process them now.

          processUpdateQueue(workInProgress, newProps, instance, renderExpirationTime);
          instance.state = workInProgress.memoizedState;
        }

        if (typeof instance.componentDidMount === 'function') {
          workInProgress.effectTag |= Update;
        }
      }

      function resumeMountClassInstance(workInProgress, ctor, newProps, renderExpirationTime) {
        var instance = workInProgress.stateNode;
        var oldProps = workInProgress.memoizedProps;
        instance.props = oldProps;
        var oldContext = instance.context;
        var contextType = ctor.contextType;
        var nextContext = emptyContextObject;

        if (typeof contextType === 'object' && contextType !== null) {
          nextContext = readContext(contextType);
        } else {
          var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
          nextContext = getMaskedContext(workInProgress, nextLegacyUnmaskedContext);
        }

        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        var hasNewLifecycles =
          typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
        // ever the previously attempted to render - not the "current". However,
        // during componentDidUpdate we pass the "current" props.
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for components using the new APIs.

        if (
          !hasNewLifecycles &&
          (typeof instance.UNSAFE_componentWillReceiveProps === 'function' ||
            typeof instance.componentWillReceiveProps === 'function')
        ) {
          if (oldProps !== newProps || oldContext !== nextContext) {
            callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
          }
        }

        resetHasForceUpdateBeforeProcessing();
        var oldState = workInProgress.memoizedState;
        var newState = (instance.state = oldState);
        processUpdateQueue(workInProgress, newProps, instance, renderExpirationTime);
        newState = workInProgress.memoizedState;

        if (
          oldProps === newProps &&
          oldState === newState &&
          !hasContextChanged() &&
          !checkHasForceUpdateAfterProcessing()
        ) {
          // If an update was already in progress, we should schedule an Update
          // effect even though we're bailing out, so that cWU/cDU are called.
          if (typeof instance.componentDidMount === 'function') {
            workInProgress.effectTag |= Update;
          }

          return false;
        }

        if (typeof getDerivedStateFromProps === 'function') {
          applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
          newState = workInProgress.memoizedState;
        }

        var shouldUpdate =
          checkHasForceUpdateAfterProcessing() ||
          checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);

        if (shouldUpdate) {
          // In order to support react-lifecycles-compat polyfilled components,
          // Unsafe lifecycles should not be invoked for components using the new APIs.
          if (
            !hasNewLifecycles &&
            (typeof instance.UNSAFE_componentWillMount === 'function' ||
              typeof instance.componentWillMount === 'function')
          ) {
            startPhaseTimer(workInProgress, 'componentWillMount');

            if (typeof instance.componentWillMount === 'function') {
              instance.componentWillMount();
            }

            if (typeof instance.UNSAFE_componentWillMount === 'function') {
              instance.UNSAFE_componentWillMount();
            }

            stopPhaseTimer();
          }

          if (typeof instance.componentDidMount === 'function') {
            workInProgress.effectTag |= Update;
          }
        } else {
          // If an update was already in progress, we should schedule an Update
          // effect even though we're bailing out, so that cWU/cDU are called.
          if (typeof instance.componentDidMount === 'function') {
            workInProgress.effectTag |= Update;
          } // If shouldComponentUpdate returned false, we should still update the
          // memoized state to indicate that this work can be reused.

          workInProgress.memoizedProps = newProps;
          workInProgress.memoizedState = newState;
        } // Update the existing instance's state, props, and context pointers even
        // if shouldComponentUpdate returns false.

        instance.props = newProps;
        instance.state = newState;
        instance.context = nextContext;
        return shouldUpdate;
      } // Invokes the update life-cycles and returns false if it shouldn't rerender.

      function updateClassInstance(current, workInProgress, ctor, newProps, renderExpirationTime) {
        var instance = workInProgress.stateNode;
        cloneUpdateQueue(current, workInProgress);
        var oldProps = workInProgress.memoizedProps;
        instance.props =
          workInProgress.type === workInProgress.elementType
            ? oldProps
            : resolveDefaultProps(workInProgress.type, oldProps);
        var oldContext = instance.context;
        var contextType = ctor.contextType;
        var nextContext = emptyContextObject;

        if (typeof contextType === 'object' && contextType !== null) {
          nextContext = readContext(contextType);
        } else {
          var nextUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
          nextContext = getMaskedContext(workInProgress, nextUnmaskedContext);
        }

        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        var hasNewLifecycles =
          typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
        // ever the previously attempted to render - not the "current". However,
        // during componentDidUpdate we pass the "current" props.
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for components using the new APIs.

        if (
          !hasNewLifecycles &&
          (typeof instance.UNSAFE_componentWillReceiveProps === 'function' ||
            typeof instance.componentWillReceiveProps === 'function')
        ) {
          if (oldProps !== newProps || oldContext !== nextContext) {
            callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
          }
        }

        resetHasForceUpdateBeforeProcessing();
        var oldState = workInProgress.memoizedState;
        var newState = (instance.state = oldState);
        processUpdateQueue(workInProgress, newProps, instance, renderExpirationTime);
        newState = workInProgress.memoizedState;

        if (
          oldProps === newProps &&
          oldState === newState &&
          !hasContextChanged() &&
          !checkHasForceUpdateAfterProcessing()
        ) {
          // If an update was already in progress, we should schedule an Update
          // effect even though we're bailing out, so that cWU/cDU are called.
          if (typeof instance.componentDidUpdate === 'function') {
            if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
              workInProgress.effectTag |= Update;
            }
          }

          if (typeof instance.getSnapshotBeforeUpdate === 'function') {
            if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
              workInProgress.effectTag |= Snapshot;
            }
          }

          return false;
        }

        if (typeof getDerivedStateFromProps === 'function') {
          applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
          newState = workInProgress.memoizedState;
        }

        var shouldUpdate =
          checkHasForceUpdateAfterProcessing() ||
          checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);

        if (shouldUpdate) {
          // In order to support react-lifecycles-compat polyfilled components,
          // Unsafe lifecycles should not be invoked for components using the new APIs.
          if (
            !hasNewLifecycles &&
            (typeof instance.UNSAFE_componentWillUpdate === 'function' ||
              typeof instance.componentWillUpdate === 'function')
          ) {
            startPhaseTimer(workInProgress, 'componentWillUpdate');

            if (typeof instance.componentWillUpdate === 'function') {
              instance.componentWillUpdate(newProps, newState, nextContext);
            }

            if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
              instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
            }

            stopPhaseTimer();
          }

          if (typeof instance.componentDidUpdate === 'function') {
            workInProgress.effectTag |= Update;
          }

          if (typeof instance.getSnapshotBeforeUpdate === 'function') {
            workInProgress.effectTag |= Snapshot;
          }
        } else {
          // If an update was already in progress, we should schedule an Update
          // effect even though we're bailing out, so that cWU/cDU are called.
          if (typeof instance.componentDidUpdate === 'function') {
            if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
              workInProgress.effectTag |= Update;
            }
          }

          if (typeof instance.getSnapshotBeforeUpdate === 'function') {
            if (oldProps !== current.memoizedProps || oldState !== current.memoizedState) {
              workInProgress.effectTag |= Snapshot;
            }
          } // If shouldComponentUpdate returned false, we should still update the
          // memoized props/state to indicate that this work can be reused.

          workInProgress.memoizedProps = newProps;
          workInProgress.memoizedState = newState;
        } // Update the existing instance's state, props, and context pointers even
        // if shouldComponentUpdate returns false.

        instance.props = newProps;
        instance.state = newState;
        instance.context = nextContext;
        return shouldUpdate;
      }

      var didWarnAboutMaps;
      var didWarnAboutGenerators;
      var didWarnAboutStringRefs;
      var ownerHasKeyUseWarning;
      var ownerHasFunctionTypeWarning;

      var warnForMissingKey = function (child) {};

      {
        didWarnAboutMaps = false;
        didWarnAboutGenerators = false;
        didWarnAboutStringRefs = {};
        /**
         * Warn if there's no key explicitly set on dynamic arrays of children or
         * object keys are not valid. This allows us to keep track of children between
         * updates.
         */

        ownerHasKeyUseWarning = {};
        ownerHasFunctionTypeWarning = {};

        warnForMissingKey = function (child) {
          if (child === null || typeof child !== 'object') {
            return;
          }

          if (!child._store || child._store.validated || child.key != null) {
            return;
          }

          if (!(typeof child._store === 'object')) {
            {
              throw Error(
                'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }

          child._store.validated = true;
          var currentComponentErrorInfo =
            'Each child in a list should have a unique ' +
            '"key" prop. See https://fb.me/react-warning-keys for ' +
            'more information.' +
            getCurrentFiberStackInDev();

          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }

          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

          error(
            'Each child in a list should have a unique ' +
              '"key" prop. See https://fb.me/react-warning-keys for ' +
              'more information.'
          );
        };
      }

      var isArray$1 = Array.isArray;

      function coerceRef(returnFiber, current, element) {
        var mixedRef = element.ref;

        if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
          {
            // TODO: Clean this up once we turn on the string ref warning for
            // everyone, because the strict mode case will no longer be relevant
            if (
              (returnFiber.mode & StrictMode || warnAboutStringRefs) && // We warn in ReactElement.js if owner and self are equal for string refs
              // because these cannot be automatically converted to an arrow function
              // using a codemod. Therefore, we don't have to warn about string refs again.
              !(element._owner && element._self && element._owner.stateNode !== element._self)
            ) {
              var componentName = getComponentName(returnFiber.type) || 'Component';

              if (!didWarnAboutStringRefs[componentName]) {
                {
                  error(
                    'A string ref, "%s", has been found within a strict mode tree. ' +
                      'String refs are a source of potential bugs and should be avoided. ' +
                      'We recommend using useRef() or createRef() instead. ' +
                      'Learn more about using refs safely here: ' +
                      'https://fb.me/react-strict-mode-string-ref%s',
                    mixedRef,
                    getStackByFiberInDevAndProd(returnFiber)
                  );
                }

                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }

          if (element._owner) {
            var owner = element._owner;
            var inst;

            if (owner) {
              var ownerFiber = owner;

              if (!(ownerFiber.tag === ClassComponent)) {
                {
                  throw Error(
                    'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref'
                  );
                }
              }

              inst = ownerFiber.stateNode;
            }

            if (!inst) {
              {
                throw Error(
                  'Missing owner for string ref ' +
                    mixedRef +
                    '. This error is likely caused by a bug in React. Please file an issue.'
                );
              }
            }

            var stringRef = '' + mixedRef; // Check if previous string ref matches new string ref

            if (
              current !== null &&
              current.ref !== null &&
              typeof current.ref === 'function' &&
              current.ref._stringRef === stringRef
            ) {
              return current.ref;
            }

            var ref = function (value) {
              var refs = inst.refs;

              if (refs === emptyRefsObject) {
                // This is a lazy pooled frozen object, so we need to initialize.
                refs = inst.refs = {};
              }

              if (value === null) {
                delete refs[stringRef];
              } else {
                refs[stringRef] = value;
              }
            };

            ref._stringRef = stringRef;
            return ref;
          } else {
            if (!(typeof mixedRef === 'string')) {
              {
                throw Error(
                  'Expected ref to be a function, a string, an object returned by React.createRef(), or null.'
                );
              }
            }

            if (!element._owner) {
              {
                throw Error(
                  'Element ref was specified as a string (' +
                    mixedRef +
                    ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information."
                );
              }
            }
          }
        }

        return mixedRef;
      }

      function throwOnInvalidObjectType(returnFiber, newChild) {
        if (returnFiber.type !== 'textarea') {
          var addendum = '';

          {
            addendum =
              ' If you meant to render a collection of children, use an array ' +
              'instead.' +
              getCurrentFiberStackInDev();
          }

          {
            {
              throw Error(
                'Objects are not valid as a React child (found: ' +
                  (Object.prototype.toString.call(newChild) === '[object Object]'
                    ? 'object with keys {' + Object.keys(newChild).join(', ') + '}'
                    : newChild) +
                  ').' +
                  addendum
              );
            }
          }
        }
      }

      function warnOnFunctionType() {
        {
          var currentComponentErrorInfo =
            'Functions are not valid as a React child. This may happen if ' +
            'you return a Component instead of <Component /> from render. ' +
            'Or maybe you meant to call this function rather than return it.' +
            getCurrentFiberStackInDev();

          if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) {
            return;
          }

          ownerHasFunctionTypeWarning[currentComponentErrorInfo] = true;

          error(
            'Functions are not valid as a React child. This may happen if ' +
              'you return a Component instead of <Component /> from render. ' +
              'Or maybe you meant to call this function rather than return it.'
          );
        }
      } // This wrapper function exists because I expect to clone the code in each path
      // to be able to optimize each path individually by branching early. This needs
      // a compiler or we can do it manually. Helpers that don't need this branching
      // live outside of this function.

      function ChildReconciler(shouldTrackSideEffects) {
        function deleteChild(returnFiber, childToDelete) {
          if (!shouldTrackSideEffects) {
            // Noop.
            return;
          } // Deletions are added in reversed order so we add it to the front.
          // At this point, the return fiber's effect list is empty except for
          // deletions, so we can just append the deletion to the list. The remaining
          // effects aren't added until the complete phase. Once we implement
          // resuming, this may not be true.

          var last = returnFiber.lastEffect;

          if (last !== null) {
            last.nextEffect = childToDelete;
            returnFiber.lastEffect = childToDelete;
          } else {
            returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
          }

          childToDelete.nextEffect = null;
          childToDelete.effectTag = Deletion;
        }

        function deleteRemainingChildren(returnFiber, currentFirstChild) {
          if (!shouldTrackSideEffects) {
            // Noop.
            return null;
          } // TODO: For the shouldClone case, this could be micro-optimized a bit by
          // assuming that after the first child we've already added everything.

          var childToDelete = currentFirstChild;

          while (childToDelete !== null) {
            deleteChild(returnFiber, childToDelete);
            childToDelete = childToDelete.sibling;
          }

          return null;
        }

        function mapRemainingChildren(returnFiber, currentFirstChild) {
          // Add the remaining children to a temporary map so that we can find them by
          // keys quickly. Implicit (null) keys get added to this set with their index
          // instead.
          var existingChildren = new Map();
          var existingChild = currentFirstChild;

          while (existingChild !== null) {
            if (existingChild.key !== null) {
              existingChildren.set(existingChild.key, existingChild);
            } else {
              existingChildren.set(existingChild.index, existingChild);
            }

            existingChild = existingChild.sibling;
          }

          return existingChildren;
        }

        function useFiber(fiber, pendingProps) {
          // We currently set sibling to null and index to 0 here because it is easy
          // to forget to do before returning it. E.g. for the single child case.
          var clone = createWorkInProgress(fiber, pendingProps);
          clone.index = 0;
          clone.sibling = null;
          return clone;
        }

        function placeChild(newFiber, lastPlacedIndex, newIndex) {
          newFiber.index = newIndex;

          if (!shouldTrackSideEffects) {
            // Noop.
            return lastPlacedIndex;
          }

          var current = newFiber.alternate;

          if (current !== null) {
            var oldIndex = current.index;

            if (oldIndex < lastPlacedIndex) {
              // This is a move.
              newFiber.effectTag = Placement;
              return lastPlacedIndex;
            } else {
              // This item can stay in place.
              return oldIndex;
            }
          } else {
            // This is an insertion.
            newFiber.effectTag = Placement;
            return lastPlacedIndex;
          }
        }

        function placeSingleChild(newFiber) {
          // This is simpler for the single child case. We only need to do a
          // placement for inserting new children.
          if (shouldTrackSideEffects && newFiber.alternate === null) {
            newFiber.effectTag = Placement;
          }

          return newFiber;
        }

        function updateTextNode(returnFiber, current, textContent, expirationTime) {
          if (current === null || current.tag !== HostText) {
            // Insert
            var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
            created.return = returnFiber;
            return created;
          } else {
            // Update
            var existing = useFiber(current, textContent);
            existing.return = returnFiber;
            return existing;
          }
        }

        function updateElement(returnFiber, current, element, expirationTime) {
          if (current !== null) {
            if (
              current.elementType === element.type || // Keep this check inline so it only runs on the false path:
              isCompatibleFamilyForHotReloading(current, element)
            ) {
              // Move based on index
              var existing = useFiber(current, element.props);
              existing.ref = coerceRef(returnFiber, current, element);
              existing.return = returnFiber;

              {
                existing._debugSource = element._source;
                existing._debugOwner = element._owner;
              }

              return existing;
            }
          } // Insert

          var created = createFiberFromElement(element, returnFiber.mode, expirationTime);
          created.ref = coerceRef(returnFiber, current, element);
          created.return = returnFiber;
          return created;
        }

        function updatePortal(returnFiber, current, portal, expirationTime) {
          if (
            current === null ||
            current.tag !== HostPortal ||
            current.stateNode.containerInfo !== portal.containerInfo ||
            current.stateNode.implementation !== portal.implementation
          ) {
            // Insert
            var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
            created.return = returnFiber;
            return created;
          } else {
            // Update
            var existing = useFiber(current, portal.children || []);
            existing.return = returnFiber;
            return existing;
          }
        }

        function updateFragment(returnFiber, current, fragment, expirationTime, key) {
          if (current === null || current.tag !== Fragment) {
            // Insert
            var created = createFiberFromFragment(fragment, returnFiber.mode, expirationTime, key);
            created.return = returnFiber;
            return created;
          } else {
            // Update
            var existing = useFiber(current, fragment);
            existing.return = returnFiber;
            return existing;
          }
        }

        function createChild(returnFiber, newChild, expirationTime) {
          if (typeof newChild === 'string' || typeof newChild === 'number') {
            // Text nodes don't have keys. If the previous node is implicitly keyed
            // we can continue to replace it without aborting even if it is not a text
            // node.
            var created = createFiberFromText('' + newChild, returnFiber.mode, expirationTime);
            created.return = returnFiber;
            return created;
          }

          if (typeof newChild === 'object' && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var _created = createFiberFromElement(newChild, returnFiber.mode, expirationTime);

                _created.ref = coerceRef(returnFiber, null, newChild);
                _created.return = returnFiber;
                return _created;
              }

              case REACT_PORTAL_TYPE: {
                var _created2 = createFiberFromPortal(newChild, returnFiber.mode, expirationTime);

                _created2.return = returnFiber;
                return _created2;
              }
            }

            if (isArray$1(newChild) || getIteratorFn(newChild)) {
              var _created3 = createFiberFromFragment(newChild, returnFiber.mode, expirationTime, null);

              _created3.return = returnFiber;
              return _created3;
            }

            throwOnInvalidObjectType(returnFiber, newChild);
          }

          {
            if (typeof newChild === 'function') {
              warnOnFunctionType();
            }
          }

          return null;
        }

        function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
          // Update the fiber if the keys match, otherwise return null.
          var key = oldFiber !== null ? oldFiber.key : null;

          if (typeof newChild === 'string' || typeof newChild === 'number') {
            // Text nodes don't have keys. If the previous node is implicitly keyed
            // we can continue to replace it without aborting even if it is not a text
            // node.
            if (key !== null) {
              return null;
            }

            return updateTextNode(returnFiber, oldFiber, '' + newChild, expirationTime);
          }

          if (typeof newChild === 'object' && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                if (newChild.key === key) {
                  if (newChild.type === REACT_FRAGMENT_TYPE) {
                    return updateFragment(returnFiber, oldFiber, newChild.props.children, expirationTime, key);
                  }

                  return updateElement(returnFiber, oldFiber, newChild, expirationTime);
                } else {
                  return null;
                }
              }

              case REACT_PORTAL_TYPE: {
                if (newChild.key === key) {
                  return updatePortal(returnFiber, oldFiber, newChild, expirationTime);
                } else {
                  return null;
                }
              }
            }

            if (isArray$1(newChild) || getIteratorFn(newChild)) {
              if (key !== null) {
                return null;
              }

              return updateFragment(returnFiber, oldFiber, newChild, expirationTime, null);
            }

            throwOnInvalidObjectType(returnFiber, newChild);
          }

          {
            if (typeof newChild === 'function') {
              warnOnFunctionType();
            }
          }

          return null;
        }

        function updateFromMap(existingChildren, returnFiber, newIdx, newChild, expirationTime) {
          if (typeof newChild === 'string' || typeof newChild === 'number') {
            // Text nodes don't have keys, so we neither have to check the old nor
            // new node for the key. If both are text nodes, they match.
            var matchedFiber = existingChildren.get(newIdx) || null;
            return updateTextNode(returnFiber, matchedFiber, '' + newChild, expirationTime);
          }

          if (typeof newChild === 'object' && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

                if (newChild.type === REACT_FRAGMENT_TYPE) {
                  return updateFragment(
                    returnFiber,
                    _matchedFiber,
                    newChild.props.children,
                    expirationTime,
                    newChild.key
                  );
                }

                return updateElement(returnFiber, _matchedFiber, newChild, expirationTime);
              }

              case REACT_PORTAL_TYPE: {
                var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

                return updatePortal(returnFiber, _matchedFiber2, newChild, expirationTime);
              }
            }

            if (isArray$1(newChild) || getIteratorFn(newChild)) {
              var _matchedFiber3 = existingChildren.get(newIdx) || null;

              return updateFragment(returnFiber, _matchedFiber3, newChild, expirationTime, null);
            }

            throwOnInvalidObjectType(returnFiber, newChild);
          }

          {
            if (typeof newChild === 'function') {
              warnOnFunctionType();
            }
          }

          return null;
        }
        /**
         * Warns if there is a duplicate or missing key
         */

        function warnOnInvalidKey(child, knownKeys) {
          {
            if (typeof child !== 'object' || child === null) {
              return knownKeys;
            }

            switch (child.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                warnForMissingKey(child);
                var key = child.key;

                if (typeof key !== 'string') {
                  break;
                }

                if (knownKeys === null) {
                  knownKeys = new Set();
                  knownKeys.add(key);
                  break;
                }

                if (!knownKeys.has(key)) {
                  knownKeys.add(key);
                  break;
                }

                error(
                  'Encountered two children with the same key, `%s`. ' +
                    'Keys should be unique so that components maintain their identity ' +
                    'across updates. Non-unique keys may cause children to be ' +
                    'duplicated and/or omitted — the behavior is unsupported and ' +
                    'could change in a future version.',
                  key
                );

                break;
            }
          }

          return knownKeys;
        }

        function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, expirationTime) {
          // This algorithm can't optimize by searching from both ends since we
          // don't have backpointers on fibers. I'm trying to see how far we can get
          // with that model. If it ends up not being worth the tradeoffs, we can
          // add it later.
          // Even with a two ended optimization, we'd want to optimize for the case
          // where there are few changes and brute force the comparison instead of
          // going for the Map. It'd like to explore hitting that path first in
          // forward-only mode and only go for the Map once we notice that we need
          // lots of look ahead. This doesn't handle reversal as well as two ended
          // search but that's unusual. Besides, for the two ended optimization to
          // work on Iterables, we'd need to copy the whole set.
          // In this first iteration, we'll just live with hitting the bad case
          // (adding everything to a Map) in for every insert/move.
          // If you change this code, also update reconcileChildrenIterator() which
          // uses the same algorithm.
          {
            // First, validate keys.
            var knownKeys = null;

            for (var i = 0; i < newChildren.length; i++) {
              var child = newChildren[i];
              knownKeys = warnOnInvalidKey(child, knownKeys);
            }
          }

          var resultingFirstChild = null;
          var previousNewFiber = null;
          var oldFiber = currentFirstChild;
          var lastPlacedIndex = 0;
          var newIdx = 0;
          var nextOldFiber = null;

          for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
            if (oldFiber.index > newIdx) {
              nextOldFiber = oldFiber;
              oldFiber = null;
            } else {
              nextOldFiber = oldFiber.sibling;
            }

            var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);

            if (newFiber === null) {
              // TODO: This breaks on empty slots like null children. That's
              // unfortunate because it triggers the slow path all the time. We need
              // a better way to communicate whether this was a miss or null,
              // boolean, undefined, etc.
              if (oldFiber === null) {
                oldFiber = nextOldFiber;
              }

              break;
            }

            if (shouldTrackSideEffects) {
              if (oldFiber && newFiber.alternate === null) {
                // We matched the slot, but we didn't reuse the existing fiber, so we
                // need to delete the existing child.
                deleteChild(returnFiber, oldFiber);
              }
            }

            lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

            if (previousNewFiber === null) {
              // TODO: Move out of the loop. This only happens for the first run.
              resultingFirstChild = newFiber;
            } else {
              // TODO: Defer siblings if we're not at the right index for this slot.
              // I.e. if we had null values before, then we want to defer this
              // for each null value. However, we also don't want to call updateSlot
              // with the previous one.
              previousNewFiber.sibling = newFiber;
            }

            previousNewFiber = newFiber;
            oldFiber = nextOldFiber;
          }

          if (newIdx === newChildren.length) {
            // We've reached the end of the new children. We can delete the rest.
            deleteRemainingChildren(returnFiber, oldFiber);
            return resultingFirstChild;
          }

          if (oldFiber === null) {
            // If we don't have any more existing children we can choose a fast path
            // since the rest will all be insertions.
            for (; newIdx < newChildren.length; newIdx++) {
              var _newFiber = createChild(returnFiber, newChildren[newIdx], expirationTime);

              if (_newFiber === null) {
                continue;
              }

              lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);

              if (previousNewFiber === null) {
                // TODO: Move out of the loop. This only happens for the first run.
                resultingFirstChild = _newFiber;
              } else {
                previousNewFiber.sibling = _newFiber;
              }

              previousNewFiber = _newFiber;
            }

            return resultingFirstChild;
          } // Add all children to a key map for quick lookups.

          var existingChildren = mapRemainingChildren(returnFiber, oldFiber); // Keep scanning and use the map to restore deleted items as moves.

          for (; newIdx < newChildren.length; newIdx++) {
            var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], expirationTime);

            if (_newFiber2 !== null) {
              if (shouldTrackSideEffects) {
                if (_newFiber2.alternate !== null) {
                  // The new fiber is a work in progress, but if there exists a
                  // current, that means that we reused the fiber. We need to delete
                  // it from the child list so that we don't add it to the deletion
                  // list.
                  existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
                }
              }

              lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);

              if (previousNewFiber === null) {
                resultingFirstChild = _newFiber2;
              } else {
                previousNewFiber.sibling = _newFiber2;
              }

              previousNewFiber = _newFiber2;
            }
          }

          if (shouldTrackSideEffects) {
            // Any existing children that weren't consumed above were deleted. We need
            // to add them to the deletion list.
            existingChildren.forEach(function (child) {
              return deleteChild(returnFiber, child);
            });
          }

          return resultingFirstChild;
        }

        function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, expirationTime) {
          // This is the same implementation as reconcileChildrenArray(),
          // but using the iterator instead.
          var iteratorFn = getIteratorFn(newChildrenIterable);

          if (!(typeof iteratorFn === 'function')) {
            {
              throw Error(
                'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }

          {
            // We don't support rendering Generators because it's a mutation.
            // See https://github.com/facebook/react/issues/12995
            if (
              typeof Symbol === 'function' && // $FlowFixMe Flow doesn't know about toStringTag
              newChildrenIterable[Symbol.toStringTag] === 'Generator'
            ) {
              if (!didWarnAboutGenerators) {
                error(
                  'Using Generators as children is unsupported and will likely yield ' +
                    'unexpected results because enumerating a generator mutates it. ' +
                    'You may convert it to an array with `Array.from()` or the ' +
                    '`[...spread]` operator before rendering. Keep in mind ' +
                    'you might need to polyfill these features for older browsers.'
                );
              }

              didWarnAboutGenerators = true;
            } // Warn about using Maps as children

            if (newChildrenIterable.entries === iteratorFn) {
              if (!didWarnAboutMaps) {
                error(
                  'Using Maps as children is unsupported and will likely yield ' +
                    'unexpected results. Convert it to a sequence/iterable of keyed ' +
                    'ReactElements instead.'
                );
              }

              didWarnAboutMaps = true;
            } // First, validate keys.
            // We'll get a different iterator later for the main pass.

            var _newChildren = iteratorFn.call(newChildrenIterable);

            if (_newChildren) {
              var knownKeys = null;

              var _step = _newChildren.next();

              for (; !_step.done; _step = _newChildren.next()) {
                var child = _step.value;
                knownKeys = warnOnInvalidKey(child, knownKeys);
              }
            }
          }

          var newChildren = iteratorFn.call(newChildrenIterable);

          if (!(newChildren != null)) {
            {
              throw Error('An iterable object provided no iterator.');
            }
          }

          var resultingFirstChild = null;
          var previousNewFiber = null;
          var oldFiber = currentFirstChild;
          var lastPlacedIndex = 0;
          var newIdx = 0;
          var nextOldFiber = null;
          var step = newChildren.next();

          for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
            if (oldFiber.index > newIdx) {
              nextOldFiber = oldFiber;
              oldFiber = null;
            } else {
              nextOldFiber = oldFiber.sibling;
            }

            var newFiber = updateSlot(returnFiber, oldFiber, step.value, expirationTime);

            if (newFiber === null) {
              // TODO: This breaks on empty slots like null children. That's
              // unfortunate because it triggers the slow path all the time. We need
              // a better way to communicate whether this was a miss or null,
              // boolean, undefined, etc.
              if (oldFiber === null) {
                oldFiber = nextOldFiber;
              }

              break;
            }

            if (shouldTrackSideEffects) {
              if (oldFiber && newFiber.alternate === null) {
                // We matched the slot, but we didn't reuse the existing fiber, so we
                // need to delete the existing child.
                deleteChild(returnFiber, oldFiber);
              }
            }

            lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);

            if (previousNewFiber === null) {
              // TODO: Move out of the loop. This only happens for the first run.
              resultingFirstChild = newFiber;
            } else {
              // TODO: Defer siblings if we're not at the right index for this slot.
              // I.e. if we had null values before, then we want to defer this
              // for each null value. However, we also don't want to call updateSlot
              // with the previous one.
              previousNewFiber.sibling = newFiber;
            }

            previousNewFiber = newFiber;
            oldFiber = nextOldFiber;
          }

          if (step.done) {
            // We've reached the end of the new children. We can delete the rest.
            deleteRemainingChildren(returnFiber, oldFiber);
            return resultingFirstChild;
          }

          if (oldFiber === null) {
            // If we don't have any more existing children we can choose a fast path
            // since the rest will all be insertions.
            for (; !step.done; newIdx++, step = newChildren.next()) {
              var _newFiber3 = createChild(returnFiber, step.value, expirationTime);

              if (_newFiber3 === null) {
                continue;
              }

              lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);

              if (previousNewFiber === null) {
                // TODO: Move out of the loop. This only happens for the first run.
                resultingFirstChild = _newFiber3;
              } else {
                previousNewFiber.sibling = _newFiber3;
              }

              previousNewFiber = _newFiber3;
            }

            return resultingFirstChild;
          } // Add all children to a key map for quick lookups.

          var existingChildren = mapRemainingChildren(returnFiber, oldFiber); // Keep scanning and use the map to restore deleted items as moves.

          for (; !step.done; newIdx++, step = newChildren.next()) {
            var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, expirationTime);

            if (_newFiber4 !== null) {
              if (shouldTrackSideEffects) {
                if (_newFiber4.alternate !== null) {
                  // The new fiber is a work in progress, but if there exists a
                  // current, that means that we reused the fiber. We need to delete
                  // it from the child list so that we don't add it to the deletion
                  // list.
                  existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
                }
              }

              lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);

              if (previousNewFiber === null) {
                resultingFirstChild = _newFiber4;
              } else {
                previousNewFiber.sibling = _newFiber4;
              }

              previousNewFiber = _newFiber4;
            }
          }

          if (shouldTrackSideEffects) {
            // Any existing children that weren't consumed above were deleted. We need
            // to add them to the deletion list.
            existingChildren.forEach(function (child) {
              return deleteChild(returnFiber, child);
            });
          }

          return resultingFirstChild;
        }

        function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, expirationTime) {
          // There's no need to check for keys on text nodes since we don't have a
          // way to define them.
          if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
            // We already have an existing node so let's just update it and delete
            // the rest.
            deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
            var existing = useFiber(currentFirstChild, textContent);
            existing.return = returnFiber;
            return existing;
          } // The existing first child is not a text node so we need to create one
          // and delete the existing ones.

          deleteRemainingChildren(returnFiber, currentFirstChild);
          var created = createFiberFromText(textContent, returnFiber.mode, expirationTime);
          created.return = returnFiber;
          return created;
        }

        function reconcileSingleElement(returnFiber, currentFirstChild, element, expirationTime) {
          var key = element.key;
          var child = currentFirstChild;

          while (child !== null) {
            // TODO: If key === null and child.key === null, then this only applies to
            // the first item in the list.
            if (child.key === key) {
              switch (child.tag) {
                case Fragment: {
                  if (element.type === REACT_FRAGMENT_TYPE) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    var existing = useFiber(child, element.props.children);
                    existing.return = returnFiber;

                    {
                      existing._debugSource = element._source;
                      existing._debugOwner = element._owner;
                    }

                    return existing;
                  }

                  break;
                }

                case Block:

                // We intentionally fallthrough here if enableBlocksAPI is not on.
                // eslint-disable-next-lined no-fallthrough

                default: {
                  if (
                    child.elementType === element.type || // Keep this check inline so it only runs on the false path:
                    isCompatibleFamilyForHotReloading(child, element)
                  ) {
                    deleteRemainingChildren(returnFiber, child.sibling);

                    var _existing3 = useFiber(child, element.props);

                    _existing3.ref = coerceRef(returnFiber, child, element);
                    _existing3.return = returnFiber;

                    {
                      _existing3._debugSource = element._source;
                      _existing3._debugOwner = element._owner;
                    }

                    return _existing3;
                  }

                  break;
                }
              } // Didn't match.

              deleteRemainingChildren(returnFiber, child);
              break;
            } else {
              deleteChild(returnFiber, child);
            }

            child = child.sibling;
          }

          if (element.type === REACT_FRAGMENT_TYPE) {
            var created = createFiberFromFragment(
              element.props.children,
              returnFiber.mode,
              expirationTime,
              element.key
            );
            created.return = returnFiber;
            return created;
          } else {
            var _created4 = createFiberFromElement(element, returnFiber.mode, expirationTime);

            _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
            _created4.return = returnFiber;
            return _created4;
          }
        }

        function reconcileSinglePortal(returnFiber, currentFirstChild, portal, expirationTime) {
          var key = portal.key;
          var child = currentFirstChild;

          while (child !== null) {
            // TODO: If key === null and child.key === null, then this only applies to
            // the first item in the list.
            if (child.key === key) {
              if (
                child.tag === HostPortal &&
                child.stateNode.containerInfo === portal.containerInfo &&
                child.stateNode.implementation === portal.implementation
              ) {
                deleteRemainingChildren(returnFiber, child.sibling);
                var existing = useFiber(child, portal.children || []);
                existing.return = returnFiber;
                return existing;
              } else {
                deleteRemainingChildren(returnFiber, child);
                break;
              }
            } else {
              deleteChild(returnFiber, child);
            }

            child = child.sibling;
          }

          var created = createFiberFromPortal(portal, returnFiber.mode, expirationTime);
          created.return = returnFiber;
          return created;
        } // This API will tag the children with the side-effect of the reconciliation
        // itself. They will be added to the side-effect list as we pass through the
        // children and the parent.

        function reconcileChildFibers(returnFiber, currentFirstChild, newChild, expirationTime) {
          // This function is not recursive.
          // If the top level item is an array, we treat it as a set of children,
          // not as a fragment. Nested arrays on the other hand will be treated as
          // fragment nodes. Recursion happens at the normal flow.
          // Handle top level unkeyed fragments as if they were arrays.
          // This leads to an ambiguity between <>{[...]}</> and <>...</>.
          // We treat the ambiguous cases above the same.
          var isUnkeyedTopLevelFragment =
            typeof newChild === 'object' &&
            newChild !== null &&
            newChild.type === REACT_FRAGMENT_TYPE &&
            newChild.key === null;

          if (isUnkeyedTopLevelFragment) {
            newChild = newChild.props.children;
          } // Handle object types

          var isObject = typeof newChild === 'object' && newChild !== null;

          if (isObject) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return placeSingleChild(
                  reconcileSingleElement(returnFiber, currentFirstChild, newChild, expirationTime)
                );

              case REACT_PORTAL_TYPE:
                return placeSingleChild(
                  reconcileSinglePortal(returnFiber, currentFirstChild, newChild, expirationTime)
                );
            }
          }

          if (typeof newChild === 'string' || typeof newChild === 'number') {
            return placeSingleChild(
              reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, expirationTime)
            );
          }

          if (isArray$1(newChild)) {
            return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, expirationTime);
          }

          if (getIteratorFn(newChild)) {
            return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, expirationTime);
          }

          if (isObject) {
            throwOnInvalidObjectType(returnFiber, newChild);
          }

          {
            if (typeof newChild === 'function') {
              warnOnFunctionType();
            }
          }

          if (typeof newChild === 'undefined' && !isUnkeyedTopLevelFragment) {
            // If the new child is undefined, and the return fiber is a composite
            // component, throw an error. If Fiber return types are disabled,
            // we already threw above.
            switch (returnFiber.tag) {
              case ClassComponent: {
                {
                  var instance = returnFiber.stateNode;

                  if (instance.render._isMockFunction) {
                    // We allow auto-mocks to proceed as if they're returning null.
                    break;
                  }
                }
              }
              // Intentionally fall through to the next case, which handles both
              // functions and classes
              // eslint-disable-next-lined no-fallthrough

              case FunctionComponent: {
                var Component = returnFiber.type;

                {
                  {
                    throw Error(
                      (Component.displayName || Component.name || 'Component') +
                        '(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.'
                    );
                  }
                }
              }
            }
          } // Remaining cases are all treated as empty.

          return deleteRemainingChildren(returnFiber, currentFirstChild);
        }

        return reconcileChildFibers;
      }

      var reconcileChildFibers = ChildReconciler(true);
      var mountChildFibers = ChildReconciler(false);
      function cloneChildFibers(current, workInProgress) {
        if (!(current === null || workInProgress.child === current.child)) {
          {
            throw Error('Resuming work not yet implemented.');
          }
        }

        if (workInProgress.child === null) {
          return;
        }

        var currentChild = workInProgress.child;
        var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
        workInProgress.child = newChild;
        newChild.return = workInProgress;

        while (currentChild.sibling !== null) {
          currentChild = currentChild.sibling;
          newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
          newChild.return = workInProgress;
        }

        newChild.sibling = null;
      } // Reset a workInProgress child set to prepare it for a second pass.

      function resetChildFibers(workInProgress, renderExpirationTime) {
        var child = workInProgress.child;

        while (child !== null) {
          resetWorkInProgress(child, renderExpirationTime);
          child = child.sibling;
        }
      }

      var NO_CONTEXT = {};
      var contextStackCursor$1 = createCursor(NO_CONTEXT);
      var contextFiberStackCursor = createCursor(NO_CONTEXT);
      var rootInstanceStackCursor = createCursor(NO_CONTEXT);

      function requiredContext(c) {
        if (!(c !== NO_CONTEXT)) {
          {
            throw Error(
              'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }

        return c;
      }

      function getRootHostContainer() {
        var rootInstance = requiredContext(rootInstanceStackCursor.current);
        return rootInstance;
      }

      function pushHostContainer(fiber, nextRootInstance) {
        // Push current root instance onto the stack;
        // This allows us to reset root when portals are popped.
        push(rootInstanceStackCursor, nextRootInstance, fiber); // Track the context and the Fiber that provided it.
        // This enables us to pop only Fibers that provide unique contexts.

        push(contextFiberStackCursor, fiber, fiber); // Finally, we need to push the host context to the stack.
        // However, we can't just call getRootHostContext() and push it because
        // we'd have a different number of entries on the stack depending on
        // whether getRootHostContext() throws somewhere in renderer code or not.
        // So we push an empty value first. This lets us safely unwind on errors.

        push(contextStackCursor$1, NO_CONTEXT, fiber);
        var nextRootContext = getRootHostContext(nextRootInstance); // Now that we know this function doesn't throw, replace it.

        pop(contextStackCursor$1, fiber);
        push(contextStackCursor$1, nextRootContext, fiber);
      }

      function popHostContainer(fiber) {
        pop(contextStackCursor$1, fiber);
        pop(contextFiberStackCursor, fiber);
        pop(rootInstanceStackCursor, fiber);
      }

      function getHostContext() {
        var context = requiredContext(contextStackCursor$1.current);
        return context;
      }

      function pushHostContext(fiber) {
        var rootInstance = requiredContext(rootInstanceStackCursor.current);
        var context = requiredContext(contextStackCursor$1.current);
        var nextContext = getChildHostContext(context, fiber.type, rootInstance); // Don't push this Fiber's context unless it's unique.

        if (context === nextContext) {
          return;
        } // Track the context and the Fiber that provided it.
        // This enables us to pop only Fibers that provide unique contexts.

        push(contextFiberStackCursor, fiber, fiber);
        push(contextStackCursor$1, nextContext, fiber);
      }

      function popHostContext(fiber) {
        // Do not pop unless this Fiber provided the current context.
        // pushHostContext() only pushes Fibers that provide unique contexts.
        if (contextFiberStackCursor.current !== fiber) {
          return;
        }

        pop(contextStackCursor$1, fiber);
        pop(contextFiberStackCursor, fiber);
      }

      var DefaultSuspenseContext = 0; // The Suspense Context is split into two parts. The lower bits is
      // inherited deeply down the subtree. The upper bits only affect
      // this immediate suspense boundary and gets reset each new
      // boundary or suspense list.

      var SubtreeSuspenseContextMask = 1; // Subtree Flags:
      // InvisibleParentSuspenseContext indicates that one of our parent Suspense
      // boundaries is not currently showing visible main content.
      // Either because it is already showing a fallback or is not mounted at all.
      // We can use this to determine if it is desirable to trigger a fallback at
      // the parent. If not, then we might need to trigger undesirable boundaries
      // and/or suspend the commit to avoid hiding the parent content.

      var InvisibleParentSuspenseContext = 1; // Shallow Flags:
      // ForceSuspenseFallback can be used by SuspenseList to force newly added
      // items into their fallback state during one of the render passes.

      var ForceSuspenseFallback = 2;
      var suspenseStackCursor = createCursor(DefaultSuspenseContext);
      function hasSuspenseContext(parentContext, flag) {
        return (parentContext & flag) !== 0;
      }
      function setDefaultShallowSuspenseContext(parentContext) {
        return parentContext & SubtreeSuspenseContextMask;
      }
      function setShallowSuspenseContext(parentContext, shallowContext) {
        return (parentContext & SubtreeSuspenseContextMask) | shallowContext;
      }
      function addSubtreeSuspenseContext(parentContext, subtreeContext) {
        return parentContext | subtreeContext;
      }
      function pushSuspenseContext(fiber, newContext) {
        push(suspenseStackCursor, newContext, fiber);
      }
      function popSuspenseContext(fiber) {
        pop(suspenseStackCursor, fiber);
      }

      function shouldCaptureSuspense(workInProgress, hasInvisibleParent) {
        // If it was the primary children that just suspended, capture and render the
        // fallback. Otherwise, don't capture and bubble to the next boundary.
        var nextState = workInProgress.memoizedState;

        if (nextState !== null) {
          if (nextState.dehydrated !== null) {
            // A dehydrated boundary always captures.
            return true;
          }

          return false;
        }

        var props = workInProgress.memoizedProps; // In order to capture, the Suspense component must have a fallback prop.

        if (props.fallback === undefined) {
          return false;
        } // Regular boundaries always capture.

        if (props.unstable_avoidThisFallback !== true) {
          return true;
        } // If it's a boundary we should avoid, then we prefer to bubble up to the
        // parent boundary if it is currently invisible.

        if (hasInvisibleParent) {
          return false;
        } // If the parent is not able to handle it, we must handle it.

        return true;
      }
      function findFirstSuspended(row) {
        var node = row;

        while (node !== null) {
          if (node.tag === SuspenseComponent) {
            var state = node.memoizedState;

            if (state !== null) {
              var dehydrated = state.dehydrated;

              if (
                dehydrated === null ||
                isSuspenseInstancePending(dehydrated) ||
                isSuspenseInstanceFallback(dehydrated)
              ) {
                return node;
              }
            }
          } else if (
            node.tag === SuspenseListComponent && // revealOrder undefined can't be trusted because it don't
            // keep track of whether it suspended or not.
            node.memoizedProps.revealOrder !== undefined
          ) {
            var didSuspend = (node.effectTag & DidCapture) !== NoEffect;

            if (didSuspend) {
              return node;
            }
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }

          if (node === row) {
            return null;
          }

          while (node.sibling === null) {
            if (node.return === null || node.return === row) {
              return null;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        }

        return null;
      }

      function createDeprecatedResponderListener(responder, props) {
        var eventResponderListener = {
          responder: responder,
          props: props,
        };

        {
          Object.freeze(eventResponderListener);
        }

        return eventResponderListener;
      }

      var HasEffect =
        /* */
        1; // Represents the phase in which the effect (not the clean-up) fires.

      var Layout =
        /*    */
        2;
      var Passive$1 =
        /*   */
        4;

      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher,
        ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
      var didWarnAboutMismatchedHooksForComponent;

      {
        didWarnAboutMismatchedHooksForComponent = new Set();
      }

      // These are set right before calling the component.
      var renderExpirationTime = NoWork; // The work-in-progress fiber. I've named it differently to distinguish it from
      // the work-in-progress hook.

      var currentlyRenderingFiber$1 = null; // Hooks are stored as a linked list on the fiber's memoizedState field. The
      // current hook list is the list that belongs to the current fiber. The
      // work-in-progress hook list is a new list that will be added to the
      // work-in-progress fiber.

      var currentHook = null;
      var workInProgressHook = null; // Whether an update was scheduled at any point during the render phase. This
      // does not get reset if we do another render pass; only when we're completely
      // finished evaluating this component. This is an optimization so we know
      // whether we need to clear render phase updates after a throw.

      var didScheduleRenderPhaseUpdate = false;
      var RE_RENDER_LIMIT = 25; // In DEV, this is the name of the currently executing primitive hook

      var currentHookNameInDev = null; // In DEV, this list ensures that hooks are called in the same order between renders.
      // The list stores the order of hooks used during the initial render (mount).
      // Subsequent renders (updates) reference this list.

      var hookTypesDev = null;
      var hookTypesUpdateIndexDev = -1; // In DEV, this tracks whether currently rendering component needs to ignore
      // the dependencies for Hooks that need them (e.g. useEffect or useMemo).
      // When true, such Hooks will always be "remounted". Only used during hot reload.

      var ignorePreviousDependencies = false;

      function mountHookTypesDev() {
        {
          var hookName = currentHookNameInDev;

          if (hookTypesDev === null) {
            hookTypesDev = [hookName];
          } else {
            hookTypesDev.push(hookName);
          }
        }
      }

      function updateHookTypesDev() {
        {
          var hookName = currentHookNameInDev;

          if (hookTypesDev !== null) {
            hookTypesUpdateIndexDev++;

            if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
              warnOnHookMismatchInDev(hookName);
            }
          }
        }
      }

      function checkDepsAreArrayDev(deps) {
        {
          if (deps !== undefined && deps !== null && !Array.isArray(deps)) {
            // Verify deps, but only on mount to avoid extra checks.
            // It's unlikely their type would change as usually you define them inline.
            error(
              '%s received a final argument that is not an array (instead, received `%s`). When ' +
                'specified, the final argument must be an array.',
              currentHookNameInDev,
              typeof deps
            );
          }
        }
      }

      function warnOnHookMismatchInDev(currentHookName) {
        {
          var componentName = getComponentName(currentlyRenderingFiber$1.type);

          if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
            didWarnAboutMismatchedHooksForComponent.add(componentName);

            if (hookTypesDev !== null) {
              var table = '';
              var secondColumnStart = 30;

              for (var i = 0; i <= hookTypesUpdateIndexDev; i++) {
                var oldHookName = hookTypesDev[i];
                var newHookName = i === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
                var row = i + 1 + '. ' + oldHookName; // Extra space so second column lines up
                // lol @ IE not supporting String#repeat

                while (row.length < secondColumnStart) {
                  row += ' ';
                }

                row += newHookName + '\n';
                table += row;
              }

              error(
                'React has detected a change in the order of Hooks called by %s. ' +
                  'This will lead to bugs and errors if not fixed. ' +
                  'For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks\n\n' +
                  '   Previous render            Next render\n' +
                  '   ------------------------------------------------------\n' +
                  '%s' +
                  '   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n',
                componentName,
                table
              );
            }
          }
        }
      }

      function throwInvalidHookError() {
        {
          {
            throw Error(
              'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.'
            );
          }
        }
      }

      function areHookInputsEqual(nextDeps, prevDeps) {
        {
          if (ignorePreviousDependencies) {
            // Only true when this component is being hot reloaded.
            return false;
          }
        }

        if (prevDeps === null) {
          {
            error(
              '%s received a final argument during this render, but not during ' +
                'the previous render. Even though the final argument is optional, ' +
                'its type cannot change between renders.',
              currentHookNameInDev
            );
          }

          return false;
        }

        {
          // Don't bother comparing lengths in prod because these arrays should be
          // passed inline.
          if (nextDeps.length !== prevDeps.length) {
            error(
              'The final argument passed to %s changed size between renders. The ' +
                'order and size of this array must remain constant.\n\n' +
                'Previous: %s\n' +
                'Incoming: %s',
              currentHookNameInDev,
              '[' + prevDeps.join(', ') + ']',
              '[' + nextDeps.join(', ') + ']'
            );
          }
        }

        for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
          if (objectIs(nextDeps[i], prevDeps[i])) {
            continue;
          }

          return false;
        }

        return true;
      }

      function renderWithHooks(current, workInProgress, Component, props, secondArg, nextRenderExpirationTime) {
        renderExpirationTime = nextRenderExpirationTime;
        currentlyRenderingFiber$1 = workInProgress;

        {
          hookTypesDev = current !== null ? current._debugHookTypes : null;
          hookTypesUpdateIndexDev = -1; // Used for hot reloading:

          ignorePreviousDependencies = current !== null && current.type !== workInProgress.type;
        }

        workInProgress.memoizedState = null;
        workInProgress.updateQueue = null;
        workInProgress.expirationTime = NoWork; // The following should have already been reset
        // currentHook = null;
        // workInProgressHook = null;
        // didScheduleRenderPhaseUpdate = false;
        // TODO Warn if no hooks are used at all during mount, then some are used during update.
        // Currently we will identify the update render as a mount because memoizedState === null.
        // This is tricky because it's valid for certain types of components (e.g. React.lazy)
        // Using memoizedState to differentiate between mount/update only works if at least one stateful hook is used.
        // Non-stateful hooks (e.g. context) don't get added to memoizedState,
        // so memoizedState would be null during updates and mounts.

        {
          if (current !== null && current.memoizedState !== null) {
            ReactCurrentDispatcher.current = HooksDispatcherOnUpdateInDEV;
          } else if (hookTypesDev !== null) {
            // This dispatcher handles an edge case where a component is updating,
            // but no stateful hooks have been used.
            // We want to match the production code behavior (which will use HooksDispatcherOnMount),
            // but with the extra DEV validation to ensure hooks ordering hasn't changed.
            // This dispatcher does that.
            ReactCurrentDispatcher.current = HooksDispatcherOnMountWithHookTypesInDEV;
          } else {
            ReactCurrentDispatcher.current = HooksDispatcherOnMountInDEV;
          }
        }

        var children = Component(props, secondArg); // Check if there was a render phase update

        if (workInProgress.expirationTime === renderExpirationTime) {
          // Keep rendering in a loop for as long as render phase updates continue to
          // be scheduled. Use a counter to prevent infinite loops.
          var numberOfReRenders = 0;

          do {
            workInProgress.expirationTime = NoWork;

            if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
              {
                throw Error('Too many re-renders. React limits the number of renders to prevent an infinite loop.');
              }
            }

            numberOfReRenders += 1;

            {
              // Even when hot reloading, allow dependencies to stabilize
              // after first render to prevent infinite render phase updates.
              ignorePreviousDependencies = false;
            } // Start over from the beginning of the list

            currentHook = null;
            workInProgressHook = null;
            workInProgress.updateQueue = null;

            {
              // Also validate hook order for cascading updates.
              hookTypesUpdateIndexDev = -1;
            }

            ReactCurrentDispatcher.current = HooksDispatcherOnRerenderInDEV;
            children = Component(props, secondArg);
          } while (workInProgress.expirationTime === renderExpirationTime);
        } // We can assume the previous dispatcher is always this one, since we set it
        // at the beginning of the render phase and there's no re-entrancy.

        ReactCurrentDispatcher.current = ContextOnlyDispatcher;

        {
          workInProgress._debugHookTypes = hookTypesDev;
        } // This check uses currentHook so that it works the same in DEV and prod bundles.
        // hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.

        var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
        renderExpirationTime = NoWork;
        currentlyRenderingFiber$1 = null;
        currentHook = null;
        workInProgressHook = null;

        {
          currentHookNameInDev = null;
          hookTypesDev = null;
          hookTypesUpdateIndexDev = -1;
        }

        didScheduleRenderPhaseUpdate = false;

        if (!!didRenderTooFewHooks) {
          {
            throw Error(
              'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
            );
          }
        }

        return children;
      }
      function bailoutHooks(current, workInProgress, expirationTime) {
        workInProgress.updateQueue = current.updateQueue;
        workInProgress.effectTag &= ~(Passive | Update);

        if (current.expirationTime <= expirationTime) {
          current.expirationTime = NoWork;
        }
      }
      function resetHooksAfterThrow() {
        // We can assume the previous dispatcher is always this one, since we set it
        // at the beginning of the render phase and there's no re-entrancy.
        ReactCurrentDispatcher.current = ContextOnlyDispatcher;

        if (didScheduleRenderPhaseUpdate) {
          // There were render phase updates. These are only valid for this render
          // phase, which we are now aborting. Remove the updates from the queues so
          // they do not persist to the next render. Do not remove updates from hooks
          // that weren't processed.
          //
          // Only reset the updates from the queue if it has a clone. If it does
          // not have a clone, that means it wasn't processed, and the updates were
          // scheduled before we entered the render phase.
          var hook = currentlyRenderingFiber$1.memoizedState;

          while (hook !== null) {
            var queue = hook.queue;

            if (queue !== null) {
              queue.pending = null;
            }

            hook = hook.next;
          }
        }

        renderExpirationTime = NoWork;
        currentlyRenderingFiber$1 = null;
        currentHook = null;
        workInProgressHook = null;

        {
          hookTypesDev = null;
          hookTypesUpdateIndexDev = -1;
          currentHookNameInDev = null;
        }

        didScheduleRenderPhaseUpdate = false;
      }

      function mountWorkInProgressHook() {
        var hook = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };

        if (workInProgressHook === null) {
          // This is the first hook in the list
          currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
        } else {
          // Append to the end of the list
          workInProgressHook = workInProgressHook.next = hook;
        }

        return workInProgressHook;
      }

      function updateWorkInProgressHook() {
        // This function is used both for updates and for re-renders triggered by a
        // render phase update. It assumes there is either a current hook we can
        // clone, or a work-in-progress hook from a previous render pass that we can
        // use as a base. When we reach the end of the base list, we must switch to
        // the dispatcher used for mounts.
        var nextCurrentHook;

        if (currentHook === null) {
          var current = currentlyRenderingFiber$1.alternate;

          if (current !== null) {
            nextCurrentHook = current.memoizedState;
          } else {
            nextCurrentHook = null;
          }
        } else {
          nextCurrentHook = currentHook.next;
        }

        var nextWorkInProgressHook;

        if (workInProgressHook === null) {
          nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
        } else {
          nextWorkInProgressHook = workInProgressHook.next;
        }

        if (nextWorkInProgressHook !== null) {
          // There's already a work-in-progress. Reuse it.
          workInProgressHook = nextWorkInProgressHook;
          nextWorkInProgressHook = workInProgressHook.next;
          currentHook = nextCurrentHook;
        } else {
          // Clone from the current hook.
          if (!(nextCurrentHook !== null)) {
            {
              throw Error('Rendered more hooks than during the previous render.');
            }
          }

          currentHook = nextCurrentHook;
          var newHook = {
            memoizedState: currentHook.memoizedState,
            baseState: currentHook.baseState,
            baseQueue: currentHook.baseQueue,
            queue: currentHook.queue,
            next: null,
          };

          if (workInProgressHook === null) {
            // This is the first hook in the list.
            currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
          } else {
            // Append to the end of the list.
            workInProgressHook = workInProgressHook.next = newHook;
          }
        }

        return workInProgressHook;
      }

      function createFunctionComponentUpdateQueue() {
        return {
          lastEffect: null,
        };
      }

      function basicStateReducer(state, action) {
        // $FlowFixMe: Flow doesn't like mixed types
        return typeof action === 'function' ? action(state) : action;
      }

      function mountReducer(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook();
        var initialState;

        if (init !== undefined) {
          initialState = init(initialArg);
        } else {
          initialState = initialArg;
        }

        hook.memoizedState = hook.baseState = initialState;
        var queue = (hook.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: reducer,
          lastRenderedState: initialState,
        });
        var dispatch = (queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue));
        return [hook.memoizedState, dispatch];
      }

      function updateReducer(reducer, initialArg, init) {
        var hook = updateWorkInProgressHook();
        var queue = hook.queue;

        if (!(queue !== null)) {
          {
            throw Error('Should have a queue. This is likely a bug in React. Please file an issue.');
          }
        }

        queue.lastRenderedReducer = reducer;
        var current = currentHook; // The last rebase update that is NOT part of the base state.

        var baseQueue = current.baseQueue; // The last pending update that hasn't been processed yet.

        var pendingQueue = queue.pending;

        if (pendingQueue !== null) {
          // We have new updates that haven't been processed yet.
          // We'll add them to the base queue.
          if (baseQueue !== null) {
            // Merge the pending queue and the base queue.
            var baseFirst = baseQueue.next;
            var pendingFirst = pendingQueue.next;
            baseQueue.next = pendingFirst;
            pendingQueue.next = baseFirst;
          }

          current.baseQueue = baseQueue = pendingQueue;
          queue.pending = null;
        }

        if (baseQueue !== null) {
          // We have a queue to process.
          var first = baseQueue.next;
          var newState = current.baseState;
          var newBaseState = null;
          var newBaseQueueFirst = null;
          var newBaseQueueLast = null;
          var update = first;

          do {
            var updateExpirationTime = update.expirationTime;

            if (updateExpirationTime < renderExpirationTime) {
              // Priority is insufficient. Skip this update. If this is the first
              // skipped update, the previous update/state is the new base
              // update/state.
              var clone = {
                expirationTime: update.expirationTime,
                suspenseConfig: update.suspenseConfig,
                action: update.action,
                eagerReducer: update.eagerReducer,
                eagerState: update.eagerState,
                next: null,
              };

              if (newBaseQueueLast === null) {
                newBaseQueueFirst = newBaseQueueLast = clone;
                newBaseState = newState;
              } else {
                newBaseQueueLast = newBaseQueueLast.next = clone;
              } // Update the remaining priority in the queue.

              if (updateExpirationTime > currentlyRenderingFiber$1.expirationTime) {
                currentlyRenderingFiber$1.expirationTime = updateExpirationTime;
                markUnprocessedUpdateTime(updateExpirationTime);
              }
            } else {
              // This update does have sufficient priority.
              if (newBaseQueueLast !== null) {
                var _clone = {
                  expirationTime: Sync,
                  // This update is going to be committed so we never want uncommit it.
                  suspenseConfig: update.suspenseConfig,
                  action: update.action,
                  eagerReducer: update.eagerReducer,
                  eagerState: update.eagerState,
                  next: null,
                };
                newBaseQueueLast = newBaseQueueLast.next = _clone;
              } // Mark the event time of this update as relevant to this render pass.
              // TODO: This should ideally use the true event time of this update rather than
              // its priority which is a derived and not reverseable value.
              // TODO: We should skip this update if it was already committed but currently
              // we have no way of detecting the difference between a committed and suspended
              // update here.

              markRenderEventTimeAndConfig(updateExpirationTime, update.suspenseConfig); // Process this update.

              if (update.eagerReducer === reducer) {
                // If this update was processed eagerly, and its reducer matches the
                // current reducer, we can use the eagerly computed state.
                newState = update.eagerState;
              } else {
                var action = update.action;
                newState = reducer(newState, action);
              }
            }

            update = update.next;
          } while (update !== null && update !== first);

          if (newBaseQueueLast === null) {
            newBaseState = newState;
          } else {
            newBaseQueueLast.next = newBaseQueueFirst;
          } // Mark that the fiber performed work, but only if the new state is
          // different from the current state.

          if (!objectIs(newState, hook.memoizedState)) {
            markWorkInProgressReceivedUpdate();
          }

          hook.memoizedState = newState;
          hook.baseState = newBaseState;
          hook.baseQueue = newBaseQueueLast;
          queue.lastRenderedState = newState;
        }

        var dispatch = queue.dispatch;
        return [hook.memoizedState, dispatch];
      }

      function rerenderReducer(reducer, initialArg, init) {
        var hook = updateWorkInProgressHook();
        var queue = hook.queue;

        if (!(queue !== null)) {
          {
            throw Error('Should have a queue. This is likely a bug in React. Please file an issue.');
          }
        }

        queue.lastRenderedReducer = reducer; // This is a re-render. Apply the new render phase updates to the previous
        // work-in-progress hook.

        var dispatch = queue.dispatch;
        var lastRenderPhaseUpdate = queue.pending;
        var newState = hook.memoizedState;

        if (lastRenderPhaseUpdate !== null) {
          // The queue doesn't persist past this render pass.
          queue.pending = null;
          var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
          var update = firstRenderPhaseUpdate;

          do {
            // Process this render phase update. We don't have to check the
            // priority because it will always be the same as the current
            // render's.
            var action = update.action;
            newState = reducer(newState, action);
            update = update.next;
          } while (update !== firstRenderPhaseUpdate); // Mark that the fiber performed work, but only if the new state is
          // different from the current state.

          if (!objectIs(newState, hook.memoizedState)) {
            markWorkInProgressReceivedUpdate();
          }

          hook.memoizedState = newState; // Don't persist the state accumulated from the render phase updates to
          // the base state unless the queue is empty.
          // TODO: Not sure if this is the desired semantics, but it's what we
          // do for gDSFP. I can't remember why.

          if (hook.baseQueue === null) {
            hook.baseState = newState;
          }

          queue.lastRenderedState = newState;
        }

        return [newState, dispatch];
      }

      function mountState(initialState) {
        var hook = mountWorkInProgressHook();

        if (typeof initialState === 'function') {
          // $FlowFixMe: Flow doesn't like mixed types
          initialState = initialState();
        }

        hook.memoizedState = hook.baseState = initialState;
        var queue = (hook.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: initialState,
        });
        var dispatch = (queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue));
        return [hook.memoizedState, dispatch];
      }

      function updateState(initialState) {
        return updateReducer(basicStateReducer);
      }

      function rerenderState(initialState) {
        return rerenderReducer(basicStateReducer);
      }

      function pushEffect(tag, create, destroy, deps) {
        var effect = {
          tag: tag,
          create: create,
          destroy: destroy,
          deps: deps,
          // Circular
          next: null,
        };
        var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;

        if (componentUpdateQueue === null) {
          componentUpdateQueue = createFunctionComponentUpdateQueue();
          currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
          componentUpdateQueue.lastEffect = effect.next = effect;
        } else {
          var lastEffect = componentUpdateQueue.lastEffect;

          if (lastEffect === null) {
            componentUpdateQueue.lastEffect = effect.next = effect;
          } else {
            var firstEffect = lastEffect.next;
            lastEffect.next = effect;
            effect.next = firstEffect;
            componentUpdateQueue.lastEffect = effect;
          }
        }

        return effect;
      }

      function mountRef(initialValue) {
        var hook = mountWorkInProgressHook();
        var ref = {
          current: initialValue,
        };

        {
          Object.seal(ref);
        }

        hook.memoizedState = ref;
        return ref;
      }

      function updateRef(initialValue) {
        var hook = updateWorkInProgressHook();
        return hook.memoizedState;
      }

      function mountEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
        var hook = mountWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        currentlyRenderingFiber$1.effectTag |= fiberEffectTag;
        hook.memoizedState = pushEffect(HasEffect | hookEffectTag, create, undefined, nextDeps);
      }

      function updateEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
        var hook = updateWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        var destroy = undefined;

        if (currentHook !== null) {
          var prevEffect = currentHook.memoizedState;
          destroy = prevEffect.destroy;

          if (nextDeps !== null) {
            var prevDeps = prevEffect.deps;

            if (areHookInputsEqual(nextDeps, prevDeps)) {
              pushEffect(hookEffectTag, create, destroy, nextDeps);
              return;
            }
          }
        }

        currentlyRenderingFiber$1.effectTag |= fiberEffectTag;
        hook.memoizedState = pushEffect(HasEffect | hookEffectTag, create, destroy, nextDeps);
      }

      function mountEffect(create, deps) {
        {
          // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
          if ('undefined' !== typeof jest) {
            warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
          }
        }

        return mountEffectImpl(Update | Passive, Passive$1, create, deps);
      }

      function updateEffect(create, deps) {
        {
          // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
          if ('undefined' !== typeof jest) {
            warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);
          }
        }

        return updateEffectImpl(Update | Passive, Passive$1, create, deps);
      }

      function mountLayoutEffect(create, deps) {
        return mountEffectImpl(Update, Layout, create, deps);
      }

      function updateLayoutEffect(create, deps) {
        return updateEffectImpl(Update, Layout, create, deps);
      }

      function imperativeHandleEffect(create, ref) {
        if (typeof ref === 'function') {
          var refCallback = ref;

          var _inst = create();

          refCallback(_inst);
          return function () {
            refCallback(null);
          };
        } else if (ref !== null && ref !== undefined) {
          var refObject = ref;

          {
            if (!refObject.hasOwnProperty('current')) {
              error(
                'Expected useImperativeHandle() first argument to either be a ' +
                  'ref callback or React.createRef() object. Instead received: %s.',
                'an object with keys {' + Object.keys(refObject).join(', ') + '}'
              );
            }
          }

          var _inst2 = create();

          refObject.current = _inst2;
          return function () {
            refObject.current = null;
          };
        }
      }

      function mountImperativeHandle(ref, create, deps) {
        {
          if (typeof create !== 'function') {
            error(
              'Expected useImperativeHandle() second argument to be a function ' +
                'that creates a handle. Instead received: %s.',
              create !== null ? typeof create : 'null'
            );
          }
        } // TODO: If deps are provided, should we skip comparing the ref itself?

        var effectDeps = deps !== null && deps !== undefined ? deps.concat([ref]) : null;
        return mountEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
      }

      function updateImperativeHandle(ref, create, deps) {
        {
          if (typeof create !== 'function') {
            error(
              'Expected useImperativeHandle() second argument to be a function ' +
                'that creates a handle. Instead received: %s.',
              create !== null ? typeof create : 'null'
            );
          }
        } // TODO: If deps are provided, should we skip comparing the ref itself?

        var effectDeps = deps !== null && deps !== undefined ? deps.concat([ref]) : null;
        return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
      }

      function mountDebugValue(value, formatterFn) {
        // This hook is normally a no-op.
        // The react-debug-hooks package injects its own implementation
        // so that e.g. DevTools can display custom hook values.
      }

      var updateDebugValue = mountDebugValue;

      function mountCallback(callback, deps) {
        var hook = mountWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        hook.memoizedState = [callback, nextDeps];
        return callback;
      }

      function updateCallback(callback, deps) {
        var hook = updateWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        var prevState = hook.memoizedState;

        if (prevState !== null) {
          if (nextDeps !== null) {
            var prevDeps = prevState[1];

            if (areHookInputsEqual(nextDeps, prevDeps)) {
              return prevState[0];
            }
          }
        }

        hook.memoizedState = [callback, nextDeps];
        return callback;
      }

      function mountMemo(nextCreate, deps) {
        var hook = mountWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        var nextValue = nextCreate();
        hook.memoizedState = [nextValue, nextDeps];
        return nextValue;
      }

      function updateMemo(nextCreate, deps) {
        var hook = updateWorkInProgressHook();
        var nextDeps = deps === undefined ? null : deps;
        var prevState = hook.memoizedState;

        if (prevState !== null) {
          // Assume these are defined. If they're not, areHookInputsEqual will warn.
          if (nextDeps !== null) {
            var prevDeps = prevState[1];

            if (areHookInputsEqual(nextDeps, prevDeps)) {
              return prevState[0];
            }
          }
        }

        var nextValue = nextCreate();
        hook.memoizedState = [nextValue, nextDeps];
        return nextValue;
      }

      function mountDeferredValue(value, config) {
        var _mountState = mountState(value),
          prevValue = _mountState[0],
          setValue = _mountState[1];

        mountEffect(
          function () {
            var previousConfig = ReactCurrentBatchConfig$1.suspense;
            ReactCurrentBatchConfig$1.suspense = config === undefined ? null : config;

            try {
              setValue(value);
            } finally {
              ReactCurrentBatchConfig$1.suspense = previousConfig;
            }
          },
          [value, config]
        );
        return prevValue;
      }

      function updateDeferredValue(value, config) {
        var _updateState = updateState(),
          prevValue = _updateState[0],
          setValue = _updateState[1];

        updateEffect(
          function () {
            var previousConfig = ReactCurrentBatchConfig$1.suspense;
            ReactCurrentBatchConfig$1.suspense = config === undefined ? null : config;

            try {
              setValue(value);
            } finally {
              ReactCurrentBatchConfig$1.suspense = previousConfig;
            }
          },
          [value, config]
        );
        return prevValue;
      }

      function rerenderDeferredValue(value, config) {
        var _rerenderState = rerenderState(),
          prevValue = _rerenderState[0],
          setValue = _rerenderState[1];

        updateEffect(
          function () {
            var previousConfig = ReactCurrentBatchConfig$1.suspense;
            ReactCurrentBatchConfig$1.suspense = config === undefined ? null : config;

            try {
              setValue(value);
            } finally {
              ReactCurrentBatchConfig$1.suspense = previousConfig;
            }
          },
          [value, config]
        );
        return prevValue;
      }

      function startTransition(setPending, config, callback) {
        var priorityLevel = getCurrentPriorityLevel();
        runWithPriority(priorityLevel < UserBlockingPriority ? UserBlockingPriority : priorityLevel, function () {
          setPending(true);
        });
        runWithPriority(priorityLevel > NormalPriority ? NormalPriority : priorityLevel, function () {
          var previousConfig = ReactCurrentBatchConfig$1.suspense;
          ReactCurrentBatchConfig$1.suspense = config === undefined ? null : config;

          try {
            setPending(false);
            callback();
          } finally {
            ReactCurrentBatchConfig$1.suspense = previousConfig;
          }
        });
      }

      function mountTransition(config) {
        var _mountState2 = mountState(false),
          isPending = _mountState2[0],
          setPending = _mountState2[1];

        var start = mountCallback(startTransition.bind(null, setPending, config), [setPending, config]);
        return [start, isPending];
      }

      function updateTransition(config) {
        var _updateState2 = updateState(),
          isPending = _updateState2[0],
          setPending = _updateState2[1];

        var start = updateCallback(startTransition.bind(null, setPending, config), [setPending, config]);
        return [start, isPending];
      }

      function rerenderTransition(config) {
        var _rerenderState2 = rerenderState(),
          isPending = _rerenderState2[0],
          setPending = _rerenderState2[1];

        var start = updateCallback(startTransition.bind(null, setPending, config), [setPending, config]);
        return [start, isPending];
      }

      function dispatchAction(fiber, queue, action) {
        {
          if (typeof arguments[3] === 'function') {
            error(
              "State updates from the useState() and useReducer() Hooks don't support the " +
                'second callback argument. To execute a side effect after ' +
                'rendering, declare it in the component body with useEffect().'
            );
          }
        }

        var currentTime = requestCurrentTimeForUpdate();
        var suspenseConfig = requestCurrentSuspenseConfig();
        var expirationTime = computeExpirationForFiber(currentTime, fiber, suspenseConfig);
        var update = {
          expirationTime: expirationTime,
          suspenseConfig: suspenseConfig,
          action: action,
          eagerReducer: null,
          eagerState: null,
          next: null,
        };

        {
          update.priority = getCurrentPriorityLevel();
        } // Append the update to the end of the list.

        var pending = queue.pending;

        if (pending === null) {
          // This is the first update. Create a circular list.
          update.next = update;
        } else {
          update.next = pending.next;
          pending.next = update;
        }

        queue.pending = update;
        var alternate = fiber.alternate;

        if (fiber === currentlyRenderingFiber$1 || (alternate !== null && alternate === currentlyRenderingFiber$1)) {
          // This is a render phase update. Stash it in a lazily-created map of
          // queue -> linked list of updates. After this render pass, we'll restart
          // and apply the stashed updates on top of the work-in-progress hook.
          didScheduleRenderPhaseUpdate = true;
          update.expirationTime = renderExpirationTime;
          currentlyRenderingFiber$1.expirationTime = renderExpirationTime;
        } else {
          if (fiber.expirationTime === NoWork && (alternate === null || alternate.expirationTime === NoWork)) {
            // The queue is currently empty, which means we can eagerly compute the
            // next state before entering the render phase. If the new state is the
            // same as the current state, we may be able to bail out entirely.
            var lastRenderedReducer = queue.lastRenderedReducer;

            if (lastRenderedReducer !== null) {
              var prevDispatcher;

              {
                prevDispatcher = ReactCurrentDispatcher.current;
                ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
              }

              try {
                var currentState = queue.lastRenderedState;
                var eagerState = lastRenderedReducer(currentState, action); // Stash the eagerly computed state, and the reducer used to compute
                // it, on the update object. If the reducer hasn't changed by the
                // time we enter the render phase, then the eager state can be used
                // without calling the reducer again.

                update.eagerReducer = lastRenderedReducer;
                update.eagerState = eagerState;

                if (objectIs(eagerState, currentState)) {
                  // Fast path. We can bail out without scheduling React to re-render.
                  // It's still possible that we'll need to rebase this update later,
                  // if the component re-renders for a different reason and by that
                  // time the reducer has changed.
                  return;
                }
              } catch (error) {
                // Suppress the error. It will throw again in the render phase.
              } finally {
                {
                  ReactCurrentDispatcher.current = prevDispatcher;
                }
              }
            }
          }

          {
            // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
            if ('undefined' !== typeof jest) {
              warnIfNotScopedWithMatchingAct(fiber);
              warnIfNotCurrentlyActingUpdatesInDev(fiber);
            }
          }

          scheduleWork(fiber, expirationTime);
        }
      }

      var ContextOnlyDispatcher = {
        readContext: readContext,
        useCallback: throwInvalidHookError,
        useContext: throwInvalidHookError,
        useEffect: throwInvalidHookError,
        useImperativeHandle: throwInvalidHookError,
        useLayoutEffect: throwInvalidHookError,
        useMemo: throwInvalidHookError,
        useReducer: throwInvalidHookError,
        useRef: throwInvalidHookError,
        useState: throwInvalidHookError,
        useDebugValue: throwInvalidHookError,
        useResponder: throwInvalidHookError,
        useDeferredValue: throwInvalidHookError,
        useTransition: throwInvalidHookError,
      };
      var HooksDispatcherOnMountInDEV = null;
      var HooksDispatcherOnMountWithHookTypesInDEV = null;
      var HooksDispatcherOnUpdateInDEV = null;
      var HooksDispatcherOnRerenderInDEV = null;
      var InvalidNestedHooksDispatcherOnMountInDEV = null;
      var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
      var InvalidNestedHooksDispatcherOnRerenderInDEV = null;

      {
        var warnInvalidContextAccess = function () {
          error(
            'Context can only be read while React is rendering. ' +
              'In classes, you can read it in the render method or getDerivedStateFromProps. ' +
              'In function components, you can read it directly in the function body, but not ' +
              'inside Hooks like useReducer() or useMemo().'
          );
        };

        var warnInvalidHookAccess = function () {
          error(
            'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' +
              'You can only call Hooks at the top level of your React function. ' +
              'For more information, see ' +
              'https://fb.me/rules-of-hooks'
          );
        };

        HooksDispatcherOnMountInDEV = {
          readContext: function (context, observedBits) {
            return readContext(context, observedBits);
          },
          useCallback: function (callback, deps) {
            currentHookNameInDev = 'useCallback';
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            return mountCallback(callback, deps);
          },
          useContext: function (context, observedBits) {
            currentHookNameInDev = 'useContext';
            mountHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function (create, deps) {
            currentHookNameInDev = 'useEffect';
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            return mountEffect(create, deps);
          },
          useImperativeHandle: function (ref, create, deps) {
            currentHookNameInDev = 'useImperativeHandle';
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            return mountImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function (create, deps) {
            currentHookNameInDev = 'useLayoutEffect';
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            return mountLayoutEffect(create, deps);
          },
          useMemo: function (create, deps) {
            currentHookNameInDev = 'useMemo';
            mountHookTypesDev();
            checkDepsAreArrayDev(deps);
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;

            try {
              return mountMemo(create, deps);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useReducer: function (reducer, initialArg, init) {
            currentHookNameInDev = 'useReducer';
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;

            try {
              return mountReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useRef: function (initialValue) {
            currentHookNameInDev = 'useRef';
            mountHookTypesDev();
            return mountRef(initialValue);
          },
          useState: function (initialState) {
            currentHookNameInDev = 'useState';
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;

            try {
              return mountState(initialState);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useDebugValue: function (value, formatterFn) {
            currentHookNameInDev = 'useDebugValue';
            mountHookTypesDev();
            return mountDebugValue();
          },
          useResponder: function (responder, props) {
            currentHookNameInDev = 'useResponder';
            mountHookTypesDev();
            return createDeprecatedResponderListener(responder, props);
          },
          useDeferredValue: function (value, config) {
            currentHookNameInDev = 'useDeferredValue';
            mountHookTypesDev();
            return mountDeferredValue(value, config);
          },
          useTransition: function (config) {
            currentHookNameInDev = 'useTransition';
            mountHookTypesDev();
            return mountTransition(config);
          },
        };
        HooksDispatcherOnMountWithHookTypesInDEV = {
          readContext: function (context, observedBits) {
            return readContext(context, observedBits);
          },
          useCallback: function (callback, deps) {
            currentHookNameInDev = 'useCallback';
            updateHookTypesDev();
            return mountCallback(callback, deps);
          },
          useContext: function (context, observedBits) {
            currentHookNameInDev = 'useContext';
            updateHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function (create, deps) {
            currentHookNameInDev = 'useEffect';
            updateHookTypesDev();
            return mountEffect(create, deps);
          },
          useImperativeHandle: function (ref, create, deps) {
            currentHookNameInDev = 'useImperativeHandle';
            updateHookTypesDev();
            return mountImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function (create, deps) {
            currentHookNameInDev = 'useLayoutEffect';
            updateHookTypesDev();
            return mountLayoutEffect(create, deps);
          },
          useMemo: function (create, deps) {
            currentHookNameInDev = 'useMemo';
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;

            try {
              return mountMemo(create, deps);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useReducer: function (reducer, initialArg, init) {
            currentHookNameInDev = 'useReducer';
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;

            try {
              return mountReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useRef: function (initialValue) {
            currentHookNameInDev = 'useRef';
            updateHookTypesDev();
            return mountRef(initialValue);
          },
          useState: function (initialState) {
            currentHookNameInDev = 'useState';
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;

            try {
              return mountState(initialState);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useDebugValue: function (value, formatterFn) {
            currentHookNameInDev = 'useDebugValue';
            updateHookTypesDev();
            return mountDebugValue();
          },
          useResponder: function (responder, props) {
            currentHookNameInDev = 'useResponder';
            updateHookTypesDev();
            return createDeprecatedResponderListener(responder, props);
          },
          useDeferredValue: function (value, config) {
            currentHookNameInDev = 'useDeferredValue';
            updateHookTypesDev();
            return mountDeferredValue(value, config);
          },
          useTransition: function (config) {
            currentHookNameInDev = 'useTransition';
            updateHookTypesDev();
            return mountTransition(config);
          },
        };
        HooksDispatcherOnUpdateInDEV = {
          readContext: function (context, observedBits) {
            return readContext(context, observedBits);
          },
          useCallback: function (callback, deps) {
            currentHookNameInDev = 'useCallback';
            updateHookTypesDev();
            return updateCallback(callback, deps);
          },
          useContext: function (context, observedBits) {
            currentHookNameInDev = 'useContext';
            updateHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function (create, deps) {
            currentHookNameInDev = 'useEffect';
            updateHookTypesDev();
            return updateEffect(create, deps);
          },
          useImperativeHandle: function (ref, create, deps) {
            currentHookNameInDev = 'useImperativeHandle';
            updateHookTypesDev();
            return updateImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function (create, deps) {
            currentHookNameInDev = 'useLayoutEffect';
            updateHookTypesDev();
            return updateLayoutEffect(create, deps);
          },
          useMemo: function (create, deps) {
            currentHookNameInDev = 'useMemo';
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

            try {
              return updateMemo(create, deps);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useReducer: function (reducer, initialArg, init) {
            currentHookNameInDev = 'useReducer';
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

            try {
              return updateReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useRef: function (initialValue) {
            currentHookNameInDev = 'useRef';
            updateHookTypesDev();
            return updateRef();
          },
          useState: function (initialState) {
            currentHookNameInDev = 'useState';
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

            try {
              return updateState(initialState);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useDebugValue: function (value, formatterFn) {
            currentHookNameInDev = 'useDebugValue';
            updateHookTypesDev();
            return updateDebugValue();
          },
          useResponder: function (responder, props) {
            currentHookNameInDev = 'useResponder';
            updateHookTypesDev();
            return createDeprecatedResponderListener(responder, props);
          },
          useDeferredValue: function (value, config) {
            currentHookNameInDev = 'useDeferredValue';
            updateHookTypesDev();
            return updateDeferredValue(value, config);
          },
          useTransition: function (config) {
            currentHookNameInDev = 'useTransition';
            updateHookTypesDev();
            return updateTransition(config);
          },
        };
        HooksDispatcherOnRerenderInDEV = {
          readContext: function (context, observedBits) {
            return readContext(context, observedBits);
          },
          useCallback: function (callback, deps) {
            currentHookNameInDev = 'useCallback';
            updateHookTypesDev();
            return updateCallback(callback, deps);
          },
          useContext: function (context, observedBits) {
            currentHookNameInDev = 'useContext';
            updateHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function (create, deps) {
            currentHookNameInDev = 'useEffect';
            updateHookTypesDev();
            return updateEffect(create, deps);
          },
          useImperativeHandle: function (ref, create, deps) {
            currentHookNameInDev = 'useImperativeHandle';
            updateHookTypesDev();
            return updateImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function (create, deps) {
            currentHookNameInDev = 'useLayoutEffect';
            updateHookTypesDev();
            return updateLayoutEffect(create, deps);
          },
          useMemo: function (create, deps) {
            currentHookNameInDev = 'useMemo';
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnRerenderInDEV;

            try {
              return updateMemo(create, deps);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useReducer: function (reducer, initialArg, init) {
            currentHookNameInDev = 'useReducer';
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnRerenderInDEV;

            try {
              return rerenderReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useRef: function (initialValue) {
            currentHookNameInDev = 'useRef';
            updateHookTypesDev();
            return updateRef();
          },
          useState: function (initialState) {
            currentHookNameInDev = 'useState';
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnRerenderInDEV;

            try {
              return rerenderState(initialState);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useDebugValue: function (value, formatterFn) {
            currentHookNameInDev = 'useDebugValue';
            updateHookTypesDev();
            return updateDebugValue();
          },
          useResponder: function (responder, props) {
            currentHookNameInDev = 'useResponder';
            updateHookTypesDev();
            return createDeprecatedResponderListener(responder, props);
          },
          useDeferredValue: function (value, config) {
            currentHookNameInDev = 'useDeferredValue';
            updateHookTypesDev();
            return rerenderDeferredValue(value, config);
          },
          useTransition: function (config) {
            currentHookNameInDev = 'useTransition';
            updateHookTypesDev();
            return rerenderTransition(config);
          },
        };
        InvalidNestedHooksDispatcherOnMountInDEV = {
          readContext: function (context, observedBits) {
            warnInvalidContextAccess();
            return readContext(context, observedBits);
          },
          useCallback: function (callback, deps) {
            currentHookNameInDev = 'useCallback';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountCallback(callback, deps);
          },
          useContext: function (context, observedBits) {
            currentHookNameInDev = 'useContext';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function (create, deps) {
            currentHookNameInDev = 'useEffect';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountEffect(create, deps);
          },
          useImperativeHandle: function (ref, create, deps) {
            currentHookNameInDev = 'useImperativeHandle';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function (create, deps) {
            currentHookNameInDev = 'useLayoutEffect';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountLayoutEffect(create, deps);
          },
          useMemo: function (create, deps) {
            currentHookNameInDev = 'useMemo';
            warnInvalidHookAccess();
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;

            try {
              return mountMemo(create, deps);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useReducer: function (reducer, initialArg, init) {
            currentHookNameInDev = 'useReducer';
            warnInvalidHookAccess();
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;

            try {
              return mountReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useRef: function (initialValue) {
            currentHookNameInDev = 'useRef';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountRef(initialValue);
          },
          useState: function (initialState) {
            currentHookNameInDev = 'useState';
            warnInvalidHookAccess();
            mountHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnMountInDEV;

            try {
              return mountState(initialState);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useDebugValue: function (value, formatterFn) {
            currentHookNameInDev = 'useDebugValue';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountDebugValue();
          },
          useResponder: function (responder, props) {
            currentHookNameInDev = 'useResponder';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return createDeprecatedResponderListener(responder, props);
          },
          useDeferredValue: function (value, config) {
            currentHookNameInDev = 'useDeferredValue';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountDeferredValue(value, config);
          },
          useTransition: function (config) {
            currentHookNameInDev = 'useTransition';
            warnInvalidHookAccess();
            mountHookTypesDev();
            return mountTransition(config);
          },
        };
        InvalidNestedHooksDispatcherOnUpdateInDEV = {
          readContext: function (context, observedBits) {
            warnInvalidContextAccess();
            return readContext(context, observedBits);
          },
          useCallback: function (callback, deps) {
            currentHookNameInDev = 'useCallback';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateCallback(callback, deps);
          },
          useContext: function (context, observedBits) {
            currentHookNameInDev = 'useContext';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function (create, deps) {
            currentHookNameInDev = 'useEffect';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateEffect(create, deps);
          },
          useImperativeHandle: function (ref, create, deps) {
            currentHookNameInDev = 'useImperativeHandle';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function (create, deps) {
            currentHookNameInDev = 'useLayoutEffect';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateLayoutEffect(create, deps);
          },
          useMemo: function (create, deps) {
            currentHookNameInDev = 'useMemo';
            warnInvalidHookAccess();
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

            try {
              return updateMemo(create, deps);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useReducer: function (reducer, initialArg, init) {
            currentHookNameInDev = 'useReducer';
            warnInvalidHookAccess();
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

            try {
              return updateReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useRef: function (initialValue) {
            currentHookNameInDev = 'useRef';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateRef();
          },
          useState: function (initialState) {
            currentHookNameInDev = 'useState';
            warnInvalidHookAccess();
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

            try {
              return updateState(initialState);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useDebugValue: function (value, formatterFn) {
            currentHookNameInDev = 'useDebugValue';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateDebugValue();
          },
          useResponder: function (responder, props) {
            currentHookNameInDev = 'useResponder';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return createDeprecatedResponderListener(responder, props);
          },
          useDeferredValue: function (value, config) {
            currentHookNameInDev = 'useDeferredValue';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateDeferredValue(value, config);
          },
          useTransition: function (config) {
            currentHookNameInDev = 'useTransition';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateTransition(config);
          },
        };
        InvalidNestedHooksDispatcherOnRerenderInDEV = {
          readContext: function (context, observedBits) {
            warnInvalidContextAccess();
            return readContext(context, observedBits);
          },
          useCallback: function (callback, deps) {
            currentHookNameInDev = 'useCallback';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateCallback(callback, deps);
          },
          useContext: function (context, observedBits) {
            currentHookNameInDev = 'useContext';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return readContext(context, observedBits);
          },
          useEffect: function (create, deps) {
            currentHookNameInDev = 'useEffect';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateEffect(create, deps);
          },
          useImperativeHandle: function (ref, create, deps) {
            currentHookNameInDev = 'useImperativeHandle';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateImperativeHandle(ref, create, deps);
          },
          useLayoutEffect: function (create, deps) {
            currentHookNameInDev = 'useLayoutEffect';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateLayoutEffect(create, deps);
          },
          useMemo: function (create, deps) {
            currentHookNameInDev = 'useMemo';
            warnInvalidHookAccess();
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

            try {
              return updateMemo(create, deps);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useReducer: function (reducer, initialArg, init) {
            currentHookNameInDev = 'useReducer';
            warnInvalidHookAccess();
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

            try {
              return rerenderReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useRef: function (initialValue) {
            currentHookNameInDev = 'useRef';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateRef();
          },
          useState: function (initialState) {
            currentHookNameInDev = 'useState';
            warnInvalidHookAccess();
            updateHookTypesDev();
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

            try {
              return rerenderState(initialState);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useDebugValue: function (value, formatterFn) {
            currentHookNameInDev = 'useDebugValue';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return updateDebugValue();
          },
          useResponder: function (responder, props) {
            currentHookNameInDev = 'useResponder';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return createDeprecatedResponderListener(responder, props);
          },
          useDeferredValue: function (value, config) {
            currentHookNameInDev = 'useDeferredValue';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return rerenderDeferredValue(value, config);
          },
          useTransition: function (config) {
            currentHookNameInDev = 'useTransition';
            warnInvalidHookAccess();
            updateHookTypesDev();
            return rerenderTransition(config);
          },
        };
      }

      var now$2 = Scheduler.unstable_now;
      var commitTime = 0;
      var profilerStartTime = -1;

      function getCommitTime() {
        return commitTime;
      }

      function recordCommitTime() {
        commitTime = now$2();
      }

      function startProfilerTimer(fiber) {
        profilerStartTime = now$2();

        if (fiber.actualStartTime < 0) {
          fiber.actualStartTime = now$2();
        }
      }

      function stopProfilerTimerIfRunning(fiber) {
        profilerStartTime = -1;
      }

      function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
        if (profilerStartTime >= 0) {
          var elapsedTime = now$2() - profilerStartTime;
          fiber.actualDuration += elapsedTime;

          if (overrideBaseTime) {
            fiber.selfBaseDuration = elapsedTime;
          }

          profilerStartTime = -1;
        }
      }

      // This may have been an insertion or a hydration.

      var hydrationParentFiber = null;
      var nextHydratableInstance = null;
      var isHydrating = false;

      function enterHydrationState(fiber) {
        if (!supportsHydration) {
          return false;
        }

        var parentInstance = fiber.stateNode.containerInfo;
        nextHydratableInstance = getFirstHydratableChild(parentInstance);
        hydrationParentFiber = fiber;
        isHydrating = true;
        return true;
      }

      function deleteHydratableInstance(returnFiber, instance) {
        {
          switch (returnFiber.tag) {
            case HostRoot:
              didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo, instance);
              break;

            case HostComponent:
              didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
              break;
          }
        }

        var childToDelete = createFiberFromHostInstanceForDeletion();
        childToDelete.stateNode = instance;
        childToDelete.return = returnFiber;
        childToDelete.effectTag = Deletion; // This might seem like it belongs on progressedFirstDeletion. However,
        // these children are not part of the reconciliation list of children.
        // Even if we abort and rereconcile the children, that will try to hydrate
        // again and the nodes are still in the host tree so these will be
        // recreated.

        if (returnFiber.lastEffect !== null) {
          returnFiber.lastEffect.nextEffect = childToDelete;
          returnFiber.lastEffect = childToDelete;
        } else {
          returnFiber.firstEffect = returnFiber.lastEffect = childToDelete;
        }
      }

      function insertNonHydratedInstance(returnFiber, fiber) {
        fiber.effectTag = (fiber.effectTag & ~Hydrating) | Placement;

        {
          switch (returnFiber.tag) {
            case HostRoot: {
              var parentContainer = returnFiber.stateNode.containerInfo;

              switch (fiber.tag) {
                case HostComponent:
                  var type = fiber.type;
                  var props = fiber.pendingProps;
                  didNotFindHydratableContainerInstance(parentContainer, type, props);
                  break;

                case HostText:
                  var text = fiber.pendingProps;
                  didNotFindHydratableContainerTextInstance(parentContainer, text);
                  break;

                case SuspenseComponent:
                  didNotFindHydratableContainerSuspenseInstance(parentContainer);
                  break;
              }

              break;
            }

            case HostComponent: {
              var parentType = returnFiber.type;
              var parentProps = returnFiber.memoizedProps;
              var parentInstance = returnFiber.stateNode;

              switch (fiber.tag) {
                case HostComponent:
                  var _type = fiber.type;
                  var _props = fiber.pendingProps;
                  didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
                  break;

                case HostText:
                  var _text = fiber.pendingProps;
                  didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                  break;

                case SuspenseComponent:
                  didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance);
                  break;
              }

              break;
            }

            default:
              return;
          }
        }
      }

      function tryHydrate(fiber, nextInstance) {
        switch (fiber.tag) {
          case HostComponent: {
            var type = fiber.type;
            var props = fiber.pendingProps;
            var instance = canHydrateInstance(nextInstance, type, props);

            if (instance !== null) {
              fiber.stateNode = instance;
              return true;
            }

            return false;
          }

          case HostText: {
            var text = fiber.pendingProps;
            var textInstance = canHydrateTextInstance(nextInstance, text);

            if (textInstance !== null) {
              fiber.stateNode = textInstance;
              return true;
            }

            return false;
          }

          case SuspenseComponent: {
            return false;
          }

          default:
            return false;
        }
      }

      function tryToClaimNextHydratableInstance(fiber) {
        if (!isHydrating) {
          return;
        }

        var nextInstance = nextHydratableInstance;

        if (!nextInstance) {
          // Nothing to hydrate. Make it an insertion.
          insertNonHydratedInstance(hydrationParentFiber, fiber);
          isHydrating = false;
          hydrationParentFiber = fiber;
          return;
        }

        var firstAttemptedInstance = nextInstance;

        if (!tryHydrate(fiber, nextInstance)) {
          // If we can't hydrate this instance let's try the next one.
          // We use this as a heuristic. It's based on intuition and not data so it
          // might be flawed or unnecessary.
          nextInstance = getNextHydratableSibling(firstAttemptedInstance);

          if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
            // Nothing to hydrate. Make it an insertion.
            insertNonHydratedInstance(hydrationParentFiber, fiber);
            isHydrating = false;
            hydrationParentFiber = fiber;
            return;
          } // We matched the next one, we'll now assume that the first one was
          // superfluous and we'll delete it. Since we can't eagerly delete it
          // we'll have to schedule a deletion. To do that, this node needs a dummy
          // fiber associated with it.

          deleteHydratableInstance(hydrationParentFiber, firstAttemptedInstance);
        }

        hydrationParentFiber = fiber;
        nextHydratableInstance = getFirstHydratableChild(nextInstance);
      }

      function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
        if (!supportsHydration) {
          {
            {
              throw Error(
                'Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }
        }

        var instance = fiber.stateNode;
        var updatePayload = hydrateInstance(
          instance,
          fiber.type,
          fiber.memoizedProps,
          rootContainerInstance,
          hostContext,
          fiber
        ); // TODO: Type this specific to this type of component.

        fiber.updateQueue = updatePayload; // If the update payload indicates that there is a change or if there
        // is a new ref we mark this as an update.

        if (updatePayload !== null) {
          return true;
        }

        return false;
      }

      function prepareToHydrateHostTextInstance(fiber) {
        if (!supportsHydration) {
          {
            {
              throw Error(
                'Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }
        }

        var textInstance = fiber.stateNode;
        var textContent = fiber.memoizedProps;
        var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);

        {
          if (shouldUpdate) {
            // We assume that prepareToHydrateHostTextInstance is called in a context where the
            // hydration parent is the parent host component of this host text.
            var returnFiber = hydrationParentFiber;

            if (returnFiber !== null) {
              switch (returnFiber.tag) {
                case HostRoot: {
                  var parentContainer = returnFiber.stateNode.containerInfo;
                  didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent);
                  break;
                }

                case HostComponent: {
                  var parentType = returnFiber.type;
                  var parentProps = returnFiber.memoizedProps;
                  var parentInstance = returnFiber.stateNode;
                  didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent);
                  break;
                }
              }
            }
          }
        }

        return shouldUpdate;
      }

      function skipPastDehydratedSuspenseInstance(fiber) {
        if (!supportsHydration) {
          {
            {
              throw Error(
                'Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }
        }

        var suspenseState = fiber.memoizedState;
        var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;

        if (!suspenseInstance) {
          {
            throw Error(
              'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }

        return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
      }

      function popToNextHostParent(fiber) {
        var parent = fiber.return;

        while (
          parent !== null &&
          parent.tag !== HostComponent &&
          parent.tag !== HostRoot &&
          parent.tag !== SuspenseComponent
        ) {
          parent = parent.return;
        }

        hydrationParentFiber = parent;
      }

      function popHydrationState(fiber) {
        if (!supportsHydration) {
          return false;
        }

        if (fiber !== hydrationParentFiber) {
          // We're deeper than the current hydration context, inside an inserted
          // tree.
          return false;
        }

        if (!isHydrating) {
          // If we're not currently hydrating but we're in a hydration context, then
          // we were an insertion and now need to pop up reenter hydration of our
          // siblings.
          popToNextHostParent(fiber);
          isHydrating = true;
          return false;
        }

        var type = fiber.type; // If we have any remaining hydratable nodes, we need to delete them now.
        // We only do this deeper than head and body since they tend to have random
        // other nodes in them. We also ignore components with pure text content in
        // side of them.
        // TODO: Better heuristic.

        if (
          fiber.tag !== HostComponent ||
          (type !== 'head' && type !== 'body' && !shouldSetTextContent(type, fiber.memoizedProps))
        ) {
          var nextInstance = nextHydratableInstance;

          while (nextInstance) {
            deleteHydratableInstance(fiber, nextInstance);
            nextInstance = getNextHydratableSibling(nextInstance);
          }
        }

        popToNextHostParent(fiber);

        if (fiber.tag === SuspenseComponent) {
          nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
        } else {
          nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
        }

        return true;
      }

      function resetHydrationState() {
        if (!supportsHydration) {
          return;
        }

        hydrationParentFiber = null;
        nextHydratableInstance = null;
        isHydrating = false;
      }

      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var didReceiveUpdate = false;
      var didWarnAboutBadClass;
      var didWarnAboutModulePatternComponent;
      var didWarnAboutContextTypeOnFunctionComponent;
      var didWarnAboutGetDerivedStateOnFunctionComponent;
      var didWarnAboutFunctionRefs;
      var didWarnAboutReassigningProps;
      var didWarnAboutRevealOrder;
      var didWarnAboutTailOptions;

      {
        didWarnAboutBadClass = {};
        didWarnAboutModulePatternComponent = {};
        didWarnAboutContextTypeOnFunctionComponent = {};
        didWarnAboutGetDerivedStateOnFunctionComponent = {};
        didWarnAboutFunctionRefs = {};
        didWarnAboutReassigningProps = false;
        didWarnAboutRevealOrder = {};
        didWarnAboutTailOptions = {};
      }

      function reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime) {
        if (current === null) {
          // If this is a fresh new component that hasn't been rendered yet, we
          // won't update its child set by applying minimal side-effects. Instead,
          // we will add them all to the child before it gets rendered. That means
          // we can optimize this reconciliation pass by not tracking side-effects.
          workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
        } else {
          // If the current child is the same as the work in progress, it means that
          // we haven't yet started any work on these children. Therefore, we use
          // the clone algorithm to create a copy of all the current children.
          // If we had any progressed work already, that is invalid at this point so
          // let's throw it out.
          workInProgress.child = reconcileChildFibers(
            workInProgress,
            current.child,
            nextChildren,
            renderExpirationTime
          );
        }
      }

      function forceUnmountCurrentAndReconcile(current, workInProgress, nextChildren, renderExpirationTime) {
        // This function is fork of reconcileChildren. It's used in cases where we
        // want to reconcile without matching against the existing set. This has the
        // effect of all current children being unmounted; even if the type and key
        // are the same, the old child is unmounted and a new child is created.
        //
        // To do this, we're going to go through the reconcile algorithm twice. In
        // the first pass, we schedule a deletion for all the current children by
        // passing null.
        workInProgress.child = reconcileChildFibers(workInProgress, current.child, null, renderExpirationTime); // In the second pass, we mount the new children. The trick here is that we
        // pass null in place of where we usually pass the current child set. This has
        // the effect of remounting all children regardless of whether their
        // identities match.

        workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
      }

      function updateForwardRef(current, workInProgress, Component, nextProps, renderExpirationTime) {
        // TODO: current can be non-null here even if the component
        // hasn't yet mounted. This happens after the first render suspends.
        // We'll need to figure out if this is fine or can cause issues.
        {
          if (workInProgress.type !== workInProgress.elementType) {
            // Lazy component props can't be validated in createElement
            // because they're only guaranteed to be resolved here.
            var innerPropTypes = Component.propTypes;

            if (innerPropTypes) {
              checkPropTypes(
                innerPropTypes,
                nextProps, // Resolved props
                'prop',
                getComponentName(Component),
                getCurrentFiberStackInDev
              );
            }
          }
        }

        var render = Component.render;
        var ref = workInProgress.ref; // The rest is a fork of updateFunctionComponent

        var nextChildren;
        prepareToReadContext(workInProgress, renderExpirationTime);

        {
          ReactCurrentOwner$1.current = workInProgress;
          setIsRendering(true);
          nextChildren = renderWithHooks(current, workInProgress, render, nextProps, ref, renderExpirationTime);

          if (workInProgress.mode & StrictMode) {
            // Only double-render components with Hooks
            if (workInProgress.memoizedState !== null) {
              nextChildren = renderWithHooks(current, workInProgress, render, nextProps, ref, renderExpirationTime);
            }
          }

          setIsRendering(false);
        }

        if (current !== null && !didReceiveUpdate) {
          bailoutHooks(current, workInProgress, renderExpirationTime);
          return bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime);
        } // React DevTools reads this flag.

        workInProgress.effectTag |= PerformedWork;
        reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime);
        return workInProgress.child;
      }

      function updateMemoComponent(
        current,
        workInProgress,
        Component,
        nextProps,
        updateExpirationTime,
        renderExpirationTime
      ) {
        if (current === null) {
          var type = Component.type;

          if (
            isSimpleFunctionComponent(type) &&
            Component.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
            Component.defaultProps === undefined
          ) {
            var resolvedType = type;

            {
              resolvedType = resolveFunctionForHotReloading(type);
            } // If this is a plain function component without default props,
            // and with only the default shallow comparison, we upgrade it
            // to a SimpleMemoComponent to allow fast path updates.

            workInProgress.tag = SimpleMemoComponent;
            workInProgress.type = resolvedType;

            {
              validateFunctionComponentInDev(workInProgress, type);
            }

            return updateSimpleMemoComponent(
              current,
              workInProgress,
              resolvedType,
              nextProps,
              updateExpirationTime,
              renderExpirationTime
            );
          }

          {
            var innerPropTypes = type.propTypes;

            if (innerPropTypes) {
              // Inner memo component props aren't currently validated in createElement.
              // We could move it there, but we'd still need this for lazy code path.
              checkPropTypes(
                innerPropTypes,
                nextProps, // Resolved props
                'prop',
                getComponentName(type),
                getCurrentFiberStackInDev
              );
            }
          }

          var child = createFiberFromTypeAndProps(
            Component.type,
            null,
            nextProps,
            null,
            workInProgress.mode,
            renderExpirationTime
          );
          child.ref = workInProgress.ref;
          child.return = workInProgress;
          workInProgress.child = child;
          return child;
        }

        {
          var _type = Component.type;
          var _innerPropTypes = _type.propTypes;

          if (_innerPropTypes) {
            // Inner memo component props aren't currently validated in createElement.
            // We could move it there, but we'd still need this for lazy code path.
            checkPropTypes(
              _innerPropTypes,
              nextProps, // Resolved props
              'prop',
              getComponentName(_type),
              getCurrentFiberStackInDev
            );
          }
        }

        var currentChild = current.child; // This is always exactly one child

        if (updateExpirationTime < renderExpirationTime) {
          // This will be the props with resolved defaultProps,
          // unlike current.memoizedProps which will be the unresolved ones.
          var prevProps = currentChild.memoizedProps; // Default to shallow comparison

          var compare = Component.compare;
          compare = compare !== null ? compare : shallowEqual;

          if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {
            return bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime);
          }
        } // React DevTools reads this flag.

        workInProgress.effectTag |= PerformedWork;
        var newChild = createWorkInProgress(currentChild, nextProps);
        newChild.ref = workInProgress.ref;
        newChild.return = workInProgress;
        workInProgress.child = newChild;
        return newChild;
      }

      function updateSimpleMemoComponent(
        current,
        workInProgress,
        Component,
        nextProps,
        updateExpirationTime,
        renderExpirationTime
      ) {
        // TODO: current can be non-null here even if the component
        // hasn't yet mounted. This happens when the inner render suspends.
        // We'll need to figure out if this is fine or can cause issues.
        {
          if (workInProgress.type !== workInProgress.elementType) {
            // Lazy component props can't be validated in createElement
            // because they're only guaranteed to be resolved here.
            var outerMemoType = workInProgress.elementType;

            if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
              // We warn when you define propTypes on lazy()
              // so let's just skip over it to find memo() outer wrapper.
              // Inner props for memo are validated later.
              outerMemoType = refineResolvedLazyComponent(outerMemoType);
            }

            var outerPropTypes = outerMemoType && outerMemoType.propTypes;

            if (outerPropTypes) {
              checkPropTypes(
                outerPropTypes,
                nextProps, // Resolved (SimpleMemoComponent has no defaultProps)
                'prop',
                getComponentName(outerMemoType),
                getCurrentFiberStackInDev
              );
            } // Inner propTypes will be validated in the function component path.
          }
        }

        if (current !== null) {
          var prevProps = current.memoizedProps;

          if (
            shallowEqual(prevProps, nextProps) &&
            current.ref === workInProgress.ref && // Prevent bailout if the implementation changed due to hot reload.
            workInProgress.type === current.type
          ) {
            didReceiveUpdate = false;

            if (updateExpirationTime < renderExpirationTime) {
              // The pending update priority was cleared at the beginning of
              // beginWork. We're about to bail out, but there might be additional
              // updates at a lower priority. Usually, the priority level of the
              // remaining updates is accumlated during the evaluation of the
              // component (i.e. when processing the update queue). But since since
              // we're bailing out early *without* evaluating the component, we need
              // to account for it here, too. Reset to the value of the current fiber.
              // NOTE: This only applies to SimpleMemoComponent, not MemoComponent,
              // because a MemoComponent fiber does not have hooks or an update queue;
              // rather, it wraps around an inner component, which may or may not
              // contains hooks.
              // TODO: Move the reset at in beginWork out of the common path so that
              // this is no longer necessary.
              workInProgress.expirationTime = current.expirationTime;
              return bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime);
            }
          }
        }

        return updateFunctionComponent(current, workInProgress, Component, nextProps, renderExpirationTime);
      }

      function updateFragment(current, workInProgress, renderExpirationTime) {
        var nextChildren = workInProgress.pendingProps;
        reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime);
        return workInProgress.child;
      }

      function updateMode(current, workInProgress, renderExpirationTime) {
        var nextChildren = workInProgress.pendingProps.children;
        reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime);
        return workInProgress.child;
      }

      function updateProfiler(current, workInProgress, renderExpirationTime) {
        {
          workInProgress.effectTag |= Update;
        }

        var nextProps = workInProgress.pendingProps;
        var nextChildren = nextProps.children;
        reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime);
        return workInProgress.child;
      }

      function markRef(current, workInProgress) {
        var ref = workInProgress.ref;

        if ((current === null && ref !== null) || (current !== null && current.ref !== ref)) {
          // Schedule a Ref effect
          workInProgress.effectTag |= Ref;
        }
      }

      function updateFunctionComponent(current, workInProgress, Component, nextProps, renderExpirationTime) {
        {
          if (workInProgress.type !== workInProgress.elementType) {
            // Lazy component props can't be validated in createElement
            // because they're only guaranteed to be resolved here.
            var innerPropTypes = Component.propTypes;

            if (innerPropTypes) {
              checkPropTypes(
                innerPropTypes,
                nextProps, // Resolved props
                'prop',
                getComponentName(Component),
                getCurrentFiberStackInDev
              );
            }
          }
        }

        var context;

        {
          var unmaskedContext = getUnmaskedContext(workInProgress, Component, true);
          context = getMaskedContext(workInProgress, unmaskedContext);
        }

        var nextChildren;
        prepareToReadContext(workInProgress, renderExpirationTime);

        {
          ReactCurrentOwner$1.current = workInProgress;
          setIsRendering(true);
          nextChildren = renderWithHooks(current, workInProgress, Component, nextProps, context, renderExpirationTime);

          if (workInProgress.mode & StrictMode) {
            // Only double-render components with Hooks
            if (workInProgress.memoizedState !== null) {
              nextChildren = renderWithHooks(
                current,
                workInProgress,
                Component,
                nextProps,
                context,
                renderExpirationTime
              );
            }
          }

          setIsRendering(false);
        }

        if (current !== null && !didReceiveUpdate) {
          bailoutHooks(current, workInProgress, renderExpirationTime);
          return bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime);
        } // React DevTools reads this flag.

        workInProgress.effectTag |= PerformedWork;
        reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime);
        return workInProgress.child;
      }

      function updateClassComponent(current, workInProgress, Component, nextProps, renderExpirationTime) {
        {
          if (workInProgress.type !== workInProgress.elementType) {
            // Lazy component props can't be validated in createElement
            // because they're only guaranteed to be resolved here.
            var innerPropTypes = Component.propTypes;

            if (innerPropTypes) {
              checkPropTypes(
                innerPropTypes,
                nextProps, // Resolved props
                'prop',
                getComponentName(Component),
                getCurrentFiberStackInDev
              );
            }
          }
        } // Push context providers early to prevent context stack mismatches.
        // During mounting we don't know the child context yet as the instance doesn't exist.
        // We will invalidate the child context in finishClassComponent() right after rendering.

        var hasContext;

        if (isContextProvider(Component)) {
          hasContext = true;
          pushContextProvider(workInProgress);
        } else {
          hasContext = false;
        }

        prepareToReadContext(workInProgress, renderExpirationTime);
        var instance = workInProgress.stateNode;
        var shouldUpdate;

        if (instance === null) {
          if (current !== null) {
            // A class component without an instance only mounts if it suspended
            // inside a non-concurrent tree, in an inconsistent state. We want to
            // treat it like a new mount, even though an empty version of it already
            // committed. Disconnect the alternate pointers.
            current.alternate = null;
            workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

            workInProgress.effectTag |= Placement;
          } // In the initial pass we might need to construct the instance.

          constructClassInstance(workInProgress, Component, nextProps);
          mountClassInstance(workInProgress, Component, nextProps, renderExpirationTime);
          shouldUpdate = true;
        } else if (current === null) {
          // In a resume, we'll already have an instance we can reuse.
          shouldUpdate = resumeMountClassInstance(workInProgress, Component, nextProps, renderExpirationTime);
        } else {
          shouldUpdate = updateClassInstance(current, workInProgress, Component, nextProps, renderExpirationTime);
        }

        var nextUnitOfWork = finishClassComponent(
          current,
          workInProgress,
          Component,
          shouldUpdate,
          hasContext,
          renderExpirationTime
        );

        {
          var inst = workInProgress.stateNode;

          if (inst.props !== nextProps) {
            if (!didWarnAboutReassigningProps) {
              error(
                'It looks like %s is reassigning its own `this.props` while rendering. ' +
                  'This is not supported and can lead to confusing bugs.',
                getComponentName(workInProgress.type) || 'a component'
              );
            }

            didWarnAboutReassigningProps = true;
          }
        }

        return nextUnitOfWork;
      }

      function finishClassComponent(
        current,
        workInProgress,
        Component,
        shouldUpdate,
        hasContext,
        renderExpirationTime
      ) {
        // Refs should update even if shouldComponentUpdate returns false
        markRef(current, workInProgress);
        var didCaptureError = (workInProgress.effectTag & DidCapture) !== NoEffect;

        if (!shouldUpdate && !didCaptureError) {
          // Context providers should defer to sCU for rendering
          if (hasContext) {
            invalidateContextProvider(workInProgress, Component, false);
          }

          return bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime);
        }

        var instance = workInProgress.stateNode; // Rerender

        ReactCurrentOwner$1.current = workInProgress;
        var nextChildren;

        if (didCaptureError && typeof Component.getDerivedStateFromError !== 'function') {
          // If we captured an error, but getDerivedStateFromError is not defined,
          // unmount all the children. componentDidCatch will schedule an update to
          // re-render a fallback. This is temporary until we migrate everyone to
          // the new API.
          // TODO: Warn in a future release.
          nextChildren = null;

          {
            stopProfilerTimerIfRunning();
          }
        } else {
          {
            setIsRendering(true);
            nextChildren = instance.render();

            if (workInProgress.mode & StrictMode) {
              instance.render();
            }

            setIsRendering(false);
          }
        } // React DevTools reads this flag.

        workInProgress.effectTag |= PerformedWork;

        if (current !== null && didCaptureError) {
          // If we're recovering from an error, reconcile without reusing any of
          // the existing children. Conceptually, the normal children and the children
          // that are shown on error are two different sets, so we shouldn't reuse
          // normal children even if their identities match.
          forceUnmountCurrentAndReconcile(current, workInProgress, nextChildren, renderExpirationTime);
        } else {
          reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime);
        } // Memoize state using the values we just used to render.
        // TODO: Restructure so we never read values from the instance.

        workInProgress.memoizedState = instance.state; // The context might have changed so we need to recalculate it.

        if (hasContext) {
          invalidateContextProvider(workInProgress, Component, true);
        }

        return workInProgress.child;
      }

      function pushHostRootContext(workInProgress) {
        var root = workInProgress.stateNode;

        if (root.pendingContext) {
          pushTopLevelContextObject(workInProgress, root.pendingContext, root.pendingContext !== root.context);
        } else if (root.context) {
          // Should always be set
          pushTopLevelContextObject(workInProgress, root.context, false);
        }

        pushHostContainer(workInProgress, root.containerInfo);
      }

      function updateHostRoot(current, workInProgress, renderExpirationTime) {
        pushHostRootContext(workInProgress);
        var updateQueue = workInProgress.updateQueue;

        if (!(current !== null && updateQueue !== null)) {
          {
            throw Error(
              'If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }

        var nextProps = workInProgress.pendingProps;
        var prevState = workInProgress.memoizedState;
        var prevChildren = prevState !== null ? prevState.element : null;
        cloneUpdateQueue(current, workInProgress);
        processUpdateQueue(workInProgress, nextProps, null, renderExpirationTime);
        var nextState = workInProgress.memoizedState; // Caution: React DevTools currently depends on this property
        // being called "element".

        var nextChildren = nextState.element;

        if (nextChildren === prevChildren) {
          // If the state is the same as before, that's a bailout because we had
          // no work that expires at this time.
          resetHydrationState();
          return bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime);
        }

        var root = workInProgress.stateNode;

        if (root.hydrate && enterHydrationState(workInProgress)) {
          // If we don't have any current children this might be the first pass.
          // We always try to hydrate. If this isn't a hydration pass there won't
          // be any children to hydrate which is effectively the same thing as
          // not hydrating.
          var child = mountChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
          workInProgress.child = child;
          var node = child;

          while (node) {
            // Mark each child as hydrating. This is a fast path to know whether this
            // tree is part of a hydrating tree. This is used to determine if a child
            // node has fully mounted yet, and for scheduling event replaying.
            // Conceptually this is similar to Placement in that a new subtree is
            // inserted into the React tree here. It just happens to not need DOM
            // mutations because it already exists.
            node.effectTag = (node.effectTag & ~Placement) | Hydrating;
            node = node.sibling;
          }
        } else {
          // Otherwise reset hydration state in case we aborted and resumed another
          // root.
          reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime);
          resetHydrationState();
        }

        return workInProgress.child;
      }

      function updateHostComponent(current, workInProgress, renderExpirationTime) {
        pushHostContext(workInProgress);

        if (current === null) {
          tryToClaimNextHydratableInstance(workInProgress);
        }

        var type = workInProgress.type;
        var nextProps = workInProgress.pendingProps;
        var prevProps = current !== null ? current.memoizedProps : null;
        var nextChildren = nextProps.children;
        var isDirectTextChild = shouldSetTextContent(type, nextProps);

        if (isDirectTextChild) {
          // We special case a direct text child of a host node. This is a common
          // case. We won't handle it as a reified child. We will instead handle
          // this in the host environment that also has access to this prop. That
          // avoids allocating another HostText fiber and traversing it.
          nextChildren = null;
        } else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
          // If we're switching from a direct text child to a normal child, or to
          // empty, we need to schedule the text content to be reset.
          workInProgress.effectTag |= ContentReset;
        }

        markRef(current, workInProgress); // Check the host config to see if the children are offscreen/hidden.

        if (
          workInProgress.mode & ConcurrentMode &&
          renderExpirationTime !== Never &&
          shouldDeprioritizeSubtree(type, nextProps)
        ) {
          {
            markSpawnedWork(Never);
          } // Schedule this fiber to re-render at offscreen priority. Then bailout.

          workInProgress.expirationTime = workInProgress.childExpirationTime = Never;
          return null;
        }

        reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime);
        return workInProgress.child;
      }

      function updateHostText(current, workInProgress) {
        if (current === null) {
          tryToClaimNextHydratableInstance(workInProgress);
        } // Nothing to do here. This is terminal. We'll do the completion step
        // immediately after.

        return null;
      }

      function mountLazyComponent(_current, workInProgress, elementType, updateExpirationTime, renderExpirationTime) {
        if (_current !== null) {
          // A lazy component only mounts if it suspended inside a non-
          // concurrent tree, in an inconsistent state. We want to treat it like
          // a new mount, even though an empty version of it already committed.
          // Disconnect the alternate pointers.
          _current.alternate = null;
          workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

          workInProgress.effectTag |= Placement;
        }

        var props = workInProgress.pendingProps; // We can't start a User Timing measurement with correct label yet.
        // Cancel and resume right after we know the tag.

        cancelWorkTimer(workInProgress);
        var Component = readLazyComponentType(elementType); // Store the unwrapped component in the type.

        workInProgress.type = Component;
        var resolvedTag = (workInProgress.tag = resolveLazyComponentTag(Component));
        startWorkTimer(workInProgress);
        var resolvedProps = resolveDefaultProps(Component, props);
        var child;

        switch (resolvedTag) {
          case FunctionComponent: {
            {
              validateFunctionComponentInDev(workInProgress, Component);
              workInProgress.type = Component = resolveFunctionForHotReloading(Component);
            }

            child = updateFunctionComponent(null, workInProgress, Component, resolvedProps, renderExpirationTime);
            return child;
          }

          case ClassComponent: {
            {
              workInProgress.type = Component = resolveClassForHotReloading(Component);
            }

            child = updateClassComponent(null, workInProgress, Component, resolvedProps, renderExpirationTime);
            return child;
          }

          case ForwardRef: {
            {
              workInProgress.type = Component = resolveForwardRefForHotReloading(Component);
            }

            child = updateForwardRef(null, workInProgress, Component, resolvedProps, renderExpirationTime);
            return child;
          }

          case MemoComponent: {
            {
              if (workInProgress.type !== workInProgress.elementType) {
                var outerPropTypes = Component.propTypes;

                if (outerPropTypes) {
                  checkPropTypes(
                    outerPropTypes,
                    resolvedProps, // Resolved for outer only
                    'prop',
                    getComponentName(Component),
                    getCurrentFiberStackInDev
                  );
                }
              }
            }

            child = updateMemoComponent(
              null,
              workInProgress,
              Component,
              resolveDefaultProps(Component.type, resolvedProps), // The inner type can have defaults too
              updateExpirationTime,
              renderExpirationTime
            );
            return child;
          }
        }

        var hint = '';

        {
          if (Component !== null && typeof Component === 'object' && Component.$$typeof === REACT_LAZY_TYPE) {
            hint = ' Did you wrap a component in React.lazy() more than once?';
          }
        } // This message intentionally doesn't mention ForwardRef or MemoComponent
        // because the fact that it's a separate type of work is an
        // implementation detail.

        {
          {
            throw Error(
              'Element type is invalid. Received a promise that resolves to: ' +
                Component +
                '. Lazy element type must resolve to a class or function.' +
                hint
            );
          }
        }
      }

      function mountIncompleteClassComponent(_current, workInProgress, Component, nextProps, renderExpirationTime) {
        if (_current !== null) {
          // An incomplete component only mounts if it suspended inside a non-
          // concurrent tree, in an inconsistent state. We want to treat it like
          // a new mount, even though an empty version of it already committed.
          // Disconnect the alternate pointers.
          _current.alternate = null;
          workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

          workInProgress.effectTag |= Placement;
        } // Promote the fiber to a class and try rendering again.

        workInProgress.tag = ClassComponent; // The rest of this function is a fork of `updateClassComponent`
        // Push context providers early to prevent context stack mismatches.
        // During mounting we don't know the child context yet as the instance doesn't exist.
        // We will invalidate the child context in finishClassComponent() right after rendering.

        var hasContext;

        if (isContextProvider(Component)) {
          hasContext = true;
          pushContextProvider(workInProgress);
        } else {
          hasContext = false;
        }

        prepareToReadContext(workInProgress, renderExpirationTime);
        constructClassInstance(workInProgress, Component, nextProps);
        mountClassInstance(workInProgress, Component, nextProps, renderExpirationTime);
        return finishClassComponent(null, workInProgress, Component, true, hasContext, renderExpirationTime);
      }

      function mountIndeterminateComponent(_current, workInProgress, Component, renderExpirationTime) {
        if (_current !== null) {
          // An indeterminate component only mounts if it suspended inside a non-
          // concurrent tree, in an inconsistent state. We want to treat it like
          // a new mount, even though an empty version of it already committed.
          // Disconnect the alternate pointers.
          _current.alternate = null;
          workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

          workInProgress.effectTag |= Placement;
        }

        var props = workInProgress.pendingProps;
        var context;

        {
          var unmaskedContext = getUnmaskedContext(workInProgress, Component, false);
          context = getMaskedContext(workInProgress, unmaskedContext);
        }

        prepareToReadContext(workInProgress, renderExpirationTime);
        var value;

        {
          if (Component.prototype && typeof Component.prototype.render === 'function') {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutBadClass[componentName]) {
              error(
                "The <%s /> component appears to have a render method, but doesn't extend React.Component. " +
                  'This is likely to cause errors. Change %s to extend React.Component instead.',
                componentName,
                componentName
              );

              didWarnAboutBadClass[componentName] = true;
            }
          }

          if (workInProgress.mode & StrictMode) {
            ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
          }

          setIsRendering(true);
          ReactCurrentOwner$1.current = workInProgress;
          value = renderWithHooks(null, workInProgress, Component, props, context, renderExpirationTime);
          setIsRendering(false);
        } // React DevTools reads this flag.

        workInProgress.effectTag |= PerformedWork;

        if (
          typeof value === 'object' &&
          value !== null &&
          typeof value.render === 'function' &&
          value.$$typeof === undefined
        ) {
          {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutModulePatternComponent[_componentName]) {
              error(
                'The <%s /> component appears to be a function component that returns a class instance. ' +
                  'Change %s to a class that extends React.Component instead. ' +
                  "If you can't use a class try assigning the prototype on the function as a workaround. " +
                  "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " +
                  'cannot be called with `new` by React.',
                _componentName,
                _componentName,
                _componentName
              );

              didWarnAboutModulePatternComponent[_componentName] = true;
            }
          } // Proceed under the assumption that this is a class instance

          workInProgress.tag = ClassComponent; // Throw out any hooks that were used.

          workInProgress.memoizedState = null;
          workInProgress.updateQueue = null; // Push context providers early to prevent context stack mismatches.
          // During mounting we don't know the child context yet as the instance doesn't exist.
          // We will invalidate the child context in finishClassComponent() right after rendering.

          var hasContext = false;

          if (isContextProvider(Component)) {
            hasContext = true;
            pushContextProvider(workInProgress);
          } else {
            hasContext = false;
          }

          workInProgress.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;
          initializeUpdateQueue(workInProgress);
          var getDerivedStateFromProps = Component.getDerivedStateFromProps;

          if (typeof getDerivedStateFromProps === 'function') {
            applyDerivedStateFromProps(workInProgress, Component, getDerivedStateFromProps, props);
          }

          adoptClassInstance(workInProgress, value);
          mountClassInstance(workInProgress, Component, props, renderExpirationTime);
          return finishClassComponent(null, workInProgress, Component, true, hasContext, renderExpirationTime);
        } else {
          // Proceed under the assumption that this is a function component
          workInProgress.tag = FunctionComponent;

          {
            if (workInProgress.mode & StrictMode) {
              // Only double-render components with Hooks
              if (workInProgress.memoizedState !== null) {
                value = renderWithHooks(null, workInProgress, Component, props, context, renderExpirationTime);
              }
            }
          }

          reconcileChildren(null, workInProgress, value, renderExpirationTime);

          {
            validateFunctionComponentInDev(workInProgress, Component);
          }

          return workInProgress.child;
        }
      }

      function validateFunctionComponentInDev(workInProgress, Component) {
        {
          if (Component) {
            if (Component.childContextTypes) {
              error(
                '%s(...): childContextTypes cannot be defined on a function component.',
                Component.displayName || Component.name || 'Component'
              );
            }
          }

          if (workInProgress.ref !== null) {
            var info = '';
            var ownerName = getCurrentFiberOwnerNameInDevOrNull();

            if (ownerName) {
              info += '\n\nCheck the render method of `' + ownerName + '`.';
            }

            var warningKey = ownerName || workInProgress._debugID || '';
            var debugSource = workInProgress._debugSource;

            if (debugSource) {
              warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
            }

            if (!didWarnAboutFunctionRefs[warningKey]) {
              didWarnAboutFunctionRefs[warningKey] = true;

              error(
                'Function components cannot be given refs. ' +
                  'Attempts to access this ref will fail. ' +
                  'Did you mean to use React.forwardRef()?%s',
                info
              );
            }
          }

          if (typeof Component.getDerivedStateFromProps === 'function') {
            var _componentName2 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2]) {
              error('%s: Function components do not support getDerivedStateFromProps.', _componentName2);

              didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] = true;
            }
          }

          if (typeof Component.contextType === 'object' && Component.contextType !== null) {
            var _componentName3 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutContextTypeOnFunctionComponent[_componentName3]) {
              error('%s: Function components do not support contextType.', _componentName3);

              didWarnAboutContextTypeOnFunctionComponent[_componentName3] = true;
            }
          }
        }
      }

      var SUSPENDED_MARKER = {
        dehydrated: null,
        retryTime: NoWork,
      };

      function shouldRemainOnFallback(suspenseContext, current, workInProgress) {
        // If the context is telling us that we should show a fallback, and we're not
        // already showing content, then we should show the fallback instead.
        return (
          hasSuspenseContext(suspenseContext, ForceSuspenseFallback) &&
          (current === null || current.memoizedState !== null)
        );
      }

      function updateSuspenseComponent(current, workInProgress, renderExpirationTime) {
        var mode = workInProgress.mode;
        var nextProps = workInProgress.pendingProps; // This is used by DevTools to force a boundary to suspend.

        {
          if (shouldSuspend(workInProgress)) {
            workInProgress.effectTag |= DidCapture;
          }
        }

        var suspenseContext = suspenseStackCursor.current;
        var nextDidTimeout = false;
        var didSuspend = (workInProgress.effectTag & DidCapture) !== NoEffect;

        if (didSuspend || shouldRemainOnFallback(suspenseContext, current)) {
          // Something in this boundary's subtree already suspended. Switch to
          // rendering the fallback children.
          nextDidTimeout = true;
          workInProgress.effectTag &= ~DidCapture;
        } else {
          // Attempting the main content
          if (current === null || current.memoizedState !== null) {
            // This is a new mount or this boundary is already showing a fallback state.
            // Mark this subtree context as having at least one invisible parent that could
            // handle the fallback state.
            // Boundaries without fallbacks or should be avoided are not considered since
            // they cannot handle preferred fallback states.
            if (nextProps.fallback !== undefined && nextProps.unstable_avoidThisFallback !== true) {
              suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
            }
          }
        }

        suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
        pushSuspenseContext(workInProgress, suspenseContext); // This next part is a bit confusing. If the children timeout, we switch to
        // showing the fallback children in place of the "primary" children.
        // However, we don't want to delete the primary children because then their
        // state will be lost (both the React state and the host state, e.g.
        // uncontrolled form inputs). Instead we keep them mounted and hide them.
        // Both the fallback children AND the primary children are rendered at the
        // same time. Once the primary children are un-suspended, we can delete
        // the fallback children — don't need to preserve their state.
        //
        // The two sets of children are siblings in the host environment, but
        // semantically, for purposes of reconciliation, they are two separate sets.
        // So we store them using two fragment fibers.
        //
        // However, we want to avoid allocating extra fibers for every placeholder.
        // They're only necessary when the children time out, because that's the
        // only time when both sets are mounted.
        //
        // So, the extra fragment fibers are only used if the children time out.
        // Otherwise, we render the primary children directly. This requires some
        // custom reconciliation logic to preserve the state of the primary
        // children. It's essentially a very basic form of re-parenting.

        if (current === null) {
          // If we're currently hydrating, try to hydrate this boundary.
          // But only if this has a fallback.
          if (nextProps.fallback !== undefined) {
            tryToClaimNextHydratableInstance(workInProgress); // This could've been a dehydrated suspense component.
          } // This is the initial mount. This branch is pretty simple because there's
          // no previous state that needs to be preserved.

          if (nextDidTimeout) {
            // Mount separate fragments for primary and fallback children.
            var nextFallbackChildren = nextProps.fallback;
            var primaryChildFragment = createFiberFromFragment(null, mode, NoWork, null);
            primaryChildFragment.return = workInProgress;

            if ((workInProgress.mode & BlockingMode) === NoMode) {
              // Outside of blocking mode, we commit the effects from the
              // partially completed, timed-out tree, too.
              var progressedState = workInProgress.memoizedState;
              var progressedPrimaryChild = progressedState !== null ? workInProgress.child.child : workInProgress.child;
              primaryChildFragment.child = progressedPrimaryChild;
              var progressedChild = progressedPrimaryChild;

              while (progressedChild !== null) {
                progressedChild.return = primaryChildFragment;
                progressedChild = progressedChild.sibling;
              }
            }

            var fallbackChildFragment = createFiberFromFragment(nextFallbackChildren, mode, renderExpirationTime, null);
            fallbackChildFragment.return = workInProgress;
            primaryChildFragment.sibling = fallbackChildFragment; // Skip the primary children, and continue working on the
            // fallback children.

            workInProgress.memoizedState = SUSPENDED_MARKER;
            workInProgress.child = primaryChildFragment;
            return fallbackChildFragment;
          } else {
            // Mount the primary children without an intermediate fragment fiber.
            var nextPrimaryChildren = nextProps.children;
            workInProgress.memoizedState = null;
            return (workInProgress.child = mountChildFibers(
              workInProgress,
              null,
              nextPrimaryChildren,
              renderExpirationTime
            ));
          }
        } else {
          // This is an update. This branch is more complicated because we need to
          // ensure the state of the primary children is preserved.
          var prevState = current.memoizedState;

          if (prevState !== null) {
            // wrapped in a fragment fiber.

            var currentPrimaryChildFragment = current.child;
            var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;

            if (nextDidTimeout) {
              // Still timed out. Reuse the current primary children by cloning
              // its fragment. We're going to skip over these entirely.
              var _nextFallbackChildren2 = nextProps.fallback;

              var _primaryChildFragment2 = createWorkInProgress(
                currentPrimaryChildFragment,
                currentPrimaryChildFragment.pendingProps
              );

              _primaryChildFragment2.return = workInProgress;

              if ((workInProgress.mode & BlockingMode) === NoMode) {
                // Outside of blocking mode, we commit the effects from the
                // partially completed, timed-out tree, too.
                var _progressedState = workInProgress.memoizedState;

                var _progressedPrimaryChild =
                  _progressedState !== null ? workInProgress.child.child : workInProgress.child;

                if (_progressedPrimaryChild !== currentPrimaryChildFragment.child) {
                  _primaryChildFragment2.child = _progressedPrimaryChild;
                  var _progressedChild2 = _progressedPrimaryChild;

                  while (_progressedChild2 !== null) {
                    _progressedChild2.return = _primaryChildFragment2;
                    _progressedChild2 = _progressedChild2.sibling;
                  }
                }
              } // Because primaryChildFragment is a new fiber that we're inserting as the
              // parent of a new tree, we need to set its treeBaseDuration.

              if (workInProgress.mode & ProfileMode) {
                // treeBaseDuration is the sum of all the child tree base durations.
                var _treeBaseDuration = 0;
                var _hiddenChild = _primaryChildFragment2.child;

                while (_hiddenChild !== null) {
                  _treeBaseDuration += _hiddenChild.treeBaseDuration;
                  _hiddenChild = _hiddenChild.sibling;
                }

                _primaryChildFragment2.treeBaseDuration = _treeBaseDuration;
              } // Clone the fallback child fragment, too. These we'll continue
              // working on.

              var _fallbackChildFragment2 = createWorkInProgress(currentFallbackChildFragment, _nextFallbackChildren2);

              _fallbackChildFragment2.return = workInProgress;
              _primaryChildFragment2.sibling = _fallbackChildFragment2;
              _primaryChildFragment2.childExpirationTime = NoWork; // Skip the primary children, and continue working on the
              // fallback children.

              workInProgress.memoizedState = SUSPENDED_MARKER;
              workInProgress.child = _primaryChildFragment2;
              return _fallbackChildFragment2;
            } else {
              // No longer suspended. Switch back to showing the primary children,
              // and remove the intermediate fragment fiber.
              var _nextPrimaryChildren = nextProps.children;
              var currentPrimaryChild = currentPrimaryChildFragment.child;
              var primaryChild = reconcileChildFibers(
                workInProgress,
                currentPrimaryChild,
                _nextPrimaryChildren,
                renderExpirationTime
              ); // If this render doesn't suspend, we need to delete the fallback
              // children. Wait until the complete phase, after we've confirmed the
              // fallback is no longer needed.
              // TODO: Would it be better to store the fallback fragment on
              // the stateNode?
              // Continue rendering the children, like we normally do.

              workInProgress.memoizedState = null;
              return (workInProgress.child = primaryChild);
            }
          } else {
            // The current tree has not already timed out. That means the primary
            // children are not wrapped in a fragment fiber.
            var _currentPrimaryChild = current.child;

            if (nextDidTimeout) {
              // Timed out. Wrap the children in a fragment fiber to keep them
              // separate from the fallback children.
              var _nextFallbackChildren3 = nextProps.fallback;

              var _primaryChildFragment3 = createFiberFromFragment(
                // It shouldn't matter what the pending props are because we aren't
                // going to render this fragment.
                null,
                mode,
                NoWork,
                null
              );

              _primaryChildFragment3.return = workInProgress;
              _primaryChildFragment3.child = _currentPrimaryChild;

              if (_currentPrimaryChild !== null) {
                _currentPrimaryChild.return = _primaryChildFragment3;
              } // Even though we're creating a new fiber, there are no new children,
              // because we're reusing an already mounted tree. So we don't need to
              // schedule a placement.
              // primaryChildFragment.effectTag |= Placement;

              if ((workInProgress.mode & BlockingMode) === NoMode) {
                // Outside of blocking mode, we commit the effects from the
                // partially completed, timed-out tree, too.
                var _progressedState2 = workInProgress.memoizedState;

                var _progressedPrimaryChild2 =
                  _progressedState2 !== null ? workInProgress.child.child : workInProgress.child;

                _primaryChildFragment3.child = _progressedPrimaryChild2;
                var _progressedChild3 = _progressedPrimaryChild2;

                while (_progressedChild3 !== null) {
                  _progressedChild3.return = _primaryChildFragment3;
                  _progressedChild3 = _progressedChild3.sibling;
                }
              } // Because primaryChildFragment is a new fiber that we're inserting as the
              // parent of a new tree, we need to set its treeBaseDuration.

              if (workInProgress.mode & ProfileMode) {
                // treeBaseDuration is the sum of all the child tree base durations.
                var _treeBaseDuration2 = 0;
                var _hiddenChild2 = _primaryChildFragment3.child;

                while (_hiddenChild2 !== null) {
                  _treeBaseDuration2 += _hiddenChild2.treeBaseDuration;
                  _hiddenChild2 = _hiddenChild2.sibling;
                }

                _primaryChildFragment3.treeBaseDuration = _treeBaseDuration2;
              } // Create a fragment from the fallback children, too.

              var _fallbackChildFragment3 = createFiberFromFragment(
                _nextFallbackChildren3,
                mode,
                renderExpirationTime,
                null
              );

              _fallbackChildFragment3.return = workInProgress;
              _primaryChildFragment3.sibling = _fallbackChildFragment3;
              _fallbackChildFragment3.effectTag |= Placement;
              _primaryChildFragment3.childExpirationTime = NoWork; // Skip the primary children, and continue working on the
              // fallback children.

              workInProgress.memoizedState = SUSPENDED_MARKER;
              workInProgress.child = _primaryChildFragment3;
              return _fallbackChildFragment3;
            } else {
              // Still haven't timed out. Continue rendering the children, like we
              // normally do.
              workInProgress.memoizedState = null;
              var _nextPrimaryChildren2 = nextProps.children;
              return (workInProgress.child = reconcileChildFibers(
                workInProgress,
                _currentPrimaryChild,
                _nextPrimaryChildren2,
                renderExpirationTime
              ));
            }
          }
        }
      }

      function scheduleWorkOnFiber(fiber, renderExpirationTime) {
        if (fiber.expirationTime < renderExpirationTime) {
          fiber.expirationTime = renderExpirationTime;
        }

        var alternate = fiber.alternate;

        if (alternate !== null && alternate.expirationTime < renderExpirationTime) {
          alternate.expirationTime = renderExpirationTime;
        }

        scheduleWorkOnParentPath(fiber.return, renderExpirationTime);
      }

      function propagateSuspenseContextChange(workInProgress, firstChild, renderExpirationTime) {
        // Mark any Suspense boundaries with fallbacks as having work to do.
        // If they were previously forced into fallbacks, they may now be able
        // to unblock.
        var node = firstChild;

        while (node !== null) {
          if (node.tag === SuspenseComponent) {
            var state = node.memoizedState;

            if (state !== null) {
              scheduleWorkOnFiber(node, renderExpirationTime);
            }
          } else if (node.tag === SuspenseListComponent) {
            // If the tail is hidden there might not be an Suspense boundaries
            // to schedule work on. In this case we have to schedule it on the
            // list itself.
            // We don't have to traverse to the children of the list since
            // the list will propagate the change when it rerenders.
            scheduleWorkOnFiber(node, renderExpirationTime);
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }

          if (node === workInProgress) {
            return;
          }

          while (node.sibling === null) {
            if (node.return === null || node.return === workInProgress) {
              return;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        }
      }

      function findLastContentRow(firstChild) {
        // This is going to find the last row among these children that is already
        // showing content on the screen, as opposed to being in fallback state or
        // new. If a row has multiple Suspense boundaries, any of them being in the
        // fallback state, counts as the whole row being in a fallback state.
        // Note that the "rows" will be workInProgress, but any nested children
        // will still be current since we haven't rendered them yet. The mounted
        // order may not be the same as the new order. We use the new order.
        var row = firstChild;
        var lastContentRow = null;

        while (row !== null) {
          var currentRow = row.alternate; // New rows can't be content rows.

          if (currentRow !== null && findFirstSuspended(currentRow) === null) {
            lastContentRow = row;
          }

          row = row.sibling;
        }

        return lastContentRow;
      }

      function validateRevealOrder(revealOrder) {
        {
          if (
            revealOrder !== undefined &&
            revealOrder !== 'forwards' &&
            revealOrder !== 'backwards' &&
            revealOrder !== 'together' &&
            !didWarnAboutRevealOrder[revealOrder]
          ) {
            didWarnAboutRevealOrder[revealOrder] = true;

            if (typeof revealOrder === 'string') {
              switch (revealOrder.toLowerCase()) {
                case 'together':
                case 'forwards':
                case 'backwards': {
                  error(
                    '"%s" is not a valid value for revealOrder on <SuspenseList />. ' + 'Use lowercase "%s" instead.',
                    revealOrder,
                    revealOrder.toLowerCase()
                  );

                  break;
                }

                case 'forward':
                case 'backward': {
                  error(
                    '"%s" is not a valid value for revealOrder on <SuspenseList />. ' +
                      'React uses the -s suffix in the spelling. Use "%ss" instead.',
                    revealOrder,
                    revealOrder.toLowerCase()
                  );

                  break;
                }

                default:
                  error(
                    '"%s" is not a supported revealOrder on <SuspenseList />. ' +
                      'Did you mean "together", "forwards" or "backwards"?',
                    revealOrder
                  );

                  break;
              }
            } else {
              error(
                '%s is not a supported value for revealOrder on <SuspenseList />. ' +
                  'Did you mean "together", "forwards" or "backwards"?',
                revealOrder
              );
            }
          }
        }
      }

      function validateTailOptions(tailMode, revealOrder) {
        {
          if (tailMode !== undefined && !didWarnAboutTailOptions[tailMode]) {
            if (tailMode !== 'collapsed' && tailMode !== 'hidden') {
              didWarnAboutTailOptions[tailMode] = true;

              error(
                '"%s" is not a supported value for tail on <SuspenseList />. ' +
                  'Did you mean "collapsed" or "hidden"?',
                tailMode
              );
            } else if (revealOrder !== 'forwards' && revealOrder !== 'backwards') {
              didWarnAboutTailOptions[tailMode] = true;

              error(
                '<SuspenseList tail="%s" /> is only valid if revealOrder is ' +
                  '"forwards" or "backwards". ' +
                  'Did you mean to specify revealOrder="forwards"?',
                tailMode
              );
            }
          }
        }
      }

      function validateSuspenseListNestedChild(childSlot, index) {
        {
          var isArray = Array.isArray(childSlot);
          var isIterable = !isArray && typeof getIteratorFn(childSlot) === 'function';

          if (isArray || isIterable) {
            var type = isArray ? 'array' : 'iterable';

            error(
              'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in ' +
                'an additional SuspenseList to configure its revealOrder: ' +
                '<SuspenseList revealOrder=...> ... ' +
                '<SuspenseList revealOrder=...>{%s}</SuspenseList> ... ' +
                '</SuspenseList>',
              type,
              index,
              type
            );

            return false;
          }
        }

        return true;
      }

      function validateSuspenseListChildren(children, revealOrder) {
        {
          if (
            (revealOrder === 'forwards' || revealOrder === 'backwards') &&
            children !== undefined &&
            children !== null &&
            children !== false
          ) {
            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                if (!validateSuspenseListNestedChild(children[i], i)) {
                  return;
                }
              }
            } else {
              var iteratorFn = getIteratorFn(children);

              if (typeof iteratorFn === 'function') {
                var childrenIterator = iteratorFn.call(children);

                if (childrenIterator) {
                  var step = childrenIterator.next();
                  var _i = 0;

                  for (; !step.done; step = childrenIterator.next()) {
                    if (!validateSuspenseListNestedChild(step.value, _i)) {
                      return;
                    }

                    _i++;
                  }
                }
              } else {
                error(
                  'A single row was passed to a <SuspenseList revealOrder="%s" />. ' +
                    'This is not useful since it needs multiple rows. ' +
                    'Did you mean to pass multiple children or an array?',
                  revealOrder
                );
              }
            }
          }
        }
      }

      function initSuspenseListRenderState(
        workInProgress,
        isBackwards,
        tail,
        lastContentRow,
        tailMode,
        lastEffectBeforeRendering
      ) {
        var renderState = workInProgress.memoizedState;

        if (renderState === null) {
          workInProgress.memoizedState = {
            isBackwards: isBackwards,
            rendering: null,
            renderingStartTime: 0,
            last: lastContentRow,
            tail: tail,
            tailExpiration: 0,
            tailMode: tailMode,
            lastEffect: lastEffectBeforeRendering,
          };
        } else {
          // We can reuse the existing object from previous renders.
          renderState.isBackwards = isBackwards;
          renderState.rendering = null;
          renderState.renderingStartTime = 0;
          renderState.last = lastContentRow;
          renderState.tail = tail;
          renderState.tailExpiration = 0;
          renderState.tailMode = tailMode;
          renderState.lastEffect = lastEffectBeforeRendering;
        }
      } // This can end up rendering this component multiple passes.
      // The first pass splits the children fibers into two sets. A head and tail.
      // We first render the head. If anything is in fallback state, we do another
      // pass through beginWork to rerender all children (including the tail) with
      // the force suspend context. If the first render didn't have anything in
      // in fallback state. Then we render each row in the tail one-by-one.
      // That happens in the completeWork phase without going back to beginWork.

      function updateSuspenseListComponent(current, workInProgress, renderExpirationTime) {
        var nextProps = workInProgress.pendingProps;
        var revealOrder = nextProps.revealOrder;
        var tailMode = nextProps.tail;
        var newChildren = nextProps.children;
        validateRevealOrder(revealOrder);
        validateTailOptions(tailMode, revealOrder);
        validateSuspenseListChildren(newChildren, revealOrder);
        reconcileChildren(current, workInProgress, newChildren, renderExpirationTime);
        var suspenseContext = suspenseStackCursor.current;
        var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);

        if (shouldForceFallback) {
          suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
          workInProgress.effectTag |= DidCapture;
        } else {
          var didSuspendBefore = current !== null && (current.effectTag & DidCapture) !== NoEffect;

          if (didSuspendBefore) {
            // If we previously forced a fallback, we need to schedule work
            // on any nested boundaries to let them know to try to render
            // again. This is the same as context updating.
            propagateSuspenseContextChange(workInProgress, workInProgress.child, renderExpirationTime);
          }

          suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
        }

        pushSuspenseContext(workInProgress, suspenseContext);

        if ((workInProgress.mode & BlockingMode) === NoMode) {
          // Outside of blocking mode, SuspenseList doesn't work so we just
          // use make it a noop by treating it as the default revealOrder.
          workInProgress.memoizedState = null;
        } else {
          switch (revealOrder) {
            case 'forwards': {
              var lastContentRow = findLastContentRow(workInProgress.child);
              var tail;

              if (lastContentRow === null) {
                // The whole list is part of the tail.
                // TODO: We could fast path by just rendering the tail now.
                tail = workInProgress.child;
                workInProgress.child = null;
              } else {
                // Disconnect the tail rows after the content row.
                // We're going to render them separately later.
                tail = lastContentRow.sibling;
                lastContentRow.sibling = null;
              }

              initSuspenseListRenderState(
                workInProgress,
                false, // isBackwards
                tail,
                lastContentRow,
                tailMode,
                workInProgress.lastEffect
              );
              break;
            }

            case 'backwards': {
              // We're going to find the first row that has existing content.
              // At the same time we're going to reverse the list of everything
              // we pass in the meantime. That's going to be our tail in reverse
              // order.
              var _tail = null;
              var row = workInProgress.child;
              workInProgress.child = null;

              while (row !== null) {
                var currentRow = row.alternate; // New rows can't be content rows.

                if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                  // This is the beginning of the main content.
                  workInProgress.child = row;
                  break;
                }

                var nextRow = row.sibling;
                row.sibling = _tail;
                _tail = row;
                row = nextRow;
              } // TODO: If workInProgress.child is null, we can continue on the tail immediately.

              initSuspenseListRenderState(
                workInProgress,
                true, // isBackwards
                _tail,
                null, // last
                tailMode,
                workInProgress.lastEffect
              );
              break;
            }

            case 'together': {
              initSuspenseListRenderState(
                workInProgress,
                false, // isBackwards
                null, // tail
                null, // last
                undefined,
                workInProgress.lastEffect
              );
              break;
            }

            default: {
              // The default reveal order is the same as not having
              // a boundary.
              workInProgress.memoizedState = null;
            }
          }
        }

        return workInProgress.child;
      }

      function updatePortalComponent(current, workInProgress, renderExpirationTime) {
        pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
        var nextChildren = workInProgress.pendingProps;

        if (current === null) {
          // Portals are special because we don't append the children during mount
          // but at commit. Therefore we need to track insertions which the normal
          // flow doesn't do during mount. This doesn't happen at the root because
          // the root always starts with a "current" with a null child.
          // TODO: Consider unifying this with how the root works.
          workInProgress.child = reconcileChildFibers(workInProgress, null, nextChildren, renderExpirationTime);
        } else {
          reconcileChildren(current, workInProgress, nextChildren, renderExpirationTime);
        }

        return workInProgress.child;
      }

      function updateContextProvider(current, workInProgress, renderExpirationTime) {
        var providerType = workInProgress.type;
        var context = providerType._context;
        var newProps = workInProgress.pendingProps;
        var oldProps = workInProgress.memoizedProps;
        var newValue = newProps.value;

        {
          var providerPropTypes = workInProgress.type.propTypes;

          if (providerPropTypes) {
            checkPropTypes(providerPropTypes, newProps, 'prop', 'Context.Provider', getCurrentFiberStackInDev);
          }
        }

        pushProvider(workInProgress, newValue);

        if (oldProps !== null) {
          var oldValue = oldProps.value;
          var changedBits = calculateChangedBits(context, newValue, oldValue);

          if (changedBits === 0) {
            // No change. Bailout early if children are the same.
            if (oldProps.children === newProps.children && !hasContextChanged()) {
              return bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime);
            }
          } else {
            // The context value changed. Search for matching consumers and schedule
            // them to update.
            propagateContextChange(workInProgress, context, changedBits, renderExpirationTime);
          }
        }

        var newChildren = newProps.children;
        reconcileChildren(current, workInProgress, newChildren, renderExpirationTime);
        return workInProgress.child;
      }

      var hasWarnedAboutUsingContextAsConsumer = false;

      function updateContextConsumer(current, workInProgress, renderExpirationTime) {
        var context = workInProgress.type; // The logic below for Context differs depending on PROD or DEV mode. In
        // DEV mode, we create a separate object for Context.Consumer that acts
        // like a proxy to Context. This proxy object adds unnecessary code in PROD
        // so we use the old behaviour (Context.Consumer references Context) to
        // reduce size and overhead. The separate object references context via
        // a property called "_context", which also gives us the ability to check
        // in DEV mode if this property exists or not and warn if it does not.

        {
          if (context._context === undefined) {
            // This may be because it's a Context (rather than a Consumer).
            // Or it may be because it's older React where they're the same thing.
            // We only want to warn if we're sure it's a new React.
            if (context !== context.Consumer) {
              if (!hasWarnedAboutUsingContextAsConsumer) {
                hasWarnedAboutUsingContextAsConsumer = true;

                error(
                  'Rendering <Context> directly is not supported and will be removed in ' +
                    'a future major release. Did you mean to render <Context.Consumer> instead?'
                );
              }
            }
          } else {
            context = context._context;
          }
        }

        var newProps = workInProgress.pendingProps;
        var render = newProps.children;

        {
          if (typeof render !== 'function') {
            error(
              'A context consumer was rendered with multiple children, or a child ' +
                "that isn't a function. A context consumer expects a single child " +
                'that is a function. If you did pass a function, make sure there ' +
                'is no trailing or leading whitespace around it.'
            );
          }
        }

        prepareToReadContext(workInProgress, renderExpirationTime);
        var newValue = readContext(context, newProps.unstable_observedBits);
        var newChildren;

        {
          ReactCurrentOwner$1.current = workInProgress;
          setIsRendering(true);
          newChildren = render(newValue);
          setIsRendering(false);
        } // React DevTools reads this flag.

        workInProgress.effectTag |= PerformedWork;
        reconcileChildren(current, workInProgress, newChildren, renderExpirationTime);
        return workInProgress.child;
      }

      function markWorkInProgressReceivedUpdate() {
        didReceiveUpdate = true;
      }

      function bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime) {
        cancelWorkTimer(workInProgress);

        if (current !== null) {
          // Reuse previous dependencies
          workInProgress.dependencies = current.dependencies;
        }

        {
          // Don't update "base" render times for bailouts.
          stopProfilerTimerIfRunning();
        }

        var updateExpirationTime = workInProgress.expirationTime;

        if (updateExpirationTime !== NoWork) {
          markUnprocessedUpdateTime(updateExpirationTime);
        } // Check if the children have any pending work.

        var childExpirationTime = workInProgress.childExpirationTime;

        if (childExpirationTime < renderExpirationTime) {
          // The children don't have any work either. We can skip them.
          // TODO: Once we add back resuming, we should check if the children are
          // a work-in-progress set. If so, we need to transfer their effects.
          return null;
        } else {
          // This fiber doesn't have work, but its subtree does. Clone the child
          // fibers and continue.
          cloneChildFibers(current, workInProgress);
          return workInProgress.child;
        }
      }

      function remountFiber(current, oldWorkInProgress, newWorkInProgress) {
        {
          var returnFiber = oldWorkInProgress.return;

          if (returnFiber === null) {
            throw new Error('Cannot swap the root fiber.');
          } // Disconnect from the old current.
          // It will get deleted.

          current.alternate = null;
          oldWorkInProgress.alternate = null; // Connect to the new tree.

          newWorkInProgress.index = oldWorkInProgress.index;
          newWorkInProgress.sibling = oldWorkInProgress.sibling;
          newWorkInProgress.return = oldWorkInProgress.return;
          newWorkInProgress.ref = oldWorkInProgress.ref; // Replace the child/sibling pointers above it.

          if (oldWorkInProgress === returnFiber.child) {
            returnFiber.child = newWorkInProgress;
          } else {
            var prevSibling = returnFiber.child;

            if (prevSibling === null) {
              throw new Error('Expected parent to have a child.');
            }

            while (prevSibling.sibling !== oldWorkInProgress) {
              prevSibling = prevSibling.sibling;

              if (prevSibling === null) {
                throw new Error('Expected to find the previous sibling.');
              }
            }

            prevSibling.sibling = newWorkInProgress;
          } // Delete the old fiber and place the new one.
          // Since the old fiber is disconnected, we have to schedule it manually.

          var last = returnFiber.lastEffect;

          if (last !== null) {
            last.nextEffect = current;
            returnFiber.lastEffect = current;
          } else {
            returnFiber.firstEffect = returnFiber.lastEffect = current;
          }

          current.nextEffect = null;
          current.effectTag = Deletion;
          newWorkInProgress.effectTag |= Placement; // Restart work from the new fiber.

          return newWorkInProgress;
        }
      }

      function beginWork(current, workInProgress, renderExpirationTime) {
        var updateExpirationTime = workInProgress.expirationTime;

        {
          if (workInProgress._debugNeedsRemount && current !== null) {
            // This will restart the begin phase with a new fiber.
            return remountFiber(
              current,
              workInProgress,
              createFiberFromTypeAndProps(
                workInProgress.type,
                workInProgress.key,
                workInProgress.pendingProps,
                workInProgress._debugOwner || null,
                workInProgress.mode,
                workInProgress.expirationTime
              )
            );
          }
        }

        if (current !== null) {
          var oldProps = current.memoizedProps;
          var newProps = workInProgress.pendingProps;

          if (
            oldProps !== newProps ||
            hasContextChanged() || // Force a re-render if the implementation changed due to hot reload:
            workInProgress.type !== current.type
          ) {
            // If props or context changed, mark the fiber as having performed work.
            // This may be unset if the props are determined to be equal later (memo).
            didReceiveUpdate = true;
          } else if (updateExpirationTime < renderExpirationTime) {
            didReceiveUpdate = false; // This fiber does not have any pending work. Bailout without entering
            // the begin phase. There's still some bookkeeping we that needs to be done
            // in this optimized path, mostly pushing stuff onto the stack.

            switch (workInProgress.tag) {
              case HostRoot:
                pushHostRootContext(workInProgress);
                resetHydrationState();
                break;

              case HostComponent:
                pushHostContext(workInProgress);

                if (
                  workInProgress.mode & ConcurrentMode &&
                  renderExpirationTime !== Never &&
                  shouldDeprioritizeSubtree(workInProgress.type, newProps)
                ) {
                  {
                    markSpawnedWork(Never);
                  } // Schedule this fiber to re-render at offscreen priority. Then bailout.

                  workInProgress.expirationTime = workInProgress.childExpirationTime = Never;
                  return null;
                }

                break;

              case ClassComponent: {
                var Component = workInProgress.type;

                if (isContextProvider(Component)) {
                  pushContextProvider(workInProgress);
                }

                break;
              }

              case HostPortal:
                pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
                break;

              case ContextProvider: {
                var newValue = workInProgress.memoizedProps.value;
                pushProvider(workInProgress, newValue);
                break;
              }

              case Profiler:
                {
                  // Profiler should only call onRender when one of its descendants actually rendered.
                  var hasChildWork = workInProgress.childExpirationTime >= renderExpirationTime;

                  if (hasChildWork) {
                    workInProgress.effectTag |= Update;
                  }
                }

                break;

              case SuspenseComponent: {
                var state = workInProgress.memoizedState;

                if (state !== null) {
                  // whether to retry the primary children, or to skip over it and
                  // go straight to the fallback. Check the priority of the primary
                  // child fragment.

                  var primaryChildFragment = workInProgress.child;
                  var primaryChildExpirationTime = primaryChildFragment.childExpirationTime;

                  if (primaryChildExpirationTime !== NoWork && primaryChildExpirationTime >= renderExpirationTime) {
                    // The primary children have pending work. Use the normal path
                    // to attempt to render the primary children again.
                    return updateSuspenseComponent(current, workInProgress, renderExpirationTime);
                  } else {
                    pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current)); // The primary children do not have pending work with sufficient
                    // priority. Bailout.

                    var child = bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime);

                    if (child !== null) {
                      // The fallback children have pending work. Skip over the
                      // primary children and work on the fallback.
                      return child.sibling;
                    } else {
                      return null;
                    }
                  }
                } else {
                  pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                }

                break;
              }

              case SuspenseListComponent: {
                var didSuspendBefore = (current.effectTag & DidCapture) !== NoEffect;

                var _hasChildWork = workInProgress.childExpirationTime >= renderExpirationTime;

                if (didSuspendBefore) {
                  if (_hasChildWork) {
                    // If something was in fallback state last time, and we have all the
                    // same children then we're still in progressive loading state.
                    // Something might get unblocked by state updates or retries in the
                    // tree which will affect the tail. So we need to use the normal
                    // path to compute the correct tail.
                    return updateSuspenseListComponent(current, workInProgress, renderExpirationTime);
                  } // If none of the children had any work, that means that none of
                  // them got retried so they'll still be blocked in the same way
                  // as before. We can fast bail out.

                  workInProgress.effectTag |= DidCapture;
                } // If nothing suspended before and we're rendering the same children,
                // then the tail doesn't matter. Anything new that suspends will work
                // in the "together" mode, so we can continue from the state we had.

                var renderState = workInProgress.memoizedState;

                if (renderState !== null) {
                  // Reset to the "together" mode in case we've started a different
                  // update in the past but didn't complete it.
                  renderState.rendering = null;
                  renderState.tail = null;
                }

                pushSuspenseContext(workInProgress, suspenseStackCursor.current);

                if (_hasChildWork) {
                  break;
                } else {
                  // If none of the children had any work, that means that none of
                  // them got retried so they'll still be blocked in the same way
                  // as before. We can fast bail out.
                  return null;
                }
              }
            }

            return bailoutOnAlreadyFinishedWork(current, workInProgress, renderExpirationTime);
          } else {
            // An update was scheduled on this fiber, but there are no new props
            // nor legacy context. Set this to false. If an update queue or context
            // consumer produces a changed value, it will set this to true. Otherwise,
            // the component will assume the children have not changed and bail out.
            didReceiveUpdate = false;
          }
        } else {
          didReceiveUpdate = false;
        } // Before entering the begin phase, clear pending update priority.
        // TODO: This assumes that we're about to evaluate the component and process
        // the update queue. However, there's an exception: SimpleMemoComponent
        // sometimes bails out later in the begin phase. This indicates that we should
        // move this assignment out of the common path and into each branch.

        workInProgress.expirationTime = NoWork;

        switch (workInProgress.tag) {
          case IndeterminateComponent: {
            return mountIndeterminateComponent(current, workInProgress, workInProgress.type, renderExpirationTime);
          }

          case LazyComponent: {
            var elementType = workInProgress.elementType;
            return mountLazyComponent(current, workInProgress, elementType, updateExpirationTime, renderExpirationTime);
          }

          case FunctionComponent: {
            var _Component = workInProgress.type;
            var unresolvedProps = workInProgress.pendingProps;
            var resolvedProps =
              workInProgress.elementType === _Component
                ? unresolvedProps
                : resolveDefaultProps(_Component, unresolvedProps);
            return updateFunctionComponent(current, workInProgress, _Component, resolvedProps, renderExpirationTime);
          }

          case ClassComponent: {
            var _Component2 = workInProgress.type;
            var _unresolvedProps = workInProgress.pendingProps;

            var _resolvedProps =
              workInProgress.elementType === _Component2
                ? _unresolvedProps
                : resolveDefaultProps(_Component2, _unresolvedProps);

            return updateClassComponent(current, workInProgress, _Component2, _resolvedProps, renderExpirationTime);
          }

          case HostRoot:
            return updateHostRoot(current, workInProgress, renderExpirationTime);

          case HostComponent:
            return updateHostComponent(current, workInProgress, renderExpirationTime);

          case HostText:
            return updateHostText(current, workInProgress);

          case SuspenseComponent:
            return updateSuspenseComponent(current, workInProgress, renderExpirationTime);

          case HostPortal:
            return updatePortalComponent(current, workInProgress, renderExpirationTime);

          case ForwardRef: {
            var type = workInProgress.type;
            var _unresolvedProps2 = workInProgress.pendingProps;

            var _resolvedProps2 =
              workInProgress.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);

            return updateForwardRef(current, workInProgress, type, _resolvedProps2, renderExpirationTime);
          }

          case Fragment:
            return updateFragment(current, workInProgress, renderExpirationTime);

          case Mode:
            return updateMode(current, workInProgress, renderExpirationTime);

          case Profiler:
            return updateProfiler(current, workInProgress, renderExpirationTime);

          case ContextProvider:
            return updateContextProvider(current, workInProgress, renderExpirationTime);

          case ContextConsumer:
            return updateContextConsumer(current, workInProgress, renderExpirationTime);

          case MemoComponent: {
            var _type2 = workInProgress.type;
            var _unresolvedProps3 = workInProgress.pendingProps; // Resolve outer props first, then resolve inner props.

            var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);

            {
              if (workInProgress.type !== workInProgress.elementType) {
                var outerPropTypes = _type2.propTypes;

                if (outerPropTypes) {
                  checkPropTypes(
                    outerPropTypes,
                    _resolvedProps3, // Resolved for outer only
                    'prop',
                    getComponentName(_type2),
                    getCurrentFiberStackInDev
                  );
                }
              }
            }

            _resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
            return updateMemoComponent(
              current,
              workInProgress,
              _type2,
              _resolvedProps3,
              updateExpirationTime,
              renderExpirationTime
            );
          }

          case SimpleMemoComponent: {
            return updateSimpleMemoComponent(
              current,
              workInProgress,
              workInProgress.type,
              workInProgress.pendingProps,
              updateExpirationTime,
              renderExpirationTime
            );
          }

          case IncompleteClassComponent: {
            var _Component3 = workInProgress.type;
            var _unresolvedProps4 = workInProgress.pendingProps;

            var _resolvedProps4 =
              workInProgress.elementType === _Component3
                ? _unresolvedProps4
                : resolveDefaultProps(_Component3, _unresolvedProps4);

            return mountIncompleteClassComponent(
              current,
              workInProgress,
              _Component3,
              _resolvedProps4,
              renderExpirationTime
            );
          }

          case SuspenseListComponent: {
            return updateSuspenseListComponent(current, workInProgress, renderExpirationTime);
          }
        }

        {
          {
            throw Error(
              'Unknown unit of work tag (' +
                workInProgress.tag +
                '). This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }
      }

      function markUpdate(workInProgress) {
        // Tag the fiber with an update effect. This turns a Placement into
        // a PlacementAndUpdate.
        workInProgress.effectTag |= Update;
      }

      function markRef$1(workInProgress) {
        workInProgress.effectTag |= Ref;
      }

      var appendAllChildren;
      var updateHostContainer;
      var updateHostComponent$1;
      var updateHostText$1;

      if (supportsMutation) {
        // Mutation mode
        appendAllChildren = function (parent, workInProgress, needsVisibilityToggle, isHidden) {
          // We only have the top Fiber that was created but we need recurse down its
          // children to find all the terminal nodes.
          var node = workInProgress.child;

          while (node !== null) {
            if (node.tag === HostComponent || node.tag === HostText) {
              appendInitialChild(parent, node.stateNode);
            } else if (node.tag === HostPortal);
            else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }

            if (node === workInProgress) {
              return;
            }

            while (node.sibling === null) {
              if (node.return === null || node.return === workInProgress) {
                return;
              }

              node = node.return;
            }

            node.sibling.return = node.return;
            node = node.sibling;
          }
        };

        updateHostContainer = function (workInProgress) {
          // Noop
        };

        updateHostComponent$1 = function (current, workInProgress, type, newProps, rootContainerInstance) {
          // If we have an alternate, that means this is an update and we need to
          // schedule a side-effect to do the updates.
          var oldProps = current.memoizedProps;

          if (oldProps === newProps) {
            // In mutation mode, this is sufficient for a bailout because
            // we won't touch this node even if children changed.
            return;
          } // If we get updated because one of our children updated, we don't
          // have newProps so we'll have to reuse them.
          // TODO: Split the update API as separate for the props vs. children.
          // Even better would be if children weren't special cased at all tho.

          var instance = workInProgress.stateNode;
          var currentHostContext = getHostContext(); // TODO: Experiencing an error where oldProps is null. Suggests a host
          // component is hitting the resume path. Figure out why. Possibly
          // related to `hidden`.

          var updatePayload = prepareUpdate(
            instance,
            type,
            oldProps,
            newProps,
            rootContainerInstance,
            currentHostContext
          ); // TODO: Type this specific to this type of component.

          workInProgress.updateQueue = updatePayload; // If the update payload indicates that there is a change or if there
          // is a new ref we mark this as an update. All the work is done in commitWork.

          if (updatePayload) {
            markUpdate(workInProgress);
          }
        };

        updateHostText$1 = function (current, workInProgress, oldText, newText) {
          // If the text differs, mark it as an update. All the work in done in commitWork.
          if (oldText !== newText) {
            markUpdate(workInProgress);
          }
        };
      } else if (supportsPersistence) {
        // Persistent host tree mode
        appendAllChildren = function (parent, workInProgress, needsVisibilityToggle, isHidden) {
          // We only have the top Fiber that was created but we need recurse down its
          // children to find all the terminal nodes.
          var node = workInProgress.child;

          while (node !== null) {
            // eslint-disable-next-line no-labels
            if (node.tag === HostComponent) {
              var instance = node.stateNode;

              if (needsVisibilityToggle && isHidden) {
                // This child is inside a timed out tree. Hide it.
                var props = node.memoizedProps;
                var type = node.type;
                instance = cloneHiddenInstance(instance, type, props, node);
              }

              appendInitialChild(parent, instance);
            } else if (node.tag === HostText) {
              var _instance = node.stateNode;

              if (needsVisibilityToggle && isHidden) {
                // This child is inside a timed out tree. Hide it.
                var text = node.memoizedProps;
                _instance = cloneHiddenTextInstance(_instance, text, node);
              }

              appendInitialChild(parent, _instance);
            } else if (node.tag === HostPortal);
            else if (node.tag === SuspenseComponent) {
              if ((node.effectTag & Update) !== NoEffect) {
                // Need to toggle the visibility of the primary children.
                var newIsHidden = node.memoizedState !== null;

                if (newIsHidden) {
                  var primaryChildParent = node.child;

                  if (primaryChildParent !== null) {
                    if (primaryChildParent.child !== null) {
                      primaryChildParent.child.return = primaryChildParent;
                      appendAllChildren(parent, primaryChildParent, true, newIsHidden);
                    }

                    var fallbackChildParent = primaryChildParent.sibling;

                    if (fallbackChildParent !== null) {
                      fallbackChildParent.return = node;
                      node = fallbackChildParent;
                      continue;
                    }
                  }
                }
              }

              if (node.child !== null) {
                // Continue traversing like normal
                node.child.return = node;
                node = node.child;
                continue;
              }
            } else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            } // $FlowFixMe This is correct but Flow is confused by the labeled break.

            node = node;

            if (node === workInProgress) {
              return;
            }

            while (node.sibling === null) {
              if (node.return === null || node.return === workInProgress) {
                return;
              }

              node = node.return;
            }

            node.sibling.return = node.return;
            node = node.sibling;
          }
        }; // An unfortunate fork of appendAllChildren because we have two different parent types.

        var appendAllChildrenToContainer = function (
          containerChildSet,
          workInProgress,
          needsVisibilityToggle,
          isHidden
        ) {
          // We only have the top Fiber that was created but we need recurse down its
          // children to find all the terminal nodes.
          var node = workInProgress.child;

          while (node !== null) {
            // eslint-disable-next-line no-labels
            if (node.tag === HostComponent) {
              var instance = node.stateNode;

              if (needsVisibilityToggle && isHidden) {
                // This child is inside a timed out tree. Hide it.
                var props = node.memoizedProps;
                var type = node.type;
                instance = cloneHiddenInstance(instance, type, props, node);
              }

              appendChildToContainerChildSet(containerChildSet, instance);
            } else if (node.tag === HostText) {
              var _instance3 = node.stateNode;

              if (needsVisibilityToggle && isHidden) {
                // This child is inside a timed out tree. Hide it.
                var text = node.memoizedProps;
                _instance3 = cloneHiddenTextInstance(_instance3, text, node);
              }

              appendChildToContainerChildSet(containerChildSet, _instance3);
            } else if (node.tag === HostPortal);
            else if (node.tag === SuspenseComponent) {
              if ((node.effectTag & Update) !== NoEffect) {
                // Need to toggle the visibility of the primary children.
                var newIsHidden = node.memoizedState !== null;

                if (newIsHidden) {
                  var primaryChildParent = node.child;

                  if (primaryChildParent !== null) {
                    if (primaryChildParent.child !== null) {
                      primaryChildParent.child.return = primaryChildParent;
                      appendAllChildrenToContainer(containerChildSet, primaryChildParent, true, newIsHidden);
                    }

                    var fallbackChildParent = primaryChildParent.sibling;

                    if (fallbackChildParent !== null) {
                      fallbackChildParent.return = node;
                      node = fallbackChildParent;
                      continue;
                    }
                  }
                }
              }

              if (node.child !== null) {
                // Continue traversing like normal
                node.child.return = node;
                node = node.child;
                continue;
              }
            } else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            } // $FlowFixMe This is correct but Flow is confused by the labeled break.

            node = node;

            if (node === workInProgress) {
              return;
            }

            while (node.sibling === null) {
              if (node.return === null || node.return === workInProgress) {
                return;
              }

              node = node.return;
            }

            node.sibling.return = node.return;
            node = node.sibling;
          }
        };

        updateHostContainer = function (workInProgress) {
          var portalOrRoot = workInProgress.stateNode;
          var childrenUnchanged = workInProgress.firstEffect === null;

          if (childrenUnchanged);
          else {
            var container = portalOrRoot.containerInfo;
            var newChildSet = createContainerChildSet(container); // If children might have changed, we have to add them all to the set.

            appendAllChildrenToContainer(newChildSet, workInProgress, false, false);
            portalOrRoot.pendingChildren = newChildSet; // Schedule an update on the container to swap out the container.

            markUpdate(workInProgress);
            finalizeContainerChildren(container, newChildSet);
          }
        };

        updateHostComponent$1 = function (current, workInProgress, type, newProps, rootContainerInstance) {
          var currentInstance = current.stateNode;
          var oldProps = current.memoizedProps; // If there are no effects associated with this node, then none of our children had any updates.
          // This guarantees that we can reuse all of them.

          var childrenUnchanged = workInProgress.firstEffect === null;

          if (childrenUnchanged && oldProps === newProps) {
            // No changes, just reuse the existing instance.
            // Note that this might release a previous clone.
            workInProgress.stateNode = currentInstance;
            return;
          }

          var recyclableInstance = workInProgress.stateNode;
          var currentHostContext = getHostContext();
          var updatePayload = null;

          if (oldProps !== newProps) {
            updatePayload = prepareUpdate(
              recyclableInstance,
              type,
              oldProps,
              newProps,
              rootContainerInstance,
              currentHostContext
            );
          }

          if (childrenUnchanged && updatePayload === null) {
            // No changes, just reuse the existing instance.
            // Note that this might release a previous clone.
            workInProgress.stateNode = currentInstance;
            return;
          }

          var newInstance = cloneInstance(
            currentInstance,
            updatePayload,
            type,
            oldProps,
            newProps,
            workInProgress,
            childrenUnchanged,
            recyclableInstance
          );

          if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
            markUpdate(workInProgress);
          }

          workInProgress.stateNode = newInstance;

          if (childrenUnchanged) {
            // If there are no other effects in this tree, we need to flag this node as having one.
            // Even though we're not going to use it for anything.
            // Otherwise parents won't know that there are new children to propagate upwards.
            markUpdate(workInProgress);
          } else {
            // If children might have changed, we have to add them all to the set.
            appendAllChildren(newInstance, workInProgress, false, false);
          }
        };

        updateHostText$1 = function (current, workInProgress, oldText, newText) {
          if (oldText !== newText) {
            // If the text content differs, we'll create a new text instance for it.
            var rootContainerInstance = getRootHostContainer();
            var currentHostContext = getHostContext();
            workInProgress.stateNode = createTextInstance(
              newText,
              rootContainerInstance,
              currentHostContext,
              workInProgress
            ); // We'll have to mark it as having an effect, even though we won't use the effect for anything.
            // This lets the parents know that at least one of their children has changed.

            markUpdate(workInProgress);
          } else {
            workInProgress.stateNode = current.stateNode;
          }
        };
      } else {
        // No host operations
        updateHostContainer = function (workInProgress) {
          // Noop
        };

        updateHostComponent$1 = function (current, workInProgress, type, newProps, rootContainerInstance) {
          // Noop
        };

        updateHostText$1 = function (current, workInProgress, oldText, newText) {
          // Noop
        };
      }

      function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
        switch (renderState.tailMode) {
          case 'hidden': {
            // Any insertions at the end of the tail list after this point
            // should be invisible. If there are already mounted boundaries
            // anything before them are not considered for collapsing.
            // Therefore we need to go through the whole tail to find if
            // there are any.
            var tailNode = renderState.tail;
            var lastTailNode = null;

            while (tailNode !== null) {
              if (tailNode.alternate !== null) {
                lastTailNode = tailNode;
              }

              tailNode = tailNode.sibling;
            } // Next we're simply going to delete all insertions after the
            // last rendered item.

            if (lastTailNode === null) {
              // All remaining items in the tail are insertions.
              renderState.tail = null;
            } else {
              // Detach the insertion after the last node that was already
              // inserted.
              lastTailNode.sibling = null;
            }

            break;
          }

          case 'collapsed': {
            // Any insertions at the end of the tail list after this point
            // should be invisible. If there are already mounted boundaries
            // anything before them are not considered for collapsing.
            // Therefore we need to go through the whole tail to find if
            // there are any.
            var _tailNode = renderState.tail;
            var _lastTailNode = null;

            while (_tailNode !== null) {
              if (_tailNode.alternate !== null) {
                _lastTailNode = _tailNode;
              }

              _tailNode = _tailNode.sibling;
            } // Next we're simply going to delete all insertions after the
            // last rendered item.

            if (_lastTailNode === null) {
              // All remaining items in the tail are insertions.
              if (!hasRenderedATailFallback && renderState.tail !== null) {
                // We suspended during the head. We want to show at least one
                // row at the tail. So we'll keep on and cut off the rest.
                renderState.tail.sibling = null;
              } else {
                renderState.tail = null;
              }
            } else {
              // Detach the insertion after the last node that was already
              // inserted.
              _lastTailNode.sibling = null;
            }

            break;
          }
        }
      }

      function completeWork(current, workInProgress, renderExpirationTime) {
        var newProps = workInProgress.pendingProps;

        switch (workInProgress.tag) {
          case IndeterminateComponent:
          case LazyComponent:
          case SimpleMemoComponent:
          case FunctionComponent:
          case ForwardRef:
          case Fragment:
          case Mode:
          case Profiler:
          case ContextConsumer:
          case MemoComponent:
            return null;

          case ClassComponent: {
            var Component = workInProgress.type;

            if (isContextProvider(Component)) {
              popContext(workInProgress);
            }

            return null;
          }

          case HostRoot: {
            popHostContainer(workInProgress);
            popTopLevelContextObject(workInProgress);
            var fiberRoot = workInProgress.stateNode;

            if (fiberRoot.pendingContext) {
              fiberRoot.context = fiberRoot.pendingContext;
              fiberRoot.pendingContext = null;
            }

            if (current === null || current.child === null) {
              // If we hydrated, pop so that we can delete any remaining children
              // that weren't hydrated.
              var wasHydrated = popHydrationState(workInProgress);

              if (wasHydrated) {
                // If we hydrated, then we'll need to schedule an update for
                // the commit side-effects on the root.
                markUpdate(workInProgress);
              }
            }

            updateHostContainer(workInProgress);
            return null;
          }

          case HostComponent: {
            popHostContext(workInProgress);
            var rootContainerInstance = getRootHostContainer();
            var type = workInProgress.type;

            if (current !== null && workInProgress.stateNode != null) {
              updateHostComponent$1(current, workInProgress, type, newProps, rootContainerInstance);

              if (current.ref !== workInProgress.ref) {
                markRef$1(workInProgress);
              }
            } else {
              if (!newProps) {
                if (!(workInProgress.stateNode !== null)) {
                  {
                    throw Error(
                      'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
                    );
                  }
                } // This can happen when we abort work.

                return null;
              }

              var currentHostContext = getHostContext(); // TODO: Move createInstance to beginWork and keep it on a context
              // "stack" as the parent. Then append children as we go in beginWork
              // or completeWork depending on whether we want to add them top->down or
              // bottom->up. Top->down is faster in IE11.

              var _wasHydrated = popHydrationState(workInProgress);

              if (_wasHydrated) {
                // TODO: Move this and createInstance step into the beginPhase
                // to consolidate.
                if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, currentHostContext)) {
                  // If changes to the hydrated node need to be applied at the
                  // commit-phase we mark this as such.
                  markUpdate(workInProgress);
                }
              } else {
                var instance = createInstance(
                  type,
                  newProps,
                  rootContainerInstance,
                  currentHostContext,
                  workInProgress
                );
                appendAllChildren(instance, workInProgress, false, false); // This needs to be set before we mount Flare event listeners

                workInProgress.stateNode = instance;
                // (eg DOM renderer supports auto-focus for certain elements).
                // Make sure such renderers get scheduled for later work.

                if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance, currentHostContext)) {
                  markUpdate(workInProgress);
                }
              }

              if (workInProgress.ref !== null) {
                // If there is a ref on a host node we need to schedule a callback
                markRef$1(workInProgress);
              }
            }

            return null;
          }

          case HostText: {
            var newText = newProps;

            if (current && workInProgress.stateNode != null) {
              var oldText = current.memoizedProps; // If we have an alternate, that means this is an update and we need
              // to schedule a side-effect to do the updates.

              updateHostText$1(current, workInProgress, oldText, newText);
            } else {
              if (typeof newText !== 'string') {
                if (!(workInProgress.stateNode !== null)) {
                  {
                    throw Error(
                      'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
                    );
                  }
                } // This can happen when we abort work.
              }

              var _rootContainerInstance = getRootHostContainer();

              var _currentHostContext = getHostContext();

              var _wasHydrated2 = popHydrationState(workInProgress);

              if (_wasHydrated2) {
                if (prepareToHydrateHostTextInstance(workInProgress)) {
                  markUpdate(workInProgress);
                }
              } else {
                workInProgress.stateNode = createTextInstance(
                  newText,
                  _rootContainerInstance,
                  _currentHostContext,
                  workInProgress
                );
              }
            }

            return null;
          }

          case SuspenseComponent: {
            popSuspenseContext(workInProgress);
            var nextState = workInProgress.memoizedState;

            if ((workInProgress.effectTag & DidCapture) !== NoEffect) {
              // Something suspended. Re-render with the fallback children.
              workInProgress.expirationTime = renderExpirationTime; // Do not reset the effect list.

              return workInProgress;
            }

            var nextDidTimeout = nextState !== null;
            var prevDidTimeout = false;

            if (current === null) {
              if (workInProgress.memoizedProps.fallback !== undefined) {
                popHydrationState(workInProgress);
              }
            } else {
              var prevState = current.memoizedState;
              prevDidTimeout = prevState !== null;

              if (!nextDidTimeout && prevState !== null) {
                // We just switched from the fallback to the normal children.
                // Delete the fallback.
                // TODO: Would it be better to store the fallback fragment on
                // the stateNode during the begin phase?
                var currentFallbackChild = current.child.sibling;

                if (currentFallbackChild !== null) {
                  // Deletions go at the beginning of the return fiber's effect list
                  var first = workInProgress.firstEffect;

                  if (first !== null) {
                    workInProgress.firstEffect = currentFallbackChild;
                    currentFallbackChild.nextEffect = first;
                  } else {
                    workInProgress.firstEffect = workInProgress.lastEffect = currentFallbackChild;
                    currentFallbackChild.nextEffect = null;
                  }

                  currentFallbackChild.effectTag = Deletion;
                }
              }
            }

            if (nextDidTimeout && !prevDidTimeout) {
              // If this subtreee is running in blocking mode we can suspend,
              // otherwise we won't suspend.
              // TODO: This will still suspend a synchronous tree if anything
              // in the concurrent tree already suspended during this render.
              // This is a known bug.
              if ((workInProgress.mode & BlockingMode) !== NoMode) {
                // TODO: Move this back to throwException because this is too late
                // if this is a large tree which is common for initial loads. We
                // don't know if we should restart a render or not until we get
                // this marker, and this is too late.
                // If this render already had a ping or lower pri updates,
                // and this is the first time we know we're going to suspend we
                // should be able to immediately restart from within throwException.
                var hasInvisibleChildContext =
                  current === null && workInProgress.memoizedProps.unstable_avoidThisFallback !== true;

                if (
                  hasInvisibleChildContext ||
                  hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)
                ) {
                  // If this was in an invisible tree or a new render, then showing
                  // this boundary is ok.
                  renderDidSuspend();
                } else {
                  // Otherwise, we're going to have to hide content so we should
                  // suspend for longer if possible.
                  renderDidSuspendDelayIfPossible();
                }
              }
            }

            if (supportsPersistence) {
              // TODO: Only schedule updates if not prevDidTimeout.
              if (nextDidTimeout) {
                // If this boundary just timed out, schedule an effect to attach a
                // retry listener to the promise. This flag is also used to hide the
                // primary children.
                workInProgress.effectTag |= Update;
              }
            }

            if (supportsMutation) {
              // TODO: Only schedule updates if these values are non equal, i.e. it changed.
              if (nextDidTimeout || prevDidTimeout) {
                // If this boundary just timed out, schedule an effect to attach a
                // retry listener to the promise. This flag is also used to hide the
                // primary children. In mutation mode, we also need the flag to
                // *unhide* children that were previously hidden, so check if this
                // is currently timed out, too.
                workInProgress.effectTag |= Update;
              }
            }

            return null;
          }

          case HostPortal:
            popHostContainer(workInProgress);
            updateHostContainer(workInProgress);
            return null;

          case ContextProvider:
            // Pop provider fiber
            popProvider(workInProgress);
            return null;

          case IncompleteClassComponent: {
            // Same as class component case. I put it down here so that the tags are
            // sequential to ensure this switch is compiled to a jump table.
            var _Component = workInProgress.type;

            if (isContextProvider(_Component)) {
              popContext(workInProgress);
            }

            return null;
          }

          case SuspenseListComponent: {
            popSuspenseContext(workInProgress);
            var renderState = workInProgress.memoizedState;

            if (renderState === null) {
              // We're running in the default, "independent" mode.
              // We don't do anything in this mode.
              return null;
            }

            var didSuspendAlready = (workInProgress.effectTag & DidCapture) !== NoEffect;
            var renderedTail = renderState.rendering;

            if (renderedTail === null) {
              // We just rendered the head.
              if (!didSuspendAlready) {
                // This is the first pass. We need to figure out if anything is still
                // suspended in the rendered set.
                // If new content unsuspended, but there's still some content that
                // didn't. Then we need to do a second pass that forces everything
                // to keep showing their fallbacks.
                // We might be suspended if something in this render pass suspended, or
                // something in the previous committed pass suspended. Otherwise,
                // there's no chance so we can skip the expensive call to
                // findFirstSuspended.
                var cannotBeSuspended =
                  renderHasNotSuspendedYet() && (current === null || (current.effectTag & DidCapture) === NoEffect);

                if (!cannotBeSuspended) {
                  var row = workInProgress.child;

                  while (row !== null) {
                    var suspended = findFirstSuspended(row);

                    if (suspended !== null) {
                      didSuspendAlready = true;
                      workInProgress.effectTag |= DidCapture;
                      cutOffTailIfNeeded(renderState, false); // If this is a newly suspended tree, it might not get committed as
                      // part of the second pass. In that case nothing will subscribe to
                      // its thennables. Instead, we'll transfer its thennables to the
                      // SuspenseList so that it can retry if they resolve.
                      // There might be multiple of these in the list but since we're
                      // going to wait for all of them anyway, it doesn't really matter
                      // which ones gets to ping. In theory we could get clever and keep
                      // track of how many dependencies remain but it gets tricky because
                      // in the meantime, we can add/remove/change items and dependencies.
                      // We might bail out of the loop before finding any but that
                      // doesn't matter since that means that the other boundaries that
                      // we did find already has their listeners attached.

                      var newThennables = suspended.updateQueue;

                      if (newThennables !== null) {
                        workInProgress.updateQueue = newThennables;
                        workInProgress.effectTag |= Update;
                      } // Rerender the whole list, but this time, we'll force fallbacks
                      // to stay in place.
                      // Reset the effect list before doing the second pass since that's now invalid.

                      if (renderState.lastEffect === null) {
                        workInProgress.firstEffect = null;
                      }

                      workInProgress.lastEffect = renderState.lastEffect; // Reset the child fibers to their original state.

                      resetChildFibers(workInProgress, renderExpirationTime); // Set up the Suspense Context to force suspense and immediately
                      // rerender the children.

                      pushSuspenseContext(
                        workInProgress,
                        setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback)
                      );
                      return workInProgress.child;
                    }

                    row = row.sibling;
                  }
                }
              } else {
                cutOffTailIfNeeded(renderState, false);
              } // Next we're going to render the tail.
            } else {
              // Append the rendered row to the child list.
              if (!didSuspendAlready) {
                var _suspended = findFirstSuspended(renderedTail);

                if (_suspended !== null) {
                  workInProgress.effectTag |= DidCapture;
                  didSuspendAlready = true; // Ensure we transfer the update queue to the parent so that it doesn't
                  // get lost if this row ends up dropped during a second pass.

                  var _newThennables = _suspended.updateQueue;

                  if (_newThennables !== null) {
                    workInProgress.updateQueue = _newThennables;
                    workInProgress.effectTag |= Update;
                  }

                  cutOffTailIfNeeded(renderState, true); // This might have been modified.

                  if (renderState.tail === null && renderState.tailMode === 'hidden' && !renderedTail.alternate) {
                    // We need to delete the row we just rendered.
                    // Reset the effect list to what it was before we rendered this
                    // child. The nested children have already appended themselves.
                    var lastEffect = (workInProgress.lastEffect = renderState.lastEffect); // Remove any effects that were appended after this point.

                    if (lastEffect !== null) {
                      lastEffect.nextEffect = null;
                    } // We're done.

                    return null;
                  }
                } else if (
                  // The time it took to render last row is greater than time until
                  // the expiration.
                  now$1() * 2 - renderState.renderingStartTime > renderState.tailExpiration &&
                  renderExpirationTime > Never
                ) {
                  // We have now passed our CPU deadline and we'll just give up further
                  // attempts to render the main content and only render fallbacks.
                  // The assumption is that this is usually faster.
                  workInProgress.effectTag |= DidCapture;
                  didSuspendAlready = true;
                  cutOffTailIfNeeded(renderState, false); // Since nothing actually suspended, there will nothing to ping this
                  // to get it started back up to attempt the next item. If we can show
                  // them, then they really have the same priority as this render.
                  // So we'll pick it back up the very next render pass once we've had
                  // an opportunity to yield for paint.

                  var nextPriority = renderExpirationTime - 1;
                  workInProgress.expirationTime = workInProgress.childExpirationTime = nextPriority;

                  {
                    markSpawnedWork(nextPriority);
                  }
                }
              }

              if (renderState.isBackwards) {
                // The effect list of the backwards tail will have been added
                // to the end. This breaks the guarantee that life-cycles fire in
                // sibling order but that isn't a strong guarantee promised by React.
                // Especially since these might also just pop in during future commits.
                // Append to the beginning of the list.
                renderedTail.sibling = workInProgress.child;
                workInProgress.child = renderedTail;
              } else {
                var previousSibling = renderState.last;

                if (previousSibling !== null) {
                  previousSibling.sibling = renderedTail;
                } else {
                  workInProgress.child = renderedTail;
                }

                renderState.last = renderedTail;
              }
            }

            if (renderState.tail !== null) {
              // We still have tail rows to render.
              if (renderState.tailExpiration === 0) {
                // Heuristic for how long we're willing to spend rendering rows
                // until we just give up and show what we have so far.
                var TAIL_EXPIRATION_TIMEOUT_MS = 500;
                renderState.tailExpiration = now$1() + TAIL_EXPIRATION_TIMEOUT_MS; // TODO: This is meant to mimic the train model or JND but this
                // is a per component value. It should really be since the start
                // of the total render or last commit. Consider using something like
                // globalMostRecentFallbackTime. That doesn't account for being
                // suspended for part of the time or when it's a new render.
                // It should probably use a global start time value instead.
              } // Pop a row.

              var next = renderState.tail;
              renderState.rendering = next;
              renderState.tail = next.sibling;
              renderState.lastEffect = workInProgress.lastEffect;
              renderState.renderingStartTime = now$1();
              next.sibling = null; // Restore the context.
              // TODO: We can probably just avoid popping it instead and only
              // setting it the first time we go from not suspended to suspended.

              var suspenseContext = suspenseStackCursor.current;

              if (didSuspendAlready) {
                suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
              } else {
                suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
              }

              pushSuspenseContext(workInProgress, suspenseContext); // Do a pass over the next row.

              return next;
            }

            return null;
          }
        }

        {
          {
            throw Error(
              'Unknown unit of work tag (' +
                workInProgress.tag +
                '). This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }
      }

      function unwindWork(workInProgress, renderExpirationTime) {
        switch (workInProgress.tag) {
          case ClassComponent: {
            var Component = workInProgress.type;

            if (isContextProvider(Component)) {
              popContext(workInProgress);
            }

            var effectTag = workInProgress.effectTag;

            if (effectTag & ShouldCapture) {
              workInProgress.effectTag = (effectTag & ~ShouldCapture) | DidCapture;
              return workInProgress;
            }

            return null;
          }

          case HostRoot: {
            popHostContainer(workInProgress);
            popTopLevelContextObject(workInProgress);
            var _effectTag = workInProgress.effectTag;

            if (!((_effectTag & DidCapture) === NoEffect)) {
              {
                throw Error(
                  'The root failed to unmount after an error. This is likely a bug in React. Please file an issue.'
                );
              }
            }

            workInProgress.effectTag = (_effectTag & ~ShouldCapture) | DidCapture;
            return workInProgress;
          }

          case HostComponent: {
            // TODO: popHydrationState
            popHostContext(workInProgress);
            return null;
          }

          case SuspenseComponent: {
            popSuspenseContext(workInProgress);

            var _effectTag2 = workInProgress.effectTag;

            if (_effectTag2 & ShouldCapture) {
              workInProgress.effectTag = (_effectTag2 & ~ShouldCapture) | DidCapture; // Captured a suspense effect. Re-render the boundary.

              return workInProgress;
            }

            return null;
          }

          case SuspenseListComponent: {
            popSuspenseContext(workInProgress); // SuspenseList doesn't actually catch anything. It should've been
            // caught by a nested boundary. If not, it should bubble through.

            return null;
          }

          case HostPortal:
            popHostContainer(workInProgress);
            return null;

          case ContextProvider:
            popProvider(workInProgress);
            return null;

          default:
            return null;
        }
      }

      function unwindInterruptedWork(interruptedWork) {
        switch (interruptedWork.tag) {
          case ClassComponent: {
            var childContextTypes = interruptedWork.type.childContextTypes;

            if (childContextTypes !== null && childContextTypes !== undefined) {
              popContext(interruptedWork);
            }

            break;
          }

          case HostRoot: {
            popHostContainer(interruptedWork);
            popTopLevelContextObject(interruptedWork);
            break;
          }

          case HostComponent: {
            popHostContext(interruptedWork);
            break;
          }

          case HostPortal:
            popHostContainer(interruptedWork);
            break;

          case SuspenseComponent:
            popSuspenseContext(interruptedWork);
            break;

          case SuspenseListComponent:
            popSuspenseContext(interruptedWork);
            break;

          case ContextProvider:
            popProvider(interruptedWork);
            break;
        }
      }

      function createCapturedValue(value, source) {
        // If the value is an error, call this function immediately after it is thrown
        // so the stack is accurate.
        return {
          value: value,
          source: source,
          stack: getStackByFiberInDevAndProd(source),
        };
      }

      var invokeGuardedCallbackImpl = function (name, func, context, a, b, c, d, e, f) {
        var funcArgs = Array.prototype.slice.call(arguments, 3);

        try {
          func.apply(context, funcArgs);
        } catch (error) {
          this.onError(error);
        }
      };

      {
        // In DEV mode, we swap out invokeGuardedCallback for a special version
        // that plays more nicely with the browser's DevTools. The idea is to preserve
        // "Pause on exceptions" behavior. Because React wraps all user-provided
        // functions in invokeGuardedCallback, and the production version of
        // invokeGuardedCallback uses a try-catch, all user exceptions are treated
        // like caught exceptions, and the DevTools won't pause unless the developer
        // takes the extra step of enabling pause on caught exceptions. This is
        // unintuitive, though, because even though React has caught the error, from
        // the developer's perspective, the error is uncaught.
        //
        // To preserve the expected "Pause on exceptions" behavior, we don't use a
        // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
        // DOM node, and call the user-provided callback from inside an event handler
        // for that fake event. If the callback throws, the error is "captured" using
        // a global event handler. But because the error happens in a different
        // event loop context, it does not interrupt the normal program flow.
        // Effectively, this gives us try-catch behavior without actually using
        // try-catch. Neat!
        // Check that the browser supports the APIs we need to implement our special
        // DEV version of invokeGuardedCallback
        if (
          typeof window !== 'undefined' &&
          typeof window.dispatchEvent === 'function' &&
          typeof document !== 'undefined' &&
          typeof document.createEvent === 'function'
        ) {
          var fakeNode = document.createElement('react');

          var invokeGuardedCallbackDev = function (name, func, context, a, b, c, d, e, f) {
            // If document doesn't exist we know for sure we will crash in this method
            // when we call document.createEvent(). However this can cause confusing
            // errors: https://github.com/facebookincubator/create-react-app/issues/3482
            // So we preemptively throw with a better message instead.
            if (!(typeof document !== 'undefined')) {
              {
                throw Error(
                  'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
                );
              }
            }

            var evt = document.createEvent('Event'); // Keeps track of whether the user-provided callback threw an error. We
            // set this to true at the beginning, then set it to false right after
            // calling the function. If the function errors, `didError` will never be
            // set to false. This strategy works even if the browser is flaky and
            // fails to call our global error handler, because it doesn't rely on
            // the error event at all.

            var didError = true; // Keeps track of the value of window.event so that we can reset it
            // during the callback to let user code access window.event in the
            // browsers that support it.

            var windowEvent = window.event; // Keeps track of the descriptor of window.event to restore it after event
            // dispatching: https://github.com/facebook/react/issues/13688

            var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, 'event'); // Create an event handler for our fake event. We will synchronously
            // dispatch our fake event using `dispatchEvent`. Inside the handler, we
            // call the user-provided callback.

            var funcArgs = Array.prototype.slice.call(arguments, 3);

            function callCallback() {
              // We immediately remove the callback from event listeners so that
              // nested `invokeGuardedCallback` calls do not clash. Otherwise, a
              // nested call would trigger the fake event handlers of any call higher
              // in the stack.
              fakeNode.removeEventListener(evtType, callCallback, false); // We check for window.hasOwnProperty('event') to prevent the
              // window.event assignment in both IE <= 10 as they throw an error
              // "Member not found" in strict mode, and in Firefox which does not
              // support window.event.

              if (typeof window.event !== 'undefined' && window.hasOwnProperty('event')) {
                window.event = windowEvent;
              }

              func.apply(context, funcArgs);
              didError = false;
            } // Create a global error event handler. We use this to capture the value
            // that was thrown. It's possible that this error handler will fire more
            // than once; for example, if non-React code also calls `dispatchEvent`
            // and a handler for that event throws. We should be resilient to most of
            // those cases. Even if our error event handler fires more than once, the
            // last error event is always used. If the callback actually does error,
            // we know that the last error event is the correct one, because it's not
            // possible for anything else to have happened in between our callback
            // erroring and the code that follows the `dispatchEvent` call below. If
            // the callback doesn't error, but the error event was fired, we know to
            // ignore it because `didError` will be false, as described above.

            var error; // Use this to track whether the error event is ever called.

            var didSetError = false;
            var isCrossOriginError = false;

            function handleWindowError(event) {
              error = event.error;
              didSetError = true;

              if (error === null && event.colno === 0 && event.lineno === 0) {
                isCrossOriginError = true;
              }

              if (event.defaultPrevented) {
                // Some other error handler has prevented default.
                // Browsers silence the error report if this happens.
                // We'll remember this to later decide whether to log it or not.
                if (error != null && typeof error === 'object') {
                  try {
                    error._suppressLogging = true;
                  } catch (inner) {
                    // Ignore.
                  }
                }
              }
            } // Create a fake event type.

            var evtType = 'react-' + (name ? name : 'invokeguardedcallback'); // Attach our event handlers

            window.addEventListener('error', handleWindowError);
            fakeNode.addEventListener(evtType, callCallback, false); // Synchronously dispatch our fake event. If the user-provided function
            // errors, it will trigger our global error handler.

            evt.initEvent(evtType, false, false);
            fakeNode.dispatchEvent(evt);

            if (windowEventDescriptor) {
              Object.defineProperty(window, 'event', windowEventDescriptor);
            }

            if (didError) {
              if (!didSetError) {
                // The callback errored, but the error event never fired.
                error = new Error(
                  'An error was thrown inside one of your components, but React ' +
                    "doesn't know what it was. This is likely due to browser " +
                    'flakiness. React does its best to preserve the "Pause on ' +
                    'exceptions" behavior of the DevTools, which requires some ' +
                    "DEV-mode only tricks. It's possible that these don't work in " +
                    'your browser. Try triggering the error in production mode, ' +
                    'or switching to a modern browser. If you suspect that this is ' +
                    'actually an issue with React, please file an issue.'
                );
              } else if (isCrossOriginError) {
                error = new Error(
                  "A cross-origin error was thrown. React doesn't have access to " +
                    'the actual error object in development. ' +
                    'See https://fb.me/react-crossorigin-error for more information.'
                );
              }

              this.onError(error);
            } // Remove our event listeners

            window.removeEventListener('error', handleWindowError);
          };

          invokeGuardedCallbackImpl = invokeGuardedCallbackDev;
        }
      }

      var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;

      var hasError = false;
      var caughtError = null; // Used by event system to capture/rethrow the first error.
      var reporter = {
        onError: function (error) {
          hasError = true;
          caughtError = error;
        },
      };
      /**
       * Call a function while guarding against errors that happens within it.
       * Returns an error if it throws, otherwise null.
       *
       * In production, this is implemented using a try-catch. The reason we don't
       * use a try-catch directly is so that we can swap out a different
       * implementation in DEV mode.
       *
       * @param {String} name of the guard to use for logging or debugging
       * @param {Function} func The function to invoke
       * @param {*} context The context to use when calling the function
       * @param {...*} args Arguments for function
       */

      function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
        hasError = false;
        caughtError = null;
        invokeGuardedCallbackImpl$1.apply(reporter, arguments);
      }
      function hasCaughtError() {
        return hasError;
      }
      function clearCaughtError() {
        if (hasError) {
          var error = caughtError;
          hasError = false;
          caughtError = null;
          return error;
        } else {
          {
            {
              throw Error(
                'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }
        }
      }

      function logCapturedError(capturedError) {
        var error = capturedError.error;

        {
          var componentName = capturedError.componentName,
            componentStack = capturedError.componentStack,
            errorBoundaryName = capturedError.errorBoundaryName,
            errorBoundaryFound = capturedError.errorBoundaryFound,
            willRetry = capturedError.willRetry; // Browsers support silencing uncaught errors by calling
          // `preventDefault()` in window `error` handler.
          // We record this information as an expando on the error.

          if (error != null && error._suppressLogging) {
            if (errorBoundaryFound && willRetry) {
              // The error is recoverable and was silenced.
              // Ignore it and don't print the stack addendum.
              // This is handy for testing error boundaries without noise.
              return;
            } // The error is fatal. Since the silencing might have
            // been accidental, we'll surface it anyway.
            // However, the browser would have silenced the original error
            // so we'll print it first, and then print the stack addendum.

            console['error'](error); // Don't transform to our wrapper
            // For a more detailed description of this block, see:
            // https://github.com/facebook/react/pull/13384
          }

          var componentNameMessage = componentName
            ? 'The above error occurred in the <' + componentName + '> component:'
            : 'The above error occurred in one of your React components:';
          var errorBoundaryMessage; // errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.

          if (errorBoundaryFound && errorBoundaryName) {
            if (willRetry) {
              errorBoundaryMessage =
                'React will try to recreate this component tree from scratch ' +
                ('using the error boundary you provided, ' + errorBoundaryName + '.');
            } else {
              errorBoundaryMessage =
                'This error was initially handled by the error boundary ' +
                errorBoundaryName +
                '.\n' +
                'Recreating the tree from scratch failed so React will unmount the tree.';
            }
          } else {
            errorBoundaryMessage =
              'Consider adding an error boundary to your tree to customize error handling behavior.\n' +
              'Visit https://fb.me/react-error-boundaries to learn more about error boundaries.';
          }

          var combinedMessage = '' + componentNameMessage + componentStack + '\n\n' + ('' + errorBoundaryMessage); // In development, we provide our own message with just the component stack.
          // We don't include the original error message and JS stack because the browser
          // has already printed it. Even if the application swallows the error, it is still
          // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.

          console['error'](combinedMessage); // Don't transform to our wrapper
        }
      }

      var didWarnAboutUndefinedSnapshotBeforeUpdate = null;

      {
        didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
      }

      var PossiblyWeakSet = typeof WeakSet === 'function' ? WeakSet : Set;
      function logError(boundary, errorInfo) {
        var source = errorInfo.source;
        var stack = errorInfo.stack;

        if (stack === null && source !== null) {
          stack = getStackByFiberInDevAndProd(source);
        }

        var capturedError = {
          componentName: source !== null ? getComponentName(source.type) : null,
          componentStack: stack !== null ? stack : '',
          error: errorInfo.value,
          errorBoundary: null,
          errorBoundaryName: null,
          errorBoundaryFound: false,
          willRetry: false,
        };

        if (boundary !== null && boundary.tag === ClassComponent) {
          capturedError.errorBoundary = boundary.stateNode;
          capturedError.errorBoundaryName = getComponentName(boundary.type);
          capturedError.errorBoundaryFound = true;
          capturedError.willRetry = true;
        }

        try {
          logCapturedError(capturedError);
        } catch (e) {
          // This method must not throw, or React internal state will get messed up.
          // If console.error is overridden, or logCapturedError() shows a dialog that throws,
          // we want to report this error outside of the normal stack as a last resort.
          // https://github.com/facebook/react/issues/13188
          setTimeout(function () {
            throw e;
          });
        }
      }

      var callComponentWillUnmountWithTimer = function (current, instance) {
        startPhaseTimer(current, 'componentWillUnmount');
        instance.props = current.memoizedProps;
        instance.state = current.memoizedState;
        instance.componentWillUnmount();
        stopPhaseTimer();
      }; // Capture errors so they don't interrupt unmounting.

      function safelyCallComponentWillUnmount(current, instance) {
        {
          invokeGuardedCallback(null, callComponentWillUnmountWithTimer, null, current, instance);

          if (hasCaughtError()) {
            var unmountError = clearCaughtError();
            captureCommitPhaseError(current, unmountError);
          }
        }
      }

      function safelyDetachRef(current) {
        var ref = current.ref;

        if (ref !== null) {
          if (typeof ref === 'function') {
            {
              invokeGuardedCallback(null, ref, null, null);

              if (hasCaughtError()) {
                var refError = clearCaughtError();
                captureCommitPhaseError(current, refError);
              }
            }
          } else {
            ref.current = null;
          }
        }
      }

      function safelyCallDestroy(current, destroy) {
        {
          invokeGuardedCallback(null, destroy, null);

          if (hasCaughtError()) {
            var error = clearCaughtError();
            captureCommitPhaseError(current, error);
          }
        }
      }

      function commitBeforeMutationLifeCycles(current, finishedWork) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent:
          case Block: {
            return;
          }

          case ClassComponent: {
            if (finishedWork.effectTag & Snapshot) {
              if (current !== null) {
                var prevProps = current.memoizedProps;
                var prevState = current.memoizedState;
                startPhaseTimer(finishedWork, 'getSnapshotBeforeUpdate');
                var instance = finishedWork.stateNode; // We could update instance props and state here,
                // but instead we rely on them being set during last render.
                // TODO: revisit this when we implement resuming.

                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    if (instance.props !== finishedWork.memoizedProps) {
                      error(
                        'Expected %s props to match memoized props before ' +
                          'getSnapshotBeforeUpdate. ' +
                          'This might either be because of a bug in React, or because ' +
                          'a component reassigns its own `this.props`. ' +
                          'Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      );
                    }

                    if (instance.state !== finishedWork.memoizedState) {
                      error(
                        'Expected %s state to match memoized state before ' +
                          'getSnapshotBeforeUpdate. ' +
                          'This might either be because of a bug in React, or because ' +
                          'a component reassigns its own `this.props`. ' +
                          'Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      );
                    }
                  }
                }

                var snapshot = instance.getSnapshotBeforeUpdate(
                  finishedWork.elementType === finishedWork.type
                    ? prevProps
                    : resolveDefaultProps(finishedWork.type, prevProps),
                  prevState
                );

                {
                  var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;

                  if (snapshot === undefined && !didWarnSet.has(finishedWork.type)) {
                    didWarnSet.add(finishedWork.type);

                    error(
                      '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) ' +
                        'must be returned. You have returned undefined.',
                      getComponentName(finishedWork.type)
                    );
                  }
                }

                instance.__reactInternalSnapshotBeforeUpdate = snapshot;
                stopPhaseTimer();
              }
            }

            return;
          }

          case HostRoot:
          case HostComponent:
          case HostText:
          case HostPortal:
          case IncompleteClassComponent:
            // Nothing to do for these component types
            return;
        }

        {
          {
            throw Error(
              'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }
      }

      function commitHookEffectListUnmount(tag, finishedWork) {
        var updateQueue = finishedWork.updateQueue;
        var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;

        if (lastEffect !== null) {
          var firstEffect = lastEffect.next;
          var effect = firstEffect;

          do {
            if ((effect.tag & tag) === tag) {
              // Unmount
              var destroy = effect.destroy;
              effect.destroy = undefined;

              if (destroy !== undefined) {
                destroy();
              }
            }

            effect = effect.next;
          } while (effect !== firstEffect);
        }
      }

      function commitHookEffectListMount(tag, finishedWork) {
        var updateQueue = finishedWork.updateQueue;
        var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;

        if (lastEffect !== null) {
          var firstEffect = lastEffect.next;
          var effect = firstEffect;

          do {
            if ((effect.tag & tag) === tag) {
              // Mount
              var create = effect.create;
              effect.destroy = create();

              {
                var destroy = effect.destroy;

                if (destroy !== undefined && typeof destroy !== 'function') {
                  var addendum = void 0;

                  if (destroy === null) {
                    addendum =
                      ' You returned null. If your effect does not require clean ' +
                      'up, return undefined (or nothing).';
                  } else if (typeof destroy.then === 'function') {
                    addendum =
                      '\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. ' +
                      'Instead, write the async function inside your effect ' +
                      'and call it immediately:\n\n' +
                      'useEffect(() => {\n' +
                      '  async function fetchData() {\n' +
                      '    // You can await here\n' +
                      '    const response = await MyAPI.getData(someId);\n' +
                      '    // ...\n' +
                      '  }\n' +
                      '  fetchData();\n' +
                      "}, [someId]); // Or [] if effect doesn't need props or state\n\n" +
                      'Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching';
                  } else {
                    addendum = ' You returned: ' + destroy;
                  }

                  error(
                    'An effect function must not return anything besides a function, ' +
                      'which is used for clean-up.%s%s',
                    addendum,
                    getStackByFiberInDevAndProd(finishedWork)
                  );
                }
              }
            }

            effect = effect.next;
          } while (effect !== firstEffect);
        }
      }

      function commitPassiveHookEffects(finishedWork) {
        if ((finishedWork.effectTag & Passive) !== NoEffect) {
          switch (finishedWork.tag) {
            case FunctionComponent:
            case ForwardRef:
            case SimpleMemoComponent:
            case Block: {
              // TODO (#17945) We should call all passive destroy functions (for all fibers)
              // before calling any create functions. The current approach only serializes
              // these for a single fiber.
              commitHookEffectListUnmount(Passive$1 | HasEffect, finishedWork);
              commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
              break;
            }
          }
        }
      }

      function commitLifeCycles(finishedRoot, current, finishedWork, committedExpirationTime) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent:
          case Block: {
            // At this point layout effects have already been destroyed (during mutation phase).
            // This is done to prevent sibling component effects from interfering with each other,
            // e.g. a destroy function in one component should never override a ref set
            // by a create function in another component during the same commit.
            commitHookEffectListMount(Layout | HasEffect, finishedWork);

            return;
          }

          case ClassComponent: {
            var instance = finishedWork.stateNode;

            if (finishedWork.effectTag & Update) {
              if (current === null) {
                startPhaseTimer(finishedWork, 'componentDidMount'); // We could update instance props and state here,
                // but instead we rely on them being set during last render.
                // TODO: revisit this when we implement resuming.

                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    if (instance.props !== finishedWork.memoizedProps) {
                      error(
                        'Expected %s props to match memoized props before ' +
                          'componentDidMount. ' +
                          'This might either be because of a bug in React, or because ' +
                          'a component reassigns its own `this.props`. ' +
                          'Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      );
                    }

                    if (instance.state !== finishedWork.memoizedState) {
                      error(
                        'Expected %s state to match memoized state before ' +
                          'componentDidMount. ' +
                          'This might either be because of a bug in React, or because ' +
                          'a component reassigns its own `this.props`. ' +
                          'Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      );
                    }
                  }
                }

                instance.componentDidMount();
                stopPhaseTimer();
              } else {
                var prevProps =
                  finishedWork.elementType === finishedWork.type
                    ? current.memoizedProps
                    : resolveDefaultProps(finishedWork.type, current.memoizedProps);
                var prevState = current.memoizedState;
                startPhaseTimer(finishedWork, 'componentDidUpdate'); // We could update instance props and state here,
                // but instead we rely on them being set during last render.
                // TODO: revisit this when we implement resuming.

                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    if (instance.props !== finishedWork.memoizedProps) {
                      error(
                        'Expected %s props to match memoized props before ' +
                          'componentDidUpdate. ' +
                          'This might either be because of a bug in React, or because ' +
                          'a component reassigns its own `this.props`. ' +
                          'Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      );
                    }

                    if (instance.state !== finishedWork.memoizedState) {
                      error(
                        'Expected %s state to match memoized state before ' +
                          'componentDidUpdate. ' +
                          'This might either be because of a bug in React, or because ' +
                          'a component reassigns its own `this.props`. ' +
                          'Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      );
                    }
                  }
                }

                instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                stopPhaseTimer();
              }
            }

            var updateQueue = finishedWork.updateQueue;

            if (updateQueue !== null) {
              {
                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                  if (instance.props !== finishedWork.memoizedProps) {
                    error(
                      'Expected %s props to match memoized props before ' +
                        'processing the update queue. ' +
                        'This might either be because of a bug in React, or because ' +
                        'a component reassigns its own `this.props`. ' +
                        'Please file an issue.',
                      getComponentName(finishedWork.type) || 'instance'
                    );
                  }

                  if (instance.state !== finishedWork.memoizedState) {
                    error(
                      'Expected %s state to match memoized state before ' +
                        'processing the update queue. ' +
                        'This might either be because of a bug in React, or because ' +
                        'a component reassigns its own `this.props`. ' +
                        'Please file an issue.',
                      getComponentName(finishedWork.type) || 'instance'
                    );
                  }
                }
              } // We could update instance props and state here,
              // but instead we rely on them being set during last render.
              // TODO: revisit this when we implement resuming.

              commitUpdateQueue(finishedWork, updateQueue, instance);
            }

            return;
          }

          case HostRoot: {
            var _updateQueue = finishedWork.updateQueue;

            if (_updateQueue !== null) {
              var _instance = null;

              if (finishedWork.child !== null) {
                switch (finishedWork.child.tag) {
                  case HostComponent:
                    _instance = getPublicInstance(finishedWork.child.stateNode);
                    break;

                  case ClassComponent:
                    _instance = finishedWork.child.stateNode;
                    break;
                }
              }

              commitUpdateQueue(finishedWork, _updateQueue, _instance);
            }

            return;
          }

          case HostComponent: {
            var _instance2 = finishedWork.stateNode; // Renderers may schedule work to be done after host components are mounted
            // (eg DOM renderer may schedule auto-focus for inputs and form controls).
            // These effects should only be committed when components are first mounted,
            // aka when there is no current/alternate.

            if (current === null && finishedWork.effectTag & Update) {
              var type = finishedWork.type;
              var props = finishedWork.memoizedProps;
              commitMount(_instance2, type, props, finishedWork);
            }

            return;
          }

          case HostText: {
            // We have no life-cycles associated with text.
            return;
          }

          case HostPortal: {
            // We have no life-cycles associated with portals.
            return;
          }

          case Profiler: {
            {
              var onRender = finishedWork.memoizedProps.onRender;

              if (typeof onRender === 'function') {
                {
                  onRender(
                    finishedWork.memoizedProps.id,
                    current === null ? 'mount' : 'update',
                    finishedWork.actualDuration,
                    finishedWork.treeBaseDuration,
                    finishedWork.actualStartTime,
                    getCommitTime(),
                    finishedRoot.memoizedInteractions
                  );
                }
              }
            }

            return;
          }

          case SuspenseComponent: {
            commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            return;
          }

          case SuspenseListComponent:
          case IncompleteClassComponent:
          case FundamentalComponent:
          case ScopeComponent:
            return;
        }

        {
          {
            throw Error(
              'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }
      }

      function hideOrUnhideAllChildren(finishedWork, isHidden) {
        if (supportsMutation) {
          // We only have the top Fiber that was inserted but we need to recurse down its
          // children to find all the terminal nodes.
          var node = finishedWork;

          while (true) {
            if (node.tag === HostComponent) {
              var instance = node.stateNode;

              if (isHidden) {
                hideInstance(instance);
              } else {
                unhideInstance(node.stateNode, node.memoizedProps);
              }
            } else if (node.tag === HostText) {
              var _instance3 = node.stateNode;

              if (isHidden) {
                hideTextInstance(_instance3);
              } else {
                unhideTextInstance(_instance3, node.memoizedProps);
              }
            } else if (
              node.tag === SuspenseComponent &&
              node.memoizedState !== null &&
              node.memoizedState.dehydrated === null
            ) {
              // Found a nested Suspense component that timed out. Skip over the
              // primary child fragment, which should remain hidden.
              var fallbackChildFragment = node.child.sibling;
              fallbackChildFragment.return = node;
              node = fallbackChildFragment;
              continue;
            } else if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }

            if (node === finishedWork) {
              return;
            }

            while (node.sibling === null) {
              if (node.return === null || node.return === finishedWork) {
                return;
              }

              node = node.return;
            }

            node.sibling.return = node.return;
            node = node.sibling;
          }
        }
      }

      function commitAttachRef(finishedWork) {
        var ref = finishedWork.ref;

        if (ref !== null) {
          var instance = finishedWork.stateNode;
          var instanceToUse;

          switch (finishedWork.tag) {
            case HostComponent:
              instanceToUse = getPublicInstance(instance);
              break;

            default:
              instanceToUse = instance;
          } // Moved outside to ensure DCE works with this flag

          if (typeof ref === 'function') {
            ref(instanceToUse);
          } else {
            {
              if (!ref.hasOwnProperty('current')) {
                error(
                  'Unexpected ref object provided for %s. ' +
                    'Use either a ref-setter function or React.createRef().%s',
                  getComponentName(finishedWork.type),
                  getStackByFiberInDevAndProd(finishedWork)
                );
              }
            }

            ref.current = instanceToUse;
          }
        }
      }

      function commitDetachRef(current) {
        var currentRef = current.ref;

        if (currentRef !== null) {
          if (typeof currentRef === 'function') {
            currentRef(null);
          } else {
            currentRef.current = null;
          }
        }
      } // User-originating errors (lifecycles and refs) should not interrupt
      // deletion, so don't let them throw. Host-originating errors should
      // interrupt deletion, so it's okay

      function commitUnmount(finishedRoot, current, renderPriorityLevel) {
        onCommitUnmount(current);

        switch (current.tag) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent:
          case Block: {
            var updateQueue = current.updateQueue;

            if (updateQueue !== null) {
              var lastEffect = updateQueue.lastEffect;

              if (lastEffect !== null) {
                var firstEffect = lastEffect.next;

                {
                  // When the owner fiber is deleted, the destroy function of a passive
                  // effect hook is called during the synchronous commit phase. This is
                  // a concession to implementation complexity. Calling it in the
                  // passive effect phase (like they usually are, when dependencies
                  // change during an update) would require either traversing the
                  // children of the deleted fiber again, or including unmount effects
                  // as part of the fiber effect list.
                  //
                  // Because this is during the sync commit phase, we need to change
                  // the priority.
                  //
                  // TODO: Reconsider this implementation trade off.
                  var priorityLevel = renderPriorityLevel > NormalPriority ? NormalPriority : renderPriorityLevel;
                  runWithPriority(priorityLevel, function () {
                    var effect = firstEffect;

                    do {
                      var _destroy = effect.destroy;

                      if (_destroy !== undefined) {
                        safelyCallDestroy(current, _destroy);
                      }

                      effect = effect.next;
                    } while (effect !== firstEffect);
                  });
                }
              }
            }

            return;
          }

          case ClassComponent: {
            safelyDetachRef(current);
            var instance = current.stateNode;

            if (typeof instance.componentWillUnmount === 'function') {
              safelyCallComponentWillUnmount(current, instance);
            }

            return;
          }

          case HostComponent: {
            safelyDetachRef(current);
            return;
          }

          case HostPortal: {
            // TODO: this is recursive.
            // We are also not using this parent because
            // the portal will get pushed immediately.
            if (supportsMutation) {
              unmountHostComponents(finishedRoot, current, renderPriorityLevel);
            } else if (supportsPersistence) {
              emptyPortalContainer(current);
            }

            return;
          }

          case FundamentalComponent: {
            return;
          }

          case DehydratedFragment: {
            return;
          }

          case ScopeComponent: {
            return;
          }
        }
      }

      function commitNestedUnmounts(finishedRoot, root, renderPriorityLevel) {
        // While we're inside a removed host node we don't want to call
        // removeChild on the inner nodes because they're removed by the top
        // call anyway. We also want to call componentWillUnmount on all
        // composites before this host node is removed from the tree. Therefore
        // we do an inner loop while we're still inside the host node.
        var node = root;

        while (true) {
          commitUnmount(finishedRoot, node, renderPriorityLevel); // Visit children because they may contain more composite or host nodes.
          // Skip portals because commitUnmount() currently visits them recursively.

          if (
            node.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
            // If we don't use mutation we drill down into portals here instead.
            (!supportsMutation || node.tag !== HostPortal)
          ) {
            node.child.return = node;
            node = node.child;
            continue;
          }

          if (node === root) {
            return;
          }

          while (node.sibling === null) {
            if (node.return === null || node.return === root) {
              return;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;
        }
      }

      function detachFiber(current) {
        var alternate = current.alternate; // Cut off the return pointers to disconnect it from the tree. Ideally, we
        // should clear the child pointer of the parent alternate to let this
        // get GC:ed but we don't know which for sure which parent is the current
        // one so we'll settle for GC:ing the subtree of this child. This child
        // itself will be GC:ed when the parent updates the next time.

        current.return = null;
        current.child = null;
        current.memoizedState = null;
        current.updateQueue = null;
        current.dependencies = null;
        current.alternate = null;
        current.firstEffect = null;
        current.lastEffect = null;
        current.pendingProps = null;
        current.memoizedProps = null;
        current.stateNode = null;

        if (alternate !== null) {
          detachFiber(alternate);
        }
      }

      function emptyPortalContainer(current) {
        if (!supportsPersistence) {
          return;
        }

        var portal = current.stateNode;
        var containerInfo = portal.containerInfo;
        var emptyChildSet = createContainerChildSet(containerInfo);
        replaceContainerChildren(containerInfo, emptyChildSet);
      }

      function commitContainer(finishedWork) {
        if (!supportsPersistence) {
          return;
        }

        switch (finishedWork.tag) {
          case ClassComponent:
          case HostComponent:
          case HostText:
          case FundamentalComponent: {
            return;
          }

          case HostRoot:
          case HostPortal: {
            var portalOrRoot = finishedWork.stateNode;
            var containerInfo = portalOrRoot.containerInfo,
              pendingChildren = portalOrRoot.pendingChildren;
            replaceContainerChildren(containerInfo, pendingChildren);
            return;
          }
        }

        {
          {
            throw Error(
              'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }
      }

      function getHostParentFiber(fiber) {
        var parent = fiber.return;

        while (parent !== null) {
          if (isHostParent(parent)) {
            return parent;
          }

          parent = parent.return;
        }

        {
          {
            throw Error(
              'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }
      }

      function isHostParent(fiber) {
        return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
      }

      function getHostSibling(fiber) {
        // We're going to search forward into the tree until we find a sibling host
        // node. Unfortunately, if multiple insertions are done in a row we have to
        // search past them. This leads to exponential search for the next sibling.
        // TODO: Find a more efficient way to do this.
        var node = fiber;

        siblings: while (true) {
          // If we didn't find anything, let's try the next sibling.
          while (node.sibling === null) {
            if (node.return === null || isHostParent(node.return)) {
              // If we pop out of the root or hit the parent the fiber we are the
              // last sibling.
              return null;
            }

            node = node.return;
          }

          node.sibling.return = node.return;
          node = node.sibling;

          while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment) {
            // If it is not host node and, we might have a host node inside it.
            // Try to search down until we find one.
            if (node.effectTag & Placement) {
              // If we don't have a child, try the siblings instead.
              continue siblings;
            } // If we don't have a child, try the siblings instead.
            // We also skip portals because they are not part of this host tree.

            if (node.child === null || node.tag === HostPortal) {
              continue siblings;
            } else {
              node.child.return = node;
              node = node.child;
            }
          } // Check if this host node is stable or about to be placed.

          if (!(node.effectTag & Placement)) {
            // Found it!
            return node.stateNode;
          }
        }
      }

      function commitPlacement(finishedWork) {
        if (!supportsMutation) {
          return;
        } // Recursively insert all host nodes into the parent.

        var parentFiber = getHostParentFiber(finishedWork); // Note: these two variables *must* always be updated together.

        var parent;
        var isContainer;
        var parentStateNode = parentFiber.stateNode;

        switch (parentFiber.tag) {
          case HostComponent:
            parent = parentStateNode;
            isContainer = false;
            break;

          case HostRoot:
            parent = parentStateNode.containerInfo;
            isContainer = true;
            break;

          case HostPortal:
            parent = parentStateNode.containerInfo;
            isContainer = true;
            break;

          case FundamentalComponent:

          // eslint-disable-next-line-no-fallthrough

          default: {
            {
              throw Error(
                'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
              );
            }
          }
        }

        if (parentFiber.effectTag & ContentReset) {
          // Reset the text content of the parent before doing any insertions
          resetTextContent(parent); // Clear ContentReset from the effect tag

          parentFiber.effectTag &= ~ContentReset;
        }

        var before = getHostSibling(finishedWork); // We only have the top Fiber that was inserted but we need to recurse down its
        // children to find all the terminal nodes.

        if (isContainer) {
          insertOrAppendPlacementNodeIntoContainer(finishedWork, before, parent);
        } else {
          insertOrAppendPlacementNode(finishedWork, before, parent);
        }
      }

      function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
        var tag = node.tag;
        var isHost = tag === HostComponent || tag === HostText;

        if (isHost || enableFundamentalAPI) {
          var stateNode = isHost ? node.stateNode : node.stateNode.instance;

          if (before) {
            insertInContainerBefore(parent, stateNode, before);
          } else {
            appendChildToContainer(parent, stateNode);
          }
        } else if (tag === HostPortal);
        else {
          var child = node.child;

          if (child !== null) {
            insertOrAppendPlacementNodeIntoContainer(child, before, parent);
            var sibling = child.sibling;

            while (sibling !== null) {
              insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
              sibling = sibling.sibling;
            }
          }
        }
      }

      function insertOrAppendPlacementNode(node, before, parent) {
        var tag = node.tag;
        var isHost = tag === HostComponent || tag === HostText;

        if (isHost || enableFundamentalAPI) {
          var stateNode = isHost ? node.stateNode : node.stateNode.instance;

          if (before) {
            insertBefore(parent, stateNode, before);
          } else {
            appendChild(parent, stateNode);
          }
        } else if (tag === HostPortal);
        else {
          var child = node.child;

          if (child !== null) {
            insertOrAppendPlacementNode(child, before, parent);
            var sibling = child.sibling;

            while (sibling !== null) {
              insertOrAppendPlacementNode(sibling, before, parent);
              sibling = sibling.sibling;
            }
          }
        }
      }

      function unmountHostComponents(finishedRoot, current, renderPriorityLevel) {
        // We only have the top Fiber that was deleted but we need to recurse down its
        // children to find all the terminal nodes.
        var node = current; // Each iteration, currentParent is populated with node's host parent if not
        // currentParentIsValid.

        var currentParentIsValid = false; // Note: these two variables *must* always be updated together.

        var currentParent;
        var currentParentIsContainer;

        while (true) {
          if (!currentParentIsValid) {
            var parent = node.return;

            findParent: while (true) {
              if (!(parent !== null)) {
                {
                  throw Error(
                    'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
                  );
                }
              }

              var parentStateNode = parent.stateNode;

              switch (parent.tag) {
                case HostComponent:
                  currentParent = parentStateNode;
                  currentParentIsContainer = false;
                  break findParent;

                case HostRoot:
                  currentParent = parentStateNode.containerInfo;
                  currentParentIsContainer = true;
                  break findParent;

                case HostPortal:
                  currentParent = parentStateNode.containerInfo;
                  currentParentIsContainer = true;
                  break findParent;
              }

              parent = parent.return;
            }

            currentParentIsValid = true;
          }

          if (node.tag === HostComponent || node.tag === HostText) {
            commitNestedUnmounts(finishedRoot, node, renderPriorityLevel); // After all the children have unmounted, it is now safe to remove the
            // node from the tree.

            if (currentParentIsContainer) {
              removeChildFromContainer(currentParent, node.stateNode);
            } else {
              removeChild(currentParent, node.stateNode);
            } // Don't visit children because we already visited them.
          } else if (node.tag === HostPortal) {
            if (node.child !== null) {
              // When we go into a portal, it becomes the parent to remove from.
              // We will reassign it back when we pop the portal on the way up.
              currentParent = node.stateNode.containerInfo;
              currentParentIsContainer = true; // Visit children because portals might contain host components.

              node.child.return = node;
              node = node.child;
              continue;
            }
          } else {
            commitUnmount(finishedRoot, node, renderPriorityLevel); // Visit children because we may find more host components below.

            if (node.child !== null) {
              node.child.return = node;
              node = node.child;
              continue;
            }
          }

          if (node === current) {
            return;
          }

          while (node.sibling === null) {
            if (node.return === null || node.return === current) {
              return;
            }

            node = node.return;

            if (node.tag === HostPortal) {
              // When we go out of the portal, we need to restore the parent.
              // Since we don't keep a stack of them, we will search for it.
              currentParentIsValid = false;
            }
          }

          node.sibling.return = node.return;
          node = node.sibling;
        }
      }

      function commitDeletion(finishedRoot, current, renderPriorityLevel) {
        if (supportsMutation) {
          // Recursively delete all host nodes from the parent.
          // Detach refs and call componentWillUnmount() on the whole subtree.
          unmountHostComponents(finishedRoot, current, renderPriorityLevel);
        } else {
          // Detach refs and call componentWillUnmount() on the whole subtree.
          commitNestedUnmounts(finishedRoot, current, renderPriorityLevel);
        }

        detachFiber(current);
      }

      function commitWork(current, finishedWork) {
        if (!supportsMutation) {
          switch (finishedWork.tag) {
            case FunctionComponent:
            case ForwardRef:
            case MemoComponent:
            case SimpleMemoComponent:
            case Block: {
              // Layout effects are destroyed during the mutation phase so that all
              // destroy functions for all fibers are called before any create functions.
              // This prevents sibling component effects from interfering with each other,
              // e.g. a destroy function in one component should never override a ref set
              // by a create function in another component during the same commit.
              commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
              return;
            }

            case Profiler: {
              return;
            }

            case SuspenseComponent: {
              commitSuspenseComponent(finishedWork);
              attachSuspenseRetryListeners(finishedWork);
              return;
            }

            case SuspenseListComponent: {
              attachSuspenseRetryListeners(finishedWork);
              return;
            }

            case HostRoot: {
              if (supportsHydration) {
                var root = finishedWork.stateNode;

                if (root.hydrate) {
                  // We've just hydrated. No need to hydrate again.
                  root.hydrate = false;
                  commitHydratedContainer(root.containerInfo);
                }
              }

              break;
            }
          }

          commitContainer(finishedWork);
          return;
        }

        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent:
          case Block: {
            // Layout effects are destroyed during the mutation phase so that all
            // destroy functions for all fibers are called before any create functions.
            // This prevents sibling component effects from interfering with each other,
            // e.g. a destroy function in one component should never override a ref set
            // by a create function in another component during the same commit.
            commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
            return;
          }

          case ClassComponent: {
            return;
          }

          case HostComponent: {
            var instance = finishedWork.stateNode;

            if (instance != null) {
              // Commit the work prepared earlier.
              var newProps = finishedWork.memoizedProps; // For hydration we reuse the update path but we treat the oldProps
              // as the newProps. The updatePayload will contain the real change in
              // this case.

              var oldProps = current !== null ? current.memoizedProps : newProps;
              var type = finishedWork.type; // TODO: Type the updateQueue to be specific to host components.

              var updatePayload = finishedWork.updateQueue;
              finishedWork.updateQueue = null;

              if (updatePayload !== null) {
                commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
              }
            }

            return;
          }

          case HostText: {
            if (!(finishedWork.stateNode !== null)) {
              {
                throw Error(
                  'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
                );
              }
            }

            var textInstance = finishedWork.stateNode;
            var newText = finishedWork.memoizedProps; // For hydration we reuse the update path but we treat the oldProps
            // as the newProps. The updatePayload will contain the real change in
            // this case.

            var oldText = current !== null ? current.memoizedProps : newText;
            commitTextUpdate(textInstance, oldText, newText);
            return;
          }

          case HostRoot: {
            if (supportsHydration) {
              var _root = finishedWork.stateNode;

              if (_root.hydrate) {
                // We've just hydrated. No need to hydrate again.
                _root.hydrate = false;
                commitHydratedContainer(_root.containerInfo);
              }
            }

            return;
          }

          case Profiler: {
            return;
          }

          case SuspenseComponent: {
            commitSuspenseComponent(finishedWork);
            attachSuspenseRetryListeners(finishedWork);
            return;
          }

          case SuspenseListComponent: {
            attachSuspenseRetryListeners(finishedWork);
            return;
          }

          case IncompleteClassComponent: {
            return;
          }
        }

        {
          {
            throw Error(
              'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        }
      }

      function commitSuspenseComponent(finishedWork) {
        var newState = finishedWork.memoizedState;
        var newDidTimeout;
        var primaryChildParent = finishedWork;

        if (newState === null) {
          newDidTimeout = false;
        } else {
          newDidTimeout = true;
          primaryChildParent = finishedWork.child;
          markCommitTimeOfFallback();
        }

        if (supportsMutation && primaryChildParent !== null) {
          hideOrUnhideAllChildren(primaryChildParent, newDidTimeout);
        }
      }

      function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
        if (!supportsHydration) {
          return;
        }

        var newState = finishedWork.memoizedState;

        if (newState === null) {
          var current = finishedWork.alternate;

          if (current !== null) {
            var prevState = current.memoizedState;

            if (prevState !== null) {
              var suspenseInstance = prevState.dehydrated;

              if (suspenseInstance !== null) {
                commitHydratedSuspenseInstance(suspenseInstance);
              }
            }
          }
        }
      }

      function attachSuspenseRetryListeners(finishedWork) {
        // If this boundary just timed out, then it will have a set of thenables.
        // For each thenable, attach a listener so that when it resolves, React
        // attempts to re-render the boundary in the primary (pre-timeout) state.
        var thenables = finishedWork.updateQueue;

        if (thenables !== null) {
          finishedWork.updateQueue = null;
          var retryCache = finishedWork.stateNode;

          if (retryCache === null) {
            retryCache = finishedWork.stateNode = new PossiblyWeakSet();
          }

          thenables.forEach(function (thenable) {
            // Memoize using the boundary fiber to prevent redundant listeners.
            var retry = resolveRetryThenable.bind(null, finishedWork, thenable);

            if (!retryCache.has(thenable)) {
              {
                if (thenable.__reactDoNotTraceInteractions !== true) {
                  retry = tracing$1.unstable_wrap(retry);
                }
              }

              retryCache.add(thenable);
              thenable.then(retry, retry);
            }
          });
        }
      }

      function commitResetTextContent(current) {
        if (!supportsMutation) {
          return;
        }

        resetTextContent(current.stateNode);
      }

      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;

      function createRootErrorUpdate(fiber, errorInfo, expirationTime) {
        var update = createUpdate(expirationTime, null); // Unmount the root by rendering null.

        update.tag = CaptureUpdate; // Caution: React DevTools currently depends on this property
        // being called "element".

        update.payload = {
          element: null,
        };
        var error = errorInfo.value;

        update.callback = function () {
          onUncaughtError(error);
          logError(fiber, errorInfo);
        };

        return update;
      }

      function createClassErrorUpdate(fiber, errorInfo, expirationTime) {
        var update = createUpdate(expirationTime, null);
        update.tag = CaptureUpdate;
        var getDerivedStateFromError = fiber.type.getDerivedStateFromError;

        if (typeof getDerivedStateFromError === 'function') {
          var error$1 = errorInfo.value;

          update.payload = function () {
            logError(fiber, errorInfo);
            return getDerivedStateFromError(error$1);
          };
        }

        var inst = fiber.stateNode;

        if (inst !== null && typeof inst.componentDidCatch === 'function') {
          update.callback = function callback() {
            {
              markFailedErrorBoundaryForHotReloading(fiber);
            }

            if (typeof getDerivedStateFromError !== 'function') {
              // To preserve the preexisting retry behavior of error boundaries,
              // we keep track of which ones already failed during this batch.
              // This gets reset before we yield back to the browser.
              // TODO: Warn in strict mode if getDerivedStateFromError is
              // not defined.
              markLegacyErrorBoundaryAsFailed(this); // Only log here if componentDidCatch is the only error boundary method defined

              logError(fiber, errorInfo);
            }

            var error$1 = errorInfo.value;
            var stack = errorInfo.stack;
            this.componentDidCatch(error$1, {
              componentStack: stack !== null ? stack : '',
            });

            {
              if (typeof getDerivedStateFromError !== 'function') {
                // If componentDidCatch is the only error boundary method defined,
                // then it needs to call setState to recover from errors.
                // If no state update is scheduled then the boundary will swallow the error.
                if (fiber.expirationTime !== Sync) {
                  error(
                    '%s: Error boundaries should implement getDerivedStateFromError(). ' +
                      'In that method, return a state update to display an error message or fallback UI.',
                    getComponentName(fiber.type) || 'Unknown'
                  );
                }
              }
            }
          };
        } else {
          update.callback = function () {
            markFailedErrorBoundaryForHotReloading(fiber);
          };
        }

        return update;
      }

      function attachPingListener(root, renderExpirationTime, thenable) {
        // Attach a listener to the promise to "ping" the root and retry. But
        // only if one does not already exist for the current render expiration
        // time (which acts like a "thread ID" here).
        var pingCache = root.pingCache;
        var threadIDs;

        if (pingCache === null) {
          pingCache = root.pingCache = new PossiblyWeakMap();
          threadIDs = new Set();
          pingCache.set(thenable, threadIDs);
        } else {
          threadIDs = pingCache.get(thenable);

          if (threadIDs === undefined) {
            threadIDs = new Set();
            pingCache.set(thenable, threadIDs);
          }
        }

        if (!threadIDs.has(renderExpirationTime)) {
          // Memoize using the thread ID to prevent redundant listeners.
          threadIDs.add(renderExpirationTime);
          var ping = pingSuspendedRoot.bind(null, root, thenable, renderExpirationTime);
          thenable.then(ping, ping);
        }
      }

      function throwException(root, returnFiber, sourceFiber, value, renderExpirationTime) {
        // The source fiber did not complete.
        sourceFiber.effectTag |= Incomplete; // Its effect list is no longer valid.

        sourceFiber.firstEffect = sourceFiber.lastEffect = null;

        if (value !== null && typeof value === 'object' && typeof value.then === 'function') {
          // This is a thenable.
          var thenable = value;

          if ((sourceFiber.mode & BlockingMode) === NoMode) {
            // Reset the memoizedState to what it was before we attempted
            // to render it.
            var currentSource = sourceFiber.alternate;

            if (currentSource) {
              sourceFiber.updateQueue = currentSource.updateQueue;
              sourceFiber.memoizedState = currentSource.memoizedState;
              sourceFiber.expirationTime = currentSource.expirationTime;
            } else {
              sourceFiber.updateQueue = null;
              sourceFiber.memoizedState = null;
            }
          }

          var hasInvisibleParentBoundary = hasSuspenseContext(
            suspenseStackCursor.current,
            InvisibleParentSuspenseContext
          ); // Schedule the nearest Suspense to re-render the timed out view.

          var _workInProgress = returnFiber;

          do {
            if (
              _workInProgress.tag === SuspenseComponent &&
              shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)
            ) {
              // Found the nearest boundary.
              // Stash the promise on the boundary fiber. If the boundary times out, we'll
              // attach another listener to flip the boundary back to its normal state.
              var thenables = _workInProgress.updateQueue;

              if (thenables === null) {
                var updateQueue = new Set();
                updateQueue.add(thenable);
                _workInProgress.updateQueue = updateQueue;
              } else {
                thenables.add(thenable);
              } // If the boundary is outside of blocking mode, we should *not*
              // suspend the commit. Pretend as if the suspended component rendered
              // null and keep rendering. In the commit phase, we'll schedule a
              // subsequent synchronous update to re-render the Suspense.
              //
              // Note: It doesn't matter whether the component that suspended was
              // inside a blocking mode tree. If the Suspense is outside of it, we
              // should *not* suspend the commit.

              if ((_workInProgress.mode & BlockingMode) === NoMode) {
                _workInProgress.effectTag |= DidCapture; // We're going to commit this fiber even though it didn't complete.
                // But we shouldn't call any lifecycle methods or callbacks. Remove
                // all lifecycle effect tags.

                sourceFiber.effectTag &= ~(LifecycleEffectMask | Incomplete);

                if (sourceFiber.tag === ClassComponent) {
                  var currentSourceFiber = sourceFiber.alternate;

                  if (currentSourceFiber === null) {
                    // This is a new mount. Change the tag so it's not mistaken for a
                    // completed class component. For example, we should not call
                    // componentWillUnmount if it is deleted.
                    sourceFiber.tag = IncompleteClassComponent;
                  } else {
                    // When we try rendering again, we should not reuse the current fiber,
                    // since it's known to be in an inconsistent state. Use a force update to
                    // prevent a bail out.
                    var update = createUpdate(Sync, null);
                    update.tag = ForceUpdate;
                    enqueueUpdate(sourceFiber, update);
                  }
                } // The source fiber did not complete. Mark it with Sync priority to
                // indicate that it still has pending work.

                sourceFiber.expirationTime = Sync; // Exit without suspending.

                return;
              } // Confirmed that the boundary is in a concurrent mode tree. Continue
              // with the normal suspend path.
              //
              // After this we'll use a set of heuristics to determine whether this
              // render pass will run to completion or restart or "suspend" the commit.
              // The actual logic for this is spread out in different places.
              //
              // This first principle is that if we're going to suspend when we complete
              // a root, then we should also restart if we get an update or ping that
              // might unsuspend it, and vice versa. The only reason to suspend is
              // because you think you might want to restart before committing. However,
              // it doesn't make sense to restart only while in the period we're suspended.
              //
              // Restarting too aggressively is also not good because it starves out any
              // intermediate loading state. So we use heuristics to determine when.
              // Suspense Heuristics
              //
              // If nothing threw a Promise or all the same fallbacks are already showing,
              // then don't suspend/restart.
              //
              // If this is an initial render of a new tree of Suspense boundaries and
              // those trigger a fallback, then don't suspend/restart. We want to ensure
              // that we can show the initial loading state as quickly as possible.
              //
              // If we hit a "Delayed" case, such as when we'd switch from content back into
              // a fallback, then we should always suspend/restart. SuspenseConfig applies to
              // this case. If none is defined, JND is used instead.
              //
              // If we're already showing a fallback and it gets "retried", allowing us to show
              // another level, but there's still an inner boundary that would show a fallback,
              // then we suspend/restart for 500ms since the last time we showed a fallback
              // anywhere in the tree. This effectively throttles progressive loading into a
              // consistent train of commits. This also gives us an opportunity to restart to
              // get to the completed state slightly earlier.
              //
              // If there's ambiguity due to batching it's resolved in preference of:
              // 1) "delayed", 2) "initial render", 3) "retry".
              //
              // We want to ensure that a "busy" state doesn't get force committed. We want to
              // ensure that new initial loading states can commit as soon as possible.

              attachPingListener(root, renderExpirationTime, thenable);
              _workInProgress.effectTag |= ShouldCapture;
              _workInProgress.expirationTime = renderExpirationTime;
              return;
            } // This boundary already captured during this render. Continue to the next
            // boundary.

            _workInProgress = _workInProgress.return;
          } while (_workInProgress !== null); // No boundary was found. Fallthrough to error mode.
          // TODO: Use invariant so the message is stripped in prod?

          value = new Error(
            (getComponentName(sourceFiber.type) || 'A React component') +
              ' suspended while rendering, but no fallback UI was specified.\n' +
              '\n' +
              'Add a <Suspense fallback=...> component higher in the tree to ' +
              'provide a loading indicator or placeholder to display.' +
              getStackByFiberInDevAndProd(sourceFiber)
          );
        } // We didn't find a boundary that could handle this type of exception. Start
        // over and traverse parent path again, this time treating the exception
        // as an error.

        renderDidError();
        value = createCapturedValue(value, sourceFiber);
        var workInProgress = returnFiber;

        do {
          switch (workInProgress.tag) {
            case HostRoot: {
              var _errorInfo = value;
              workInProgress.effectTag |= ShouldCapture;
              workInProgress.expirationTime = renderExpirationTime;

              var _update = createRootErrorUpdate(workInProgress, _errorInfo, renderExpirationTime);

              enqueueCapturedUpdate(workInProgress, _update);
              return;
            }

            case ClassComponent:
              // Capture and retry
              var errorInfo = value;
              var ctor = workInProgress.type;
              var instance = workInProgress.stateNode;

              if (
                (workInProgress.effectTag & DidCapture) === NoEffect &&
                (typeof ctor.getDerivedStateFromError === 'function' ||
                  (instance !== null &&
                    typeof instance.componentDidCatch === 'function' &&
                    !isAlreadyFailedLegacyErrorBoundary(instance)))
              ) {
                workInProgress.effectTag |= ShouldCapture;
                workInProgress.expirationTime = renderExpirationTime; // Schedule the error boundary to re-render using updated state

                var _update2 = createClassErrorUpdate(workInProgress, errorInfo, renderExpirationTime);

                enqueueCapturedUpdate(workInProgress, _update2);
                return;
              }

              break;
          }

          workInProgress = workInProgress.return;
        } while (workInProgress !== null);
      }

      var ceil = Math.ceil;
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
        ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner,
        IsSomeRendererActing = ReactSharedInternals.IsSomeRendererActing;
      var NoContext =
        /*                    */
        0;
      var BatchedContext =
        /*               */
        1;
      var EventContext =
        /*                 */
        2;
      var DiscreteEventContext =
        /*         */
        4;
      var LegacyUnbatchedContext =
        /*       */
        8;
      var RenderContext =
        /*                */
        16;
      var CommitContext =
        /*                */
        32;
      var RootIncomplete = 0;
      var RootFatalErrored = 1;
      var RootErrored = 2;
      var RootSuspended = 3;
      var RootSuspendedWithDelay = 4;
      var RootCompleted = 5;
      // Describes where we are in the React execution stack
      var executionContext = NoContext; // The root we're working on

      var workInProgressRoot = null; // The fiber we're working on

      var workInProgress = null; // The expiration time we're rendering

      var renderExpirationTime$1 = NoWork; // Whether to root completed, errored, suspended, etc.

      var workInProgressRootExitStatus = RootIncomplete; // A fatal error, if one is thrown

      var workInProgressRootFatalError = null; // Most recent event time among processed updates during this render.
      // This is conceptually a time stamp but expressed in terms of an ExpirationTime
      // because we deal mostly with expiration times in the hot path, so this avoids
      // the conversion happening in the hot path.

      var workInProgressRootLatestProcessedExpirationTime = Sync;
      var workInProgressRootLatestSuspenseTimeout = Sync;
      var workInProgressRootCanSuspendUsingConfig = null; // The work left over by components that were visited during this render. Only
      // includes unprocessed updates, not work in bailed out children.

      var workInProgressRootNextUnprocessedUpdateTime = NoWork; // If we're pinged while rendering we don't always restart immediately.
      // This flag determines if it might be worthwhile to restart if an opportunity
      // happens latere.

      var workInProgressRootHasPendingPing = false; // The most recent time we committed a fallback. This lets us ensure a train
      // model where we don't commit new loading states in too quick succession.

      var globalMostRecentFallbackTime = 0;
      var FALLBACK_THROTTLE_MS = 500;
      var nextEffect = null;
      var hasUncaughtError = false;
      var firstUncaughtError = null;
      var legacyErrorBoundariesThatAlreadyFailed = null;
      var rootDoesHavePassiveEffects = false;
      var rootWithPendingPassiveEffects = null;
      var pendingPassiveEffectsRenderPriority = NoPriority;
      var pendingPassiveEffectsExpirationTime = NoWork;
      var rootsWithPendingDiscreteUpdates = null; // Use these to prevent an infinite loop of nested updates

      var NESTED_UPDATE_LIMIT = 50;
      var nestedUpdateCount = 0;
      var rootWithNestedUpdates = null;
      var NESTED_PASSIVE_UPDATE_LIMIT = 50;
      var nestedPassiveUpdateCount = 0;
      var interruptedBy = null; // Marks the need to reschedule pending interactions at these expiration times
      // during the commit phase. This enables them to be traced across components
      // that spawn new work during render. E.g. hidden boundaries, suspended SSR
      // hydration or SuspenseList.

      var spawnedWorkDuringRender = null; // Expiration times are computed by adding to the current time (the start
      // time). However, if two updates are scheduled within the same event, we
      // should treat their start times as simultaneous, even if the actual clock
      // time has advanced between the first and second call.
      // In other words, because expiration times determine how updates are batched,
      // we want all updates of like priority that occur within the same event to
      // receive the same expiration time. Otherwise we get tearing.

      var currentEventTime = NoWork;
      function requestCurrentTimeForUpdate() {
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
          // We're inside React, so it's fine to read the actual time.
          return msToExpirationTime(now$1());
        } // We're not inside React, so we may be in the middle of a browser event.

        if (currentEventTime !== NoWork) {
          // Use the same start time for all updates until we enter React again.
          return currentEventTime;
        } // This is the first update since React yielded. Compute a new start time.

        currentEventTime = msToExpirationTime(now$1());
        return currentEventTime;
      }
      function getCurrentTime() {
        return msToExpirationTime(now$1());
      }
      function computeExpirationForFiber(currentTime, fiber, suspenseConfig) {
        var mode = fiber.mode;

        if ((mode & BlockingMode) === NoMode) {
          return Sync;
        }

        var priorityLevel = getCurrentPriorityLevel();

        if ((mode & ConcurrentMode) === NoMode) {
          return priorityLevel === ImmediatePriority ? Sync : Batched;
        }

        if ((executionContext & RenderContext) !== NoContext) {
          // Use whatever time we're already rendering
          // TODO: Should there be a way to opt out, like with `runWithPriority`?
          return renderExpirationTime$1;
        }

        var expirationTime;

        if (suspenseConfig !== null) {
          // Compute an expiration time based on the Suspense timeout.
          expirationTime = computeSuspenseExpiration(
            currentTime,
            suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION
          );
        } else {
          // Compute an expiration time based on the Scheduler priority.
          switch (priorityLevel) {
            case ImmediatePriority:
              expirationTime = Sync;
              break;

            case UserBlockingPriority:
              // TODO: Rename this to computeUserBlockingExpiration
              expirationTime = computeInteractiveExpiration(currentTime);
              break;

            case NormalPriority:
            case LowPriority:
              // TODO: Handle LowPriority
              // TODO: Rename this to... something better.
              expirationTime = computeAsyncExpiration(currentTime);
              break;

            case IdlePriority:
              expirationTime = Idle;
              break;

            default: {
              {
                throw Error('Expected a valid priority level');
              }
            }
          }
        } // If we're in the middle of rendering a tree, do not update at the same
        // expiration time that is already rendering.
        // TODO: We shouldn't have to do this if the update is on a different root.
        // Refactor computeExpirationForFiber + scheduleUpdate so we have access to
        // the root when we check for this condition.

        if (workInProgressRoot !== null && expirationTime === renderExpirationTime$1) {
          // This is a trick to move this update into a separate batch
          expirationTime -= 1;
        }

        return expirationTime;
      }
      function scheduleUpdateOnFiber(fiber, expirationTime) {
        checkForNestedUpdates();
        warnAboutRenderPhaseUpdatesInDEV(fiber);
        var root = markUpdateTimeFromFiberToRoot(fiber, expirationTime);

        if (root === null) {
          warnAboutUpdateOnUnmountedFiberInDEV(fiber);
          return;
        }

        checkForInterruption(fiber, expirationTime);
        recordScheduleUpdate(); // TODO: computeExpirationForFiber also reads the priority. Pass the
        // priority as an argument to that function and this one.

        var priorityLevel = getCurrentPriorityLevel();

        if (expirationTime === Sync) {
          if (
            // Check if we're inside unbatchedUpdates
            (executionContext & LegacyUnbatchedContext) !== NoContext && // Check if we're not already rendering
            (executionContext & (RenderContext | CommitContext)) === NoContext
          ) {
            // Register pending interactions on the root to avoid losing traced interaction data.
            schedulePendingInteractions(root, expirationTime); // This is a legacy edge case. The initial mount of a ReactDOM.render-ed
            // root inside of batchedUpdates should be synchronous, but layout updates
            // should be deferred until the end of the batch.

            performSyncWorkOnRoot(root);
          } else {
            ensureRootIsScheduled(root);
            schedulePendingInteractions(root, expirationTime);

            if (executionContext === NoContext) {
              // Flush the synchronous work now, unless we're already working or inside
              // a batch. This is intentionally inside scheduleUpdateOnFiber instead of
              // scheduleCallbackForFiber to preserve the ability to schedule a callback
              // without immediately flushing it. We only do this for user-initiated
              // updates, to preserve historical behavior of legacy mode.
              flushSyncCallbackQueue();
            }
          }
        } else {
          ensureRootIsScheduled(root);
          schedulePendingInteractions(root, expirationTime);
        }

        if (
          (executionContext & DiscreteEventContext) !== NoContext && // Only updates at user-blocking priority or greater are considered
          // discrete, even inside a discrete event.
          (priorityLevel === UserBlockingPriority || priorityLevel === ImmediatePriority)
        ) {
          // This is the result of a discrete event. Track the lowest priority
          // discrete update per root so we can flush them early, if needed.
          if (rootsWithPendingDiscreteUpdates === null) {
            rootsWithPendingDiscreteUpdates = new Map([[root, expirationTime]]);
          } else {
            var lastDiscreteTime = rootsWithPendingDiscreteUpdates.get(root);

            if (lastDiscreteTime === undefined || lastDiscreteTime > expirationTime) {
              rootsWithPendingDiscreteUpdates.set(root, expirationTime);
            }
          }
        }
      }
      var scheduleWork = scheduleUpdateOnFiber; // This is split into a separate function so we can mark a fiber with pending
      // work without treating it as a typical update that originates from an event;
      // e.g. retrying a Suspense boundary isn't an update, but it does schedule work
      // on a fiber.

      function markUpdateTimeFromFiberToRoot(fiber, expirationTime) {
        // Update the source fiber's expiration time
        if (fiber.expirationTime < expirationTime) {
          fiber.expirationTime = expirationTime;
        }

        var alternate = fiber.alternate;

        if (alternate !== null && alternate.expirationTime < expirationTime) {
          alternate.expirationTime = expirationTime;
        } // Walk the parent path to the root and update the child expiration time.

        var node = fiber.return;
        var root = null;

        if (node === null && fiber.tag === HostRoot) {
          root = fiber.stateNode;
        } else {
          while (node !== null) {
            alternate = node.alternate;

            if (node.childExpirationTime < expirationTime) {
              node.childExpirationTime = expirationTime;

              if (alternate !== null && alternate.childExpirationTime < expirationTime) {
                alternate.childExpirationTime = expirationTime;
              }
            } else if (alternate !== null && alternate.childExpirationTime < expirationTime) {
              alternate.childExpirationTime = expirationTime;
            }

            if (node.return === null && node.tag === HostRoot) {
              root = node.stateNode;
              break;
            }

            node = node.return;
          }
        }

        if (root !== null) {
          if (workInProgressRoot === root) {
            // Received an update to a tree that's in the middle of rendering. Mark
            // that's unprocessed work on this root.
            markUnprocessedUpdateTime(expirationTime);

            if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
              // The root already suspended with a delay, which means this render
              // definitely won't finish. Since we have a new update, let's mark it as
              // suspended now, right before marking the incoming update. This has the
              // effect of interrupting the current render and switching to the update.
              // TODO: This happens to work when receiving an update during the render
              // phase, because of the trick inside computeExpirationForFiber to
              // subtract 1 from `renderExpirationTime` to move it into a
              // separate bucket. But we should probably model it with an exception,
              // using the same mechanism we use to force hydration of a subtree.
              // TODO: This does not account for low pri updates that were already
              // scheduled before the root started rendering. Need to track the next
              // pending expiration time (perhaps by backtracking the return path) and
              // then trigger a restart in the `renderDidSuspendDelayIfPossible` path.
              markRootSuspendedAtTime(root, renderExpirationTime$1);
            }
          } // Mark that the root has a pending update.

          markRootUpdatedAtTime(root, expirationTime);
        }

        return root;
      }

      function getNextRootExpirationTimeToWorkOn(root) {
        // Determines the next expiration time that the root should render, taking
        // into account levels that may be suspended, or levels that may have
        // received a ping.
        var lastExpiredTime = root.lastExpiredTime;

        if (lastExpiredTime !== NoWork) {
          return lastExpiredTime;
        } // "Pending" refers to any update that hasn't committed yet, including if it
        // suspended. The "suspended" range is therefore a subset.

        var firstPendingTime = root.firstPendingTime;

        if (!isRootSuspendedAtTime(root, firstPendingTime)) {
          // The highest priority pending time is not suspended. Let's work on that.
          return firstPendingTime;
        } // If the first pending time is suspended, check if there's a lower priority
        // pending level that we know about. Or check if we received a ping. Work
        // on whichever is higher priority.

        var lastPingedTime = root.lastPingedTime;
        var nextKnownPendingLevel = root.nextKnownPendingLevel;
        var nextLevel = lastPingedTime > nextKnownPendingLevel ? lastPingedTime : nextKnownPendingLevel;

        if (nextLevel <= Idle && firstPendingTime !== nextLevel) {
          // Don't work on Idle/Never priority unless everything else is committed.
          return NoWork;
        }

        return nextLevel;
      } // Use this function to schedule a task for a root. There's only one task per
      // root; if a task was already scheduled, we'll check to make sure the
      // expiration time of the existing task is the same as the expiration time of
      // the next level that the root has work on. This function is called on every
      // update, and right before exiting a task.

      function ensureRootIsScheduled(root) {
        var lastExpiredTime = root.lastExpiredTime;

        if (lastExpiredTime !== NoWork) {
          // Special case: Expired work should flush synchronously.
          root.callbackExpirationTime = Sync;
          root.callbackPriority = ImmediatePriority;
          root.callbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
          return;
        }

        var expirationTime = getNextRootExpirationTimeToWorkOn(root);
        var existingCallbackNode = root.callbackNode;

        if (expirationTime === NoWork) {
          // There's nothing to work on.
          if (existingCallbackNode !== null) {
            root.callbackNode = null;
            root.callbackExpirationTime = NoWork;
            root.callbackPriority = NoPriority;
          }

          return;
        } // TODO: If this is an update, we already read the current time. Pass the
        // time as an argument.

        var currentTime = requestCurrentTimeForUpdate();
        var priorityLevel = inferPriorityFromExpirationTime(currentTime, expirationTime); // If there's an existing render task, confirm it has the correct priority and
        // expiration time. Otherwise, we'll cancel it and schedule a new one.

        if (existingCallbackNode !== null) {
          var existingCallbackPriority = root.callbackPriority;
          var existingCallbackExpirationTime = root.callbackExpirationTime;

          if (
            // Callback must have the exact same expiration time.
            existingCallbackExpirationTime === expirationTime && // Callback must have greater or equal priority.
            existingCallbackPriority >= priorityLevel
          ) {
            // Existing callback is sufficient.
            return;
          } // Need to schedule a new task.
          // TODO: Instead of scheduling a new task, we should be able to change the
          // priority of the existing one.

          cancelCallback(existingCallbackNode);
        }

        root.callbackExpirationTime = expirationTime;
        root.callbackPriority = priorityLevel;
        var callbackNode;

        if (expirationTime === Sync) {
          // Sync React callbacks are scheduled on a special internal queue
          callbackNode = scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
        } else {
          callbackNode = scheduleCallback(
            priorityLevel,
            performConcurrentWorkOnRoot.bind(null, root), // Compute a task timeout based on the expiration time. This also affects
            // ordering because tasks are processed in timeout order.
            {
              timeout: expirationTimeToMs(expirationTime) - now$1(),
            }
          );
        }

        root.callbackNode = callbackNode;
      } // This is the entry point for every concurrent task, i.e. anything that
      // goes through Scheduler.

      function performConcurrentWorkOnRoot(root, didTimeout) {
        // Since we know we're in a React event, we can clear the current
        // event time. The next update will compute a new event time.
        currentEventTime = NoWork;

        if (didTimeout) {
          // The render task took too long to complete. Mark the current time as
          // expired to synchronously render all expired work in a single batch.
          var currentTime = requestCurrentTimeForUpdate();
          markRootExpiredAtTime(root, currentTime); // This will schedule a synchronous callback.

          ensureRootIsScheduled(root);
          return null;
        } // Determine the next expiration time to work on, using the fields stored
        // on the root.

        var expirationTime = getNextRootExpirationTimeToWorkOn(root);

        if (expirationTime !== NoWork) {
          var originalCallbackNode = root.callbackNode;

          if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
            {
              throw Error('Should not already be working.');
            }
          }

          flushPassiveEffects(); // If the root or expiration time have changed, throw out the existing stack
          // and prepare a fresh one. Otherwise we'll continue where we left off.

          if (root !== workInProgressRoot || expirationTime !== renderExpirationTime$1) {
            prepareFreshStack(root, expirationTime);
            startWorkOnPendingInteractions(root, expirationTime);
          } // If we have a work-in-progress fiber, it means there's still work to do
          // in this root.

          if (workInProgress !== null) {
            var prevExecutionContext = executionContext;
            executionContext |= RenderContext;
            var prevDispatcher = pushDispatcher();
            var prevInteractions = pushInteractions(root);
            startWorkLoopTimer(workInProgress);

            do {
              try {
                workLoopConcurrent();
                break;
              } catch (thrownValue) {
                handleError(root, thrownValue);
              }
            } while (true);

            resetContextDependencies();
            executionContext = prevExecutionContext;
            popDispatcher(prevDispatcher);

            {
              popInteractions(prevInteractions);
            }

            if (workInProgressRootExitStatus === RootFatalErrored) {
              var fatalError = workInProgressRootFatalError;
              stopInterruptedWorkLoopTimer();
              prepareFreshStack(root, expirationTime);
              markRootSuspendedAtTime(root, expirationTime);
              ensureRootIsScheduled(root);
              throw fatalError;
            }

            if (workInProgress !== null) {
              // There's still work left over. Exit without committing.
              stopInterruptedWorkLoopTimer();
            } else {
              // We now have a consistent tree. The next step is either to commit it,
              // or, if something suspended, wait to commit it after a timeout.
              stopFinishedWorkLoopTimer();
              var finishedWork = (root.finishedWork = root.current.alternate);
              root.finishedExpirationTime = expirationTime;
              finishConcurrentRender(root, finishedWork, workInProgressRootExitStatus, expirationTime);
            }

            ensureRootIsScheduled(root);

            if (root.callbackNode === originalCallbackNode) {
              // The task node scheduled for this root is the same one that's
              // currently executed. Need to return a continuation.
              return performConcurrentWorkOnRoot.bind(null, root);
            }
          }
        }

        return null;
      }

      function finishConcurrentRender(root, finishedWork, exitStatus, expirationTime) {
        // Set this to null to indicate there's no in-progress render.
        workInProgressRoot = null;

        switch (exitStatus) {
          case RootIncomplete:
          case RootFatalErrored: {
            {
              {
                throw Error('Root did not complete. This is a bug in React.');
              }
            }
          }
          // Flow knows about invariant, so it complains if I add a break
          // statement, but eslint doesn't know about invariant, so it complains
          // if I do. eslint-disable-next-line no-fallthrough

          case RootErrored: {
            // If this was an async render, the error may have happened due to
            // a mutation in a concurrent event. Try rendering one more time,
            // synchronously, to see if the error goes away. If there are
            // lower priority updates, let's include those, too, in case they
            // fix the inconsistency. Render at Idle to include all updates.
            // If it was Idle or Never or some not-yet-invented time, render
            // at that time.
            markRootExpiredAtTime(root, expirationTime > Idle ? Idle : expirationTime); // We assume that this second render pass will be synchronous
            // and therefore not hit this path again.

            break;
          }

          case RootSuspended: {
            markRootSuspendedAtTime(root, expirationTime);
            var lastSuspendedTime = root.lastSuspendedTime;

            if (expirationTime === lastSuspendedTime) {
              root.nextKnownPendingLevel = getRemainingExpirationTime(finishedWork);
            } // We have an acceptable loading state. We need to figure out if we
            // should immediately commit it or wait a bit.
            // If we have processed new updates during this render, we may now
            // have a new loading state ready. We want to ensure that we commit
            // that as soon as possible.

            var hasNotProcessedNewUpdates = workInProgressRootLatestProcessedExpirationTime === Sync;

            if (
              hasNotProcessedNewUpdates && // do not delay if we're inside an act() scope
              !IsThisRendererActing.current
            ) {
              // If we have not processed any new updates during this pass, then
              // this is either a retry of an existing fallback state or a
              // hidden tree. Hidden trees shouldn't be batched with other work
              // and after that's fixed it can only be a retry. We're going to
              // throttle committing retries so that we don't show too many
              // loading states too quickly.
              var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now$1(); // Don't bother with a very short suspense time.

              if (msUntilTimeout > 10) {
                if (workInProgressRootHasPendingPing) {
                  var lastPingedTime = root.lastPingedTime;

                  if (lastPingedTime === NoWork || lastPingedTime >= expirationTime) {
                    // This render was pinged but we didn't get to restart
                    // earlier so try restarting now instead.
                    root.lastPingedTime = expirationTime;
                    prepareFreshStack(root, expirationTime);
                    break;
                  }
                }

                var nextTime = getNextRootExpirationTimeToWorkOn(root);

                if (nextTime !== NoWork && nextTime !== expirationTime) {
                  // There's additional work on this root.
                  break;
                }

                if (lastSuspendedTime !== NoWork && lastSuspendedTime !== expirationTime) {
                  // We should prefer to render the fallback of at the last
                  // suspended level. Ping the last suspended level to try
                  // rendering it again.
                  root.lastPingedTime = lastSuspendedTime;
                  break;
                } // The render is suspended, it hasn't timed out, and there's no
                // lower priority work to do. Instead of committing the fallback
                // immediately, wait for more data to arrive.

                root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), msUntilTimeout);
                break;
              }
            } // The work expired. Commit immediately.

            commitRoot(root);
            break;
          }

          case RootSuspendedWithDelay: {
            markRootSuspendedAtTime(root, expirationTime);
            var _lastSuspendedTime = root.lastSuspendedTime;

            if (expirationTime === _lastSuspendedTime) {
              root.nextKnownPendingLevel = getRemainingExpirationTime(finishedWork);
            }

            if (
              // do not delay if we're inside an act() scope
              !IsThisRendererActing.current
            ) {
              // We're suspended in a state that should be avoided. We'll try to
              // avoid committing it for as long as the timeouts let us.
              if (workInProgressRootHasPendingPing) {
                var _lastPingedTime = root.lastPingedTime;

                if (_lastPingedTime === NoWork || _lastPingedTime >= expirationTime) {
                  // This render was pinged but we didn't get to restart earlier
                  // so try restarting now instead.
                  root.lastPingedTime = expirationTime;
                  prepareFreshStack(root, expirationTime);
                  break;
                }
              }

              var _nextTime = getNextRootExpirationTimeToWorkOn(root);

              if (_nextTime !== NoWork && _nextTime !== expirationTime) {
                // There's additional work on this root.
                break;
              }

              if (_lastSuspendedTime !== NoWork && _lastSuspendedTime !== expirationTime) {
                // We should prefer to render the fallback of at the last
                // suspended level. Ping the last suspended level to try
                // rendering it again.
                root.lastPingedTime = _lastSuspendedTime;
                break;
              }

              var _msUntilTimeout;

              if (workInProgressRootLatestSuspenseTimeout !== Sync) {
                // We have processed a suspense config whose expiration time we
                // can use as the timeout.
                _msUntilTimeout = expirationTimeToMs(workInProgressRootLatestSuspenseTimeout) - now$1();
              } else if (workInProgressRootLatestProcessedExpirationTime === Sync) {
                // This should never normally happen because only new updates
                // cause delayed states, so we should have processed something.
                // However, this could also happen in an offscreen tree.
                _msUntilTimeout = 0;
              } else {
                // If we don't have a suspense config, we're going to use a
                // heuristic to determine how long we can suspend.
                var eventTimeMs = inferTimeFromExpirationTime(workInProgressRootLatestProcessedExpirationTime);
                var currentTimeMs = now$1();
                var timeUntilExpirationMs = expirationTimeToMs(expirationTime) - currentTimeMs;
                var timeElapsed = currentTimeMs - eventTimeMs;

                if (timeElapsed < 0) {
                  // We get this wrong some time since we estimate the time.
                  timeElapsed = 0;
                }

                _msUntilTimeout = jnd(timeElapsed) - timeElapsed; // Clamp the timeout to the expiration time. TODO: Once the
                // event time is exact instead of inferred from expiration time
                // we don't need this.

                if (timeUntilExpirationMs < _msUntilTimeout) {
                  _msUntilTimeout = timeUntilExpirationMs;
                }
              } // Don't bother with a very short suspense time.

              if (_msUntilTimeout > 10) {
                // The render is suspended, it hasn't timed out, and there's no
                // lower priority work to do. Instead of committing the fallback
                // immediately, wait for more data to arrive.
                root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), _msUntilTimeout);
                break;
              }
            } // The work expired. Commit immediately.

            commitRoot(root);
            break;
          }

          case RootCompleted: {
            // The work completed. Ready to commit.
            if (
              // do not delay if we're inside an act() scope
              !IsThisRendererActing.current &&
              workInProgressRootLatestProcessedExpirationTime !== Sync &&
              workInProgressRootCanSuspendUsingConfig !== null
            ) {
              // If we have exceeded the minimum loading delay, which probably
              // means we have shown a spinner already, we might have to suspend
              // a bit longer to ensure that the spinner is shown for
              // enough time.
              var _msUntilTimeout2 = computeMsUntilSuspenseLoadingDelay(
                workInProgressRootLatestProcessedExpirationTime,
                expirationTime,
                workInProgressRootCanSuspendUsingConfig
              );

              if (_msUntilTimeout2 > 10) {
                markRootSuspendedAtTime(root, expirationTime);
                root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root), _msUntilTimeout2);
                break;
              }
            }

            commitRoot(root);
            break;
          }

          default: {
            {
              {
                throw Error('Unknown root exit status.');
              }
            }
          }
        }
      } // This is the entry point for synchronous tasks that don't go
      // through Scheduler

      function performSyncWorkOnRoot(root) {
        // Check if there's expired work on this root. Otherwise, render at Sync.
        var lastExpiredTime = root.lastExpiredTime;
        var expirationTime = lastExpiredTime !== NoWork ? lastExpiredTime : Sync;

        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
          {
            throw Error('Should not already be working.');
          }
        }

        flushPassiveEffects(); // If the root or expiration time have changed, throw out the existing stack
        // and prepare a fresh one. Otherwise we'll continue where we left off.

        if (root !== workInProgressRoot || expirationTime !== renderExpirationTime$1) {
          prepareFreshStack(root, expirationTime);
          startWorkOnPendingInteractions(root, expirationTime);
        } // If we have a work-in-progress fiber, it means there's still work to do
        // in this root.

        if (workInProgress !== null) {
          var prevExecutionContext = executionContext;
          executionContext |= RenderContext;
          var prevDispatcher = pushDispatcher();
          var prevInteractions = pushInteractions(root);
          startWorkLoopTimer(workInProgress);

          do {
            try {
              workLoopSync();
              break;
            } catch (thrownValue) {
              handleError(root, thrownValue);
            }
          } while (true);

          resetContextDependencies();
          executionContext = prevExecutionContext;
          popDispatcher(prevDispatcher);

          {
            popInteractions(prevInteractions);
          }

          if (workInProgressRootExitStatus === RootFatalErrored) {
            var fatalError = workInProgressRootFatalError;
            stopInterruptedWorkLoopTimer();
            prepareFreshStack(root, expirationTime);
            markRootSuspendedAtTime(root, expirationTime);
            ensureRootIsScheduled(root);
            throw fatalError;
          }

          if (workInProgress !== null) {
            // This is a sync render, so we should have finished the whole tree.
            {
              {
                throw Error(
                  'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
                );
              }
            }
          } else {
            // We now have a consistent tree. Because this is a sync render, we
            // will commit it even if something suspended.
            stopFinishedWorkLoopTimer();
            root.finishedWork = root.current.alternate;
            root.finishedExpirationTime = expirationTime;
            finishSyncRender(root);
          } // Before exiting, make sure there's a callback scheduled for the next
          // pending level.

          ensureRootIsScheduled(root);
        }

        return null;
      }

      function finishSyncRender(root) {
        // Set this to null to indicate there's no in-progress render.
        workInProgressRoot = null;
        commitRoot(root);
      }

      function flushRoot(root, expirationTime) {
        markRootExpiredAtTime(root, expirationTime);
        ensureRootIsScheduled(root);

        if ((executionContext & (RenderContext | CommitContext)) === NoContext) {
          flushSyncCallbackQueue();
        }
      }
      function flushDiscreteUpdates() {
        // TODO: Should be able to flush inside batchedUpdates, but not inside `act`.
        // However, `act` uses `batchedUpdates`, so there's no way to distinguish
        // those two cases. Need to fix this before exposing flushDiscreteUpdates
        // as a public API.
        if ((executionContext & (BatchedContext | RenderContext | CommitContext)) !== NoContext) {
          {
            if ((executionContext & RenderContext) !== NoContext) {
              error('unstable_flushDiscreteUpdates: Cannot flush updates when React is ' + 'already rendering.');
            }
          } // We're already rendering, so we can't synchronously flush pending work.
          // This is probably a nested event dispatch triggered by a lifecycle/effect,
          // like `el.focus()`. Exit.

          return;
        }

        flushPendingDiscreteUpdates(); // If the discrete updates scheduled passive effects, flush them now so that
        // they fire before the next serial event.

        flushPassiveEffects();
      }
      function deferredUpdates(fn) {
        // TODO: Remove in favor of Scheduler.next
        return runWithPriority(NormalPriority, fn);
      }
      function syncUpdates(fn, a, b, c) {
        return runWithPriority(ImmediatePriority, fn.bind(null, a, b, c));
      }

      function flushPendingDiscreteUpdates() {
        if (rootsWithPendingDiscreteUpdates !== null) {
          // For each root with pending discrete updates, schedule a callback to
          // immediately flush them.
          var roots = rootsWithPendingDiscreteUpdates;
          rootsWithPendingDiscreteUpdates = null;
          roots.forEach(function (expirationTime, root) {
            markRootExpiredAtTime(root, expirationTime);
            ensureRootIsScheduled(root);
          }); // Now flush the immediate queue.

          flushSyncCallbackQueue();
        }
      }

      function batchedUpdates(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext |= BatchedContext;

        try {
          return fn(a);
        } finally {
          executionContext = prevExecutionContext;

          if (executionContext === NoContext) {
            // Flush the immediate callbacks that were scheduled during this batch
            flushSyncCallbackQueue();
          }
        }
      }
      function batchedEventUpdates(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext |= EventContext;

        try {
          return fn(a);
        } finally {
          executionContext = prevExecutionContext;

          if (executionContext === NoContext) {
            // Flush the immediate callbacks that were scheduled during this batch
            flushSyncCallbackQueue();
          }
        }
      }
      function discreteUpdates(fn, a, b, c, d) {
        var prevExecutionContext = executionContext;
        executionContext |= DiscreteEventContext;

        try {
          // Should this
          return runWithPriority(UserBlockingPriority, fn.bind(null, a, b, c, d));
        } finally {
          executionContext = prevExecutionContext;

          if (executionContext === NoContext) {
            // Flush the immediate callbacks that were scheduled during this batch
            flushSyncCallbackQueue();
          }
        }
      }
      function unbatchedUpdates(fn, a) {
        var prevExecutionContext = executionContext;
        executionContext &= ~BatchedContext;
        executionContext |= LegacyUnbatchedContext;

        try {
          return fn(a);
        } finally {
          executionContext = prevExecutionContext;

          if (executionContext === NoContext) {
            // Flush the immediate callbacks that were scheduled during this batch
            flushSyncCallbackQueue();
          }
        }
      }
      function flushSync(fn, a) {
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
          {
            {
              throw Error(
                'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.'
              );
            }
          }
        }

        var prevExecutionContext = executionContext;
        executionContext |= BatchedContext;

        try {
          return runWithPriority(ImmediatePriority, fn.bind(null, a));
        } finally {
          executionContext = prevExecutionContext; // Flush the immediate callbacks that were scheduled during this batch.
          // Note that this will happen even if batchedUpdates is higher up
          // the stack.

          flushSyncCallbackQueue();
        }
      }
      function flushControlled(fn) {
        var prevExecutionContext = executionContext;
        executionContext |= BatchedContext;

        try {
          runWithPriority(ImmediatePriority, fn);
        } finally {
          executionContext = prevExecutionContext;

          if (executionContext === NoContext) {
            // Flush the immediate callbacks that were scheduled during this batch
            flushSyncCallbackQueue();
          }
        }
      }

      function prepareFreshStack(root, expirationTime) {
        root.finishedWork = null;
        root.finishedExpirationTime = NoWork;
        var timeoutHandle = root.timeoutHandle;

        if (timeoutHandle !== noTimeout) {
          // The root previous suspended and scheduled a timeout to commit a fallback
          // state. Now that we have additional work, cancel the timeout.
          root.timeoutHandle = noTimeout; // $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above

          cancelTimeout(timeoutHandle);
        }

        if (workInProgress !== null) {
          var interruptedWork = workInProgress.return;

          while (interruptedWork !== null) {
            unwindInterruptedWork(interruptedWork);
            interruptedWork = interruptedWork.return;
          }
        }

        workInProgressRoot = root;
        workInProgress = createWorkInProgress(root.current, null);
        renderExpirationTime$1 = expirationTime;
        workInProgressRootExitStatus = RootIncomplete;
        workInProgressRootFatalError = null;
        workInProgressRootLatestProcessedExpirationTime = Sync;
        workInProgressRootLatestSuspenseTimeout = Sync;
        workInProgressRootCanSuspendUsingConfig = null;
        workInProgressRootNextUnprocessedUpdateTime = NoWork;
        workInProgressRootHasPendingPing = false;

        {
          spawnedWorkDuringRender = null;
        }

        {
          ReactStrictModeWarnings.discardPendingWarnings();
        }
      }

      function handleError(root, thrownValue) {
        do {
          try {
            // Reset module-level state that was set during the render phase.
            resetContextDependencies();
            resetHooksAfterThrow();
            resetCurrentFiber();

            if (workInProgress === null || workInProgress.return === null) {
              // Expected to be working on a non-root fiber. This is a fatal error
              // because there's no ancestor that can handle it; the root is
              // supposed to capture all errors that weren't caught by an error
              // boundary.
              workInProgressRootExitStatus = RootFatalErrored;
              workInProgressRootFatalError = thrownValue; // Set `workInProgress` to null. This represents advancing to the next
              // sibling, or the parent if there are no siblings. But since the root
              // has no siblings nor a parent, we set it to null. Usually this is
              // handled by `completeUnitOfWork` or `unwindWork`, but since we're
              // interntionally not calling those, we need set it here.
              // TODO: Consider calling `unwindWork` to pop the contexts.

              workInProgress = null;
              return null;
            }

            if (enableProfilerTimer && workInProgress.mode & ProfileMode) {
              // Record the time spent rendering before an error was thrown. This
              // avoids inaccurate Profiler durations in the case of a
              // suspended render.
              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, true);
            }

            throwException(root, workInProgress.return, workInProgress, thrownValue, renderExpirationTime$1);
            workInProgress = completeUnitOfWork(workInProgress);
          } catch (yetAnotherThrownValue) {
            // Something in the return path also threw.
            thrownValue = yetAnotherThrownValue;
            continue;
          } // Return to the normal work loop.

          return;
        } while (true);
      }

      function pushDispatcher(root) {
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;

        if (prevDispatcher === null) {
          // The React isomorphic package does not include a default dispatcher.
          // Instead the first renderer will lazily attach one, in order to give
          // nicer error messages.
          return ContextOnlyDispatcher;
        } else {
          return prevDispatcher;
        }
      }

      function popDispatcher(prevDispatcher) {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }

      function pushInteractions(root) {
        {
          var prevInteractions = tracing$1.__interactionsRef.current;
          tracing$1.__interactionsRef.current = root.memoizedInteractions;
          return prevInteractions;
        }
      }

      function popInteractions(prevInteractions) {
        {
          tracing$1.__interactionsRef.current = prevInteractions;
        }
      }

      function markCommitTimeOfFallback() {
        globalMostRecentFallbackTime = now$1();
      }
      function markRenderEventTimeAndConfig(expirationTime, suspenseConfig) {
        if (expirationTime < workInProgressRootLatestProcessedExpirationTime && expirationTime > Idle) {
          workInProgressRootLatestProcessedExpirationTime = expirationTime;
        }

        if (suspenseConfig !== null) {
          if (expirationTime < workInProgressRootLatestSuspenseTimeout && expirationTime > Idle) {
            workInProgressRootLatestSuspenseTimeout = expirationTime; // Most of the time we only have one config and getting wrong is not bad.

            workInProgressRootCanSuspendUsingConfig = suspenseConfig;
          }
        }
      }
      function markUnprocessedUpdateTime(expirationTime) {
        if (expirationTime > workInProgressRootNextUnprocessedUpdateTime) {
          workInProgressRootNextUnprocessedUpdateTime = expirationTime;
        }
      }
      function renderDidSuspend() {
        if (workInProgressRootExitStatus === RootIncomplete) {
          workInProgressRootExitStatus = RootSuspended;
        }
      }
      function renderDidSuspendDelayIfPossible() {
        if (workInProgressRootExitStatus === RootIncomplete || workInProgressRootExitStatus === RootSuspended) {
          workInProgressRootExitStatus = RootSuspendedWithDelay;
        } // Check if there's a lower priority update somewhere else in the tree.

        if (workInProgressRootNextUnprocessedUpdateTime !== NoWork && workInProgressRoot !== null) {
          // Mark the current render as suspended, and then mark that there's a
          // pending update.
          // TODO: This should immediately interrupt the current render, instead
          // of waiting until the next time we yield.
          markRootSuspendedAtTime(workInProgressRoot, renderExpirationTime$1);
          markRootUpdatedAtTime(workInProgressRoot, workInProgressRootNextUnprocessedUpdateTime);
        }
      }
      function renderDidError() {
        if (workInProgressRootExitStatus !== RootCompleted) {
          workInProgressRootExitStatus = RootErrored;
        }
      } // Called during render to determine if anything has suspended.
      // Returns false if we're not sure.

      function renderHasNotSuspendedYet() {
        // If something errored or completed, we can't really be sure,
        // so those are false.
        return workInProgressRootExitStatus === RootIncomplete;
      }

      function inferTimeFromExpirationTime(expirationTime) {
        // We don't know exactly when the update was scheduled, but we can infer an
        // approximate start time from the expiration time.
        var earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
        return earliestExpirationTimeMs - LOW_PRIORITY_EXPIRATION;
      }

      function inferTimeFromExpirationTimeWithSuspenseConfig(expirationTime, suspenseConfig) {
        // We don't know exactly when the update was scheduled, but we can infer an
        // approximate start time from the expiration time by subtracting the timeout
        // that was added to the event time.
        var earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
        return earliestExpirationTimeMs - (suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION);
      } // The work loop is an extremely hot path. Tell Closure not to inline it.

      /** @noinline */

      function workLoopSync() {
        // Already timed out, so perform work without checking if we need to yield.
        while (workInProgress !== null) {
          workInProgress = performUnitOfWork(workInProgress);
        }
      }
      /** @noinline */

      function workLoopConcurrent() {
        // Perform work until Scheduler asks us to yield
        while (workInProgress !== null && !shouldYield()) {
          workInProgress = performUnitOfWork(workInProgress);
        }
      }

      function performUnitOfWork(unitOfWork) {
        // The current, flushed, state of this fiber is the alternate. Ideally
        // nothing should rely on this, but relying on it here means that we don't
        // need an additional field on the work in progress.
        var current = unitOfWork.alternate;
        startWorkTimer(unitOfWork);
        setCurrentFiber(unitOfWork);
        var next;

        if ((unitOfWork.mode & ProfileMode) !== NoMode) {
          startProfilerTimer(unitOfWork);
          next = beginWork$1(current, unitOfWork, renderExpirationTime$1);
          stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
        } else {
          next = beginWork$1(current, unitOfWork, renderExpirationTime$1);
        }

        resetCurrentFiber();
        unitOfWork.memoizedProps = unitOfWork.pendingProps;

        if (next === null) {
          // If this doesn't spawn new work, complete the current work.
          next = completeUnitOfWork(unitOfWork);
        }

        ReactCurrentOwner$2.current = null;
        return next;
      }

      function completeUnitOfWork(unitOfWork) {
        // Attempt to complete the current unit of work, then move to the next
        // sibling. If there are no more siblings, return to the parent fiber.
        workInProgress = unitOfWork;

        do {
          // The current, flushed, state of this fiber is the alternate. Ideally
          // nothing should rely on this, but relying on it here means that we don't
          // need an additional field on the work in progress.
          var current = workInProgress.alternate;
          var returnFiber = workInProgress.return; // Check if the work completed or if something threw.

          if ((workInProgress.effectTag & Incomplete) === NoEffect) {
            setCurrentFiber(workInProgress);
            var next = void 0;

            if ((workInProgress.mode & ProfileMode) === NoMode) {
              next = completeWork(current, workInProgress, renderExpirationTime$1);
            } else {
              startProfilerTimer(workInProgress);
              next = completeWork(current, workInProgress, renderExpirationTime$1); // Update render duration assuming we didn't error.

              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, false);
            }

            stopWorkTimer(workInProgress);
            resetCurrentFiber();
            resetChildExpirationTime(workInProgress);

            if (next !== null) {
              // Completing this fiber spawned new work. Work on that next.
              return next;
            }

            if (
              returnFiber !== null && // Do not append effects to parents if a sibling failed to complete
              (returnFiber.effectTag & Incomplete) === NoEffect
            ) {
              // Append all the effects of the subtree and this fiber onto the effect
              // list of the parent. The completion order of the children affects the
              // side-effect order.
              if (returnFiber.firstEffect === null) {
                returnFiber.firstEffect = workInProgress.firstEffect;
              }

              if (workInProgress.lastEffect !== null) {
                if (returnFiber.lastEffect !== null) {
                  returnFiber.lastEffect.nextEffect = workInProgress.firstEffect;
                }

                returnFiber.lastEffect = workInProgress.lastEffect;
              } // If this fiber had side-effects, we append it AFTER the children's
              // side-effects. We can perform certain side-effects earlier if needed,
              // by doing multiple passes over the effect list. We don't want to
              // schedule our own side-effect on our own list because if end up
              // reusing children we'll schedule this effect onto itself since we're
              // at the end.

              var effectTag = workInProgress.effectTag; // Skip both NoWork and PerformedWork tags when creating the effect
              // list. PerformedWork effect is read by React DevTools but shouldn't be
              // committed.

              if (effectTag > PerformedWork) {
                if (returnFiber.lastEffect !== null) {
                  returnFiber.lastEffect.nextEffect = workInProgress;
                } else {
                  returnFiber.firstEffect = workInProgress;
                }

                returnFiber.lastEffect = workInProgress;
              }
            }
          } else {
            // This fiber did not complete because something threw. Pop values off
            // the stack without entering the complete phase. If this is a boundary,
            // capture values if possible.
            var _next = unwindWork(workInProgress); // Because this fiber did not complete, don't reset its expiration time.

            if ((workInProgress.mode & ProfileMode) !== NoMode) {
              // Record the render duration for the fiber that errored.
              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, false); // Include the time spent working on failed children before continuing.

              var actualDuration = workInProgress.actualDuration;
              var child = workInProgress.child;

              while (child !== null) {
                actualDuration += child.actualDuration;
                child = child.sibling;
              }

              workInProgress.actualDuration = actualDuration;
            }

            if (_next !== null) {
              // If completing this work spawned new work, do that next. We'll come
              // back here again.
              // Since we're restarting, remove anything that is not a host effect
              // from the effect tag.
              // TODO: The name stopFailedWorkTimer is misleading because Suspense
              // also captures and restarts.
              stopFailedWorkTimer(workInProgress);
              _next.effectTag &= HostEffectMask;
              return _next;
            }

            stopWorkTimer(workInProgress);

            if (returnFiber !== null) {
              // Mark the parent fiber as incomplete and clear its effect list.
              returnFiber.firstEffect = returnFiber.lastEffect = null;
              returnFiber.effectTag |= Incomplete;
            }
          }

          var siblingFiber = workInProgress.sibling;

          if (siblingFiber !== null) {
            // If there is more work to do in this returnFiber, do that next.
            return siblingFiber;
          } // Otherwise, return to the parent

          workInProgress = returnFiber;
        } while (workInProgress !== null); // We've reached the root.

        if (workInProgressRootExitStatus === RootIncomplete) {
          workInProgressRootExitStatus = RootCompleted;
        }

        return null;
      }

      function getRemainingExpirationTime(fiber) {
        var updateExpirationTime = fiber.expirationTime;
        var childExpirationTime = fiber.childExpirationTime;
        return updateExpirationTime > childExpirationTime ? updateExpirationTime : childExpirationTime;
      }

      function resetChildExpirationTime(completedWork) {
        if (renderExpirationTime$1 !== Never && completedWork.childExpirationTime === Never) {
          // The children of this component are hidden. Don't bubble their
          // expiration times.
          return;
        }

        var newChildExpirationTime = NoWork; // Bubble up the earliest expiration time.

        if ((completedWork.mode & ProfileMode) !== NoMode) {
          // In profiling mode, resetChildExpirationTime is also used to reset
          // profiler durations.
          var actualDuration = completedWork.actualDuration;
          var treeBaseDuration = completedWork.selfBaseDuration; // When a fiber is cloned, its actualDuration is reset to 0. This value will
          // only be updated if work is done on the fiber (i.e. it doesn't bailout).
          // When work is done, it should bubble to the parent's actualDuration. If
          // the fiber has not been cloned though, (meaning no work was done), then
          // this value will reflect the amount of time spent working on a previous
          // render. In that case it should not bubble. We determine whether it was
          // cloned by comparing the child pointer.

          var shouldBubbleActualDurations =
            completedWork.alternate === null || completedWork.child !== completedWork.alternate.child;
          var child = completedWork.child;

          while (child !== null) {
            var childUpdateExpirationTime = child.expirationTime;
            var childChildExpirationTime = child.childExpirationTime;

            if (childUpdateExpirationTime > newChildExpirationTime) {
              newChildExpirationTime = childUpdateExpirationTime;
            }

            if (childChildExpirationTime > newChildExpirationTime) {
              newChildExpirationTime = childChildExpirationTime;
            }

            if (shouldBubbleActualDurations) {
              actualDuration += child.actualDuration;
            }

            treeBaseDuration += child.treeBaseDuration;
            child = child.sibling;
          }

          completedWork.actualDuration = actualDuration;
          completedWork.treeBaseDuration = treeBaseDuration;
        } else {
          var _child = completedWork.child;

          while (_child !== null) {
            var _childUpdateExpirationTime = _child.expirationTime;
            var _childChildExpirationTime = _child.childExpirationTime;

            if (_childUpdateExpirationTime > newChildExpirationTime) {
              newChildExpirationTime = _childUpdateExpirationTime;
            }

            if (_childChildExpirationTime > newChildExpirationTime) {
              newChildExpirationTime = _childChildExpirationTime;
            }

            _child = _child.sibling;
          }
        }

        completedWork.childExpirationTime = newChildExpirationTime;
      }

      function commitRoot(root) {
        var renderPriorityLevel = getCurrentPriorityLevel();
        runWithPriority(ImmediatePriority, commitRootImpl.bind(null, root, renderPriorityLevel));
        return null;
      }

      function commitRootImpl(root, renderPriorityLevel) {
        do {
          // `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
          // means `flushPassiveEffects` will sometimes result in additional
          // passive effects. So we need to keep flushing in a loop until there are
          // no more pending effects.
          // TODO: Might be better if `flushPassiveEffects` did not automatically
          // flush synchronous work at the end, to avoid factoring hazards like this.
          flushPassiveEffects();
        } while (rootWithPendingPassiveEffects !== null);

        flushRenderPhaseStrictModeWarningsInDEV();

        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
          {
            throw Error('Should not already be working.');
          }
        }

        var finishedWork = root.finishedWork;
        var expirationTime = root.finishedExpirationTime;

        if (finishedWork === null) {
          return null;
        }

        root.finishedWork = null;
        root.finishedExpirationTime = NoWork;

        if (!(finishedWork !== root.current)) {
          {
            throw Error(
              'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
            );
          }
        } // commitRoot never returns a continuation; it always finishes synchronously.
        // So we can clear these now to allow a new callback to be scheduled.

        root.callbackNode = null;
        root.callbackExpirationTime = NoWork;
        root.callbackPriority = NoPriority;
        root.nextKnownPendingLevel = NoWork;
        startCommitTimer(); // Update the first and last pending times on this root. The new first
        // pending time is whatever is left on the root fiber.

        var remainingExpirationTimeBeforeCommit = getRemainingExpirationTime(finishedWork);
        markRootFinishedAtTime(root, expirationTime, remainingExpirationTimeBeforeCommit);

        if (root === workInProgressRoot) {
          // We can reset these now that they are finished.
          workInProgressRoot = null;
          workInProgress = null;
          renderExpirationTime$1 = NoWork;
        } // This indicates that the last root we worked on is not the same one that
        // we're committing now. This most commonly happens when a suspended root
        // times out.
        // Get the list of effects.

        var firstEffect;

        if (finishedWork.effectTag > PerformedWork) {
          // A fiber's effect list consists only of its children, not itself. So if
          // the root has an effect, we need to add it to the end of the list. The
          // resulting list is the set that would belong to the root's parent, if it
          // had one; that is, all the effects in the tree including the root.
          if (finishedWork.lastEffect !== null) {
            finishedWork.lastEffect.nextEffect = finishedWork;
            firstEffect = finishedWork.firstEffect;
          } else {
            firstEffect = finishedWork;
          }
        } else {
          // There is no effect on the root.
          firstEffect = finishedWork.firstEffect;
        }

        if (firstEffect !== null) {
          var prevExecutionContext = executionContext;
          executionContext |= CommitContext;
          var prevInteractions = pushInteractions(root); // Reset this to null before calling lifecycles

          ReactCurrentOwner$2.current = null; // The commit phase is broken into several sub-phases. We do a separate pass
          // of the effect list for each phase: all mutation effects come before all
          // layout effects, and so on.
          // The first phase a "before mutation" phase. We use this phase to read the
          // state of the host tree right before we mutate it. This is where
          // getSnapshotBeforeUpdate is called.

          startCommitSnapshotEffectsTimer();
          prepareForCommit(root.containerInfo);
          nextEffect = firstEffect;

          do {
            {
              invokeGuardedCallback(null, commitBeforeMutationEffects, null);

              if (hasCaughtError()) {
                if (!(nextEffect !== null)) {
                  {
                    throw Error('Should be working on an effect.');
                  }
                }

                var error = clearCaughtError();
                captureCommitPhaseError(nextEffect, error);
                nextEffect = nextEffect.nextEffect;
              }
            }
          } while (nextEffect !== null);

          stopCommitSnapshotEffectsTimer();

          {
            // Mark the current commit time to be shared by all Profilers in this
            // batch. This enables them to be grouped later.
            recordCommitTime();
          } // The next phase is the mutation phase, where we mutate the host tree.

          startCommitHostEffectsTimer();
          nextEffect = firstEffect;

          do {
            {
              invokeGuardedCallback(null, commitMutationEffects, null, root, renderPriorityLevel);

              if (hasCaughtError()) {
                if (!(nextEffect !== null)) {
                  {
                    throw Error('Should be working on an effect.');
                  }
                }

                var _error = clearCaughtError();

                captureCommitPhaseError(nextEffect, _error);
                nextEffect = nextEffect.nextEffect;
              }
            }
          } while (nextEffect !== null);

          stopCommitHostEffectsTimer();
          resetAfterCommit(root.containerInfo); // The work-in-progress tree is now the current tree. This must come after
          // the mutation phase, so that the previous tree is still current during
          // componentWillUnmount, but before the layout phase, so that the finished
          // work is current during componentDidMount/Update.

          root.current = finishedWork; // The next phase is the layout phase, where we call effects that read
          // the host tree after it's been mutated. The idiomatic use case for this is
          // layout, but class component lifecycles also fire here for legacy reasons.

          startCommitLifeCyclesTimer();
          nextEffect = firstEffect;

          do {
            {
              invokeGuardedCallback(null, commitLayoutEffects, null, root, expirationTime);

              if (hasCaughtError()) {
                if (!(nextEffect !== null)) {
                  {
                    throw Error('Should be working on an effect.');
                  }
                }

                var _error2 = clearCaughtError();

                captureCommitPhaseError(nextEffect, _error2);
                nextEffect = nextEffect.nextEffect;
              }
            }
          } while (nextEffect !== null);

          stopCommitLifeCyclesTimer();
          nextEffect = null; // Tell Scheduler to yield at the end of the frame, so the browser has an
          // opportunity to paint.

          requestPaint();

          {
            popInteractions(prevInteractions);
          }

          executionContext = prevExecutionContext;
        } else {
          // No effects.
          root.current = finishedWork; // Measure these anyway so the flamegraph explicitly shows that there were
          // no effects.
          // TODO: Maybe there's a better way to report this.

          startCommitSnapshotEffectsTimer();
          stopCommitSnapshotEffectsTimer();

          {
            recordCommitTime();
          }

          startCommitHostEffectsTimer();
          stopCommitHostEffectsTimer();
          startCommitLifeCyclesTimer();
          stopCommitLifeCyclesTimer();
        }

        stopCommitTimer();
        var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;

        if (rootDoesHavePassiveEffects) {
          // This commit has passive effects. Stash a reference to them. But don't
          // schedule a callback until after flushing layout work.
          rootDoesHavePassiveEffects = false;
          rootWithPendingPassiveEffects = root;
          pendingPassiveEffectsExpirationTime = expirationTime;
          pendingPassiveEffectsRenderPriority = renderPriorityLevel;
        } else {
          // We are done with the effect chain at this point so let's clear the
          // nextEffect pointers to assist with GC. If we have passive effects, we'll
          // clear this in flushPassiveEffects.
          nextEffect = firstEffect;

          while (nextEffect !== null) {
            var nextNextEffect = nextEffect.nextEffect;
            nextEffect.nextEffect = null;
            nextEffect = nextNextEffect;
          }
        } // Check if there's remaining work on this root

        var remainingExpirationTime = root.firstPendingTime;

        if (remainingExpirationTime !== NoWork) {
          {
            if (spawnedWorkDuringRender !== null) {
              var expirationTimes = spawnedWorkDuringRender;
              spawnedWorkDuringRender = null;

              for (var i = 0; i < expirationTimes.length; i++) {
                scheduleInteractions(root, expirationTimes[i], root.memoizedInteractions);
              }
            }

            schedulePendingInteractions(root, remainingExpirationTime);
          }
        } else {
          // If there's no remaining work, we can clear the set of already failed
          // error boundaries.
          legacyErrorBoundariesThatAlreadyFailed = null;
        }

        {
          if (!rootDidHavePassiveEffects) {
            // If there are no passive effects, then we can complete the pending interactions.
            // Otherwise, we'll wait until after the passive effects are flushed.
            // Wait to do this until after remaining work has been scheduled,
            // so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
            finishPendingInteractions(root, expirationTime);
          }
        }

        if (remainingExpirationTime === Sync) {
          // Count the number of times the root synchronously re-renders without
          // finishing. If there are too many, it indicates an infinite update loop.
          if (root === rootWithNestedUpdates) {
            nestedUpdateCount++;
          } else {
            nestedUpdateCount = 0;
            rootWithNestedUpdates = root;
          }
        } else {
          nestedUpdateCount = 0;
        }

        onCommitRoot(finishedWork.stateNode, expirationTime); // Always call this before exiting `commitRoot`, to ensure that any
        // additional work on this root is scheduled.

        ensureRootIsScheduled(root);

        if (hasUncaughtError) {
          hasUncaughtError = false;
          var _error3 = firstUncaughtError;
          firstUncaughtError = null;
          throw _error3;
        }

        if ((executionContext & LegacyUnbatchedContext) !== NoContext) {
          // This is a legacy edge case. We just committed the initial mount of
          // a ReactDOM.render-ed root inside of batchedUpdates. The commit fired
          // synchronously, but layout updates should be deferred until the end
          // of the batch.
          return null;
        } // If layout work was scheduled, flush it now.

        flushSyncCallbackQueue();
        return null;
      }

      function commitBeforeMutationEffects() {
        while (nextEffect !== null) {
          var effectTag = nextEffect.effectTag;

          if ((effectTag & Snapshot) !== NoEffect) {
            setCurrentFiber(nextEffect);
            recordEffect();
            var current = nextEffect.alternate;
            commitBeforeMutationLifeCycles(current, nextEffect);
            resetCurrentFiber();
          }

          if ((effectTag & Passive) !== NoEffect) {
            // If there are passive effects, schedule a callback to flush at
            // the earliest opportunity.
            if (!rootDoesHavePassiveEffects) {
              rootDoesHavePassiveEffects = true;
              scheduleCallback(NormalPriority, function () {
                flushPassiveEffects();
                return null;
              });
            }
          }

          nextEffect = nextEffect.nextEffect;
        }
      }

      function commitMutationEffects(root, renderPriorityLevel) {
        // TODO: Should probably move the bulk of this function to commitWork.
        while (nextEffect !== null) {
          setCurrentFiber(nextEffect);
          var effectTag = nextEffect.effectTag;

          if (effectTag & ContentReset) {
            commitResetTextContent(nextEffect);
          }

          if (effectTag & Ref) {
            var current = nextEffect.alternate;

            if (current !== null) {
              commitDetachRef(current);
            }
          } // The following switch statement is only concerned about placement,
          // updates, and deletions. To avoid needing to add a case for every possible
          // bitmap value, we remove the secondary effects from the effect tag and
          // switch on that value.

          var primaryEffectTag = effectTag & (Placement | Update | Deletion | Hydrating);

          switch (primaryEffectTag) {
            case Placement: {
              commitPlacement(nextEffect); // Clear the "placement" from effect tag so that we know that this is
              // inserted, before any life-cycles like componentDidMount gets called.
              // TODO: findDOMNode doesn't rely on this any more but isMounted does
              // and isMounted is deprecated anyway so we should be able to kill this.

              nextEffect.effectTag &= ~Placement;
              break;
            }

            case PlacementAndUpdate: {
              // Placement
              commitPlacement(nextEffect); // Clear the "placement" from effect tag so that we know that this is
              // inserted, before any life-cycles like componentDidMount gets called.

              nextEffect.effectTag &= ~Placement; // Update

              var _current = nextEffect.alternate;
              commitWork(_current, nextEffect);
              break;
            }

            case Hydrating: {
              nextEffect.effectTag &= ~Hydrating;
              break;
            }

            case HydratingAndUpdate: {
              nextEffect.effectTag &= ~Hydrating; // Update

              var _current2 = nextEffect.alternate;
              commitWork(_current2, nextEffect);
              break;
            }

            case Update: {
              var _current3 = nextEffect.alternate;
              commitWork(_current3, nextEffect);
              break;
            }

            case Deletion: {
              commitDeletion(root, nextEffect, renderPriorityLevel);
              break;
            }
          } // TODO: Only record a mutation effect if primaryEffectTag is non-zero.

          recordEffect();
          resetCurrentFiber();
          nextEffect = nextEffect.nextEffect;
        }
      }

      function commitLayoutEffects(root, committedExpirationTime) {
        // TODO: Should probably move the bulk of this function to commitWork.
        while (nextEffect !== null) {
          setCurrentFiber(nextEffect);
          var effectTag = nextEffect.effectTag;

          if (effectTag & (Update | Callback)) {
            recordEffect();
            var current = nextEffect.alternate;
            commitLifeCycles(root, current, nextEffect);
          }

          if (effectTag & Ref) {
            recordEffect();
            commitAttachRef(nextEffect);
          }

          resetCurrentFiber();
          nextEffect = nextEffect.nextEffect;
        }
      }

      function flushPassiveEffects() {
        if (pendingPassiveEffectsRenderPriority !== NoPriority) {
          var priorityLevel =
            pendingPassiveEffectsRenderPriority > NormalPriority ? NormalPriority : pendingPassiveEffectsRenderPriority;
          pendingPassiveEffectsRenderPriority = NoPriority;
          return runWithPriority(priorityLevel, flushPassiveEffectsImpl);
        }
      }

      function flushPassiveEffectsImpl() {
        if (rootWithPendingPassiveEffects === null) {
          return false;
        }

        var root = rootWithPendingPassiveEffects;
        var expirationTime = pendingPassiveEffectsExpirationTime;
        rootWithPendingPassiveEffects = null;
        pendingPassiveEffectsExpirationTime = NoWork;

        if (!((executionContext & (RenderContext | CommitContext)) === NoContext)) {
          {
            throw Error('Cannot flush passive effects while already rendering.');
          }
        }

        var prevExecutionContext = executionContext;
        executionContext |= CommitContext;
        var prevInteractions = pushInteractions(root);

        {
          // Note: This currently assumes there are no passive effects on the root fiber
          // because the root is not part of its own effect list.
          // This could change in the future.
          var _effect2 = root.current.firstEffect;

          while (_effect2 !== null) {
            {
              setCurrentFiber(_effect2);
              invokeGuardedCallback(null, commitPassiveHookEffects, null, _effect2);

              if (hasCaughtError()) {
                if (!(_effect2 !== null)) {
                  {
                    throw Error('Should be working on an effect.');
                  }
                }

                var _error5 = clearCaughtError();

                captureCommitPhaseError(_effect2, _error5);
              }

              resetCurrentFiber();
            }

            var nextNextEffect = _effect2.nextEffect; // Remove nextEffect pointer to assist GC

            _effect2.nextEffect = null;
            _effect2 = nextNextEffect;
          }
        }

        {
          popInteractions(prevInteractions);
          finishPendingInteractions(root, expirationTime);
        }

        executionContext = prevExecutionContext;
        flushSyncCallbackQueue(); // If additional passive effects were scheduled, increment a counter. If this
        // exceeds the limit, we'll fire a warning.

        nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;
        return true;
      }

      function isAlreadyFailedLegacyErrorBoundary(instance) {
        return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
      }
      function markLegacyErrorBoundaryAsFailed(instance) {
        if (legacyErrorBoundariesThatAlreadyFailed === null) {
          legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
        } else {
          legacyErrorBoundariesThatAlreadyFailed.add(instance);
        }
      }

      function prepareToThrowUncaughtError(error) {
        if (!hasUncaughtError) {
          hasUncaughtError = true;
          firstUncaughtError = error;
        }
      }

      var onUncaughtError = prepareToThrowUncaughtError;

      function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
        var errorInfo = createCapturedValue(error, sourceFiber);
        var update = createRootErrorUpdate(rootFiber, errorInfo, Sync);
        enqueueUpdate(rootFiber, update);
        var root = markUpdateTimeFromFiberToRoot(rootFiber, Sync);

        if (root !== null) {
          ensureRootIsScheduled(root);
          schedulePendingInteractions(root, Sync);
        }
      }

      function captureCommitPhaseError(sourceFiber, error) {
        if (sourceFiber.tag === HostRoot) {
          // Error was thrown at the root. There is no parent, so the root
          // itself should capture it.
          captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
          return;
        }

        var fiber = sourceFiber.return;

        while (fiber !== null) {
          if (fiber.tag === HostRoot) {
            captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error);
            return;
          } else if (fiber.tag === ClassComponent) {
            var ctor = fiber.type;
            var instance = fiber.stateNode;

            if (
              typeof ctor.getDerivedStateFromError === 'function' ||
              (typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance))
            ) {
              var errorInfo = createCapturedValue(error, sourceFiber);
              var update = createClassErrorUpdate(
                fiber,
                errorInfo, // TODO: This is always sync
                Sync
              );
              enqueueUpdate(fiber, update);
              var root = markUpdateTimeFromFiberToRoot(fiber, Sync);

              if (root !== null) {
                ensureRootIsScheduled(root);
                schedulePendingInteractions(root, Sync);
              }

              return;
            }
          }

          fiber = fiber.return;
        }
      }
      function pingSuspendedRoot(root, thenable, suspendedTime) {
        var pingCache = root.pingCache;

        if (pingCache !== null) {
          // The thenable resolved, so we no longer need to memoize, because it will
          // never be thrown again.
          pingCache.delete(thenable);
        }

        if (workInProgressRoot === root && renderExpirationTime$1 === suspendedTime) {
          // Received a ping at the same priority level at which we're currently
          // rendering. We might want to restart this render. This should mirror
          // the logic of whether or not a root suspends once it completes.
          // TODO: If we're rendering sync either due to Sync, Batched or expired,
          // we should probably never restart.
          // If we're suspended with delay, we'll always suspend so we can always
          // restart. If we're suspended without any updates, it might be a retry.
          // If it's early in the retry we can restart. We can't know for sure
          // whether we'll eventually process an update during this render pass,
          // but it's somewhat unlikely that we get to a ping before that, since
          // getting to the root most update is usually very fast.
          if (
            workInProgressRootExitStatus === RootSuspendedWithDelay ||
            (workInProgressRootExitStatus === RootSuspended &&
              workInProgressRootLatestProcessedExpirationTime === Sync &&
              now$1() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS)
          ) {
            // Restart from the root. Don't need to schedule a ping because
            // we're already working on this tree.
            prepareFreshStack(root, renderExpirationTime$1);
          } else {
            // Even though we can't restart right now, we might get an
            // opportunity later. So we mark this render as having a ping.
            workInProgressRootHasPendingPing = true;
          }

          return;
        }

        if (!isRootSuspendedAtTime(root, suspendedTime)) {
          // The root is no longer suspended at this time.
          return;
        }

        var lastPingedTime = root.lastPingedTime;

        if (lastPingedTime !== NoWork && lastPingedTime < suspendedTime) {
          // There's already a lower priority ping scheduled.
          return;
        } // Mark the time at which this ping was scheduled.

        root.lastPingedTime = suspendedTime;

        ensureRootIsScheduled(root);
        schedulePendingInteractions(root, suspendedTime);
      }

      function retryTimedOutBoundary(boundaryFiber, retryTime) {
        // The boundary fiber (a Suspense component or SuspenseList component)
        // previously was rendered in its fallback state. One of the promises that
        // suspended it has resolved, which means at least part of the tree was
        // likely unblocked. Try rendering again, at a new expiration time.
        if (retryTime === NoWork) {
          var suspenseConfig = null; // Retries don't carry over the already committed update.

          var currentTime = requestCurrentTimeForUpdate();
          retryTime = computeExpirationForFiber(currentTime, boundaryFiber, suspenseConfig);
        } // TODO: Special case idle priority?

        var root = markUpdateTimeFromFiberToRoot(boundaryFiber, retryTime);

        if (root !== null) {
          ensureRootIsScheduled(root);
          schedulePendingInteractions(root, retryTime);
        }
      }
      function resolveRetryThenable(boundaryFiber, thenable) {
        var retryTime = NoWork; // Default

        var retryCache;

        {
          retryCache = boundaryFiber.stateNode;
        }

        if (retryCache !== null) {
          // The thenable resolved, so we no longer need to memoize, because it will
          // never be thrown again.
          retryCache.delete(thenable);
        }

        retryTimedOutBoundary(boundaryFiber, retryTime);
      } // Computes the next Just Noticeable Difference (JND) boundary.
      // The theory is that a person can't tell the difference between small differences in time.
      // Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
      // difference in the experience. However, waiting for longer might mean that we can avoid
      // showing an intermediate loading state. The longer we have already waited, the harder it
      // is to tell small differences in time. Therefore, the longer we've already waited,
      // the longer we can wait additionally. At some point we have to give up though.
      // We pick a train model where the next boundary commits at a consistent schedule.
      // These particular numbers are vague estimates. We expect to adjust them based on research.

      function jnd(timeElapsed) {
        return timeElapsed < 120
          ? 120
          : timeElapsed < 480
          ? 480
          : timeElapsed < 1080
          ? 1080
          : timeElapsed < 1920
          ? 1920
          : timeElapsed < 3000
          ? 3000
          : timeElapsed < 4320
          ? 4320
          : ceil(timeElapsed / 1960) * 1960;
      }

      function computeMsUntilSuspenseLoadingDelay(mostRecentEventTime, committedExpirationTime, suspenseConfig) {
        var busyMinDurationMs = suspenseConfig.busyMinDurationMs | 0;

        if (busyMinDurationMs <= 0) {
          return 0;
        }

        var busyDelayMs = suspenseConfig.busyDelayMs | 0; // Compute the time until this render pass would expire.

        var currentTimeMs = now$1();
        var eventTimeMs = inferTimeFromExpirationTimeWithSuspenseConfig(mostRecentEventTime, suspenseConfig);
        var timeElapsed = currentTimeMs - eventTimeMs;

        if (timeElapsed <= busyDelayMs) {
          // If we haven't yet waited longer than the initial delay, we don't
          // have to wait any additional time.
          return 0;
        }

        var msUntilTimeout = busyDelayMs + busyMinDurationMs - timeElapsed; // This is the value that is passed to `setTimeout`.

        return msUntilTimeout;
      }

      function checkForNestedUpdates() {
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
          nestedUpdateCount = 0;
          rootWithNestedUpdates = null;

          {
            {
              throw Error(
                'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
              );
            }
          }
        }

        {
          if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
            nestedPassiveUpdateCount = 0;

            error(
              'Maximum update depth exceeded. This can happen when a component ' +
                "calls setState inside useEffect, but useEffect either doesn't " +
                'have a dependency array, or one of the dependencies changes on ' +
                'every render.'
            );
          }
        }
      }

      function flushRenderPhaseStrictModeWarningsInDEV() {
        {
          ReactStrictModeWarnings.flushLegacyContextWarning();

          {
            ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
          }
        }
      }

      function stopFinishedWorkLoopTimer() {
        var didCompleteRoot = true;
        stopWorkLoopTimer(interruptedBy, didCompleteRoot);
        interruptedBy = null;
      }

      function stopInterruptedWorkLoopTimer() {
        // TODO: Track which fiber caused the interruption.
        var didCompleteRoot = false;
        stopWorkLoopTimer(interruptedBy, didCompleteRoot);
        interruptedBy = null;
      }

      function checkForInterruption(fiberThatReceivedUpdate, updateExpirationTime) {
        if (workInProgressRoot !== null && updateExpirationTime > renderExpirationTime$1) {
          interruptedBy = fiberThatReceivedUpdate;
        }
      }

      var didWarnStateUpdateForUnmountedComponent = null;

      function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
        {
          var tag = fiber.tag;

          if (
            tag !== HostRoot &&
            tag !== ClassComponent &&
            tag !== FunctionComponent &&
            tag !== ForwardRef &&
            tag !== MemoComponent &&
            tag !== SimpleMemoComponent &&
            tag !== Block
          ) {
            // Only warn for user-defined components, not internal ones like Suspense.
            return;
          }
          // the problematic code almost always lies inside that component.

          var componentName = getComponentName(fiber.type) || 'ReactComponent';

          if (didWarnStateUpdateForUnmountedComponent !== null) {
            if (didWarnStateUpdateForUnmountedComponent.has(componentName)) {
              return;
            }

            didWarnStateUpdateForUnmountedComponent.add(componentName);
          } else {
            didWarnStateUpdateForUnmountedComponent = new Set([componentName]);
          }

          error(
            "Can't perform a React state update on an unmounted component. This " +
              'is a no-op, but it indicates a memory leak in your application. To ' +
              'fix, cancel all subscriptions and asynchronous tasks in %s.%s',
            tag === ClassComponent ? 'the componentWillUnmount method' : 'a useEffect cleanup function',
            getStackByFiberInDevAndProd(fiber)
          );
        }
      }

      var beginWork$1;

      {
        var dummyFiber = null;

        beginWork$1 = function (current, unitOfWork, expirationTime) {
          // If a component throws an error, we replay it again in a synchronously
          // dispatched event, so that the debugger will treat it as an uncaught
          // error See ReactErrorUtils for more information.
          // Before entering the begin phase, copy the work-in-progress onto a dummy
          // fiber. If beginWork throws, we'll use this to reset the state.
          var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);

          try {
            return beginWork(current, unitOfWork, expirationTime);
          } catch (originalError) {
            if (
              originalError !== null &&
              typeof originalError === 'object' &&
              typeof originalError.then === 'function'
            ) {
              // Don't replay promises. Treat everything else like an error.
              throw originalError;
            } // Keep this code in sync with handleError; any changes here must have
            // corresponding changes there.

            resetContextDependencies();
            resetHooksAfterThrow(); // Don't reset current debug fiber, since we're about to work on the
            // same fiber again.
            // Unwind the failed stack frame

            unwindInterruptedWork(unitOfWork); // Restore the original properties of the fiber.

            assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);

            if (unitOfWork.mode & ProfileMode) {
              // Reset the profiler timer.
              startProfilerTimer(unitOfWork);
            } // Run beginWork again.

            invokeGuardedCallback(null, beginWork, null, current, unitOfWork, expirationTime);

            if (hasCaughtError()) {
              var replayError = clearCaughtError(); // `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
              // Rethrow this error instead of the original one.

              throw replayError;
            } else {
              // This branch is reachable if the render phase is impure.
              throw originalError;
            }
          }
        };
      }

      var didWarnAboutUpdateInRender = false;
      var didWarnAboutUpdateInRenderForAnotherComponent;

      {
        didWarnAboutUpdateInRenderForAnotherComponent = new Set();
      }

      function warnAboutRenderPhaseUpdatesInDEV(fiber) {
        {
          if (isRendering && (executionContext & RenderContext) !== NoContext) {
            switch (fiber.tag) {
              case FunctionComponent:
              case ForwardRef:
              case SimpleMemoComponent: {
                var renderingComponentName = (workInProgress && getComponentName(workInProgress.type)) || 'Unknown'; // Dedupe by the rendering component because it's the one that needs to be fixed.

                var dedupeKey = renderingComponentName;

                if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
                  didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
                  var setStateComponentName = getComponentName(fiber.type) || 'Unknown';

                  error(
                    'Cannot update a component (`%s`) while rendering a ' +
                      'different component (`%s`). To locate the bad setState() call inside `%s`, ' +
                      'follow the stack trace as described in https://fb.me/setstate-in-render',
                    setStateComponentName,
                    renderingComponentName,
                    renderingComponentName
                  );
                }

                break;
              }

              case ClassComponent: {
                if (!didWarnAboutUpdateInRender) {
                  error(
                    'Cannot update during an existing state transition (such as ' +
                      'within `render`). Render methods should be a pure ' +
                      'function of props and state.'
                  );

                  didWarnAboutUpdateInRender = true;
                }

                break;
              }
            }
          }
        }
      } // a 'shared' variable that changes when act() opens/closes in tests.

      var IsThisRendererActing = {
        current: false,
      };
      function warnIfNotScopedWithMatchingAct(fiber) {
        {
          if (
            warnsIfNotActing === true &&
            IsSomeRendererActing.current === true &&
            IsThisRendererActing.current !== true
          ) {
            error(
              "It looks like you're using the wrong act() around your test interactions.\n" +
                'Be sure to use the matching version of act() corresponding to your renderer:\n\n' +
                '// for react-dom:\n' +
                "import {act} from 'react-dom/test-utils';\n" +
                '// ...\n' +
                'act(() => ...);\n\n' +
                '// for react-test-renderer:\n' +
                "import TestRenderer from 'react-test-renderer';\n" +
                'const {act} = TestRenderer;\n' +
                '// ...\n' +
                'act(() => ...);' +
                '%s',
              getStackByFiberInDevAndProd(fiber)
            );
          }
        }
      }
      function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
        {
          if (
            warnsIfNotActing === true &&
            (fiber.mode & StrictMode) !== NoMode &&
            IsSomeRendererActing.current === false &&
            IsThisRendererActing.current === false
          ) {
            error(
              'An update to %s ran an effect, but was not wrapped in act(...).\n\n' +
                'When testing, code that causes React state updates should be ' +
                'wrapped into act(...):\n\n' +
                'act(() => {\n' +
                '  /* fire events that update state */\n' +
                '});\n' +
                '/* assert on the output */\n\n' +
                "This ensures that you're testing the behavior the user would see " +
                'in the browser.' +
                ' Learn more at https://fb.me/react-wrap-tests-with-act' +
                '%s',
              getComponentName(fiber.type),
              getStackByFiberInDevAndProd(fiber)
            );
          }
        }
      }

      function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
        {
          if (
            warnsIfNotActing === true &&
            executionContext === NoContext &&
            IsSomeRendererActing.current === false &&
            IsThisRendererActing.current === false
          ) {
            error(
              'An update to %s inside a test was not wrapped in act(...).\n\n' +
                'When testing, code that causes React state updates should be ' +
                'wrapped into act(...):\n\n' +
                'act(() => {\n' +
                '  /* fire events that update state */\n' +
                '});\n' +
                '/* assert on the output */\n\n' +
                "This ensures that you're testing the behavior the user would see " +
                'in the browser.' +
                ' Learn more at https://fb.me/react-wrap-tests-with-act' +
                '%s',
              getComponentName(fiber.type),
              getStackByFiberInDevAndProd(fiber)
            );
          }
        }
      }

      var warnIfNotCurrentlyActingUpdatesInDev = warnIfNotCurrentlyActingUpdatesInDEV; // In tests, we want to enforce a mocked scheduler.

      var didWarnAboutUnmockedScheduler = false; // TODO Before we release concurrent mode, revisit this and decide whether a mocked
      // scheduler is the actual recommendation. The alternative could be a testing build,
      // a new lib, or whatever; we dunno just yet. This message is for early adopters
      // to get their tests right.

      function warnIfUnmockedScheduler(fiber) {
        {
          if (didWarnAboutUnmockedScheduler === false && Scheduler.unstable_flushAllWithoutAsserting === undefined) {
            if (fiber.mode & BlockingMode || fiber.mode & ConcurrentMode) {
              didWarnAboutUnmockedScheduler = true;

              error(
                'In Concurrent or Sync modes, the "scheduler" module needs to be mocked ' +
                  'to guarantee consistent behaviour across tests and browsers. ' +
                  'For example, with jest: \n' +
                  "jest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\n" +
                  'For more info, visit https://fb.me/react-mock-scheduler'
              );
            }
          }
        }
      }

      function computeThreadID(root, expirationTime) {
        // Interaction threads are unique per root and expiration time.
        return expirationTime * 1000 + root.interactionThreadID;
      }

      function markSpawnedWork(expirationTime) {
        if (spawnedWorkDuringRender === null) {
          spawnedWorkDuringRender = [expirationTime];
        } else {
          spawnedWorkDuringRender.push(expirationTime);
        }
      }

      function scheduleInteractions(root, expirationTime, interactions) {
        if (interactions.size > 0) {
          var pendingInteractionMap = root.pendingInteractionMap;
          var pendingInteractions = pendingInteractionMap.get(expirationTime);

          if (pendingInteractions != null) {
            interactions.forEach(function (interaction) {
              if (!pendingInteractions.has(interaction)) {
                // Update the pending async work count for previously unscheduled interaction.
                interaction.__count++;
              }

              pendingInteractions.add(interaction);
            });
          } else {
            pendingInteractionMap.set(expirationTime, new Set(interactions)); // Update the pending async work count for the current interactions.

            interactions.forEach(function (interaction) {
              interaction.__count++;
            });
          }

          var subscriber = tracing$1.__subscriberRef.current;

          if (subscriber !== null) {
            var threadID = computeThreadID(root, expirationTime);
            subscriber.onWorkScheduled(interactions, threadID);
          }
        }
      }

      function schedulePendingInteractions(root, expirationTime) {
        scheduleInteractions(root, expirationTime, tracing$1.__interactionsRef.current);
      }

      function startWorkOnPendingInteractions(root, expirationTime) {
        // we can accurately attribute time spent working on it, And so that cascading
        // work triggered during the render phase will be associated with it.

        var interactions = new Set();
        root.pendingInteractionMap.forEach(function (scheduledInteractions, scheduledExpirationTime) {
          if (scheduledExpirationTime >= expirationTime) {
            scheduledInteractions.forEach(function (interaction) {
              return interactions.add(interaction);
            });
          }
        }); // Store the current set of interactions on the FiberRoot for a few reasons:
        // We can re-use it in hot functions like performConcurrentWorkOnRoot()
        // without having to recalculate it. We will also use it in commitWork() to
        // pass to any Profiler onRender() hooks. This also provides DevTools with a
        // way to access it when the onCommitRoot() hook is called.

        root.memoizedInteractions = interactions;

        if (interactions.size > 0) {
          var subscriber = tracing$1.__subscriberRef.current;

          if (subscriber !== null) {
            var threadID = computeThreadID(root, expirationTime);

            try {
              subscriber.onWorkStarted(interactions, threadID);
            } catch (error) {
              // If the subscriber throws, rethrow it in a separate task
              scheduleCallback(ImmediatePriority, function () {
                throw error;
              });
            }
          }
        }
      }

      function finishPendingInteractions(root, committedExpirationTime) {
        var earliestRemainingTimeAfterCommit = root.firstPendingTime;
        var subscriber;

        try {
          subscriber = tracing$1.__subscriberRef.current;

          if (subscriber !== null && root.memoizedInteractions.size > 0) {
            var threadID = computeThreadID(root, committedExpirationTime);
            subscriber.onWorkStopped(root.memoizedInteractions, threadID);
          }
        } catch (error) {
          // If the subscriber throws, rethrow it in a separate task
          scheduleCallback(ImmediatePriority, function () {
            throw error;
          });
        } finally {
          // Clear completed interactions from the pending Map.
          // Unless the render was suspended or cascading work was scheduled,
          // In which case– leave pending interactions until the subsequent render.
          var pendingInteractionMap = root.pendingInteractionMap;
          pendingInteractionMap.forEach(function (scheduledInteractions, scheduledExpirationTime) {
            // Only decrement the pending interaction count if we're done.
            // If there's still work at the current priority,
            // That indicates that we are waiting for suspense data.
            if (scheduledExpirationTime > earliestRemainingTimeAfterCommit) {
              pendingInteractionMap.delete(scheduledExpirationTime);
              scheduledInteractions.forEach(function (interaction) {
                interaction.__count--;

                if (subscriber !== null && interaction.__count === 0) {
                  try {
                    subscriber.onInteractionScheduledWorkCompleted(interaction);
                  } catch (error) {
                    // If the subscriber throws, rethrow it in a separate task
                    scheduleCallback(ImmediatePriority, function () {
                      throw error;
                    });
                  }
                }
              });
            }
          });
        }
      }

      var onScheduleFiberRoot = null;
      var onCommitFiberRoot = null;
      var onCommitFiberUnmount = null;
      var hasLoggedError = false;
      var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined';
      function injectInternals(internals) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
          // No DevTools
          return false;
        }

        var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;

        if (hook.isDisabled) {
          // This isn't a real property on the hook, but it can be set to opt out
          // of DevTools integration and associated warnings and logs.
          // https://github.com/facebook/react/issues/3877
          return true;
        }

        if (!hook.supportsFiber) {
          {
            error(
              'The installed version of React DevTools is too old and will not work ' +
                'with the current version of React. Please update React DevTools. ' +
                'https://fb.me/react-devtools'
            );
          } // DevTools exists, even though it doesn't support Fiber.

          return true;
        }

        try {
          var rendererID = hook.inject(internals); // We have successfully injected, so now it is safe to set up hooks.

          if (true) {
            // Only used by Fast Refresh
            if (typeof hook.onScheduleFiberRoot === 'function') {
              onScheduleFiberRoot = function (root, children) {
                try {
                  hook.onScheduleFiberRoot(rendererID, root, children);
                } catch (err) {
                  if (true && !hasLoggedError) {
                    hasLoggedError = true;

                    error('React instrumentation encountered an error: %s', err);
                  }
                }
              };
            }
          }

          onCommitFiberRoot = function (root, expirationTime) {
            try {
              var didError = (root.current.effectTag & DidCapture) === DidCapture;

              if (enableProfilerTimer) {
                var currentTime = getCurrentTime();
                var priorityLevel = inferPriorityFromExpirationTime(currentTime, expirationTime);
                hook.onCommitFiberRoot(rendererID, root, priorityLevel, didError);
              } else {
                hook.onCommitFiberRoot(rendererID, root, undefined, didError);
              }
            } catch (err) {
              if (true) {
                if (!hasLoggedError) {
                  hasLoggedError = true;

                  error('React instrumentation encountered an error: %s', err);
                }
              }
            }
          };

          onCommitFiberUnmount = function (fiber) {
            try {
              hook.onCommitFiberUnmount(rendererID, fiber);
            } catch (err) {
              if (true) {
                if (!hasLoggedError) {
                  hasLoggedError = true;

                  error('React instrumentation encountered an error: %s', err);
                }
              }
            }
          };
        } catch (err) {
          // Catch all errors because it is unsafe to throw during initialization.
          {
            error('React instrumentation encountered an error: %s.', err);
          }
        } // DevTools exists

        return true;
      }
      function onScheduleRoot(root, children) {
        if (typeof onScheduleFiberRoot === 'function') {
          onScheduleFiberRoot(root, children);
        }
      }
      function onCommitRoot(root, expirationTime) {
        if (typeof onCommitFiberRoot === 'function') {
          onCommitFiberRoot(root, expirationTime);
        }
      }
      function onCommitUnmount(fiber) {
        if (typeof onCommitFiberUnmount === 'function') {
          onCommitFiberUnmount(fiber);
        }
      }

      var hasBadMapPolyfill;

      {
        hasBadMapPolyfill = false;

        try {
          var nonExtensibleObject = Object.preventExtensions({});
          var testMap = new Map([[nonExtensibleObject, null]]);
          var testSet = new Set([nonExtensibleObject]); // This is necessary for Rollup to not consider these unused.
          // https://github.com/rollup/rollup/issues/1771
          // TODO: we can remove these if Rollup fixes the bug.

          testMap.set(0, 0);
          testSet.add(0);
        } catch (e) {
          // TODO: Consider warning about bad polyfills
          hasBadMapPolyfill = true;
        }
      }

      var debugCounter = 1;

      function FiberNode(tag, pendingProps, key, mode) {
        // Instance
        this.tag = tag;
        this.key = key;
        this.elementType = null;
        this.type = null;
        this.stateNode = null; // Fiber

        this.return = null;
        this.child = null;
        this.sibling = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = pendingProps;
        this.memoizedProps = null;
        this.updateQueue = null;
        this.memoizedState = null;
        this.dependencies = null;
        this.mode = mode; // Effects

        this.effectTag = NoEffect;
        this.nextEffect = null;
        this.firstEffect = null;
        this.lastEffect = null;
        this.expirationTime = NoWork;
        this.childExpirationTime = NoWork;
        this.alternate = null;

        {
          // Note: The following is done to avoid a v8 performance cliff.
          //
          // Initializing the fields below to smis and later updating them with
          // double values will cause Fibers to end up having separate shapes.
          // This behavior/bug has something to do with Object.preventExtension().
          // Fortunately this only impacts DEV builds.
          // Unfortunately it makes React unusably slow for some applications.
          // To work around this, initialize the fields below with doubles.
          //
          // Learn more about this here:
          // https://github.com/facebook/react/issues/14365
          // https://bugs.chromium.org/p/v8/issues/detail?id=8538
          this.actualDuration = Number.NaN;
          this.actualStartTime = Number.NaN;
          this.selfBaseDuration = Number.NaN;
          this.treeBaseDuration = Number.NaN; // It's okay to replace the initial doubles with smis after initialization.
          // This won't trigger the performance cliff mentioned above,
          // and it simplifies other profiler code (including DevTools).

          this.actualDuration = 0;
          this.actualStartTime = -1;
          this.selfBaseDuration = 0;
          this.treeBaseDuration = 0;
        } // This is normally DEV-only except www when it adds listeners.
        // TODO: remove the User Timing integration in favor of Root Events.

        {
          this._debugID = debugCounter++;
          this._debugIsCurrentlyTiming = false;
        }

        {
          this._debugSource = null;
          this._debugOwner = null;
          this._debugNeedsRemount = false;
          this._debugHookTypes = null;

          if (!hasBadMapPolyfill && typeof Object.preventExtensions === 'function') {
            Object.preventExtensions(this);
          }
        }
      } // This is a constructor function, rather than a POJO constructor, still
      // please ensure we do the following:
      // 1) Nobody should add any instance methods on this. Instance methods can be
      //    more difficult to predict when they get optimized and they are almost
      //    never inlined properly in static compilers.
      // 2) Nobody should rely on `instanceof Fiber` for type testing. We should
      //    always know when it is a fiber.
      // 3) We might want to experiment with using numeric keys since they are easier
      //    to optimize in a non-JIT environment.
      // 4) We can easily go from a constructor to a createFiber object literal if that
      //    is faster.
      // 5) It should be easy to port this to a C struct and keep a C implementation
      //    compatible.

      var createFiber = function (tag, pendingProps, key, mode) {
        // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
        return new FiberNode(tag, pendingProps, key, mode);
      };

      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }

      function isSimpleFunctionComponent(type) {
        return typeof type === 'function' && !shouldConstruct(type) && type.defaultProps === undefined;
      }
      function resolveLazyComponentTag(Component) {
        if (typeof Component === 'function') {
          return shouldConstruct(Component) ? ClassComponent : FunctionComponent;
        } else if (Component !== undefined && Component !== null) {
          var $$typeof = Component.$$typeof;

          if ($$typeof === REACT_FORWARD_REF_TYPE) {
            return ForwardRef;
          }

          if ($$typeof === REACT_MEMO_TYPE) {
            return MemoComponent;
          }
        }

        return IndeterminateComponent;
      } // This is used to create an alternate fiber to do work on.

      function createWorkInProgress(current, pendingProps) {
        var workInProgress = current.alternate;

        if (workInProgress === null) {
          // We use a double buffering pooling technique because we know that we'll
          // only ever need at most two versions of a tree. We pool the "other" unused
          // node that we're free to reuse. This is lazily created to avoid allocating
          // extra objects for things that are never updated. It also allow us to
          // reclaim the extra memory if needed.
          workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);
          workInProgress.elementType = current.elementType;
          workInProgress.type = current.type;
          workInProgress.stateNode = current.stateNode;

          {
            // DEV-only fields
            {
              workInProgress._debugID = current._debugID;
            }

            workInProgress._debugSource = current._debugSource;
            workInProgress._debugOwner = current._debugOwner;
            workInProgress._debugHookTypes = current._debugHookTypes;
          }

          workInProgress.alternate = current;
          current.alternate = workInProgress;
        } else {
          workInProgress.pendingProps = pendingProps; // We already have an alternate.
          // Reset the effect tag.

          workInProgress.effectTag = NoEffect; // The effect list is no longer valid.

          workInProgress.nextEffect = null;
          workInProgress.firstEffect = null;
          workInProgress.lastEffect = null;

          {
            // We intentionally reset, rather than copy, actualDuration & actualStartTime.
            // This prevents time from endlessly accumulating in new commits.
            // This has the downside of resetting values for different priority renders,
            // But works for yielding (the common case) and should support resuming.
            workInProgress.actualDuration = 0;
            workInProgress.actualStartTime = -1;
          }
        }

        workInProgress.childExpirationTime = current.childExpirationTime;
        workInProgress.expirationTime = current.expirationTime;
        workInProgress.child = current.child;
        workInProgress.memoizedProps = current.memoizedProps;
        workInProgress.memoizedState = current.memoizedState;
        workInProgress.updateQueue = current.updateQueue; // Clone the dependencies object. This is mutated during the render phase, so
        // it cannot be shared with the current fiber.

        var currentDependencies = current.dependencies;
        workInProgress.dependencies =
          currentDependencies === null
            ? null
            : {
                expirationTime: currentDependencies.expirationTime,
                firstContext: currentDependencies.firstContext,
                responders: currentDependencies.responders,
              }; // These will be overridden during the parent's reconciliation

        workInProgress.sibling = current.sibling;
        workInProgress.index = current.index;
        workInProgress.ref = current.ref;

        {
          workInProgress.selfBaseDuration = current.selfBaseDuration;
          workInProgress.treeBaseDuration = current.treeBaseDuration;
        }

        {
          workInProgress._debugNeedsRemount = current._debugNeedsRemount;

          switch (workInProgress.tag) {
            case IndeterminateComponent:
            case FunctionComponent:
            case SimpleMemoComponent:
              workInProgress.type = resolveFunctionForHotReloading(current.type);
              break;

            case ClassComponent:
              workInProgress.type = resolveClassForHotReloading(current.type);
              break;

            case ForwardRef:
              workInProgress.type = resolveForwardRefForHotReloading(current.type);
              break;
          }
        }

        return workInProgress;
      } // Used to reuse a Fiber for a second pass.

      function resetWorkInProgress(workInProgress, renderExpirationTime) {
        // This resets the Fiber to what createFiber or createWorkInProgress would
        // have set the values to before during the first pass. Ideally this wouldn't
        // be necessary but unfortunately many code paths reads from the workInProgress
        // when they should be reading from current and writing to workInProgress.
        // We assume pendingProps, index, key, ref, return are still untouched to
        // avoid doing another reconciliation.
        // Reset the effect tag but keep any Placement tags, since that's something
        // that child fiber is setting, not the reconciliation.
        workInProgress.effectTag &= Placement; // The effect list is no longer valid.

        workInProgress.nextEffect = null;
        workInProgress.firstEffect = null;
        workInProgress.lastEffect = null;
        var current = workInProgress.alternate;

        if (current === null) {
          // Reset to createFiber's initial values.
          workInProgress.childExpirationTime = NoWork;
          workInProgress.expirationTime = renderExpirationTime;
          workInProgress.child = null;
          workInProgress.memoizedProps = null;
          workInProgress.memoizedState = null;
          workInProgress.updateQueue = null;
          workInProgress.dependencies = null;

          {
            // Note: We don't reset the actualTime counts. It's useful to accumulate
            // actual time across multiple render passes.
            workInProgress.selfBaseDuration = 0;
            workInProgress.treeBaseDuration = 0;
          }
        } else {
          // Reset to the cloned values that createWorkInProgress would've.
          workInProgress.childExpirationTime = current.childExpirationTime;
          workInProgress.expirationTime = current.expirationTime;
          workInProgress.child = current.child;
          workInProgress.memoizedProps = current.memoizedProps;
          workInProgress.memoizedState = current.memoizedState;
          workInProgress.updateQueue = current.updateQueue; // Clone the dependencies object. This is mutated during the render phase, so
          // it cannot be shared with the current fiber.

          var currentDependencies = current.dependencies;
          workInProgress.dependencies =
            currentDependencies === null
              ? null
              : {
                  expirationTime: currentDependencies.expirationTime,
                  firstContext: currentDependencies.firstContext,
                  responders: currentDependencies.responders,
                };

          {
            // Note: We don't reset the actualTime counts. It's useful to accumulate
            // actual time across multiple render passes.
            workInProgress.selfBaseDuration = current.selfBaseDuration;
            workInProgress.treeBaseDuration = current.treeBaseDuration;
          }
        }

        return workInProgress;
      }
      function createHostRootFiber(tag) {
        var mode;

        if (tag === ConcurrentRoot) {
          mode = ConcurrentMode | BlockingMode | StrictMode;
        } else if (tag === BlockingRoot) {
          mode = BlockingMode | StrictMode;
        } else {
          mode = NoMode;
        }

        if (isDevToolsPresent) {
          // Always collect profile timings when DevTools are present.
          // This enables DevTools to start capturing timing at any point–
          // Without some nodes in the tree having empty base times.
          mode |= ProfileMode;
        }

        return createFiber(HostRoot, null, null, mode);
      }
      function createFiberFromTypeAndProps(
        type, // React$ElementType
        key,
        pendingProps,
        owner,
        mode,
        expirationTime
      ) {
        var fiber;
        var fiberTag = IndeterminateComponent; // The resolved type is set if we know what the final type will be. I.e. it's not lazy.

        var resolvedType = type;

        if (typeof type === 'function') {
          if (shouldConstruct(type)) {
            fiberTag = ClassComponent;

            {
              resolvedType = resolveClassForHotReloading(resolvedType);
            }
          } else {
            {
              resolvedType = resolveFunctionForHotReloading(resolvedType);
            }
          }
        } else if (typeof type === 'string') {
          fiberTag = HostComponent;
        } else {
          getTag: switch (type) {
            case REACT_FRAGMENT_TYPE:
              return createFiberFromFragment(pendingProps.children, mode, expirationTime, key);

            case REACT_CONCURRENT_MODE_TYPE:
              fiberTag = Mode;
              mode |= ConcurrentMode | BlockingMode | StrictMode;
              break;

            case REACT_STRICT_MODE_TYPE:
              fiberTag = Mode;
              mode |= StrictMode;
              break;

            case REACT_PROFILER_TYPE:
              return createFiberFromProfiler(pendingProps, mode, expirationTime, key);

            case REACT_SUSPENSE_TYPE:
              return createFiberFromSuspense(pendingProps, mode, expirationTime, key);

            case REACT_SUSPENSE_LIST_TYPE:
              return createFiberFromSuspenseList(pendingProps, mode, expirationTime, key);

            default: {
              if (typeof type === 'object' && type !== null) {
                switch (type.$$typeof) {
                  case REACT_PROVIDER_TYPE:
                    fiberTag = ContextProvider;
                    break getTag;

                  case REACT_CONTEXT_TYPE:
                    // This is a consumer
                    fiberTag = ContextConsumer;
                    break getTag;

                  case REACT_FORWARD_REF_TYPE:
                    fiberTag = ForwardRef;

                    {
                      resolvedType = resolveForwardRefForHotReloading(resolvedType);
                    }

                    break getTag;

                  case REACT_MEMO_TYPE:
                    fiberTag = MemoComponent;
                    break getTag;

                  case REACT_LAZY_TYPE:
                    fiberTag = LazyComponent;
                    resolvedType = null;
                    break getTag;

                  case REACT_BLOCK_TYPE:
                    fiberTag = Block;
                    break getTag;
                }
              }

              var info = '';

              {
                if (
                  type === undefined ||
                  (typeof type === 'object' && type !== null && Object.keys(type).length === 0)
                ) {
                  info +=
                    ' You likely forgot to export your component from the file ' +
                    "it's defined in, or you might have mixed up default and " +
                    'named imports.';
                }

                var ownerName = owner ? getComponentName(owner.type) : null;

                if (ownerName) {
                  info += '\n\nCheck the render method of `' + ownerName + '`.';
                }
              }

              {
                {
                  throw Error(
                    'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ' +
                      (type == null ? type : typeof type) +
                      '.' +
                      info
                  );
                }
              }
            }
          }
        }

        fiber = createFiber(fiberTag, pendingProps, key, mode);
        fiber.elementType = type;
        fiber.type = resolvedType;
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromElement(element, mode, expirationTime) {
        var owner = null;

        {
          owner = element._owner;
        }

        var type = element.type;
        var key = element.key;
        var pendingProps = element.props;
        var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, expirationTime);

        {
          fiber._debugSource = element._source;
          fiber._debugOwner = element._owner;
        }

        return fiber;
      }
      function createFiberFromFragment(elements, mode, expirationTime, key) {
        var fiber = createFiber(Fragment, elements, key, mode);
        fiber.expirationTime = expirationTime;
        return fiber;
      }

      function createFiberFromProfiler(pendingProps, mode, expirationTime, key) {
        {
          if (typeof pendingProps.id !== 'string' || typeof pendingProps.onRender !== 'function') {
            error('Profiler must specify an "id" string and "onRender" function as props');
          }
        }

        var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode); // TODO: The Profiler fiber shouldn't have a type. It has a tag.

        fiber.elementType = REACT_PROFILER_TYPE;
        fiber.type = REACT_PROFILER_TYPE;
        fiber.expirationTime = expirationTime;
        return fiber;
      }

      function createFiberFromSuspense(pendingProps, mode, expirationTime, key) {
        var fiber = createFiber(SuspenseComponent, pendingProps, key, mode); // TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
        // This needs to be fixed in getComponentName so that it relies on the tag
        // instead.

        fiber.type = REACT_SUSPENSE_TYPE;
        fiber.elementType = REACT_SUSPENSE_TYPE;
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromSuspenseList(pendingProps, mode, expirationTime, key) {
        var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);

        {
          // TODO: The SuspenseListComponent fiber shouldn't have a type. It has a tag.
          // This needs to be fixed in getComponentName so that it relies on the tag
          // instead.
          fiber.type = REACT_SUSPENSE_LIST_TYPE;
        }

        fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromText(content, mode, expirationTime) {
        var fiber = createFiber(HostText, content, null, mode);
        fiber.expirationTime = expirationTime;
        return fiber;
      }
      function createFiberFromHostInstanceForDeletion() {
        var fiber = createFiber(HostComponent, null, null, NoMode); // TODO: These should not need a type.

        fiber.elementType = 'DELETED';
        fiber.type = 'DELETED';
        return fiber;
      }
      function createFiberFromPortal(portal, mode, expirationTime) {
        var pendingProps = portal.children !== null ? portal.children : [];
        var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
        fiber.expirationTime = expirationTime;
        fiber.stateNode = {
          containerInfo: portal.containerInfo,
          pendingChildren: null,
          // Used by persistent updates
          implementation: portal.implementation,
        };
        return fiber;
      } // Used for stashing WIP properties to replay failed work in DEV.

      function assignFiberPropertiesInDEV(target, source) {
        if (target === null) {
          // This Fiber's initial properties will always be overwritten.
          // We only use a Fiber to ensure the same hidden class so DEV isn't slow.
          target = createFiber(IndeterminateComponent, null, null, NoMode);
        } // This is intentionally written as a list of all properties.
        // We tried to use Object.assign() instead but this is called in
        // the hottest path, and Object.assign() was too slow:
        // https://github.com/facebook/react/issues/12502
        // This code is DEV-only so size is not a concern.

        target.tag = source.tag;
        target.key = source.key;
        target.elementType = source.elementType;
        target.type = source.type;
        target.stateNode = source.stateNode;
        target.return = source.return;
        target.child = source.child;
        target.sibling = source.sibling;
        target.index = source.index;
        target.ref = source.ref;
        target.pendingProps = source.pendingProps;
        target.memoizedProps = source.memoizedProps;
        target.updateQueue = source.updateQueue;
        target.memoizedState = source.memoizedState;
        target.dependencies = source.dependencies;
        target.mode = source.mode;
        target.effectTag = source.effectTag;
        target.nextEffect = source.nextEffect;
        target.firstEffect = source.firstEffect;
        target.lastEffect = source.lastEffect;
        target.expirationTime = source.expirationTime;
        target.childExpirationTime = source.childExpirationTime;
        target.alternate = source.alternate;

        {
          target.actualDuration = source.actualDuration;
          target.actualStartTime = source.actualStartTime;
          target.selfBaseDuration = source.selfBaseDuration;
          target.treeBaseDuration = source.treeBaseDuration;
        }

        {
          target._debugID = source._debugID;
        }

        target._debugSource = source._debugSource;
        target._debugOwner = source._debugOwner;
        target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming;
        target._debugNeedsRemount = source._debugNeedsRemount;
        target._debugHookTypes = source._debugHookTypes;
        return target;
      }

      function FiberRootNode(containerInfo, tag, hydrate) {
        this.tag = tag;
        this.current = null;
        this.containerInfo = containerInfo;
        this.pendingChildren = null;
        this.pingCache = null;
        this.finishedExpirationTime = NoWork;
        this.finishedWork = null;
        this.timeoutHandle = noTimeout;
        this.context = null;
        this.pendingContext = null;
        this.hydrate = hydrate;
        this.callbackNode = null;
        this.callbackPriority = NoPriority;
        this.firstPendingTime = NoWork;
        this.firstSuspendedTime = NoWork;
        this.lastSuspendedTime = NoWork;
        this.nextKnownPendingLevel = NoWork;
        this.lastPingedTime = NoWork;
        this.lastExpiredTime = NoWork;

        {
          this.interactionThreadID = tracing$1.unstable_getThreadID();
          this.memoizedInteractions = new Set();
          this.pendingInteractionMap = new Map();
        }
      }

      function createFiberRoot(containerInfo, tag, hydrate, hydrationCallbacks) {
        var root = new FiberRootNode(containerInfo, tag, hydrate);
        // stateNode is any.

        var uninitializedFiber = createHostRootFiber(tag);
        root.current = uninitializedFiber;
        uninitializedFiber.stateNode = root;
        initializeUpdateQueue(uninitializedFiber);
        return root;
      }
      function isRootSuspendedAtTime(root, expirationTime) {
        var firstSuspendedTime = root.firstSuspendedTime;
        var lastSuspendedTime = root.lastSuspendedTime;
        return (
          firstSuspendedTime !== NoWork && firstSuspendedTime >= expirationTime && lastSuspendedTime <= expirationTime
        );
      }
      function markRootSuspendedAtTime(root, expirationTime) {
        var firstSuspendedTime = root.firstSuspendedTime;
        var lastSuspendedTime = root.lastSuspendedTime;

        if (firstSuspendedTime < expirationTime) {
          root.firstSuspendedTime = expirationTime;
        }

        if (lastSuspendedTime > expirationTime || firstSuspendedTime === NoWork) {
          root.lastSuspendedTime = expirationTime;
        }

        if (expirationTime <= root.lastPingedTime) {
          root.lastPingedTime = NoWork;
        }

        if (expirationTime <= root.lastExpiredTime) {
          root.lastExpiredTime = NoWork;
        }
      }
      function markRootUpdatedAtTime(root, expirationTime) {
        // Update the range of pending times
        var firstPendingTime = root.firstPendingTime;

        if (expirationTime > firstPendingTime) {
          root.firstPendingTime = expirationTime;
        } // Update the range of suspended times. Treat everything lower priority or
        // equal to this update as unsuspended.

        var firstSuspendedTime = root.firstSuspendedTime;

        if (firstSuspendedTime !== NoWork) {
          if (expirationTime >= firstSuspendedTime) {
            // The entire suspended range is now unsuspended.
            root.firstSuspendedTime = root.lastSuspendedTime = root.nextKnownPendingLevel = NoWork;
          } else if (expirationTime >= root.lastSuspendedTime) {
            root.lastSuspendedTime = expirationTime + 1;
          } // This is a pending level. Check if it's higher priority than the next
          // known pending level.

          if (expirationTime > root.nextKnownPendingLevel) {
            root.nextKnownPendingLevel = expirationTime;
          }
        }
      }
      function markRootFinishedAtTime(root, finishedExpirationTime, remainingExpirationTime) {
        // Update the range of pending times
        root.firstPendingTime = remainingExpirationTime; // Update the range of suspended times. Treat everything higher priority or
        // equal to this update as unsuspended.

        if (finishedExpirationTime <= root.lastSuspendedTime) {
          // The entire suspended range is now unsuspended.
          root.firstSuspendedTime = root.lastSuspendedTime = root.nextKnownPendingLevel = NoWork;
        } else if (finishedExpirationTime <= root.firstSuspendedTime) {
          // Part of the suspended range is now unsuspended. Narrow the range to
          // include everything between the unsuspended time (non-inclusive) and the
          // last suspended time.
          root.firstSuspendedTime = finishedExpirationTime - 1;
        }

        if (finishedExpirationTime <= root.lastPingedTime) {
          // Clear the pinged time
          root.lastPingedTime = NoWork;
        }

        if (finishedExpirationTime <= root.lastExpiredTime) {
          // Clear the expired time
          root.lastExpiredTime = NoWork;
        }
      }
      function markRootExpiredAtTime(root, expirationTime) {
        var lastExpiredTime = root.lastExpiredTime;

        if (lastExpiredTime === NoWork || lastExpiredTime > expirationTime) {
          root.lastExpiredTime = expirationTime;
        }
      }

      var didWarnAboutMessageChannel = false;
      var enqueueTaskImpl = null;
      function enqueueTask(task) {
        if (enqueueTaskImpl === null) {
          try {
            // read require off the module object to get around the bundlers.
            // we don't want them to detect a require and bundle a Node polyfill.
            var requireString = ('require' + Math.random()).slice(0, 7);
            var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
            // version of setImmediate, bypassing fake timers if any.

            enqueueTaskImpl = nodeRequire('timers').setImmediate;
          } catch (_err) {
            // we're in a browser
            // we can't use regular timers because they may still be faked
            // so we try MessageChannel+postMessage instead
            enqueueTaskImpl = function (callback) {
              {
                if (didWarnAboutMessageChannel === false) {
                  didWarnAboutMessageChannel = true;

                  if (typeof MessageChannel === 'undefined') {
                    error(
                      'This browser does not have a MessageChannel implementation, ' +
                        'so enqueuing tasks via await act(async () => ...) will fail. ' +
                        'Please file an issue at https://github.com/facebook/react/issues ' +
                        'if you encounter this warning.'
                    );
                  }
                }
              }

              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(undefined);
            };
          }
        }

        return enqueueTaskImpl(task);
      }

      var didWarnAboutNestedUpdates;
      var didWarnAboutFindNodeInStrictMode;

      {
        didWarnAboutNestedUpdates = false;
        didWarnAboutFindNodeInStrictMode = {};
      }

      function getContextForSubtree(parentComponent) {
        if (!parentComponent) {
          return emptyContextObject;
        }

        var fiber = get(parentComponent);
        var parentContext = findCurrentUnmaskedContext(fiber);

        if (fiber.tag === ClassComponent) {
          var Component = fiber.type;

          if (isContextProvider(Component)) {
            return processChildContext(fiber, Component, parentContext);
          }
        }

        return parentContext;
      }

      function findHostInstance(component) {
        var fiber = get(component);

        if (fiber === undefined) {
          if (typeof component.render === 'function') {
            {
              {
                throw Error('Unable to find node on an unmounted component.');
              }
            }
          } else {
            {
              {
                throw Error('Argument appears to not be a ReactComponent. Keys: ' + Object.keys(component));
              }
            }
          }
        }

        var hostFiber = findCurrentHostFiber(fiber);

        if (hostFiber === null) {
          return null;
        }

        return hostFiber.stateNode;
      }

      function findHostInstanceWithWarning(component, methodName) {
        {
          var fiber = get(component);

          if (fiber === undefined) {
            if (typeof component.render === 'function') {
              {
                {
                  throw Error('Unable to find node on an unmounted component.');
                }
              }
            } else {
              {
                {
                  throw Error('Argument appears to not be a ReactComponent. Keys: ' + Object.keys(component));
                }
              }
            }
          }

          var hostFiber = findCurrentHostFiber(fiber);

          if (hostFiber === null) {
            return null;
          }

          if (hostFiber.mode & StrictMode) {
            var componentName = getComponentName(fiber.type) || 'Component';

            if (!didWarnAboutFindNodeInStrictMode[componentName]) {
              didWarnAboutFindNodeInStrictMode[componentName] = true;

              if (fiber.mode & StrictMode) {
                error(
                  '%s is deprecated in StrictMode. ' +
                    '%s was passed an instance of %s which is inside StrictMode. ' +
                    'Instead, add a ref directly to the element you want to reference. ' +
                    'Learn more about using refs safely here: ' +
                    'https://fb.me/react-strict-mode-find-node%s',
                  methodName,
                  methodName,
                  componentName,
                  getStackByFiberInDevAndProd(hostFiber)
                );
              } else {
                error(
                  '%s is deprecated in StrictMode. ' +
                    '%s was passed an instance of %s which renders StrictMode children. ' +
                    'Instead, add a ref directly to the element you want to reference. ' +
                    'Learn more about using refs safely here: ' +
                    'https://fb.me/react-strict-mode-find-node%s',
                  methodName,
                  methodName,
                  componentName,
                  getStackByFiberInDevAndProd(hostFiber)
                );
              }
            }
          }

          return hostFiber.stateNode;
        }
      }

      function createContainer(containerInfo, tag, hydrate, hydrationCallbacks) {
        return createFiberRoot(containerInfo, tag, hydrate);
      }
      function updateContainer(element, container, parentComponent, callback) {
        {
          onScheduleRoot(container, element);
        }

        var current$1 = container.current;
        var currentTime = requestCurrentTimeForUpdate();

        {
          // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
          if ('undefined' !== typeof jest) {
            warnIfUnmockedScheduler(current$1);
            warnIfNotScopedWithMatchingAct(current$1);
          }
        }

        var suspenseConfig = requestCurrentSuspenseConfig();
        var expirationTime = computeExpirationForFiber(currentTime, current$1, suspenseConfig);
        var context = getContextForSubtree(parentComponent);

        if (container.context === null) {
          container.context = context;
        } else {
          container.pendingContext = context;
        }

        {
          if (isRendering && current !== null && !didWarnAboutNestedUpdates) {
            didWarnAboutNestedUpdates = true;

            error(
              'Render methods should be a pure function of props and state; ' +
                'triggering nested component updates from render is not allowed. ' +
                'If necessary, trigger nested updates in componentDidUpdate.\n\n' +
                'Check the render method of %s.',
              getComponentName(current.type) || 'Unknown'
            );
          }
        }

        var update = createUpdate(expirationTime, suspenseConfig); // Caution: React DevTools currently depends on this property
        // being called "element".

        update.payload = {
          element: element,
        };
        callback = callback === undefined ? null : callback;

        if (callback !== null) {
          {
            if (typeof callback !== 'function') {
              error(
                'render(...): Expected the last optional `callback` argument to be a ' +
                  'function. Instead received: %s.',
                callback
              );
            }
          }

          update.callback = callback;
        }

        enqueueUpdate(current$1, update);
        scheduleWork(current$1, expirationTime);
        return expirationTime;
      }
      function getPublicRootInstance(container) {
        var containerFiber = container.current;

        if (!containerFiber.child) {
          return null;
        }

        switch (containerFiber.child.tag) {
          case HostComponent:
            return getPublicInstance(containerFiber.child.stateNode);

          default:
            return containerFiber.child.stateNode;
        }
      }
      function attemptSynchronousHydration(fiber) {
        switch (fiber.tag) {
          case HostRoot:
            var root = fiber.stateNode;

            if (root.hydrate) {
              // Flush the first scheduled "update".
              flushRoot(root, root.firstPendingTime);
            }

            break;

          case SuspenseComponent:
            flushSync(function () {
              return scheduleWork(fiber, Sync);
            }); // If we're still blocked after this, we need to increase
            // the priority of any promises resolving within this
            // boundary so that they next attempt also has higher pri.

            var retryExpTime = computeInteractiveExpiration(requestCurrentTimeForUpdate());
            markRetryTimeIfNotHydrated(fiber, retryExpTime);
            break;
        }
      }

      function markRetryTimeImpl(fiber, retryTime) {
        var suspenseState = fiber.memoizedState;

        if (suspenseState !== null && suspenseState.dehydrated !== null) {
          if (suspenseState.retryTime < retryTime) {
            suspenseState.retryTime = retryTime;
          }
        }
      } // Increases the priority of thennables when they resolve within this boundary.

      function markRetryTimeIfNotHydrated(fiber, retryTime) {
        markRetryTimeImpl(fiber, retryTime);
        var alternate = fiber.alternate;

        if (alternate) {
          markRetryTimeImpl(alternate, retryTime);
        }
      }

      function attemptUserBlockingHydration(fiber) {
        if (fiber.tag !== SuspenseComponent) {
          // We ignore HostRoots here because we can't increase
          // their priority and they should not suspend on I/O,
          // since you have to wrap anything that might suspend in
          // Suspense.
          return;
        }

        var expTime = computeInteractiveExpiration(requestCurrentTimeForUpdate());
        scheduleWork(fiber, expTime);
        markRetryTimeIfNotHydrated(fiber, expTime);
      }
      function attemptContinuousHydration(fiber) {
        if (fiber.tag !== SuspenseComponent) {
          // We ignore HostRoots here because we can't increase
          // their priority and they should not suspend on I/O,
          // since you have to wrap anything that might suspend in
          // Suspense.
          return;
        }

        scheduleWork(fiber, ContinuousHydration);
        markRetryTimeIfNotHydrated(fiber, ContinuousHydration);
      }
      function attemptHydrationAtCurrentPriority(fiber) {
        if (fiber.tag !== SuspenseComponent) {
          // We ignore HostRoots here because we can't increase
          // their priority other than synchronously flush it.
          return;
        }

        var currentTime = requestCurrentTimeForUpdate();
        var expTime = computeExpirationForFiber(currentTime, fiber, null);
        scheduleWork(fiber, expTime);
        markRetryTimeIfNotHydrated(fiber, expTime);
      }
      function findHostInstanceWithNoPortals(fiber) {
        var hostFiber = findCurrentHostFiberWithNoPortals(fiber);

        if (hostFiber === null) {
          return null;
        }

        if (hostFiber.tag === FundamentalComponent) {
          return hostFiber.stateNode.instance;
        }

        return hostFiber.stateNode;
      }

      var shouldSuspendImpl = function (fiber) {
        return false;
      };

      function shouldSuspend(fiber) {
        return shouldSuspendImpl(fiber);
      }
      var overrideHookState = null;
      var overrideProps = null;
      var scheduleUpdate = null;
      var setSuspenseHandler = null;

      {
        var copyWithSetImpl = function (obj, path, idx, value) {
          if (idx >= path.length) {
            return value;
          }

          var key = path[idx];
          var updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj); // $FlowFixMe number or string is fine here

          updated[key] = copyWithSetImpl(obj[key], path, idx + 1, value);
          return updated;
        };

        var copyWithSet = function (obj, path, value) {
          return copyWithSetImpl(obj, path, 0, value);
        }; // Support DevTools editable values for useState and useReducer.

        overrideHookState = function (fiber, id, path, value) {
          // For now, the "id" of stateful hooks is just the stateful hook index.
          // This may change in the future with e.g. nested hooks.
          var currentHook = fiber.memoizedState;

          while (currentHook !== null && id > 0) {
            currentHook = currentHook.next;
            id--;
          }

          if (currentHook !== null) {
            var newState = copyWithSet(currentHook.memoizedState, path, value);
            currentHook.memoizedState = newState;
            currentHook.baseState = newState; // We aren't actually adding an update to the queue,
            // because there is no update we can add for useReducer hooks that won't trigger an error.
            // (There's no appropriate action type for DevTools overrides.)
            // As a result though, React will see the scheduled update as a noop and bailout.
            // Shallow cloning props works as a workaround for now to bypass the bailout check.

            fiber.memoizedProps = _assign({}, fiber.memoizedProps);
            scheduleWork(fiber, Sync);
          }
        }; // Support DevTools props for function components, forwardRef, memo, host components, etc.

        overrideProps = function (fiber, path, value) {
          fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);

          if (fiber.alternate) {
            fiber.alternate.pendingProps = fiber.pendingProps;
          }

          scheduleWork(fiber, Sync);
        };

        scheduleUpdate = function (fiber) {
          scheduleWork(fiber, Sync);
        };

        setSuspenseHandler = function (newShouldSuspendImpl) {
          shouldSuspendImpl = newShouldSuspendImpl;
        };
      }

      function injectIntoDevTools(devToolsConfig) {
        var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        return injectInternals(
          _assign({}, devToolsConfig, {
            overrideHookState: overrideHookState,
            overrideProps: overrideProps,
            setSuspenseHandler: setSuspenseHandler,
            scheduleUpdate: scheduleUpdate,
            currentDispatcherRef: ReactCurrentDispatcher,
            findHostInstanceByFiber: function (fiber) {
              var hostFiber = findCurrentHostFiber(fiber);

              if (hostFiber === null) {
                return null;
              }

              return hostFiber.stateNode;
            },
            findFiberByHostInstance: function (instance) {
              if (!findFiberByHostInstance) {
                // Might not be implemented by the renderer.
                return null;
              }

              return findFiberByHostInstance(instance);
            },
            // React Refresh
            findHostInstancesForRefresh: findHostInstancesForRefresh,
            scheduleRefresh: scheduleRefresh,
            scheduleRoot: scheduleRoot,
            setRefreshHandler: setRefreshHandler,
            // Enables DevTools to append owner stacks to error messages in DEV mode.
            getCurrentFiber: function () {
              return current;
            },
          })
        );
      }
      var IsSomeRendererActing$1 = ReactSharedInternals.IsSomeRendererActing;
      var isSchedulerMocked = typeof Scheduler.unstable_flushAllWithoutAsserting === 'function';

      var flushWork =
        Scheduler.unstable_flushAllWithoutAsserting ||
        function () {
          var didFlushWork = false;

          while (flushPassiveEffects()) {
            didFlushWork = true;
          }

          return didFlushWork;
        };

      function flushWorkAndMicroTasks(onDone) {
        try {
          flushWork();
          enqueueTask(function () {
            if (flushWork()) {
              flushWorkAndMicroTasks(onDone);
            } else {
              onDone();
            }
          });
        } catch (err) {
          onDone(err);
        }
      } // we track the 'depth' of the act() calls with this counter,
      // so we can tell if any async act() calls try to run in parallel.

      var actingUpdatesScopeDepth = 0;

      function act(callback) {
        var previousActingUpdatesScopeDepth = actingUpdatesScopeDepth;
        var previousIsSomeRendererActing;
        var previousIsThisRendererActing;
        actingUpdatesScopeDepth++;
        previousIsSomeRendererActing = IsSomeRendererActing$1.current;
        previousIsThisRendererActing = IsThisRendererActing.current;
        IsSomeRendererActing$1.current = true;
        IsThisRendererActing.current = true;

        function onDone() {
          actingUpdatesScopeDepth--;
          IsSomeRendererActing$1.current = previousIsSomeRendererActing;
          IsThisRendererActing.current = previousIsThisRendererActing;

          {
            if (actingUpdatesScopeDepth > previousActingUpdatesScopeDepth) {
              // if it's _less than_ previousActingUpdatesScopeDepth, then we can assume the 'other' one has warned
              error(
                'You seem to have overlapping act() calls, this is not supported. ' +
                  'Be sure to await previous act() calls before making a new one. '
              );
            }
          }
        }

        var result;

        try {
          result = batchedUpdates(callback);
        } catch (error) {
          // on sync errors, we still want to 'cleanup' and decrement actingUpdatesScopeDepth
          onDone();
          throw error;
        }

        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
          // setup a boolean that gets set to true only
          // once this act() call is await-ed
          var called = false;

          {
            if (typeof Promise !== 'undefined') {
              //eslint-disable-next-line no-undef
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  if (called === false) {
                    error(
                      'You called act(async () => ...) without await. ' +
                        'This could lead to unexpected testing behaviour, interleaving multiple act ' +
                        'calls and mixing their scopes. You should - await act(async () => ...);'
                    );
                  }
                });
            }
          } // in the async case, the returned thenable runs the callback, flushes
          // effects and  microtasks in a loop until flushPassiveEffects() === false,
          // and cleans up

          return {
            then: function (resolve, reject) {
              called = true;
              result.then(
                function () {
                  if (
                    actingUpdatesScopeDepth > 1 ||
                    (isSchedulerMocked === true && previousIsSomeRendererActing === true)
                  ) {
                    onDone();
                    resolve();
                    return;
                  } // we're about to exit the act() scope,
                  // now's the time to flush tasks/effects

                  flushWorkAndMicroTasks(function (err) {
                    onDone();

                    if (err) {
                      reject(err);
                    } else {
                      resolve();
                    }
                  });
                },
                function (err) {
                  onDone();
                  reject(err);
                }
              );
            },
          };
        } else {
          {
            if (result !== undefined) {
              error(
                'The callback passed to act(...) function ' + 'must return undefined, or a Promise. You returned %s',
                result
              );
            }
          } // flush effects until none remain, and cleanup

          try {
            if (
              actingUpdatesScopeDepth === 1 &&
              (isSchedulerMocked === false || previousIsSomeRendererActing === false)
            ) {
              // we're about to exit the act() scope,
              // now's the time to flush effects
              flushWork();
            }

            onDone();
          } catch (err) {
            onDone();
            throw err;
          } // in the sync case, the returned thenable only warns *if* await-ed

          return {
            then: function (resolve) {
              {
                error('Do not await the result of calling act(...) with sync logic, it is not a Promise.');
              }

              resolve();
            },
          };
        }
      }

      var ReactFiberReconciler = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        createContainer: createContainer,
        updateContainer: updateContainer,
        batchedEventUpdates: batchedEventUpdates,
        batchedUpdates: batchedUpdates,
        unbatchedUpdates: unbatchedUpdates,
        deferredUpdates: deferredUpdates,
        syncUpdates: syncUpdates,
        discreteUpdates: discreteUpdates,
        flushDiscreteUpdates: flushDiscreteUpdates,
        flushControlled: flushControlled,
        flushSync: flushSync,
        flushPassiveEffects: flushPassiveEffects,
        IsThisRendererActing: IsThisRendererActing,
        getPublicRootInstance: getPublicRootInstance,
        attemptSynchronousHydration: attemptSynchronousHydration,
        attemptUserBlockingHydration: attemptUserBlockingHydration,
        attemptContinuousHydration: attemptContinuousHydration,
        attemptHydrationAtCurrentPriority: attemptHydrationAtCurrentPriority,
        findHostInstance: findHostInstance,
        findHostInstanceWithWarning: findHostInstanceWithWarning,
        findHostInstanceWithNoPortals: findHostInstanceWithNoPortals,
        shouldSuspend: shouldSuspend,
        injectIntoDevTools: injectIntoDevTools,
        act: act,
      });

      function getCjsExportFromNamespace(n) {
        return (n && n['default']) || n;
      }

      var ReactFiberReconciler$1 = getCjsExportFromNamespace(ReactFiberReconciler);

      // TODO: decide on the top-level export form.
      // This is hacky but makes it work with both Rollup and Jest.

      var reactReconciler = ReactFiberReconciler$1.default || ReactFiberReconciler$1;

      module.exports = reactReconciler;
      var $$$renderer = module.exports;
      module.exports = $$$reconciler;
      return $$$renderer;
    };
  }
});

var reactReconciler = createCommonjsModule(function (module) {
  {
    module.exports = reactReconciler_development;
  }
});

var REMAX_METHOD = '$$REMAX_METHOD';
var TYPE_TEXT = 'plain-text';

var instanceId = 0;
function generate() {
  var id = instanceId;
  instanceId += 1;
  return id;
}

// https://github.com/facebook/react/blob/master/packages/react-dom/src/shared/CSSProperty.js
/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
var _loop_1 = function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
};
for (var prop in isUnitlessNumber) {
  _loop_1(prop);
}

var lodash_merge = createCommonjsModule(function (module, exports) {
  /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
    HOT_SPAN = 16;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[
    int16Tag
  ] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[
    uint16Tag
  ] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[
    boolTag
  ] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[
    funcTag
  ] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[
    regexpTag
  ] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  })();

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
      result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  })();

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /** Used to detect if a method is native. */
  var reIsNative = RegExp(
    '^' +
      funcToString
        .call(hasOwnProperty)
        .replace(reRegExpChar, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  );

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  var defineProperty = (function () {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  })();

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function () {
    function object() {}
    return function (proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  })();

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map || ListCache)(),
      string: new Hash(),
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
      size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
      result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

    for (var key in value) {
      if (
        (inherited || hasOwnProperty.call(value, key)) &&
        !(
          skipIndexes &&
          // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == 'length' ||
            // Node.js 0.10 has enumerable non-index properties on buffers.
            (isBuff && (key == 'offset' || key == 'parent')) ||
            // PhantomJS 2 has enumerable non-index properties on typed arrays.
            (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
            // Skip index properties.
            isIndex(key, length))
        )
      ) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq(object[key], value)) || (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true,
      });
    } else {
      object[key] = value;
    }
  }

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor();

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
      result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(
      source,
      function (srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      },
      keysIn
    );
  }

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty
    ? identity
    : function (func, string) {
        return defineProperty(func, 'toString', {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true,
        });
      };

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
      length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
      length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return baseRest(function (object, sources) {
      var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

      customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return (
      !!length &&
      (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
      value > -1 &&
      value % 1 == 0 &&
      value < length
    );
  }

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq(object[index], value);
    }
    return false;
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean'
      ? value !== '__proto__'
      : value === null;
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  /**
   * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') {
      return;
    }

    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString);

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
      lastCalled = 0;

    return function () {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(
    (function () {
      return arguments;
    })()
  )
    ? baseIsArguments
    : function (value) {
        return (
          isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee')
        );
      };

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /**
   * This method is like `_.assign` except that it recursively merges own and
   * inherited enumerable string keyed properties of source objects into the
   * destination object. Source properties that resolve to `undefined` are
   * skipped if a destination value exists. Array and plain object properties
   * are merged recursively. Other objects and value types are overridden by
   * assignment. Source objects are applied from left to right. Subsequent
   * sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {
   *   'a': [{ 'b': 2 }, { 'd': 4 }]
   * };
   *
   * var other = {
   *   'a': [{ 'c': 3 }, { 'e': 5 }]
   * };
   *
   * _.merge(object, other);
   * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
   */
  var merge = createAssigner(function (object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function () {
      return value;
    };
  }

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  module.exports = merge;
});

var PluginDriver = /** @class */ (function () {
  function PluginDriver(plugins) {
    this.plugins = plugins;
  }
  PluginDriver.prototype.onAppConfig = function (config) {
    return this.plugins.reduce(function (acc, plugin) {
      if (typeof plugin.onAppConfig === 'function') {
        acc = plugin.onAppConfig({ config: acc });
      }
      return acc;
    }, config);
  };
  PluginDriver.prototype.onPageConfig = function (config) {
    return this.plugins.reduce(function (acc, plugin) {
      if (typeof plugin.onPageConfig === 'function') {
        acc = plugin.onPageConfig({ config: acc });
      }
      return acc;
    }, config);
  };
  return PluginDriver;
})();

var defaultRuntimeOptions = {
  platform: '',
  pxToRpx: true,
  hostComponents: {},
  debug: false,
  appEvents: [],
  pageEvents: {},
  pluginDriver: new PluginDriver([]),
  history: {},
};
var runtimeOptions = defaultRuntimeOptions;
function apply(options) {
  runtimeOptions = lodash_merge(runtimeOptions, options);
}
function get(key) {
  return runtimeOptions[key];
}
function reset() {
  runtimeOptions = defaultRuntimeOptions;
}

var RuntimeOptions = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  apply: apply,
  get: get,
  reset: reset,
});

var __read =
  (undefined && undefined.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spread =
  (undefined && undefined.__spread) ||
  function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  };
var vendorPrefixes = ['webkit', 'moz', 'ms', 'o'];
var transformReactStyleKey = function (key) {
  // css3 var
  if (key === null || key === void 0 ? void 0 : key.startsWith('--')) {
    return key;
  }
  var styleValue = key.replace(/\.?([A-Z]+)/g, function (_x, y) {
    return '-' + y.toLowerCase();
  });
  // vendor prefix
  if (styleValue === null || styleValue === void 0 ? void 0 : styleValue.startsWith('-')) {
    var firstWord_1 = styleValue.split('-').filter(function (s) {
      return s;
    })[0];
    styleValue = styleValue.replace(/^-/, '');
    if (
      vendorPrefixes.find(function (prefix) {
        return prefix === firstWord_1;
      })
    ) {
      styleValue = '-' + styleValue;
    }
  }
  return styleValue;
};
var transformPx = function (value) {
  if (typeof value !== 'string') {
    return value;
  }
  return value.replace(/\b(\d+(\.\d+)?)px\b/g, function (match, x) {
    var targetUnit = 'rpx';
    var size = Number(x);
    return size % 1 === 0 ? size + targetUnit : size.toFixed(2) + targetUnit;
  });
};
var plainStyle = function (style) {
  return Object.keys(style)
    .reduce(function (acc, key) {
      var value = style[key];
      if (!Number.isNaN(Number(value)) && !isUnitlessNumber[key]) {
        value = value + 'rpx';
      }
      return __spread(acc, [transformReactStyleKey(key) + ':' + (get('pxToRpx') ? transformPx(value) : value) + ';']);
    }, [])
    .join('');
};

function getAlias(prop, type) {
  var _a, _b;
  prop = prop.replace('className', 'class');
  var hostComponent = get('hostComponents')[type];
  var prefix = get('platform') + '-';
  // 判断是否是平台独有属性
  if (prop.startsWith(prefix)) {
    return prop.replace(new RegExp('^' + prefix), '');
  }
  return (_b =
    (_a = hostComponent === null || hostComponent === void 0 ? void 0 : hostComponent.alias) === null || _a === void 0
      ? void 0
      : _a[prop]) !== null && _b !== void 0
    ? _b
    : prop;
}
function getValue(prop, value) {
  if (prop.toLowerCase().endsWith('style') && Object.prototype.toString.call(value) === '[object Object]') {
    return plainStyle(value);
  }
  return value;
}
function propAlias(prop, value, type) {
  return [getAlias(prop, type), getValue(prop, value)];
}
function propsAlias(props, type) {
  if (!props) {
    return props;
  }
  var aliasProps = {};
  for (var prop in props) {
    aliasProps[getAlias(prop, type)] = getValue(prop, props[prop]);
  }
  return aliasProps;
}

var __read$1 =
  (undefined && undefined.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
function toRawNode(node) {
  if (node.type === TYPE_TEXT) {
    return {
      id: node.id,
      type: node.type,
      text: node.text,
    };
  }
  return {
    id: node.id,
    type: node.type,
    props: propsAlias(node.props, node.type),
    children: [],
    text: node.text,
  };
}
function toRawProps(prop, value, type) {
  return propAlias(prop, value, type);
}
var VNode = /** @class */ (function () {
  function VNode(_a) {
    var id = _a.id,
      type = _a.type,
      props = _a.props,
      container = _a.container;
    this.mounted = false;
    this.deleted = false;
    this.parent = null;
    this.firstChild = null;
    this.lastChild = null;
    this.size = 0;
    this.previousSibling = null;
    this.nextSibling = null;
    this.id = id;
    this.container = container;
    this.type = type;
    this.props = props;
  }
  VNode.prototype.appendChild = function (node, immediately) {
    this.removeChild(node, immediately);
    this.size += 1;
    node.parent = this;
    if (!this.firstChild) {
      this.firstChild = node;
    }
    if (this.lastChild) {
      this.lastChild.nextSibling = node;
      node.previousSibling = this.lastChild;
    }
    this.lastChild = node;
    if (this.isMounted()) {
      this.container.requestUpdate(
        {
          type: 'splice',
          path: this.path,
          start: node.index,
          id: node.id,
          deleteCount: 0,
          children: this.children,
          items: [node.toJSON()],
          node: this,
        },
        immediately
      );
    }
  };
  VNode.prototype.removeChild = function (node, immediately) {
    var previousSibling = node.previousSibling,
      nextSibling = node.nextSibling;
    if (node.parent !== this) {
      return;
    }
    var index = node.index;
    this.size -= 1;
    if (this.firstChild === node) {
      this.firstChild = node.nextSibling;
    }
    if (this.lastChild === node) {
      this.lastChild = node.previousSibling;
    }
    if (previousSibling) {
      previousSibling.nextSibling = nextSibling;
    }
    if (nextSibling) {
      nextSibling.previousSibling = previousSibling;
    }
    node.previousSibling = null;
    node.nextSibling = null;
    node.deleted = true;
    if (this.isMounted()) {
      this.container.requestUpdate(
        {
          type: 'splice',
          path: this.path,
          start: index,
          id: node.id,
          deleteCount: 1,
          children: this.children,
          items: [],
          node: this,
        },
        immediately
      );
    }
  };
  VNode.prototype.insertBefore = function (node, referenceNode, immediately) {
    this.removeChild(node, immediately);
    this.size += 1;
    node.parent = this;
    if (referenceNode === this.firstChild) {
      this.firstChild = node;
    }
    if (referenceNode.previousSibling) {
      referenceNode.previousSibling.nextSibling = node;
      node.previousSibling = referenceNode.previousSibling;
    }
    referenceNode.previousSibling = node;
    node.nextSibling = referenceNode;
    if (this.isMounted()) {
      this.container.requestUpdate(
        {
          type: 'splice',
          path: this.path,
          start: node.index,
          id: node.id,
          deleteCount: 0,
          children: this.children,
          items: [node.toJSON()],
          node: this,
        },
        immediately
      );
    }
  };
  VNode.prototype.update = function (payload) {
    if (this.type === 'text' || !payload) {
      this.container.requestUpdate({
        type: 'splice',
        // root 不会更新，所以肯定有 parent
        path: this.parent.path,
        start: this.index,
        id: this.id,
        deleteCount: 1,
        items: [this.toJSON()],
        node: this,
      });
      return;
    }
    for (var i = 0; i < payload.length; i = i + 2) {
      var _a = __read$1(toRawProps(payload[i], payload[i + 1], this.type), 2),
        propName = _a[0],
        propValue = _a[1];
      var path = this.parent.path + '.nodes.' + this.id + '.props';
      if (get('platform') === 'ali') {
        path = this.parent.path + '.children[' + this.index + '].props';
      }
      this.container.requestUpdate({
        type: 'set',
        path: path,
        name: propName,
        value: propValue,
        node: this,
      });
    }
  };
  Object.defineProperty(VNode.prototype, 'index', {
    get: function () {
      var value = 0;
      var previousSibling = this.previousSibling;
      while (previousSibling) {
        value += 1;
        previousSibling = previousSibling.previousSibling;
      }
      return value;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(VNode.prototype, 'children', {
    get: function () {
      var arr = [];
      var item = this.firstChild;
      while (item) {
        arr.push(item);
        item = item.nextSibling;
      }
      return arr;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(VNode.prototype, 'path', {
    get: function () {
      var dataPath = 'root';
      var parents = [];
      var parent = this.parent;
      while (parent) {
        parents.unshift(parent);
        parent = parent.parent;
      }
      for (var i = 0; i < parents.length; i++) {
        var child = parents[i + 1] || this;
        if (get('platform') === 'ali') {
          dataPath += '.children.' + child.index + '';
        } else {
          dataPath += '.nodes.' + child.id + '';
        }
      }
      return dataPath;
    },
    enumerable: false,
    configurable: true,
  });
  VNode.prototype.isMounted = function () {
    return this.parent ? this.parent.isMounted() : this.mounted;
  };
  VNode.prototype.isDeleted = function () {
    var _a, _b;
    return this.deleted === true
      ? this.deleted
      : (_b = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.isDeleted()) !== null && _b !== void 0
      ? _b
      : false;
  };
  VNode.prototype.toJSON = function () {
    var stack = [];
    var rawNode = toRawNode(this);
    stack.push({
      currentNode: rawNode,
      children: this.children,
    });
    while (stack.length > 0) {
      // while 循环已经保证了不会有空值
      var stackItem = stack.pop();
      var _a = stackItem.children,
        children = _a === void 0 ? [] : _a,
        currentNode = stackItem.currentNode;
      for (var i = children.length - 1; i >= 0; i--) {
        var currentVNode = children[i];
        var currentRawNode = toRawNode(currentVNode);
        if (get('platform') !== 'ali') {
          currentNode.children.unshift(currentRawNode.id);
        } else {
          currentNode.children.unshift(currentRawNode);
        }
        if (get('platform') !== 'ali') {
          if (!currentNode.nodes) {
            currentNode.nodes = {};
          }
          currentNode.nodes[currentRawNode.id] = currentRawNode;
        }
        stack.push({
          currentNode: currentRawNode,
          children: currentVNode.children,
        });
      }
    }
    return rawNode;
  };
  return VNode;
})();

var DEPRECATED_CATCH_TYPE = 'catchClick';
var SYNTHETIC_TYPES = ['onClick', 'onTap', 'onLongClick', 'onLongTap', 'onTouchMove', 'onTouchStart', 'onTouchEnd'];

var isPropagationStopped = false;
/**
 * 检查父元素里还有没有点击事件
 *
 * @export
 * @param {VNode} node
 * @returns
 */
function validate(node) {
  var _a;
  var parent = node.parent;
  if (!parent) {
    isPropagationStopped = false;
    return;
  }
  for (var i = 0; i < SYNTHETIC_TYPES.length; i++) {
    if ((_a = parent.props) === null || _a === void 0 ? void 0 : _a[SYNTHETIC_TYPES[i]]) {
      return;
    }
  }
  validate(parent);
}
function stopPropagation(node) {
  isPropagationStopped = true;
  validate(node);
}

var __read$2 =
  (undefined && undefined.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spread$1 =
  (undefined && undefined.__spread) ||
  function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$2(arguments[i]));
    return ar;
  };
function isSyntheticType(inputType) {
  if (DEPRECATED_CATCH_TYPE === inputType) {
    console.warn(
      'DEPRECATION: remax 已支持在 onClick 事件中使用 stopPropagation 阻止事件冒泡，请尽量不要使用 catchClick'
    );
  }
  return !!SYNTHETIC_TYPES.find(function (type) {
    return type === inputType;
  });
}
function createBaseSyntheticEvent(node, nativeEvent) {
  if (!nativeEvent) {
    return;
  }
  // 添加阻止冒泡方法
  nativeEvent.stopPropagation = function () {
    stopPropagation(node);
  };
  return nativeEvent;
}
function createCallbackProxy(eventType, node, callback) {
  if (!isSyntheticType(eventType)) {
    return callback;
  }
  return function (nativeEvent) {
    var restParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      restParams[_i - 1] = arguments[_i];
    }
    var syntheticEvent = createBaseSyntheticEvent(node, nativeEvent);
    if (isPropagationStopped) {
      validate(node);
      return;
    }
    return callback.apply(void 0, __spread$1([syntheticEvent], restParams));
  };
}

var __assign =
  (undefined && undefined.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var STYLE = 'style';
var CHILDREN = 'children';
var CLASS_NAME = 'className';
function diffProperties(lastRawProps, nextRawProps) {
  var updatePayload = null;
  var lastProps = lastRawProps;
  var nextProps = nextRawProps;
  var propKey;
  var styleName;
  var styleUpdates = null;
  for (propKey in lastProps) {
    if (
      Object.prototype.hasOwnProperty.call(nextProps, propKey) ||
      !Object.prototype.hasOwnProperty.call(lastProps, propKey) ||
      lastProps[propKey] == null
    ) {
      continue;
    }
    if (propKey === STYLE) {
      var lastStyle = lastProps[propKey];
      for (styleName in lastStyle) {
        if (Object.prototype.hasOwnProperty.call(lastStyle, styleName)) {
          if (!styleUpdates) {
            styleUpdates = {};
          }
          styleUpdates[styleName] = '';
        }
      }
    } else {
      // For all other deleted properties we add it to the queue. We use
      // the whitelist in the commit phase instead.
      (updatePayload = updatePayload || []).push(propKey, propKey === CLASS_NAME ? '' : null);
    }
  }
  for (propKey in nextProps) {
    var nextProp = nextProps[propKey];
    var lastProp = lastProps != null ? lastProps[propKey] : undefined;
    if (
      !Object.prototype.hasOwnProperty.call(nextProps, propKey) ||
      nextProp === lastProp ||
      (nextProp == null && lastProp == null)
    ) {
      continue;
    }
    if (propKey === STYLE) {
      {
        if (nextProp) {
          // Freeze the next style object so that we can assume it won't be
          // mutated. We have already warned for this in the past.
          Object.freeze(nextProp);
        }
      }
      if (lastProp) {
        // Unset styles on `lastProp` but not on `nextProp`.
        for (styleName in lastProp) {
          if (
            Object.prototype.hasOwnProperty.call(lastProp, styleName) &&
            (!nextProp || !Object.prototype.hasOwnProperty.call(nextProp, styleName))
          ) {
            if (!styleUpdates) {
              styleUpdates = {};
            }
            styleUpdates[styleName] = '';
          }
        }
        // Update styles that changed since `lastProp`.
        for (styleName in nextProp) {
          if (
            Object.prototype.hasOwnProperty.call(nextProp, styleName) &&
            lastProp[styleName] !== nextProp[styleName]
          ) {
            if (!styleUpdates) {
              styleUpdates = {};
            }
            styleUpdates[styleName] = nextProp[styleName];
          }
        }
      } else {
        // Relies on `updateStylesByID` not mutating `styleUpdates`.
        if (!styleUpdates) {
          if (!updatePayload) {
            updatePayload = [];
          }
          updatePayload.push(propKey, styleUpdates);
        }
        styleUpdates = nextProp;
      }
    } else if (propKey === CHILDREN) {
      if (lastProp !== nextProp && (typeof nextProp === 'string' || typeof nextProp === 'number')) {
        (updatePayload = updatePayload || []).push(propKey, '' + nextProp);
      }
    } else {
      // For any other property we always add it to the queue and then we
      // filter it out using the whitelist during the commit.
      (updatePayload = updatePayload || []).push(propKey, nextProp);
    }
  }
  if (styleUpdates) {
    // 由于 style 要转换成 string， 所以必须整个 style 对象都更新
    (updatePayload = updatePayload || []).push(STYLE, __assign(__assign({}, lastProps[STYLE]), styleUpdates));
  }
  return updatePayload;
}

var __values =
  (undefined && undefined.__values) ||
  function (o) {
    var s = typeof Symbol === 'function' && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === 'number')
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  };
var scheduleDeferredCallback = scheduler.unstable_scheduleCallback,
  cancelDeferredCallback = scheduler.unstable_cancelCallback,
  shouldYield = scheduler.unstable_shouldYield,
  now = scheduler.unstable_now;
function processProps(newProps, node, id) {
  var e_1, _a;
  var props = {};
  try {
    for (var _b = __values(Object.keys(newProps)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var propKey = _c.value;
      if (typeof newProps[propKey] === 'function') {
        var contextKey = REMAX_METHOD + '_' + id + '_' + propKey;
        node.container.createCallback(contextKey, createCallbackProxy(propKey, node, newProps[propKey]));
        props[propKey] = contextKey;
      } else if (propKey === 'style') {
        props[propKey] = newProps[propKey] || '';
      } else if (propKey === 'children') {
        // pass
      } else {
        props[propKey] = newProps[propKey];
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return props;
}
var rootHostContext = {};
var childHostContext = {};
var hostConfig = {
  now: now,
  getPublicInstance: function (inst) {
    return inst;
  },
  getRootHostContext: function () {
    return rootHostContext;
  },
  shouldSetTextContent: function (type) {
    return type === 'stub-block';
  },
  prepareForCommit: function () {
    // nothing to do
  },
  resetAfterCommit: function () {
    // nothing to do
  },
  getChildHostContext: function () {
    return childHostContext;
  },
  createInstance: function (type, newProps, container) {
    var id = generate();
    var node = new VNode({
      id: id,
      type: type,
      props: {},
      container: container,
    });
    node.props = processProps(newProps, node, id);
    return node;
  },
  createTextInstance: function (text, container) {
    var id = generate();
    var node = new VNode({
      id: id,
      type: TYPE_TEXT,
      props: null,
      container: container,
    });
    node.text = text;
    return node;
  },
  commitTextUpdate: function (node, oldText, newText) {
    if (oldText !== newText) {
      node.text = newText;
      node.update();
    }
  },
  prepareUpdate: function (node, type, lastProps, nextProps) {
    lastProps = processProps(lastProps, node, node.id);
    nextProps = processProps(nextProps, node, node.id);
    return diffProperties(lastProps, nextProps);
  },
  commitUpdate: function (node, updatePayload, type, oldProps, newProps) {
    node.props = processProps(newProps, node, node.id);
    node.update(updatePayload);
  },
  appendInitialChild: function (parent, child) {
    parent.appendChild(child, false);
  },
  appendChild: function (parent, child) {
    parent.appendChild(child, false);
  },
  insertBefore: function (parent, child, beforeChild) {
    parent.insertBefore(child, beforeChild, false);
  },
  removeChild: function (parent, child) {
    parent.removeChild(child, false);
  },
  finalizeInitialChildren: function () {
    return false;
  },
  appendChildToContainer: function (container, child) {
    container.appendChild(child);
    child.mounted = true;
  },
  insertInContainerBefore: function (container, child, beforeChild) {
    container.insertBefore(child, beforeChild);
  },
  removeChildFromContainer: function (container, child) {
    container.removeChild(child);
  },
  hideInstance: function (instance) {
    var _a;
    var originStyle = (_a = instance.props) === null || _a === void 0 ? void 0 : _a.style;
    var newStyle = Object.assign({}, originStyle || {}, { display: 'none' }); // 微信和阿里的小程序都不支持在内联样式中加`important!`
    instance.props = Object.assign({}, instance.props || {}, { style: newStyle });
    instance.update();
  },
  hideTextInstance: function (instance) {
    instance.text = '';
    instance.update();
  },
  unhideInstance: function (instance, props) {
    instance.props = props;
    instance.update();
  },
  unhideTextInstance: function (instance, text) {
    instance.text = text;
    instance.update();
  },
  schedulePassiveEffects: scheduleDeferredCallback,
  cancelPassiveEffects: cancelDeferredCallback,
  shouldYield: shouldYield,
  scheduleDeferredCallback: scheduleDeferredCallback,
  cancelDeferredCallback: cancelDeferredCallback,
  supportsMutation: true,
};

var ReactReconcilerInst = reactReconciler(hostConfig);
{
  ReactReconcilerInst.injectIntoDevTools({
    bundleType: 1,
    version: '16.13.1',
    rendererPackageName: 'remax',
  });
}
function getPublicRootInstance(container) {
  var containerFiber = container.current;
  if (!containerFiber.child) {
    return null;
  }
  return containerFiber.child.stateNode;
}
function render(rootElement, container) {
  // Create a root Container if it doesnt exist
  if (!container._rootContainer) {
    container._rootContainer = ReactReconcilerInst.createContainer(container, false, false);
  }
  ReactReconcilerInst.updateContainer(rootElement, container._rootContainer, null, function () {
    // ignore
  });
  return getPublicRootInstance(container._rootContainer);
}

var __read$3 =
  (undefined && undefined.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spread$2 =
  (undefined && undefined.__spread) ||
  function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$3(arguments[i]));
    return ar;
  };
/* eslint-disable prefer-rest-params */
/* istanbul ignore next */
if (typeof Function.prototype.call === 'undefined') {
  Function.prototype.call = function (context) {
    context = context || window;
    context.fn = this;
    var args = __spread$2(arguments).slice(1);
    var result = context.fn.apply(context, __spread$2(args));
    delete context.fn;
    return result;
  };
}
/* istanbul ignore next */
if (typeof Function.prototype.apply === 'undefined') {
  Function.prototype.apply = function (context) {
    context = context || window;
    context.fn = this;
    var result;
    if (arguments[1]) {
      result = context.fn.apply(context, __spread$2(arguments[1]));
    } else {
      result = context.fn();
    }
    delete context.fn;
    return result;
  };
}

var Lifecycle;
(function (Lifecycle) {
  Lifecycle['load'] = 'load';
  Lifecycle['show'] = 'show';
  Lifecycle['hide'] = 'hide';
  Lifecycle['ready'] = 'ready';
  Lifecycle['pullDownRefresh'] = 'pullDownRefresh';
  Lifecycle['reachBottom'] = 'reachBottom';
  Lifecycle['pageScroll'] = 'pageScroll';
  Lifecycle['shareAppMessage'] = 'shareAppMessage';
  Lifecycle['titleClick'] = 'titleClick';
  Lifecycle['optionMenuClick'] = 'optionMenuClick';
  Lifecycle['popMenuClick'] = 'popMenuClick';
  Lifecycle['pullIntercept'] = 'pullIntercept';
  Lifecycle['back'] = 'back';
  Lifecycle['keyboardHeight'] = 'keyboardHeight';
  Lifecycle['tabItemTap'] = 'tabItemTap';
  Lifecycle['beforeTabItemTap'] = 'beforeTabItemTap';
  Lifecycle['resize'] = 'resize';
  Lifecycle['unload'] = 'unload';
})(Lifecycle || (Lifecycle = {}));
var AppLifecycle;
(function (AppLifecycle) {
  AppLifecycle['launch'] = 'launch';
  AppLifecycle['show'] = 'show';
  AppLifecycle['hide'] = 'hide';
  AppLifecycle['error'] = 'error';
  AppLifecycle['shareAppMessage'] = 'shareAppMessage';
  AppLifecycle['pageNotFound'] = 'pageNotFound';
  AppLifecycle['unhandledRejection'] = 'unhandledRejection';
  AppLifecycle['themeChange'] = 'themeChange';
})(AppLifecycle || (AppLifecycle = {}));

var __extends =
  (undefined && undefined.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var __read$4 =
  (undefined && undefined.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spread$3 =
  (undefined && undefined.__spread) ||
  function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$4(arguments[i]));
    return ar;
  };
var DefaultAppComponent = /** @class */ (function (_super) {
  __extends(DefaultAppComponent, _super);
  function DefaultAppComponent() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  DefaultAppComponent.prototype.render = function () {
    return react.createElement(react.Fragment, null, this.props.children);
  };
  return DefaultAppComponent;
})(react.Component);

var PageInstanceContext = react.createContext(null);
PageInstanceContext.displayName = 'PageContext';

var __extends$1 =
  (undefined && undefined.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var __read$5 =
  (undefined && undefined.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spread$4 =
  (undefined && undefined.__spread) ||
  function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$5(arguments[i]));
    return ar;
  };

var effector = {
  listenerConfigs: [],
};
function dispose(listener) {
  effector.listenerConfigs = effector.listenerConfigs.filter(function (config) {
    return config.listener !== listener;
  });
}
function connect(listener, once) {
  effector.listenerConfigs.push({ listener: listener, once: once });
  return function () {
    return dispose(listener);
  };
}
function run() {
  effector.listenerConfigs.forEach(function (config) {
    config.listener();
    if (config.once) {
      dispose(config.listener);
    }
  });
}
var nativeEffect = {
  connect: connect,
  run: run,
  dispose: dispose,
};

var __read$6 =
  (undefined && undefined.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spread$5 =
  (undefined && undefined.__spread) ||
  function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$6(arguments[i]));
    return ar;
  };
var Container = /** @class */ (function () {
  function Container(context) {
    this.updateQueue = [];
    this.rendered = false;
    this.context = context;
    this.root = new VNode({
      id: generate(),
      type: 'root',
      container: this,
    });
    this.root.mounted = true;
  }
  Container.prototype.requestUpdate = function (update, immediately) {
    var _this = this;
    if (immediately) {
      this.updateQueue.push(update);
      this.applyUpdate();
    } else {
      if (this.updateQueue.length === 0) {
        Promise.resolve().then(function () {
          return _this.applyUpdate();
        });
      }
      this.updateQueue.push(update);
    }
  };
  Container.prototype.applyUpdate = function () {
    var _this = this;
    if (this.stopUpdate) {
      return;
    }
    var startTime = new Date().getTime();
    if (typeof this.context.$spliceData === 'function') {
      var $batchedUpdates = function (callback) {
        callback();
      };
      if (typeof this.context.$batchedUpdates === 'function') {
        $batchedUpdates = this.context.$batchedUpdates;
      }
      $batchedUpdates(function () {
        _this.updateQueue.map(function (update, index) {
          var _a, _b;
          var callback = undefined;
          if (index + 1 === _this.updateQueue.length) {
            callback = function () {
              nativeEffect.run();
              /* istanbul ignore next */
              if (get('debug')) {
                console.log('setData => \u56DE\u8C03\u65F6\u95F4\uFF1A' + (new Date().getTime() - startTime) + 'ms');
              }
            };
          }
          if (update.type === 'splice') {
            _this.context.$spliceData(
              ((_a = {}),
              (_a[update.path + '.children'] = __spread$5([update.start, update.deleteCount], update.items)),
              _a),
              callback
            );
          }
          if (update.type === 'set') {
            _this.context.setData(((_b = {}), (_b[update.path + '.' + update.name] = update.value), _b), callback);
          }
        });
      });
      this.updateQueue = [];
      return;
    }
    var updatePayload = this.updateQueue.reduce(function (acc, update) {
      if (update.node.isDeleted()) {
        return acc;
      }
      if (update.type === 'splice') {
        acc[update.path + '.nodes.' + update.id] = update.items[0] || null;
        if (update.children) {
          acc[update.path + '.children'] = (update.children || []).map(function (c) {
            return c.id;
          });
        }
      } else {
        acc[update.path + '.' + update.name] = update.value;
      }
      return acc;
    }, {});
    this.context.setData(updatePayload, function () {
      nativeEffect.run();
      /* istanbul ignore next */
      if (get('debug')) {
        console.log(
          'setData => \u56DE\u8C03\u65F6\u95F4\uFF1A' + (new Date().getTime() - startTime) + 'ms',
          updatePayload
        );
      }
    });
    this.updateQueue = [];
  };
  Container.prototype.clearUpdate = function () {
    this.stopUpdate = true;
  };
  Container.prototype.createCallback = function (name, fn) {
    this.context[name] = fn;
  };
  Container.prototype.appendChild = function (child) {
    this.root.appendChild(child, true);
  };
  Container.prototype.removeChild = function (child) {
    this.root.removeChild(child, true);
  };
  Container.prototype.insertBefore = function (child, beforeChild) {
    this.root.insertBefore(child, beforeChild, true);
  };
  return Container;
})();

var __read$7 =
  (undefined && undefined.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spread$6 =
  (undefined && undefined.__spread) ||
  function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$7(arguments[i]));
    return ar;
  };

var __assign$1 =
  (undefined && undefined.__assign) ||
  function () {
    __assign$1 =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign$1.apply(this, arguments);
  };

function useNativeEffect(listener, deps) {
  react.useLayoutEffect(function () {
    return nativeEffect.connect(listener, !!deps);
  }, deps);
}

// eslint-disable-next-line @typescript-eslint/camelcase
var unstable_batchedUpdates = ReactReconcilerInst.batchedUpdates;

function createComponentConfig(Component) {
  var config = {
    data: {
      action: {},
      root: {
        children: [],
      },
    },
    onInit: function () {
      this.init();
    },
    didMount: function () {
      if (!this.container) {
        this.init();
      }
    },
    didUnmount: function () {
      this.container.clearUpdate();
      render(null, this.container);
    },
    methods: {
      init: function () {
        this.container = new Container(this);
        this.element = render(react.createElement(Component), this.container);
      },
    },
  };
  return config;
}

export { RuntimeOptions, createComponentConfig, useNativeEffect };
