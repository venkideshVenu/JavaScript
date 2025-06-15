// 1_comparison_operator.js

// Comparison operators are used to compare two values and determine the relationship between them. 
// In JavaScript, there are several types of comparison operators:

// 1. Equality Operator (==)
// The equality operator checks if two values are equal, performing type coercion if necessary.
// Example:
console.log(5 == '5'); // true, because '5' is coerced to a number

// 2. Strict Equality Operator (===)
// The strict equality operator checks if two values are equal without performing type coercion.
// Example:
console.log(5 === '5'); // false, because the types are different (number vs string)

// 3. Inequality Operator (!=)
// The inequality operator checks if two values are not equal, performing type coercion if necessary.
// Example:
console.log(5 != '5'); // false, because '5' is coerced to a number

// 4. Strict Inequality Operator (!==)
// The strict inequality operator checks if two values are not equal without performing type coercion.
// Example:
console.log(5 !== '5'); // true, because the types are different

// 5. Greater Than Operator (>)
// Checks if the left value is greater than the right value.
// Example:
console.log(10 > 5); // true

// 6. Less Than Operator (<)
// Checks if the left value is less than the right value.
// Example:
console.log(5 < 10); // true

// 7. Greater Than or Equal To Operator (>=)
// Checks if the left value is greater than or equal to the right value.
// Example:
console.log(5 >= 5); // true

// 8. Less Than or Equal To Operator (<=)
// Checks if the left value is less than or equal to the right value.
// Example:
console.log(5 <= 10); // true

// Understanding these operators is crucial for making decisions in your code, 
// as they allow you to control the flow of execution based on conditions.