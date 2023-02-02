interface PersonI {
  name: string;
  age: number;
  status: string[];
  details?: {
    hasWork?: boolean;
    desc: string;
  };
}

const Person: PersonI[] = [
  {
    name: "Jordan",
    age: 21,
    status: ["Male", "Student", "Handsome"],
    details: {
      hasWork: true,
      desc: "Very eloquent in speaking",
    },
  },
  {
    name: "Lara",
    age: 28,
    status: ["Female", "Student", "Beatiful"],
    details: {
      hasWork: true,
      desc: "Very hardworking",
    },
  },
];

console.log(Person);
