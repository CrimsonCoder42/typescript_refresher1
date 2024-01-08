"use strict";
let a = 'hello';
let b = a;
let c = a;
let d = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(1, 2, 'concat');
let nextVal = addOrConcat(2, 2, 'concat');
// the Dom
const img = document.querySelector('img');
