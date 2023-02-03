"use strict";
var emp1 = {
    name: "Emp1",
    privileges: ["create-server"],
    startDate: new Date(),
};
var printEmp = function (emp2) {
    console.log("empName", emp2.name);
    if ("privileges" in emp2) {
        console.log("empPrev", emp2.privileges);
    }
    if ("startDate" in emp2)
        console.log("empStartDate", emp2.startDate);
};
printEmp(emp1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving a truck");
    };
    Truck.prototype.loadCargo = function (a) {
        console.log("loading cargo", a);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo;
    }
}
useVehicle(v1);
useVehicle(v2);
// TYPE CASTING
var userInput = document.getElementById("userInput");
var para = document.getElementById("output");
para.innerHTML = "hEllo";
var errorBag = {
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
var userInt = "";
var storedData = userInt !== null && userInt !== void 0 ? userInt : "DEFAULT";
console.log(storedData);
