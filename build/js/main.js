"use strict";
// Type Alias 
// Literal types
let myName;
let userName;
// functions 
const add = (a, b) => a + b;
const logMsg = (message) => console.log(message);
logMsg("Hello World!");
logMsg(add(5, 5));
let subtract = function (a, b) {
    return a - b;
};
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(5, 5));
// Optional Parameters
const addAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(5, 5, 5));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((total, current) => total + current);
};
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
logMsg(total(...myArray));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (input) => {
    if (typeof input === 'number') {
        return `Your number was ${input}`;
    }
    else if (typeof input === 'string') {
        return `Your string was ${input}`;
    }
    else {
        return input;
    }
};
