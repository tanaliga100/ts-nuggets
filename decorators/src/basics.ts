console.log("%c DECORATORS", "color: orange");
// DECORATORS

function Logger(logString: string) {
  console.log("factory logger");

  return (constructor: Function) => {
    console.log("logstring", logString);
    console.log(constructor);
  };
}

function withTemplate(temp: string, hookId: string) {
  console.log("factory template");

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalContructor: T
  ) {
    console.log(temp);

    return class extends originalContructor {
      constructor(..._: any[]) {
        super();
        const el = document.getElementById(hookId);

        if (el) {
          el.innerHTML = temp;
          el.querySelector("h1")!.textContent = this.name;

          el.style.backgroundColor = "orange";
          el.style.color = "white";
          el.style.padding = "1rem";
        }
      }
    };
  };
}

@Logger("Logging person")
@withTemplate("<h1>My person object</h1>", "app")
class Person {
  name = "jordan";
  constructor() {
    console.log("creating new person");
  }
}
const pers = new Person();
console.log(pers);
