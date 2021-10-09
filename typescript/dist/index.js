"use strict";
let n = 5;
let company = 'MJV';
let active = true;
let x = 'Hello';
let ids = [1, 2, 3, 4];
let names = ['mario', 'luigi', 'yoshi'];
// Tuple
let person = [1, 'mary', true];
// Tuple Array
let employee = [[1, 'mary'], [2, 'jhon']];
// Union
let id;
id = 9;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
const user = {
    id: 2,
    name: 'John'
};
// Type Assertion
let cid = 1;
let customerId = cid; // alternative let customerId = cid as number;
// Functions
function addNum(x, y) {
    return x + y;
}
function message(msg) {
    console.log(`Você recebeu essa mensagem: ${msg}`);
}
console.log(addNum(2, 4));
message("Hello");
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log("yay");
    }
}
const brad = new Person(1, 'mary');
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// Extending Classes = Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(3, 'Brad', 'CEO');
// Generics = used to make reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
numArray.push(5);
