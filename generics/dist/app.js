"use strict";
console.log("GENERICS CLASSES");
// GENERICS CLASSES
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return "No data with this item";
        }
        else {
            this.data.splice(this.data.indexOf(item), 1);
        }
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("shoes");
textStorage.addItem("bags");
textStorage.removeItem("shoes");
console.log(textStorage);
const numberStorage = new DataStorage();
numberStorage.addItem(212);
numberStorage.addItem(123);
numberStorage.addItem("asdasd");
numberStorage.removeItem(123);
console.log(numberStorage.getItems());
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: "lara" });
// objectStorage.addItem({ name: "dan" });
// objectStorage.removeItem({ name: "inna" });
// console.log("objRem", objectStorage.getItems());
