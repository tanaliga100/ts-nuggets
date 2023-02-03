"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, n) {
        this.employees = [];
        this.name = n;
        this.id = id;
    }
    Department.prototype.describe = function () {
        console.log("DEPARTMENT : " + this.id + " : " + this.name);
    };
    Department.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department.prototype.printEmpInformation = function () {
        console.log(this.employees);
    };
    return Department;
}());
var IT = /** @class */ (function (_super) {
    __extends(IT, _super);
    function IT(id, emp, adm) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = adm;
        _this.employees = emp;
        return _this;
    }
    IT.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    return IT;
}(Department));
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR(id, emp, adm, reps) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = adm;
        _this.employees = emp;
        _this.reports = reps;
        return _this;
    }
    HR.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    HR.prototype.addreports = function (text) {
        this.reports = text;
    };
    return HR;
}(Department));
// ACCOUNTING
var acc = new Department("1", "ADMIN");
acc.addEmployee("Lara");
acc.addEmployee("Jordan");
acc.describe();
acc.printEmpInformation();
// IT
var it = new IT("1", ["maris", "glad"], ["chris", "will", "guy"]);
// HUMAN RESOURCE
var hr = new HR("1", ["dale", "bok"], ["soy"], {
    title: "Something went wrong",
    body: "Will surely be okay tomorrow",
});
console.log("BASE", acc);
console.log("IT", it);
console.log("HR", hr);
