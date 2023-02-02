function combine(input1: number | string, input2: number | string) {
  let results;
  if (typeof input1 === "number" && typeof input2 === "number") {
    results = input1 + input2;
  } else {
    results = input1.toString() + " loves " + input2.toString();
  }
  return results;
}
const combineAges = combine(20, 1);
const combineNames = combine("jordan", "coldplay");

console.log(combineNames);
console.log(combineAges);
