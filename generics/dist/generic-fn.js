"use strict";
// GENERICS IN FUNCTIONS
console.log("GENERICS IN FUNCTIONS");
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const res = merge({ name: "lara", gender: "Male", isStudent: true }, 212);
const res2 = merge({ name: "dan" }, [12, 31]);
console.log(res);
function countAndDescribe(el) {
    let descText = "got no value";
    if (el.length === 1) {
        descText = `got 1 element`;
    }
    else if (el.length > 1) {
        descText = `got ${el.length} elements`;
    }
    return [el, descText];
}
const result = countAndDescribe([]);
console.log(result);
