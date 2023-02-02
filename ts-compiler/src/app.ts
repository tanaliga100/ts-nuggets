// console.log("code goes here....");
// let age: number;
// age = 21;

// // function here...
// function getDetails() {
//   console.log("details", age);
// }

const btn = document.querySelector("button");

function clickHandler(msg: string) {
  console.log(`Hello ${msg}`);
}

btn?.addEventListener("click", clickHandler.bind(null, "jordan"));
