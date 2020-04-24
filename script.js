"use strict";

window.addEventListener("DOMContentLoaded", start);
let time;
function start() {
  document.querySelector("body > section > div.welcome > div:nth-child(2) > span").addEventListener("animationend", secondText);
  document.querySelector("#knap1").addEventListener("click", formFunction);
  //   time = setTimeout(secondText, 100);
}

function secondText() {
  console.log("second");
  document.querySelector("#text2").classList.remove("hidden");

  document.querySelector("#text2").classList.add("show");

  time = setTimeout(secondText2, 1000);
}

function secondText2() {
  document.querySelector("#knap1").classList.remove("hidden");
  document.querySelector("#knap1").classList.add("show");
}

function formFunction() {
  document.querySelector("#knap1").classList.add("dissapear");
  //   document.querySelector("#knap1").classList.add("hidden");

  document.querySelector("#text2").classList.add("dissapear");

  //   document.querySelector("#text2").classList.add("hidden");
}
