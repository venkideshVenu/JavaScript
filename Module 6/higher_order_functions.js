// Higher Order Functions: map and forEach

/*
Higher-order functions are functions that take other functions as arguments or return functions.

Example 1: Using map to transform an array
*/

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

/*
Example 2: Using for each to iterate over an array
*/

numbers.forEach(num => console.log("Number:", num));
