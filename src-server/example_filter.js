import Rx from "rxjs/Rx";
import {createSubscriber} from './lib/util';


Rx.Observable.range(1,10)
.filter(a => a < 2 || a > 4)
.subscribe(createSubscriber('filter'));