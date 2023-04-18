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

function goto_ribbon() {
  location.href = "/pages/menu/ribbon.html";
}

// Adegan
function goto_(tujuan) {
  location.href = "/pages/adegan/adegan_" + tujuan + ".html";
}

function goto_game() {
  location.href = "/pages/adegan/adegan_1.html";
}

function goto_adegan_2() {
  location.href = "/pages/adegan/adegan_2.html";
}

function goto_adegan_3() {
  location.href = "/pages/adegan/adegan_3.html";
}

function goto_adegan_4() {
  location.href = "/pages/adegan/adegan_4.html";
}

function goto_adegan_33() {
  location.href = "/pages/adegan/adegan_33.html";
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

function checkCookie() {
  setCookie("bar_kesehatan", 100);
  setCookie("bar_kebahagiaan", 100);
  setCookie("bar_social", 100);
}
