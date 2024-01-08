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
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
console.log(greetGuitarist(jp));
