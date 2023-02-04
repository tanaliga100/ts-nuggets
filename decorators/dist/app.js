"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// DECORATORS FOR VALIDATION
console.log("%c DECORATORS FOR VALIDATIONS", "color: red");
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ["required"] });
}
function PositiveNum(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ["positive"] });
}
function Validate(obj) {
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
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "name", void 0);
__decorate([
    PositiveNum
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
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
