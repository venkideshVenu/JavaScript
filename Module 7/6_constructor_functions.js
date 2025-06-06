// 6_constructor_functions.js
// Constructor Functions in JavaScript

/*
Constructor functions are used to create multiple similar objects.
They are regular functions but by convention start with a capital letter.
The "new" keyword is used to create an instance.
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}

const alice = new Person("Alice", 30);
const bob = new Person("Bob", 25);

alice.greet(); // Hello, my name is Alice
bob.greet();   // Hello, my name is Bob
