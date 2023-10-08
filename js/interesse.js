const cont = document.getElementById("roww");
const title = document.getElementById("tit");
let params = new URL(document.location).searchParams;
let name = params.get("id");
let imgs;
switch (name) {
  case "eden":
    imgtitle = "Bacalhoa Euddha Eden";
    imgs = eden;
    break;
  case "fatima":
    imgtitle = "Santuario di Fatima";
    imgs = fatima;
    break;
  case "nazare":
    imgtitle = "Nazaré";
    imgs = nazare;
    break;
  case "peniche":
    imgtitle = "Peniche";
    imgs = peniche;
    break;
  case "belem":
    imgtitle = "Torre di Belém";
    imgs = belem;
    break;
  case "monastero":
    imgtitle = "Monastero dos Jerónimos";
    imgs = monastero;
    break;
  case "padrao":
    imgtitle = "Padrao dos Descobrimentos";
    imgs = padrao;
    break;
  case "arco":
    imgtitle = "Arco do Triunfo";
    imgs = arco;
    break;
  case "almourol":
    imgtitle = "Castello di Almourol";
    imgs = almourol;
    break;
  default:
    imgs = "";
    break;
}
title.innerHTML = `<h1>` + imgtitle + `</h1>`;
let c = "";

for (var i = 0; i < imgs.length; i++) {
  c =
    c +
    `<div class="column">
            <img src="${imgs[i]}" alt="${imgtitle}" style="width:100%" onclick="myFunction(this);">
        </div>`;
}

cont.innerHTML = c;
