"use strict";
// OTHER USE CASES
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// PROPERTY DECORATOR
function Log(target, propertyName) {
    console.log("Property decorator");
    console.log(target, propertyName);
}
// ACCESSOR DECORATOR [SET AND GET]
function Log2(target, name, descriptor) {
    console.log("accessing decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
    return;
}
// DECOORATOR TO A METHOD [METHOD INSIDE THE CLASS]
function Log3(target, name, descriptor) {
    console.log("method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// DEOCRATOR TO A PARAMETER
function Log4(target, name, position) {
    console.log("parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            new Error("Invalid price should be greater than 0");
        }
    }
    getPricewithtext(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPricewithtext", null);
// PROPERTY AND METHOD DECORATIR CAN RETURN A NEW DESCRIPTOR OBJECT |  BOTH GET THE DESCRIPTOR PROPERTY
// ACCESSOR AND PARAMETER DECORATOR DOESNT HAVE THE RETURN VALUE
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
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
    constructor() {
        this.message = "this words";
    }
    showMsg() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMsg", null);
const p = new Printer();
const btn = document.querySelector("button");
btn.addEventListener("click", p.showMsg);
