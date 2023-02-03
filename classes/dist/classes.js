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
    Department.fiscalYear = 2020;
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
        _this.lastRep = reps[reps.length - 1];
        return _this;
    }
    Object.defineProperty(HR.prototype, "mostRecent", {
        // GETTERS
        get: function () {
            if (this.lastRep) {
                return this.lastRep;
            }
            throw new Error("No report found");
        },
        set: function (val) {
            if (!val) {
                throw new Error("No report Found");
            }
            this.lastRep = val;
        },
        enumerable: false,
        configurable: true
    });
    HR.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    HR.prototype.addreports = function (text) {
        var _a;
        (_a = this.reports) === null || _a === void 0 ? void 0 : _a.push(text);
        this.lastRep = text;
    };
    return HR;
}(Department));
// BASE
var base = new Department("1", "ADMIN");
base.addEmployee("Lara");
base.addEmployee("Jordan");
base.describe();
base.printEmpInformation();
// IT
var it = new IT("1", ["maris", "glad"], ["chris", "will", "guy"]);
// HUMAN RESOURCE
var hr = new HR("1", ["dale", "bok"], ["soy"], [
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
]);
hr.mostRecent = {
    title: "this is prob the last report",
    body: "yes this is the last report",
};
console.log("BASE_CLASS", base);
console.log("IT", it);
console.log("HR", hr);
