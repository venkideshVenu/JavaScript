// Introduction to Object-Oriented JavaScript

/*
Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects",
which can contain data and code: data in the form of fields (properties), and code in the form of procedures (methods).

JavaScript supports OOP through prototypes and ES6 classes.
*/

// Example of an object
const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet();
