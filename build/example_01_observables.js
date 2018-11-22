"use strict";

var _RX = require("rxjs/RX");

var _RX2 = _interopRequireDefault(_RX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = new _RX2.default.Observable(function (observer) {
  console.log("generating");
  setTimeout(function () {
    observer.next("an item");
    setTimeout(function () {
      observer.next("another item");
      observer.complete();
    }, 1000);
  }, 1000);
});

//lets create a subscription. Observables are lazy

simple$.subscribe(function (item) {
  return console.log("one.next " + item);
}, //next
function (error) {
  return console.log("one.error " + error);
}, //error
function () {
  return console.log("one.complete");
}); //complete


//another way to subscribe , passing in an object which has all these propeties on it, called next error and complete
setTimeout(function () {
  simple$.subscribe({
    next: function next(item) {
      return console.log("two.next " + item);
    },
    error: function error(_error) {
      return console.log("two error " + _error);
    },
    complete: function complete() {
      console.log("two.complete");
    }
  });
}, 3000);

//each time we subscribe, we run the generator function again

//hot vs cold observable
//observable is simply a generator function which accpets an observer and invokes the next function on it

//error observable
var error$ = new _RX2.default.Observable(function (observer) {
  observer.error(new Error("wtf!"));
});

// error$.subscribe({
//   next: item => console.log(`${item}`),
//   //instantiate an error object and get the stack using error.stack
//   error : error => console.log(`error ${error.stack}`)
// });


function createInterval$(time) {
  return new _RX2.default.Observable(function (observer) {
    var index = 0;
    setInterval(function () {
      observer.next(index++);
    }, time);
  });
}

// function createSubscriber(tag) {
//   return {
//     next(item) {console.log(`${tag}.next ${item}`);},
//     error(error) {console.log(`${tag}.error ${error.stack || error}`);},
//     complete() {console.log(`${tag}.complete`)}
//   };
// }

var everySecond$ = createInterval$(1000);
// everySecond$.subscribe(createSubscriber("one"));