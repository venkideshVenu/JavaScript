// 12_prototype.js

// Demonstrating JavaScript Prototypes

// Creating a simple object - even empty objects inherit from Object.prototype
const obj = {};
console.log(obj); // Will show an empty object with inherited Object prototype methods

// 1. Constructor function
// Constructor functions are templates for creating objects
function Person(firstName, lastName, age) {
  // 'this' refers to the new instance being created
  this.firstName = firstName; // Instance properties are unique to each object
  this.lastName = lastName;
  this.age = age;
}

// Creating an instance using the 'new' keyword
// 'new' creates a new object, sets 'this' to that object, and returns it
let p2 = new Person("John", "Doe", 30);
console.log(p2); // Shows Person object with firstName, lastName, and age properties

// 2. Adding methods to the prototype
// Adding methods to the prototype instead of the constructor:
// - Saves memory (methods are shared across all instances)
// - Only one copy of each method exists, regardless of how many instances we create
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.greet = function () {
  // Notice we can call other prototype methods from within a prototype method
  return `Hello, my name is ${this.getFullName()} and I am ${
    this.age
  } years old.`;
};

// 3. Creating instances
// Each instance gets its own properties but shares prototype methods
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

// 4. Using the prototype methods
// JavaScript first looks for properties on the object itself
// If not found, it looks up the prototype chain
console.log(person1.getFullName()); // "John Doe"
console.log(person1.greet()); // "Hello, my name is John Doe and I am 30 years old."
console.log(person2.getFullName()); // "Jane Smith"

// 5. Demonstrating prototype chain
// __proto__ is the actual object that is used in the lookup chain
// prototype is the object that is used to build __proto__ when you create an object with new
console.log(person1.__proto__ === Person.prototype); // true - person1's prototype is Person.prototype
console.log(person1.__proto__.__proto__ === Object.prototype); // true - Person.prototype's prototype is Object.prototype

// 6. Inheritance using prototypes
// Creating a child constructor that inherits from Person
function Employee(firstName, lastName, age, position) {
  // Call parent constructor with this context
  // This is how we "inherit" the parent's instance properties
  Person.call(this, firstName, lastName, age);
  this.position = position; // Add Employee-specific property
}

// Set up prototype chain for inheritance
// Object.create creates a new object with the specified prototype object
Employee.prototype = Object.create(Person.prototype);
// Fix the constructor property that was overwritten by the previous line
Employee.prototype.constructor = Employee;

// Add methods specific to Employee
// This method is only available to Employee instances, not Person instances
Employee.prototype.getJobInfo = function () {
  // Can still access inherited methods like getFullName()
  return `${this.getFullName()} works as a ${this.position}`;
};

// Create an Employee instance
const employee1 = new Employee("Bob", "Johnson", 35, "Developer");

// Demonstrating inheritance in action
console.log(employee1.greet()); // Inherited method from Person.prototype
console.log(employee1.getJobInfo()); // Method from Employee.prototype
console.log(employee1 instanceof Employee); // true - employee1 is an instance of Employee
console.log(employee1 instanceof Person); // true - employee1 is also an instance of Person
