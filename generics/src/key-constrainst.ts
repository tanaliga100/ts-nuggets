console.log("GENERICS CONSTRAINST");
// KEY CONSTRAINST

function extractAndConvert<T extends {}, U extends keyof T>(obj: T, key: U) {
  return " value: " + obj[key];
}
extractAndConvert({ name: "lara" }, "name");
