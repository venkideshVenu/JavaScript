// 8_inheritance.js
// Inheritance in JavaScript

/*
Inheritance allows one class or constructor function to inherit properties and methods from another.
In ES6 classes, the "extends" keyword is used.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
