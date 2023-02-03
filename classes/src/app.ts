class Department {
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
type ReportsT = {
  title: string;
  body: string;
};

class HR extends Department {
  admins: string[];
  emps?: string[];
  reports?: ReportsT;
  constructor(id: string, emp: string[], adm: string[], reps: ReportsT) {
    super(id, "IT");
    this.admins = adm;
    this.employees = emp;
    this.reports = reps;
  }
  addEmployee(emp: string): void {
    this.employees.push(emp);
  }
  addreports(text: ReportsT) {
    this.reports = text;
  }
}
// ACCOUNTING
const acc = new Department("1", "ADMIN");
acc.addEmployee("Lara");
acc.addEmployee("Jordan");
acc.describe();
acc.printEmpInformation();

// IT
const it = new IT("1", ["maris", "glad"], ["chris", "will", "guy"]);

// HUMAN RESOURCE
const hr = new HR("1", ["dale", "bok"], ["soy"], {
  title: "Something went wrong",
  body: "Will surely be okay tomorrow",
});

console.log("BASE", acc);
console.log("IT", it);
console.log("HR", hr);
