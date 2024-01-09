class Coder {
  name: string;
  music: string;
  age: number;
  language: string;

  constructor(
    name: string, 
    music: string,
    age: number, 
    language: string = 'TypeScript'
    ){
    this.name = name;
    this.music = music;
    this.age = age;
    this.language = language;
  }

  public getAge(): string {
    return `Hello, I'm ${this.age}`;
  }


}

const Devin = new Coder('Devin', 'Rock', 40);
// console.log(Devin.getAge());


class WebDeveloper extends Coder {

  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I code in ${this.language}`;
  }
}

const Izzy = new WebDeveloper('Mac', 'Izzy', 'Rock', 40);

// console.log(Izzy.getLang());

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(
    public name: string,
    public instrument: string
  ) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} plays ${this.instrument} by ${action}`;
  }
}

const DevinGuitar = new Guitarist('Devin', 'Guitar');

// console.log(DevinGuitar.play('shredding'));

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps('John');
const Paul = new Peeps('Paul');
const George = new Peeps('George');
const Ringo = new Peeps('Ringo');

class Bands {
  private dataState : string[]

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
      this.dataState = value;
      return 
    } else {
      throw new Error('Data must be an array of strings');
    }
  }

}

const MyBands = new Bands();
MyBands.data = ['The Beatles', 'The Rolling Stones', 'The Who'];
MyBands.data = [...MyBands.data, 'The Kinks'];
console.log(MyBands.data);
MyBands.data = ['The Kinks']