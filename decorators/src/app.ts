// DECORATORS FOR VALIDATION
console.log("%c DECORATORS FOR VALIDATIONS", "color: red");

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // required positive
  };
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNum(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function Validate(obj: any) {
  const objValidators = registeredValidators[obj.constructor.name];
  if (!objValidators) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidators) {
    for (const validator of objValidators[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  name: string;
  @PositiveNum
  price: number;
  constructor(n: string, p: number) {
    this.name = n;
    this.price = p;
  }
}

const courseForm = document.querySelector("form") as HTMLFormElement;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;
  const title = titleEl.value;
  const price = Number(priceEl.value);
  const createCourse = new Course(title, price);
  if (!Validate(createCourse)) {
    alert("Please try again");
    return;
  }
  // new instance
  console.log("createCourse", createCourse);
});
