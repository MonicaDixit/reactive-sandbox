import Rx from "rxjs/Rx";
import $ from "jquery";

function throttle(el, event, time = 2000) {
  // create a reference to the element
  var element = document.querySelector(el);
  // attach an observer
  var eventObserver = Rx.Observable.fromEvent(element, event);

  // call the throttleTime method on the observable passing the time,
  // map tru the events an get the value of the input
  // return an observable to be subscribed to
  //the event is fired after every timemilliseconds specified.
  return eventObserver.throttleTime(time).map(event => event.target.value);
}


function debounce(el, event, time = 2000) {
  // create a reference to the element
  var element = document.querySelector(el);
  // attach an observer
  var eventObserver = Rx.Observable.fromEvent(element, event);

  // call the debounveTime method on the observable passing the time,
  // map tru the events an get the value of the input
  // return an observable to be subscribed to
  //debounce until the specified time has elapsed after the event was fired
  return eventObserver.debounceTime(time).map(event => event.target.value);
}

throttle('#throttle-field', 'input').subscribe(value =>
  print('#throttle-output', value)
);

debounce('#debounce-field', 'input', 500).subscribe(value =>
  print('#debounce-output', value)
);

function print(el, val) {
  if (!val) return;
  var data = document.createElement('pre');
  data.innerHTML = val;
  document.querySelector(el).appendChild(data);
}