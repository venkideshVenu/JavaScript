// 8_closure_with_nested_functions.js

/*
Closure with Nested Functions in JavaScript

A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. When we have nested functions, the inner function can access variables from its own scope, the outer function's scope, and the global scope.

This concept is particularly useful for data encapsulation and creating private variables.

Example:

1. Defining an outer function that contains a variable.
2. Defining an inner function that accesses the outer function's variable.
3. Returning the inner function from the outer function.

Let's see an example:

*/

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }

    return innerFunction; // Returning the inner function
}

// Creating a closure
const closureFunction = outerFunction();

// Calling the closure function
closureFunction(); // Output: I am from outer function

/*
In this example, the innerFunction has access to the outerVariable even after the outerFunction has finished executing. This is because of the closure created by the inner function.

Closures with nested functions are commonly used in JavaScript for various purposes, including:

- Data privacy: Keeping certain variables private and only accessible through specific functions.
- Partial application: Creating functions with preset parameters.
- Maintaining state in asynchronous programming.

Understanding closures and nested functions is crucial for mastering JavaScript, as they are foundational concepts that enable powerful programming patterns.
*/