console.log("GENERICS CLASSES");
// GENERICS CLASSES

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  constructor() {}

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return "No data with this item";
    } else {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("shoes");
textStorage.addItem("bags");
textStorage.removeItem("shoes");
console.log(textStorage);

const numberStorage = new DataStorage<number | string>();
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
