"use strict";
console.log("GENERICS CONSTRAINST");
// KEY CONSTRAINST
function extractAndConvert(obj, key) {
    return " value: " + obj[key];
}
extractAndConvert({ name: "lara" }, "name");
