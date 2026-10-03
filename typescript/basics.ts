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

