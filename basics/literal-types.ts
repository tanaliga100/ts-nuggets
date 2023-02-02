function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let results;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    results = +input1 + +input2;
  } else {
    results = input1.toString() + " loves " + input2.toString();
  }

  return results;
}
const combineAges = combine(20, 1, "as-number");
const combineStringAges = combine("20", "10", "as-number");
const combineNames = combine("jordan", "coldplay", "as-text");

console.log(combineNames);
console.log(combineStringAges);
console.log(combineAges);
