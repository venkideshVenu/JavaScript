// 12_prototype.js
// What is Prototype in JavaScript

/*
Every JavaScript object has a prototype.
A prototype is also an object.
All JavaScript objects inherit their properties and methods from their prototype.
*/

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

console.log(alice.__proto__ === Person.prototype); // true
