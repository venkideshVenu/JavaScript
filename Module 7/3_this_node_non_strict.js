// "this" keyword in Node.js (non-strict mode)

/*
In Node.js non-strict mode, "this" in the global context refers to an empty object ({}),
not the global object as in browsers.
*/

console.log(this); // Outputs: {}

// In a function (non-strict mode)
function showThis() {
  console.log(this);
}

showThis(); // Outputs: global object in Node.js non-strict mode
