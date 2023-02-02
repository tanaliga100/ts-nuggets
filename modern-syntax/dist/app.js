"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
console.log("code here...");
var btn = document.querySelector("button");
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener("click", function () {
      console.log("clicked");
    });
// LET , CONST
// accessible in the local block of a function
// will throw an error if its not inside the function, if statements, switch
// ARROW FUNCTION
// can have an implicit return if has one expression/statement
var add = function (a, b) {
  if (b === void 0) {
    b = 10;
  }
  return a + b;
};
var res = add(1);
console.log(res);
var printOutput = function (output) {
  return console.log(output);
};
printOutput(add(1, 2));
// SPREAD OPERATOR ARRAYS
var hobbies = ["music", "sports", "cooking"];
var activeHob = ["coding", "drawing"];
hobbies.push.apply(hobbies, __spreadArrays(activeHob, ["other"]));
// console.log("hobbies", hobbies);
// SPREAD OPERATOR ON OBJECTS
var person = {
  name: "lara",
  age: 21,
};
var copiedPerson = __assign(__assign({}, person), {
  hobbies: ["coding", "cooking"],
  age: 21,
  status: "male",
});
// console.log(copiedPerson);
// REST PARAMETERS
var sayHi = function () {
  return "Hello";
};
var calc = function () {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
    var arg = args_1[_a];
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
      var n1 = 100;
      console.log(n1 + arg);
    }
  }
  // return props.reduce((currRes, currVal) => {
  //   return currRes + currVal;
  // }, 0);
};
var results = calc(4, "lara", true, sayHi);
// ARRY AND OBJECT DESCTRUCTURING
// array
var langs = ["js", "ts", "html", "css"];
var js = langs[0],
  ts = langs[1],
  others = langs.slice(2);
console.log.apply(console, __spreadArrays([js, ts], others));
var numbers = [1, 2, 3, 4];
var a = numbers[0],
  b = numbers[1],
  rest = numbers.slice(2);
console.log(a, b, rest); // logs 1 2 [3, 4]
