"use strict";
class Coder {
    constructor(name, music, age, language = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Devin = new Coder('Devin', 'Rock', 40);
// console.log(Devin.getAge());
class WebDeveloper extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I code in ${this.language}`;
    }
}
const Izzy = new WebDeveloper('Mac', 'Izzy', 'Rock', 40);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays ${this.instrument} by ${action}`;
    }
}
const DevinGuitar = new Guitarist('Devin', 'Guitar');
// console.log(DevinGuitar.play('shredding'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Paul = new Peeps('Paul');
const George = new Peeps('George');
const Ringo = new Peeps('Ringo');
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Data must be an array of strings');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['The Beatles', 'The Rolling Stones', 'The Who'];
MyBands.data = [...MyBands.data, 'The Kinks'];
console.log(MyBands.data);
MyBands.data = ['The Kinks'];
