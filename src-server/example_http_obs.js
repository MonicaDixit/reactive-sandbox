import Rx, { Observable } from "rxjs/Rx";
import {createSubscriber} from './lib/util';
import axios from 'axios';

const users$ = Observable.from(axios.get("https://api.github.com/users"));
users$.subscribe(createSubscriber('github'));