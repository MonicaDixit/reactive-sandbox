'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users$ = _Rx.Observable.from(_axios2.default.get("https://api.github.com/users"));
users$.subscribe((0, _util.createSubscriber)('github'));