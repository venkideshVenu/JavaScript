// Imperative vs Declarative way of writing code

/*
Imperative programming focuses on how to perform tasks using statements that change program state.
Declarative programming focuses on what the program should accomplish without specifying how.

Example: Sum of numbers from 1 to 5
*/

// Imperative approach
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("Imperative sum:", sum);

// Declarative approach using reduce
const numbers = [1, 2, 3, 4, 5];
const declarativeSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Declarative sum:", declarativeSum);
