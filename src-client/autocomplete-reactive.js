import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $('#title');
const $results = $('#results');


const keyUps$ = Rx.Observable.fromEvent($title, "keyup");

const queries$ = keyUps$
.map( e => e.target.value)
.distinctUntilChanged();

queries$.subscribe(query => {
  getItems(query)
  .then(items => {
    $results.empty();
    $results.append(items.map(item => $('<li />').text(item)));
  });

});


function getItems(title) {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve([title, "item1", `Another random ${Math.random()}`]);
    }, 1000);
  }); 
}