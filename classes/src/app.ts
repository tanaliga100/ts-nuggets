interface IPerson {
  name: string;
  age: number;
  hobs: string[] | number[];
  greet: (msg: string) => string | void;
}

let user1: IPerson;
user1 = {
  name: "Jordan",
  age: 21,
  hobs: ["coding", "cooking"],
  greet(msg) {
    // return msg;
    console.log(msg);
  },
};
user1.greet("HI, jordan");
