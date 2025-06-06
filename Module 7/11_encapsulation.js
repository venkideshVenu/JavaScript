// 11_encapsulation.js
// Encapsulation in JavaScript

/*
Encapsulation is the concept of restricting access to certain properties or methods,
usually by making them private and exposing only necessary parts via public methods.
In JavaScript, this can be done using closures or the new private fields syntax (#).
*/

// Using closures for encapsulation
function Person(name) {
  let _name = name; // private variable

  this.getName = function() {
    return _name;
  };

  this.setName = function(newName) {
    _name = newName;
  };
}

const person = new Person("Alice");
console.log(person.getName()); // Alice
person.setName("Bob");
console.log(person.getName()); // Bob

// Using private fields (ES2022+)
class Employee {
  #salary;

  constructor(salary) {
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }
}

const emp = new Employee(50000);
console.log(emp.getSalary()); // 50000
// console.log(emp.#salary); // SyntaxError: Private field '#salary' must be declared in an enclosing class
