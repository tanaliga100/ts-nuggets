type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
// INTERSECTIONS
type ElevatedEmp = Admin & Employee;

const emp1: ElevatedEmp = {
  name: "Emp1",
  privileges: ["create-server"],
  startDate: new Date(),
};

// TYPEGUARDS
type UnknownEmp = Employee | Admin;
const printEmp = (emp2: UnknownEmp) => {
  console.log("empName", emp2.name);
  if ("privileges" in emp2) {
    console.log("empPrev", emp2.privileges);
  }
  if ("startDate" in emp2) console.log("empStartDate", emp2.startDate);
};

printEmp(emp1);

class Car {
  drive() {
    console.log("driving");
  }
}
class Truck {
  drive() {
    console.log("driving a truck");
  }
  loadCargo(a: number) {
    console.log("loading cargo", a);
  }
}
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo;
  }
}
useVehicle(v1);
useVehicle(v2);

// TYPE CASTING
const userInput = <HTMLInputElement>document.getElementById("userInput")!;
const para = document.getElementById("output")! as HTMLParagraphElement;
para.innerHTML = "hEllo";

// INDEX PROPERTIES
interface ErrorContainer {
  [prop: string]: string;
}
const errorBag: ErrorContainer = {
  email: "Not a valid Email",
  username: "must start with a capital letter",
};

// FUNCTION OVERLOADS
// define the parameters explicitly and the return type also

// OPTIONAL CHAINING
// frequently use if the the object type could be possbily null or undefined at some point in time so it will not throw an error
// use as "?" mark before the property name

// NULLISH COALESCING
// deals with null data;

const userInt = "";
const storedData = userInt ?? "DEFAULT";
console.log(storedData);
