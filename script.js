"use strict";

function get() {
  fetch("https://frontendautumn2019-8ccb.restdb.io/rest/superheroes", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887447fd86cb75861e25f8",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(heroes => {
      heroes.forEach(hero => {
        const template = document.querySelector("template").content;
        const copy = template.cloneNode(true);
        copy.querySelector("h1").textContent = hero.name;
        copy.querySelector("h2").textContent = hero.realname;
        copy.querySelector("p").textContent = hero.powers;
        document.querySelector("#app").appendChild(copy);
      });
    });
}

get();
