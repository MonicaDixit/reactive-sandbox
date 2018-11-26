import Rx from "rxjs/Rx";
import $ from "jquery";


let $results = $("#results");
let $search = $('#search');

let searchObs = Rx.Observable.fromEvent($search, 'input')
                .map(event => event.target.value)
                .debounceTime(2000)
                .distinctUntilChanged();

  function getWikiSearch(searchTerm) {
      return $.ajax({
          url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&format=json`,
          dataType: 'jsonp'
        }).promise();
    }

 let obs = searchObs
  .switchMap(searchTerm => Rx.Observable.fromPromise(getWikiSearch(searchTerm)))
  .mergeMap( itemList => Rx.Observable.from(itemList))
  .skip(1)
  .subscribe(items =>showResults(items));


function showResults(items) {
  console.log(items);
// let length = items[0].length;

// for (let i = 0; i < length ; i++) {
//   $results.append( $('<li />').text(`${items[0]} ${items[1]} ${items[2]}`));
// }
  
  // $results.append( $('<li />').text(`${items[1]}`));

//  $results.append(showResults(items)));
}

