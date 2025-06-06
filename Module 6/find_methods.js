// find, findIndex, some and every methods

/*
These array methods are used to search or test elements in an array.

1. find: Returns the first element that satisfies the condition.
2. findIndex: Returns the index of the first element that satisfies the condition.
3. some: Returns true if at least one element satisfies the condition.
4. every: Returns true if all elements satisfy the condition.
*/

const numbers = [5, 12, 8, 130, 44];

// find
const found = numbers.find(element => element > 10);
console.log("First element > 10:", found);

// findIndex
const foundIndex = numbers.findIndex(element => element > 10);
console.log("Index of first element > 10:", foundIndex);

// some
const hasLargeNumber = numbers.some(element => element > 100);
console.log("Has number > 100:", hasLargeNumber);

// every
const allBelow200 = numbers.every(element => element < 200);
console.log("All numbers < 200:", allBelow200);
