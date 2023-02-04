"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("%c DECORATORS", "color: orange");
// DECORATORS
function Logger(logString) {
    console.log("factory logger");
    return (constructor) => {
        console.log("logstring", logString);
        console.log(constructor);
    };
}
function withTemplate(temp, hookId) {
    console.log("factory template");
    return function (originalContructor) {
        console.log(temp);
        return class extends originalContructor {
            constructor(..._) {
                super();
                const el = document.getElementById(hookId);
                if (el) {
                    el.innerHTML = temp;
                    el.querySelector("h1").textContent = this.name;
                    el.style.backgroundColor = "orange";
                    el.style.color = "white";
                    el.style.padding = "1rem";
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "jordan";
        console.log("creating new person");
    }
};
Person = __decorate([
    Logger("Logging person"),
    withTemplate("<h1>My person object</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
