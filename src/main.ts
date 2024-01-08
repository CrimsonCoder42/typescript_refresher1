let stringArr = ['one', 'hey', 'Devin']


let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['evh', 1984, true]


stringArr[0] = 'John'
stringArr.push('Paul')

guitars[0]= 40
guitars.unshift('Telecaster')


mixedData = guitars

let test = []

let bands: string[] = []

// Tuple
let myTuple: [string, number, boolean] = ['hey', 40, true]

let mixed = ['hey', 40, true]

// Objects

let myObj: object;

myObj = []

myObj = {
    name: 'John',
    age: 40,
    isCool: true
}


const exampleObj = {
    prop1: 'John',
    prop2: true,
}

interface Guitarist {
    name?: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: true,
    albums: ['1984', 5150, 'VH']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name?.toUpperCase()}`;
}

console.log(greetGuitarist(jp))




