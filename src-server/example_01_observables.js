import Rx from "rxjs/RX";

const simple$ =  new Rx.Observable(observer => {
  console.log("generating");
  setTimeout(() => {
    observer.next("an item");
    setTimeout(() => {
      observer.next("another item");
      observer.complete();
    }, 1000);
  }, 1000);
});

//lets create a subscription. Observables are lazy

simple$.subscribe(
  item => console.log(`one.next ${item}`), //next
  error => console.log(`one.error ${error}`), //error
  () => console.log(`one.complete`)); //complete


  //another way to subscribe , passing in an object which has all these propeties on it, called next error and complete
setTimeout(() => {
  simple$.subscribe({
    next: item => console.log(`two.next ${item}`),
    error : error => console.log(`two error ${error}`),
    complete: function() {
      console.log(`two.complete`);
    }
  });
}, 3000);


//each time we subscribe, we run the generator function again

//hot vs cold observable
//observable is simply a generator function which accpets an observer and invokes the next function on it

//error observable
const error$ = new Rx.Observable(observer => {
  observer.error(new Error("wtf!"));
});

// error$.subscribe({
//   next: item => console.log(`${item}`),
//   //instantiate an error object and get the stack using error.stack
//   error : error => console.log(`error ${error.stack}`)
// });




function createInterval$(time) {
  return new Rx.Observable(observer => {
    let index  = 0;
    setInterval(() => {
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

const everySecond$ = createInterval$(1000);
// everySecond$.subscribe(createSubscriber("one"));