"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fs.readdir("./src-server", (err, items)=> {
//   if (err) console.error(err);
//   else {
//     console.log(items);
//   }
// })

//the code above can be replced by observables like this below
var readDir$ = _Rx2.default.Observable.bindNodeCallback(_fs2.default.readdir);

readDir$("./src-server").mergeMap(function (files) {
  return _Rx2.default.Observable.from(files);
}).map(function (file) {
  return "read " + file;
}).subscribe((0, _util.createSubscriber)("readdir"));