const stringEcho = <T>(arg: T): T => arg;


const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && arg !== null;
}

console.log(isObj<string>('test'));
console.log(isObj<string[]>(['test']));







