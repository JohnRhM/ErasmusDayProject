const cont = document.getElementById("roww");
const title = document.getElementById("tit");
let params = new URL(document.location).searchParams;
let name = params.get("id");
let imgs;
imgs = scuola;

title.innerHTML = `<h1>Scuola</h1>`;
let c = "";

for (var i = 0; i < imgs.length; i++) {
  c =
    c +
    `<div class="column">
            <img src="${imgs[i].img}" alt="${imgs[i].title}" style="width:100%" onclick="myFunction(this);">
        </div>`;
}

cont.innerHTML = c;
