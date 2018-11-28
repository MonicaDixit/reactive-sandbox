'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addSixPercent = function addSixPercent(x) {
  return x + x * .06;
};
var obs$ = _Rx2.default.Observable.of(10, 20, 30, 40).map(addSixPercent);
obs$.subscribe((0, _util.createSubscriber)('map'));