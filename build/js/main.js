"use strict";
const stringEcho = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === 'object' && arg !== null;
};
console.log(isObj('test'));
console.log(isObj(['test']));
