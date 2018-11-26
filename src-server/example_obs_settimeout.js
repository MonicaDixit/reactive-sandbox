import Rx, { Observable } from "rxjs/Rx";
import  {createSubscriber} from './lib/util';

const source$ = Observable.timer(1000)
.subscribe(createSubscriber('from timer'));
