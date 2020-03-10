'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _commonjsHelpers = require('../../_virtual/_commonjsHelpers.js');

var fmtEvent_1 = _commonjsHelpers.createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports["default"] = fmtEvent;

  function fmtEvent(props, e) {
    var dataset = {};

    for (var key in props) {
      if (/data-/gi.test(key)) {
        dataset[key.replace(/data-/gi, '')] = props[key];
      }
    }

    return Object.assign({}, e, {
      currentTarget: {
        dataset: dataset
      },
      target: {
        dataset: dataset,
        targetDataset: dataset
      }
    });
  }
});
_commonjsHelpers.unwrapExports(fmtEvent_1);

exports.__moduleExports = fmtEvent_1;
