let bar_kesehatan = getCookie("bar_kesehatan");
let bar_kebahagiaan = getCookie("bar_kebahagiaan");
let bar_social = getCookie("bar_social");

document.querySelector("#bar_kesehatan .progress-bar").style.width =
  bar_kesehatan + "%";
document.querySelector("#bar_kesehatan span").innerHTML = bar_kesehatan + "%";

document.querySelector("#bar_kebahagiaan .progress-bar").style.width =
  bar_kebahagiaan + "%";
document.querySelector("#bar_kebahagiaan span").innerHTML =
  bar_kebahagiaan + "%";

document.querySelector("#bar_social .progress-bar").style.width =
  bar_social + "%";
document.querySelector("#bar_social span").innerHTML = bar_social + "%";
