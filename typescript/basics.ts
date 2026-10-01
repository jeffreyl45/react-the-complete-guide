// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitive types start with lowercase
// Uppercase = object
let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types

// array of strings
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

// custom object
let person: {
    name: string;
    age: number;
};
person = {
    name: 'Max',
    age: 32
};

// array of object person
let people: {
    name: string;
    age: number;
}[];

// Type inference
// Typescript infers course is type string
let course = 'React - the Complete Guide';
// Error: course = 123;