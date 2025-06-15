// 4_reference_datatype.js

// In JavaScript, reference data types are more complex than primitive data types. 
// They are used to store collections of values and more complex entities. 
// The main reference data types in JavaScript are Objects and Arrays.

// 1. Objects
// An object is a collection of key-value pairs. Each key is a string (or Symbol), 
// and the value can be of any data type, including other objects. 
// Objects are created using curly braces {} or the Object constructor.

// Example of an object:
const person = {
    name: "John",
    age: 30,
    isStudent: false
};

// Accessing object properties:
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30

// 2. Arrays
// An array is a special type of object that is used to store ordered collections of values. 
// Arrays are created using square brackets [] and can hold values of any type, including other arrays.

// Example of an array:
const fruits = ["apple", "banana", "cherry"];

// Accessing array elements:
console.log(fruits[0]); // Output: apple
console.log(fruits.length); // Output: 3

// 3. Differences between Primitive and Reference Data Types
// - Primitive data types (like string, number, boolean) hold their values directly.
// - Reference data types hold a reference to the memory location where the value is stored.
// - When you assign a reference data type to a new variable, both variables point to the same object in memory.
// - Modifying the object through one variable will affect the other variable as well.

// Example of reference behavior:
const original = { value: 10 };
const copy = original; // Both variables point to the same object
copy.value = 20;

console.log(original.value); // Output: 20 (original is affected)

// Understanding reference data types is crucial for managing data and memory effectively in JavaScript.