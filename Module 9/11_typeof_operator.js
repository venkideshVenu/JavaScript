// 11_typeof_operator.js

// The typeof operator in JavaScript is used to determine the type of a variable or an expression. 
// It returns a string indicating the type of the unevaluated operand. The possible return values 
// of the typeof operator are: "undefined", "object", "boolean", "number", "string", "function", 
// and "symbol". 

// Here are some examples to illustrate its usage:

// Example 1: Using typeof with different data types
let a; // a is declared but not initialized, so it is undefined
console.log(typeof a); // Output: "undefined"

let b = null; // b is explicitly set to null
console.log(typeof b); // Output: "object" (this is a known quirk in JavaScript)

// Example 2: Using typeof with primitive data types
let c = 42; // c is a number
console.log(typeof c); // Output: "number"

let d = "Hello, World!"; // d is a string
console.log(typeof d); // Output: "string"

let e = true; // e is a boolean
console.log(typeof e); // Output: "boolean"

// Example 3: Using typeof with functions
function myFunction() {}
console.log(typeof myFunction); // Output: "function"

// Example 4: Using typeof with arrays
let f = [1, 2, 3]; // f is an array
console.log(typeof f); // Output: "object" (arrays are a type of object)

// Example 5: Using typeof with symbols
let g = Symbol('symbol');
console.log(typeof g); // Output: "symbol"

// In summary, the typeof operator is a useful tool for checking the type of variables 
// and can help in debugging and understanding the data types being used in your code.