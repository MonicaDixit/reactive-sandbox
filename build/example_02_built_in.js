"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//built in interval observable
// Rx.Observable.interval(500)
// .take(5)
// .subscribe(createSubscriber("interval"));

// //built in  timer observable
// Rx.Observable.timer(1000, 500)
// .take(3)
// .subscribe(createSubscriber("timer"));

//of built in 
_Rx2.default.Observable.of("hello", "world").subscribe((0, _util.createSubscriber)("of"));

//from takes an iterable and flatten it out 
// Rx.Observable.from([1, 2,3])
// .subscribe(createSubscriber("from"));

_Rx2.default.Observable.from([2, 3, 4, 5, 6]).map(function (i) {
  return i * 5;
}).subscribe((0, _util.createSubscriber)("from with map"));

// Rx.Observable.throw(new Error("hey"))
// .subscribe(createSubscriber("error"));

_Rx2.default.Observable.empty().subscribe((0, _util.createSubscriber)("empty"));

var sideEffect = 0;
var defer$ = _Rx2.default.Observable.defer(function () {
  sideEffect++;
  return _Rx2.default.Observable.of(sideEffect);
});

defer$.subscribe((0, _util.createSubscriber)("defer$.one"));
defer$.subscribe((0, _util.createSubscriber)("defer$.two"));
defer$.subscribe((0, _util.createSubscriber)("defer$.three"));

_Rx2.default.Observable.range(0, 3).subscribe((0, _util.createSubscriber)("range"));