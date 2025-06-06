// 9_method_inheritance.js
// Method Inheritance in JavaScript

/*
Objects can inherit methods from their prototype chain.
In classes, methods defined in the parent class are inherited by child classes.
*/

class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}

const myCar = new Car();
myCar.start(); // Vehicle started (inherited method)
myCar.drive(); // Car is driving
