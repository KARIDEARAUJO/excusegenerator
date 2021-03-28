/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Generador de excusa");
  let who = ["mi padre", "mi mamá", "mi hija", "mi tio", "mi abuela"];
  let what = ["se estrelló", "se robó", "me quitó", "se durmió", "me guardó"];
  let when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando termine",
    "durante mi almuerzo",
    "mientras rezaba"
  ];
  let randomWho = Math.floor(Math.random() * who.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);
  document.querySelector(
    "#excuse"
  ).innerHTML = `${who[randomWho]} ${what[randomWhat]} ${when[randomWhen]}`;
};
