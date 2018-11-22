"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// export function createSubscriber(tag) {
// 	return {
// 		next(item) { console.log(`${tag}.next ${item}`); },
// 		error(error) { console.log(`${tag}.error ${error.stack || error}`); },
// 		complete() { console.log(`${tag}.complete`); }
// 	};
// }


function createSubscriber(tag) {
	return {
		next: function next(item) {
			return console.log(tag + ".next is " + item);
		},
		error: function error(_error) {
			return console.log(tag + ".error is " + (_error.stack || _error));
		},
		complete: function complete() {
			console.log(tag + " is complete");
		}
	};
}
exports.createSubscriber = createSubscriber;