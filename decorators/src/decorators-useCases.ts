// OTHER USE CASES

// PROPERTY DECORATOR
function Log(target: any, propertyName: string) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

// ACCESSOR DECORATOR [SET AND GET]
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("accessing decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  return;
}
// DECOORATOR TO A METHOD [METHOD INSIDE THE CLASS]
function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// DEOCRATOR TO A PARAMETER
function Log4(target: any, name: string | symbol, position: number) {
  console.log("parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      new Error("Invalid price should be greater than 0");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPricewithtext(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// PROPERTY AND METHOD DECORATIR CAN RETURN A NEW DESCRIPTOR OBJECT |  BOTH GET THE DESCRIPTOR PROPERTY
// ACCESSOR AND PARAMETER DECORATOR DOESNT HAVE THE RETURN VALUE

function AutoBind(
  _: any,
  _2: string | symbol | number,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message: string = "this words";
  @AutoBind
  showMsg() {
    console.log(this.message);
  }
}
const p = new Printer();
const btn = document.querySelector("button")!;
btn.addEventListener("click", p.showMsg);
