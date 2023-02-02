// UNKNOW TYPES

let userInput: unknown;
let username: string;

userInput = 21;
userInput = "jordan";
if (typeof userInput === "string") {
  username = userInput;
}

// console.log(Number(userInput));

// NEVER TYPES

function generateError(message: string, code: number): never {
  throw { errMessage: message, errCode: code };
}
generateError("An error occurred", 400);
