// 13_call_apply_bind.js
// call, apply and bind methods in JavaScript

/*
These methods allow you to set the "this" context explicitly for a function.

- call: Calls a function with a given "this" value and arguments provided individually.
- apply: Calls a function with a given "this" value and arguments provided as an array.
- bind: Returns a new function with a bound "this" value and optional arguments.
*/

const person = {
  name: "Alice",
};

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

// Using call
greet.call(person, "Hello", "!"); // Hello, Alice!

// Using apply
greet.apply(person, ["Hi", "!!"]); // Hi, Alice!!

// Using bind
const greetAlice = greet.bind(person, "Hey");
greetAlice("?"); // Hey, Alice?
