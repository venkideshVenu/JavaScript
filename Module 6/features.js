// Features of Functional Programming

/*
Key features of functional programming include:

1. Pure Functions: Functions that always return the same output for the same input and have no side effects.
2. Immutability: Data is immutable, meaning it cannot be changed after creation.
3. First-Class and Higher-Order Functions: Functions are treated as values and can be passed around.
4. Function Composition: Combining simple functions to build more complex ones.
5. Declarative Code: Focus on what to do rather than how to do it.
*/

// Example of immutability
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // creates a new array instead of modifying the original

console.log("Original array:", arr);
console.log("New array:", newArr);
