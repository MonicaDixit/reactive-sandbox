"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getItem() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("hello");
    });
  });
}

_Rx2.default.Observable.fromPromise(getItem()).subscribe((0, _util.createSubscriber)('from promise'));