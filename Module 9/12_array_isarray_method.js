// 12_array_isarray_method.js

// The Array.isArray() method is a built-in JavaScript function that determines whether the passed value is an Array. 
// It returns true if the value is an array, and false otherwise.

// Syntax:
// Array.isArray(value)

// Parameters:
// - value: The value to be checked.

// Example usage:

// Checking if a value is an array
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('Hello')); // false
console.log(Array.isArray({})); // false
console.log(Array.isArray(undefined)); // false
console.log(Array.isArray(null)); // false

// Checking an empty array
console.log(Array.isArray([])); // true

// Checking an array of objects
console.log(Array.isArray([{ name: 'John' }, { name: 'Jane' }])); // true

// The Array.isArray() method is particularly useful when you want to ensure that a variable is an array before performing array-specific operations on it. 
// This helps prevent runtime errors and ensures that your code behaves as expected.