import Rx from "rxjs/Rx";
import {createSubscriber} from './lib/util';


function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("hello");
    });
  });
}

Rx.Observable.fromPromise(getItem())
.subscribe(createSubscriber('from promise'));