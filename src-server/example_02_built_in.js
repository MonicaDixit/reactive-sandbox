import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

//built in interval observable
// Rx.Observable.interval(500)
// .take(5)
// .subscribe(createSubscriber("interval"));

// //built in  timer observable
// Rx.Observable.timer(1000, 500)
// .take(3)
// .subscribe(createSubscriber("timer"));

//of built in 
Rx.Observable.of("hello", "world")
.subscribe(createSubscriber("of"));


//from takes an iterable and flatten it out 
// Rx.Observable.from([1, 2,3])
// .subscribe(createSubscriber("from"));

Rx.Observable.from([2,3,4,5,6])
.map( i=> i*5)
.subscribe(createSubscriber("from with map"));

// Rx.Observable.throw(new Error("hey"))
// .subscribe(createSubscriber("error"));

Rx.Observable.empty()
.subscribe(createSubscriber("empty"));

let sideEffect = 0;
const defer$ = Rx.Observable.defer(() => {
  sideEffect++;
  return Rx.Observable.of(sideEffect);
});

defer$.subscribe( createSubscriber("defer$.one"));
defer$.subscribe(createSubscriber("defer$.two"));
defer$.subscribe(createSubscriber("defer$.three"));

Rx.Observable.range(0, 3)
.subscribe(createSubscriber("range"));