function goto_op(target) {
  location.href = "/pages/opening/opening_" + target + ".html";
}

function goto_menu() {
  location.href = "/pages/menu/menu.html";
}

function goto_rules() {
  location.href = "/pages/menu/rules.html";
}

function goto_ribbon() {
  location.href = "/pages/menu/ribbon.html";
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

// function checkCookie(current) {
//   const last = getCookie("now");
//   setCookie("last", last);
//   setCookie("now", current);

//   if (current < 3) {
//     setCookie("bar_kesehatan", 100);
//     setCookie("bar_kebahagiaan", 100);
//     setCookie("bar_social", 100);
//   } else if (
//     (current == 3 && last == 2) ||
//     (current == 3 && last == 4) ||
//     (current == 3 && last == 3)
//   ) {
//     setCookie("bar_kesehatan", 90);
//     setCookie("bar_kebahagiaan", 90);
//     setCookie("bar_social", 90);
//   } else if (
//     (current == 4 && last == 3) ||
//     (current == 4 && last == 12) ||
//     (current == 4 && last == 4) ||
//     (current == 4 && last == 5)
//   ) {
//     setCookie("bar_kesehatan", 85);
//     setCookie("bar_kebahagiaan", 85);
//     setCookie("bar_social", 85);
//   } else if ((current == 5 && last == 4) || (current == 5 && last == 6)) {
//     setCookie("bar_kesehatan", 75);
//     setCookie("bar_kebahagiaan", 75);
//     setCookie("bar_social", 75);
//   } else if (
//     (current == 12 && last == 4) ||
//     (current == 12 && last == 12) ||
//     (current == 12 && last == 13) ||
//     (current == 12 && last == 5)
//   ) {
//     setCookie("bar_kesehatan", 80);
//     setCookie("bar_kebahagiaan", 87.5);
//     setCookie("bar_social", 80);
//   } else if (
//     (current == 13 && last == 12) ||
//     (current == 13 && last == 14) ||
//     (current == 13 && last == 13)
//   ) {
//     setCookie("bar_kesehatan", 75);
//     setCookie("bar_kebahagiaan", 82.5);
//     setCookie("bar_social", 75);
//   } else if (
//     (current == 14 && last == 13) ||
//     (current == 14 && last == "end2") ||
//     (current == 14 && last == 14)
//   ) {
//     setCookie("bar_kesehatan", 10);
//     setCookie("bar_kebahagiaan", 10);
//     setCookie("bar_social", 10);
//   } else if (
//     (current == 15 && last == 6) ||
//     (current == 15 && last == 16) ||
//     (current == 15 && last == 7)
//   ) {
//     setCookie("bar_kesehatan", 60);
//     setCookie("bar_kebahagiaan", 70);
//     setCookie("bar_social", 60);
//   } else if (current == 7 && last == 15) {
//     setCookie("bar_kesehatan", 55);
//     setCookie("bar_kebahagiaan", 65);
//     setCookie("bar_social", 55);
//   } else if ((current == 16 && last == 15) || (current == 16 && last == 17)) {
//     setCookie("bar_kesehatan", 55);
//     setCookie("bar_kebahagiaan", 72.5);
//     setCookie("bar_social", 55);
//   } else if (
//     (current == 17 && last == 16) ||
//     (current == 17 && last == 18) ||
//     (current == 17 && last == "end3")
//   ) {
//     setCookie("bar_kesehatan", 50);
//     setCookie("bar_kebahagiaan", 72.5);
//     setCookie("bar_social", 50);
//   } else if (
//     (current == 18 && last == 17) ||
//     (current == 18 && last == "end3")
//   ) {
//     setCookie("bar_kesehatan", 55);
//     setCookie("bar_kebahagiaan", 77.5);
//     setCookie("bar_social", 55);
//   } else if (current == "end3" && last == 17) {
//     setCookie("bar_kesehatan", 55);
//     setCookie("bar_kebahagiaan", 77.5);
//     setCookie("bar_social", 0);
//   } else if (current == "end3" && last == 18) {
//     setCookie("bar_kesehatan", 50);
//     setCookie("bar_kebahagiaan", 72.5);
//     setCookie("bar_social", 0);
//   } else if (
//     (current == "end2" && last == 13) ||
//     (current == "end2" && last == "end2") ||
//     current == "end2"
//   ) {
//     setCookie("bar_kesehatan", 0);
//     setCookie("bar_kebahagiaan", 10);
//     setCookie("bar_social", 0);
//   } else if ((current == 5 && last == 4) || (current == 5 && last == 28)) {
//     setCookie("bar_kesehatan", 75);
//     setCookie("bar_kebahagiaan", 75);
//     setCookie("bar_social", 75);
//   } else if (current == 5 && last == 12) {
//     setCookie("bar_kesehatan", 75);
//     setCookie("bar_kebahagiaan", 82.5);
//     setCookie("bar_social", 75);
//   } else if (
//     (current == 28 && last == 5) ||
//     (current == 28 && last == 28) ||
//     (current == 28 && last == 29)
//   ) {
//     setCookie("bar_kesehatan", 70);
//     setCookie("bar_kebahagiaan", 70);
//     setCookie("bar_social", 70);
//   } else if (
//     (current == 29 && last == 28) ||
//     (current == 29 && last == 29) ||
//     (current == 29 && last == 30)
//   ) {
//     setCookie("bar_kesehatan", 60);
//     setCookie("bar_kebahagiaan", 60);
//     setCookie("bar_social", 60);
//   } else if (
//     (current == 30 && last == 29) ||
//     (current == 30 && last == 30) ||
//     (current == 30 && last == 31)
//   ) {
//     setCookie("bar_kesehatan", 55);
//     setCookie("bar_kebahagiaan", 65);
//     setCookie("bar_social", 55);
//   } else if (
//     (current == 31 && last == 31) ||
//     (current == 31 && last == 30) ||
//     (current == 31 && last == 32) ||
//     (current == 31 && last == "end7")
//   ) {
//     setCookie("bar_kesehatan", 60);
//     setCookie("bar_kebahagiaan", 70);
//     setCookie("bar_social", 60);
//   } else if (
//     (current == 32 && last == "end7") ||
//     (current == 32 && last == 32) ||
//     (current == 32 && last == 31)
//   ) {
//     setCookie("bar_kesehatan", 40);
//     setCookie("bar_kebahagiaan", 50);
//     setCookie("bar_social", 40);
//   } else if (current == "end7" && last == 32) {
//     setCookie("bar_kesehatan", 35);
//     setCookie("bar_kebahagiaan", 45);
//     setCookie("bar_social", 0);
//   } else if (current == "end7" && last == 31) {
//     setCookie("bar_kesehatan", 55);
//     setCookie("bar_kebahagiaan", 65);
//     setCookie("bar_social", 0);
//   } else if (current == 9 && last == 28) {
//     setCookie("bar_kesehatan", 60);
//     setCookie("bar_kebahagiaan", 60);
//     setCookie("bar_social", 60);
//   } else if (
//     (current == 6 && last == 5) ||
//     (current == 6 && last == 15) ||
//     (current == 6 && last == 7)
//   ) {
//     setCookie("bar_kesehatan", 65);
//     setCookie("bar_kebahagiaan", 65);
//     setCookie("bar_social", 65);
//   } else if (
//     (current == 7 && last == 6) ||
//     (current == 7 && last == 8) ||
//     (current == 7 && last == 9)
//   ) {
//     setCookie("bar_kesehatan", 60);
//     setCookie("bar_kebahagiaan", 60);
//     setCookie("bar_social", 60);
//   } else if (
//     (current == 8 && last == 7) ||
//     (current == 8 && last == 17) ||
//     (current == 8 && last == 9)
//   ) {
//     setCookie("bar_kesehatan", 60);
//     setCookie("bar_kebahagiaan", 60);
//     setCookie("bar_social", 60);
//   } else if (current == 9 && last == 8) {
//     setCookie("bar_kesehatan", 60);
//     setCookie("bar_kebahagiaan", 60);
//     setCookie("bar_social", 60);
//   }

//   let bar_kesehatan = getCookie("bar_kesehatan");
//   let bar_kebahagiaan = getCookie("bar_kebahagiaan");
//   let bar_social = getCookie("bar_social");

//   document.querySelector("#bar_kesehatan .progress-bar").style.width =
//     bar_kesehatan + "%";
//   document.querySelector("#bar_kesehatan span").innerHTML = bar_kesehatan + "%";

//   document.querySelector("#bar_kebahagiaan .progress-bar").style.width =
//     bar_kebahagiaan + "%";
//   document.querySelector("#bar_kebahagiaan span").innerHTML =
//     bar_kebahagiaan + "%";

//   document.querySelector("#bar_social .progress-bar").style.width =
//     bar_social + "%";
//   document.querySelector("#bar_social span").innerHTML = bar_social + "%";
// }

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

function show_ribbon() {
  let end1 = getCookie("end1");
  if (end1 == 1) {
    document.getElementById("end1").innerHTML = "Tewas di tangan suami";
  }
  let end2 = getCookie("end2");
  if (end2 == 1) {
    document.getElementById("end2").innerHTML =
      "Laporanku tidak ditindaklanjuti";
  }
  let end3 = getCookie("end3");
  if (end3 == 1) {
    document.getElementById("end3").innerHTML = "Disebut Terlalu Bucin";
  }
  let end4 = getCookie("end4");
  if (end4 == 1) {
    document.getElementById("end4").innerHTML = "Tewas Janda Bolong";
  }
  let end5 = getCookie("end5");
  if (end5 == 1) {
    document.getElementById("end5").innerHTML = "Trauma berhubungan asmara";
  }
  let end6 = getCookie("end6");
  if (end6 == 1) {
    document.getElementById("end6").innerHTML = "Anakku diambil mantan suami";
  }
  let end7 = getCookie("end7");
  if (end7 == 1) {
    document.getElementById("end7").innerHTML = "Dihujat umbar aib pasangan";
  }

  if (
    end1 == 1 &&
    end2 == 1 &&
    end3 == 1 &&
    end4 == 1 &&
    end5 == 1 &&
    end6 == 1 &&
    end7 == 1
  ) {
    var element = document.getElementById("final-rbn");
    element.classList.remove("d-none");
  }
}
