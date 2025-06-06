// 10_polymorphism.js
// Polymorphism in JavaScript

/*
Polymorphism allows methods to do different things based on the object it is acting upon.
In JavaScript, this is often achieved by method overriding.
*/

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const animals = [new Animal(), new Cat(), new Dog()];

animals.forEach(animal => animal.speak());
/*
Output:
Animal makes a sound
Cat meows
Dog barks
*/
