"use strict";
// console.log("code goes here....");
// let age: number;
// age = 21;
// // function here...
// function getDetails() {
//   console.log("details", age);
// }
const btn = document.querySelector("button");
function clickHandler(msg) {
  console.log(`Hello ${msg}`);
}
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener("click", clickHandler.bind(null, "jordan"));
