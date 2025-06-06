// 2_this_keyword.js
// The "this" keyword in JavaScript

/*
The "this" keyword refers to the object that is executing the current function.
Its value depends on how the function is called.
*/

// Example in global context
console.log(this); // In browser: window object, in Node.js: global object

// Example in object method
const obj = {
  name: "Object",
  getName: function() {
    return this.name;
  }
};

console.log(obj.getName()); // "Object"

// Example in a regular function
function showThis() {
  console.log(this);
}

showThis(); // In non-strict mode: global object, in strict mode: undefined
