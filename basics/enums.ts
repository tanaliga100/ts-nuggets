enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}
const Person = {
  name: "Jordan",
  age: 21,
  hobbies: ["Cooking", "Music", "Sports"],
  role: Role.ADMIN,
};
console.log(Person);

if (Person.role === Role.ADMIN) {
  console.log("is Admin");
}
