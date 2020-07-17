const guineaPigs = [{
  name: "Harmony"
},{
  name: "Bixby"
},{
  name: "Mesa"
}];

const $ul = document.querySelector(".guinea-pigs");

const $guineaPigs = guineaPigs.map(guineaPig => {
  const name = guineaPig.name;
  const $li = document.createElement("li");
  $li.textContent = name;
  return $li;
});

$guineaPigs.forEach($guineaPig => {
  $ul.append($guineaPig);
});
