import $ from 'jquery';

const $title = $("#title");
const $results = $("#results");

$title.on("keyup" , e => {
  const title = e.target.value;

  getItems(title)
  .then(items => {
    $results.empty();

    const $items = items.map((item) =>  $(`<li/>`).text(item));
    $results.append($items);
  });
});

//-----------------------------

function getItems(title) {
  console.log(`querying ${title}`);
  return new Promise((resolve, reject) => {
    setTimeout ( () => {
      resolve([title, "item2", `Another ${Math.random()}`]);
    }, 500 + (Math.random() * 200));
  });
}