// Filter method

/*
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/

const numbers = [1, 2, 3, 4, 5, 6];

// Filter even numbers
const evens = numbers.filter(num => num % 2 === 0);

console.log("Even numbers:", evens);
