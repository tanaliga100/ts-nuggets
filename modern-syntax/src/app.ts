console.log("code here...");

const btn = document.querySelector("button");
btn?.addEventListener("click", () => {
  console.log("clicked");
});

// LET , CONST
// accessible in the local block of a function
// will throw an error if its not inside the function, if statements, switch

// ARROW FUNCTION
// can have an implicit return if has one expression/statement
const add = (a: number, b: number = 10) => {
  return a + b;
};
const res = add(1);
console.log(res);

const printOutput = (output: string | number) => console.log(output);
printOutput(add(1, 2));

// SPREAD OPERATOR ARRAYS
const hobbies = ["music", "sports", "cooking"];
const activeHob = ["coding", "drawing"];
hobbies.push(...activeHob, "other");

// console.log("hobbies", hobbies);

// SPREAD OPERATOR ON OBJECTS
const person = {
  name: "lara",
  age: 21,
};
const copiedPerson = {
  ...person,
  hobbies: ["coding", "cooking"],
  age: 21,
  status: "male",
};

// console.log(copiedPerson);

// REST PARAMETERS
const sayHi = () => {
  return `Hello`;
};

const calc = (...args: (number | string | boolean | Function)[]) => {
  for (const arg of args) {
    if (typeof arg === "string") {
      console.log("arg", arg);
    }
    if (typeof arg === "function") {
      console.log(arg());
    }
    if (typeof arg === "boolean") {
      console.log(arg);
    }
    if (typeof arg === "number") {
      let n1 = 100;
      console.log(n1 + arg);
    }
  }
  // return props.reduce((currRes, currVal) => {
  //   return currRes + currVal;
  // }, 0);
};

const results = calc(4, "lara", true, sayHi);

// ARRY AND OBJECT DESCTRUCTURING
// array
const langs = ["js", "ts", "html", "css"];

const [js, ts, ...others] = langs;
console.log(js, ts, ...others);

const numbers = [1, 2, 3, 4];
const [a, b, ...rest] = numbers;
console.log(a, b, rest); // logs 1 2 [3, 4]
