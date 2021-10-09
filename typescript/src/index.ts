let n: number = 5;
let company: string = 'MJV';
let active: boolean = true;
let x: any = 'Hello';
let ids: number[] = [1, 2, 3, 4];
let names: string[] = ['mario', 'luigi', 'yoshi'];

// Tuple
let person: [number, string, boolean] = [1, 'mary', true];

// Tuple Array
let employee: [number, string][] = [[1, 'mary'], [2, 'jhon']];

// Union
let id: string | number;
id = 9;

// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 2,
    name: 'John'
}

// Type Assertion
let cid: any = 1;
let customerId = <number>cid; // alternative let customerId = cid as number;

// Functions
function addNum(x: number, y:number): number {
    return x + y;
}

function message(msg: string | number): void {
    console.log(`Você recebeu essa mensagem: ${msg}`);
}

console.log(addNum(2, 4));
message("Hello");

// Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// Function Interface
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;


// Classes
class Person {
    id: number // can be defined as private
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log("yay");
    }
}

const brad = new Person(1, 'mary');

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person2 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`;
    }
}

// Extending Classes = Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp1 = new Employee(3, 'Brad', 'CEO');

// Generics = used to make reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
numArray.push(5);