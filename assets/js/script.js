function goto_op1() {
  location.href = "/pages/opening/opening_1.html";
}

function goto_op2() {
  location.href = "/pages/opening/opening_2.html";
}

function goto_op3() {
  location.href = "/pages/opening/opening_3.html";
}

function goto_op4() {
  location.href = "/pages/opening/opening_4.html";
}

function goto_op5() {
  location.href = "/pages/opening/opening_5.html";
}

function goto_op6() {
  location.href = "/pages/opening/opening_6.html";
}

function goto_menu() {
  location.href = "/pages/menu/menu.html";
}

function goto_rules() {
  location.href = "/pages/menu/rules.html";
}

function goto_mini() {
  location.href = "/pages/adegan/minigames.html";
}

// Cookies
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(current) {
  const last = getCookie("now");
  setCookie("last", last);
  setCookie("now", current);

  if (current < 3) {
    setCookie("bar_kesehatan", 100);
    setCookie("bar_kebahagiaan", 100);
    setCookie("bar_social", 100);
  } else if (
    (current == 3 && last == 2) ||
    (current == 3 && last == 4) ||
    (current == 3 && last == 3)
  ) {
    setCookie("bar_kesehatan", 90);
    setCookie("bar_kebahagiaan", 90);
    setCookie("bar_social", 90);
  } else if (
    (current == 4 && last == 3) ||
    (current == 4 && last == 12) ||
    (current == 4 && last == 4)
  ) {
    setCookie("bar_kesehatan", 85);
    setCookie("bar_kebahagiaan", 85);
    setCookie("bar_social", 85);
  } else if ((current == 12 && last == 4) || (current == 12 && last == 12)) {
    setCookie("bar_kesehatan", 80);
    setCookie("bar_kebahagiaan", 87.5);
    setCookie("bar_social", 80);
  } else if (
    (current == 13 && last == 12) ||
    (current == 13 && last == 14) ||
    (current == 13 && last == 13)
  ) {
    setCookie("bar_kesehatan", 75);
    setCookie("bar_kebahagiaan", 82.5);
    setCookie("bar_social", 75);
  } else if (
    (current == 14 && last == 13) ||
    (current == 14 && last == "end2") ||
    (current == 14 && last == 14)
  ) {
    setCookie("bar_kesehatan", 10);
    setCookie("bar_kebahagiaan", 10);
    setCookie("bar_social", 10);
  } else if (
    (current == "end2" && last == 13) ||
    (current == "end2" && last == "end2") ||
    current == "end2"
  ) {
    setCookie("bar_kesehatan", 0);
    setCookie("bar_kebahagiaan", 10);
    setCookie("bar_social", 0);
  } else if (
    (current == 5 && last == 4) ||
    (current == 5 && last == 28) ||
    (current == 5 && last == 6)
  ) {
    setCookie("bar_kesehatan", 75);
    setCookie("bar_kebahagiaan", 75);
    setCookie("bar_social", 75);
  } else if (current == 5 && last == 12) {
    setCookie("bar_kesehatan", 70);
    setCookie("bar_kebahagiaan", 77.5);
    setCookie("bar_social", 70);
  }

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
}

// Adegan
function goto_(tujuan, a, b, c) {
  let bar_kesehatan = getCookie("bar_kesehatan");
  let bar_kebahagiaan = getCookie("bar_kebahagiaan");
  let bar_social = getCookie("bar_social");

  if (a != null && b != null && c != null) {
    setCookie("bar_kesehatan", bar_kesehatan - a);
    setCookie("bar_kebahagiaan", bar_kebahagiaan - b);
    setCookie("bar_social", bar_social - c);
  }

  location.href = "/pages/adegan/adegan_" + tujuan + ".html";
}
