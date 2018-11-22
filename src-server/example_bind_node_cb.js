import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";
import fs from  "fs";


// fs.readdir("./src-server", (err, items)=> {
//   if (err) console.error(err);
//   else {
//     console.log(items);
//   }
// })

//the code above can be replced by observables like this below
const readDir$ = Rx.Observable.bindNodeCallback(fs.readdir);

readDir$("./src-server")
.mergeMap(files => Rx.Observable.from(files))
.map(file => `read ${file}`)
.subscribe(createSubscriber("readdir"));

