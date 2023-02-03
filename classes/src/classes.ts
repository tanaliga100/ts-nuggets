class Department {
  static fiscalYear: number = 2020;
  private readonly id: string;
  private name: string;
  protected employees: string[] = [];

  constructor(id: string, n: string) {
    this.name = n;
    this.id = id;
  }
  describe() {
    console.log(`DEPARTMENT : ${this.id} : ${this.name}`);
  }
  addEmployee(emp: string) {
    this.employees.push(emp);
  }
  printEmpInformation() {
    console.log(this.employees);
  }
}

class IT extends Department {
  admins: string[];
  emps?: string[];

  constructor(id: string, emp: string[], adm: string[]) {
    super(id, "IT");
    this.admins = adm;
    this.employees = emp;
  }
  addEmployee(emp: string): void {
    this.employees.push(emp);
  }
}
class HR extends Department {
  admins: string[];
  emps?: string[];
  reports?: ReportsT[];
  private lastRep: ReportsT;

  // GETTERS
  get mostRecent() {
    if (this.lastRep) {
      return this.lastRep;
    }
    throw new Error("No report found");
  }
  set mostRecent(val: ReportsT) {
    if (!val) {
      throw new Error("No report Found");
    }
    this.lastRep = val;
  }

  constructor(id: string, emp: string[], adm: string[], reps: ReportsT[]) {
    super(id, "IT");
    this.admins = adm;
    this.employees = emp;
    this.reports = reps;
    this.lastRep = reps[reps.length - 1];
  }
  addEmployee(emp: string): void {
    this.employees.push(emp);
  }
  addreports(text: ReportsT) {
    this.reports?.push(text);
    this.lastRep = text;
  }
}
// BASE
const base = new Department("1", "ADMIN");
base.addEmployee("Lara");
base.addEmployee("Jordan");
base.describe();
base.printEmpInformation();

// IT
const it = new IT("1", ["maris", "glad"], ["chris", "will", "guy"]);

// HUMAN RESOURCE
const hr = new HR(
  "1",
  ["dale", "bok"],
  ["soy"],
  [
    {
      title: "First report",
      body: "Will surely be okay tomorrow",
    },
    {
      title: "An Error Occured",
      body: "Will surely be okay ",
    },
    {
      title: "This is most recent report",
      body: "Will surely be okay ",
    },
    {
      title: "Kimmy is not what im looking for at this moment",
      body: "We'll surely be okay ",
    },
  ]
);
hr.mostRecent = {
  title: "this is prob the last report",
  body: "yes this is the last report",
};

console.log("BASE_CLASS", base);
console.log("IT", it);
console.log("HR", hr);

type ReportsT = {
  title: string;
  body: string;
};
