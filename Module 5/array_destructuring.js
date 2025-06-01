/**
 * Demonstration of ES6 Array Destructuring
 */

// Basic array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log('Basic destructuring:', a, b, c); // Output: 1 2 3

// Skipping elements
const [first, , third] = numbers;
console.log('Skipping elements:', first, third); // Output: 1 3

// Using rest operator to collect remaining elements
const [head, ...tail] = numbers;
console.log('Rest operator:', head, tail); // Output: 1 [2, 3]

// Default values
const [x = 10, y = 20, z = 30, w = 40] = [5, undefined, 15];
console.log('Default values:', x, y, z, w); // Output: 5 20 15 40
