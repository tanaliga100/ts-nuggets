interface PersonI {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  details?: {
    hasWork?: boolean;
    desc: string;
  };
}

const Person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  details: { hasWork: boolean; desc: string };
} = {
  name: "Chris",
  age: 21,
  hobbies: ["Cooking", "Music", "Sports"],
  role: [2, "author"],
  details: {
    hasWork: true,
    desc: "Very eloquent in speaking",
  },
};
Person.role.push("Writer");
// Person.role[1] = 12;
console.log(Person);
// {
//   name: "Lara",
//   age: 28,
//   hobbies: ["Cooking", "Music", "Sports"],
//   details: {
//     hasWork: true,
//     desc: "Very hardworking",
//   },
// },
