// Callback Functions

/*
A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.
*/

// Example of a callback function
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function callMe() {
  console.log("I am callback function");
}

greet("Alice", callMe);
// Output: Hello Alice


// example of a callback function using arrow function syntax
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Bob", () => {
  console.log("I am an arrow function callback");
});

// Output: Hello Bob