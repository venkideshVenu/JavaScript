// 3_primitive_data_types.js

// In JavaScript, there are six primitive data types. These are the basic building blocks of data in the language. 
// Each primitive type is immutable and represents a single value. Below are the primitive data types:

// 1. String
// A sequence of characters used to represent text. Strings are enclosed in single quotes, double quotes, or backticks.
// Example:
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

// 2. Number
// Represents both integer and floating-point numbers. JavaScript does not differentiate between different types of numbers.
// Example:
let age = 25;
let price = 19.99;
console.log(age, price); // Output: 25 19.99

// 3. Boolean
// A logical data type that can have only two values: true or false. It is often used in conditional statements.
// Example:
let isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output: true

// 4. Null
// A special value that represents the intentional absence of any object value. It is assigned explicitly.
// Example:
let emptyValue = null;
console.log(emptyValue); // Output: null

// 5. Undefined
// A variable that has been declared but has not yet been assigned a value is of type undefined.
// Example:
let notAssigned;
console.log(notAssigned); // Output: undefined

// 6. Symbol
// A unique and immutable primitive value that can be used as the key of an object property. Symbols are often used to create private properties.
// Example:
const uniqueId = Symbol('id');
console.log(uniqueId); // Output: Symbol(id)

// Understanding these primitive data types is crucial for effective programming in JavaScript, as they form the foundation for more complex data structures.