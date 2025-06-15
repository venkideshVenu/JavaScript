// 7_closure_in_js.js

/*
Closure in JavaScript

A closure is a feature in JavaScript where an inner function has access to the outer function's variables even after the outer function has finished executing. This allows the inner function to "remember" the environment in which it was created.

Closures are often used to create private variables or to maintain state in asynchronous programming.

Example:

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from inner function
    }

    return innerFunction; // Returning inner function
}

const closureFunction = outerFunction(); // outerFunction is executed
closureFunction(); // Outputs: I am from outer function

In this example, the innerFunction retains access to the outerVariable even after outerFunction has completed execution. This is the essence of closures in JavaScript.
*/