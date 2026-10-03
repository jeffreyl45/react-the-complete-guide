// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitive types start with lowercase
// Uppercase = object
let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types

// array of strings
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

// type alias use keyword type
type Person = {
    name: string;
    age: number;
}

// custom object
let person: Person; 

person = {
    name: 'Max',
    age: 32
};

// array of object person
let people: Person[];

// Type inference
// Typescript infers course is type string
let course = 'React - the Complete Guide';
// Error: course = 123;

// union type
let course2: string | number = 'test'
course2 = 23

// Functions and types
// functions often infer types in typescript, no need to explicitly define type 
// if the function infers it
function add(a: number,b: number): number {
    return a + b;
}

// this function doesnt return anything so it gets return type of void
// void means this function never returns
function printOutput(value: any): void {
    console.log(value);
}

// Generics

// telling typesript that type in array and type of value are same
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}

// typescript sees the array of numbers
const demoArray = [1,2,3];

// typescript doesn't pick up the array being full of numbers, it still sees any
// with T we add a Generic type
// typescript sees the inserted value is -1
// hence it knows the array is an array of numbers
const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]

// works on strings 
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split(''); error because cannot split on numbers