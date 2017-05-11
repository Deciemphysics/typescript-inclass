"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Sealed(name) {
    return function (target) {
        console.log("Sealing the constructor " + name + ".");
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.Sealed = Sealed;
function Logger(target) {
    var newConstructor = function () {
        console.log("Creating new instance.");
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.Logger = Logger;
function Writable(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log("Setting " + propertyKey + " to be read-only");
        descriptor.writable = false;
    };
}
exports.Writable = Writable;
//# sourceMappingURL=decorators.js.map