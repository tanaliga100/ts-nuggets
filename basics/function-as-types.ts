function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printres(num: number) {
  console.log("res", num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  let res = n1 + n2;
  // return cb(res);
  console.log("from cb", cb(res));
}

printres(add(1, 2));
addAndHandle(10, 20, (result) => {
  return `The resuls is ${result}`;
  // console.log(`The result is ${result}`);
});
