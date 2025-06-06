// Reduce method

/*
The reduce() method executes a reducer function on each element of the array,
resulting in a single output value.
*/

const numbers = [1, 2, 3, 4];

// Sum of all numbers using reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum using reduce:", sum);

// Find the maximum number using reduce
const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
console.log("Maximum number using reduce:", maxNumber);

// Count occurrences of each number in an array using reduce
const occurrences = numbers.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log("Occurrences of each number using reduce:", occurrences);