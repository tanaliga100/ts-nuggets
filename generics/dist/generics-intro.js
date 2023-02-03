"use strict";
// GENERICS
console.log("GENERICS");
const names = ["lara", "kim"];
names.forEach((i) => {
    let ite;
    // ite = i.split("");
    ite = i.charAt(0);
    console.log("split_letters", ite);
});
// PROMISE TYPE
console.log("PROMISE TYPES");
const isPos = false;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("fullfilled");
        resolve(isPos);
    }),
        1000;
});
promise
    .then((data) => {
    if (typeof data === "string") {
        return data.split("");
    }
    if (typeof data === "number") {
        return data * 20;
    }
    if (data.valueOf() === true) {
        return "its possible";
    }
    else {
        Promise.reject(new Error("No!, thats not possible"));
    }
    return data;
})
    .then((res) => {
    console.log("RESULTS", res);
});
