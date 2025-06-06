// 7_classes.js
// Classes in JavaScript

/*
ES6 introduced classes as syntactical sugar over JavaScript's existing prototype-based inheritance.
Classes provide a clearer and simpler syntax to create objects and deal with inheritance.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const alice = new Person("Alice", 30);
alice.greet(); // Hello, my name is Alice
