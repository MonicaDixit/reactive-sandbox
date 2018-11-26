import Rx from "rxjs/Rx";

let canDraw = false;

function draw(x, y) {
  let el = document.createElement('span');
  el.classList.add('dot');
  el.style.top = `${y}px`;
  el.style.left = `${x}px`;
  document.body.appendChild(el);
}


let mousemove$ = Rx.Observable.fromEvent(document , 'mousemove');
let mousedown$ = Rx.Observable.fromEvent(document, 'mousedown');
let mouseup$ = Rx.Observable.fromEvent(document, 'mouseup');

mousemove$.subscribe(e => {
  if (canDraw) {
    draw(e.x, e.y);
  }
});

mousedown$.subscribe(e => {
  canDraw = true;
  draw(e.x, e.y);
});


mouseup$.subscribe(e => {
  canDraw = false;
})