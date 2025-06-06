// Chaining Methods

/*
Method chaining is a technique where multiple methods are called on the same object consecutively.

Example: Using array methods chaining
*/

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(num => num % 2 === 0)  // filter even numbers
  .map(num => num * 2)           // double each number
  .reduce((acc, num) => acc + num, 0);  // sum all numbers

console.log("Result of chaining filter, map, reduce:", result);


// example with objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const totalAge = users
  .filter(user => user.age > 25)  // filter users older than 25
    .map(user => user.age)           // extract ages
    .reduce((acc, age) => acc + age, 0);  // sum ages
console.log("Total age of users older than 25:", totalAge);