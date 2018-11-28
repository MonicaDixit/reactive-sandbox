import Rx from "rxjs/Rx";
import {createSubscriber} from './lib/util';


const addSixPercent = x => x + (x * .06);
let obs$ = Rx.Observable.of(10, 20, 30, 40).map(addSixPercent);
obs$.subscribe(createSubscriber('map'));