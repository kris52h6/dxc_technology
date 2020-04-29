"use strict";

const endpoint = "https://dxctech-ce42.restdb.io/rest/subscribers";
const apiKey = "5ea2bc071851f96a8ea166b1";

let first = document.querySelectorAll(".ikoner");

window.addEventListener("DOMContentLoaded", start);

window.addEventListener("load", (e) => {
  document.querySelector("body > section > section > button").addEventListener("click", () => {
    const data = {
      id: e._id,
      firstname: firstname.value,
      lastname: lastname.value,
      work_email: work_email.value,
      company: company.value,
      job_title: job_title.value,
      country: country.value,
    };
    post(data);
  });
});

function post(data) {
  //   showSubmit(data);
  const postData = JSON.stringify(data);
  fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

let time;
function start() {
  document.querySelector("#subscribe_form > button").addEventListener("click", (e) => {
    localStorage.setItem("name", "kristian");
    window.location = "4-6_factors.html";
    console.log("hep");
  });

  document.querySelector("body > section > div#welcome > div:nth-child(2) > span").addEventListener("animationend", secondText);
  document.querySelector("#knap1").addEventListener("click", formFunction);
  first.forEach((link) => {
    link.addEventListener("mouseover", showPopup);
  });
  first.forEach((link) => {
    link.addEventListener("mouseout", removePopup);
  });
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

  document.querySelector("#knap1").addEventListener("animationend", showForm);
}

function showForm() {
  document.querySelector("#welcome").classList.add("none");
  document.querySelector("#text2").classList.add("none");
  document.querySelector("#knap1").classList.add("none");
  document.querySelector(".ikoner").classList.add("none");

  document.querySelector("#form_wrap").classList.remove("none");
  document.querySelector("#form_wrap").classList.add("show");
}

function showPopup() {
  console.log("IM HERE");
  // document.querySelector("#form-popup").classList.remove("hidden");
  document.querySelector("#form-popup").classList.remove("hidden");
}

function removePopup() {
  console.log("IM GONE");
  //   document.querySelector("#knap1").classList.add("hidden");

  document.querySelector("#form-popup").classList.add("hidden");
}
