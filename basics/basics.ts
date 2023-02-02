function add(n1: number, n2: number, showRes: boolean, showPhrase: string) {
  const resulst = n1 + n2;
  if (showRes) {
    console.log(showPhrase + resulst);
  } else {
    return n1 + n2;
  }
}

const num1 = 5;
const num2 = 10;
const printRes = true;
const phrase = "Result is : ";
add(num1, num2, printRes, phrase);
