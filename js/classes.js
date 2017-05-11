"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
        console.log('Hello from constructor');
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
UniversityLibrarian = __decorate([
    decorators_1.Sealed('UniversityLibrarian')
], UniversityLibrarian);
exports.UniversityLibrarian = UniversityLibrarian;
var PublicLibrarian = (function () {
    function PublicLibrarian() {
    }
    PublicLibrarian.prototype.assistCustomer = function (custName) {
        console.log('Assisting customer.');
    };
    PublicLibrarian.prototype.teachCommunity = function () {
        console.log('Teaching community.');
    };
    return PublicLibrarian;
}());
__decorate([
    decorators_1.Writable(false)
], PublicLibrarian.prototype, "teachCommunity", null);
PublicLibrarian = __decorate([
    decorators_1.Logger
], PublicLibrarian);
exports.PublicLibrarian = PublicLibrarian;
var ReferenceItem = (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
        console.log("Department: " + ReferenceItem.department);
    };
    return ReferenceItem;
}());
ReferenceItem.department = 'Research';
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map