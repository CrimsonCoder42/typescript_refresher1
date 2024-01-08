// Type Alias 

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
    name?: string,
    active?: boolean,
    albums: stringOrNumberArray,
}

// Literal types

let myName: 'Devin';

let userName: 'Dave' | 'Devin' | 'Reggie';


// functions 

const add = (a: number, b: number): number => a + b;

const logMsg = (message: any): void => console.log(message);


logMsg("Hello World!")

logMsg(add(5, 5))

let subtract = function (a: number, b: number): number {
    return a - b;
}


interface mathFunction {
    (a: number, b: number): number;

}

let multiply: mathFunction = function (a, b){
    return a * b;
}

logMsg(multiply(5, 5))

// Optional Parameters

const addAll = (a: number, b: number, c: number = 2): number => {
        return a + b + c
}

logMsg(addAll(5, 5, 5))

// Rest Parameters

const total = (...nums: number[]): number => {
    return nums.reduce((total, current) => total + current)
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

logMsg(total(...myArray))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
      i++
      if (i > 100) break
    }
}

const isNumber = (value: any): value is number => {
    return typeof value === 'number' ? true : false
}



const numberOrString = (input: number | string): string => {
    if (typeof input === 'number') {
      return `Your number was ${input}`
    } else if (typeof input === 'string') {
      return `Your string was ${input}`
    } else {
      return input
    }
}