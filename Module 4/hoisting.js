// example for hoisting in javascript
function greet() {
    console.log("Hello, World!");
}

greet(); // Outputs: Hello, World!

// Example of a function that uses hoisting
function sayHello() {
    console.log("Hello, " + name + "!");
}
var name = "Alice"; // Variable declaration is hoisted, but not the assignment
sayHello(); // Outputs: Hello, Alice!

// Example of a function that uses hoisting with let
function sayHi() {
    console.log("Hi, " + user + "!");
}
let user = "Bob"; // Variable declaration with let is not hoisted