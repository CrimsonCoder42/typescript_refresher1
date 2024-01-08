"use strict";
let stringArr = ['one', 'hey', 'Devin'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['evh', 1984, true];
stringArr[0] = 'John';
stringArr.push('Paul');
guitars[0] = 40;
guitars.unshift('Telecaster');
mixedData = guitars;
let test = [];
let bands = [];
// Tuple
let myTuple = ['hey', 40, true];
let mixed = ['hey', 40, true];
// Objects
let myObj;
myObj = [];
myObj = {
    name: 'John',
    age: 40,
    isCool: true
};
const exampleObj = {
    prop1: 'John',
    prop2: true,
};
let evh = {
    name: 'Eddie',
    active: true,
    albums: ['1984', 5150, 'VH']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return 'Hello';
};
console.log(greetGuitarist(evh));
// Enums 
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
