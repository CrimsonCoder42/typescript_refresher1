type One = string;
type Two = number | string;
type Three = 'hello'

let a: One = 'hello';
let b = a as Two;
let c = a as Three;

let d = <One>'world'

const addOrConcat = (a: number, b: number, c:'add' | 'concat'): number | string => {
  if(c === 'add') {
    return a + b;
  }

  return '' + a + b;
}

let myVal: string = addOrConcat(1, 2, 'concat') as string;

let nextVal: number = addOrConcat(2, 2, 'concat') as number;


// the Dom

const img = document.querySelector('img') as HTMLImageElement;