// 13_call_apply_bind.js
// call, apply and bind methods in JavaScript

/*
These methods allow you to set the "this" context explicitly for a function:

- call: Calls a function with a given "this" value and arguments provided individually.
- apply: Calls a function with a given "this" value and arguments provided as an array.
- bind: Returns a new function with a bound "this" value and optional arguments.
*/

// ======== BASIC USAGE ========
console.log("===== BASIC USAGE =====");

const person = {
  name: "Alice",
};

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

// Using call - passes arguments individually
greet.call(person, "Hello", "!"); // Hello, Alice!

// Using apply - passes arguments as an array
greet.apply(person, ["Hi", "!!"]); // Hi, Alice!!

// Using bind - returns a new function with bound this value
const greetAlice = greet.bind(person, "Hey");
greetAlice("?"); // Hey, Alice?

// ======== BORROWING METHODS ========
console.log("\n===== BORROWING METHODS =====");

const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const customer = {
  firstName: "Jane",
  lastName: "Smith",
};

// Borrowing the getFullName method from user object
console.log(user.getFullName.call(customer)); // Jane Smith

// ======== FUNCTION BORROWING WITH ARRAY METHODS ========
console.log("\n===== ARRAY METHOD BORROWING =====");

// Using array methods on array-like objects
function sumArguments() {
  // arguments is an array-like object, not a real array
  console.log("Arguments object:", arguments);

  // Borrow Array.prototype.reduce method
  return Array.prototype.reduce.call(arguments, (sum, item) => sum + item, 0);
}

console.log("Sum:", sumArguments(1, 2, 3, 4)); // 10

// ======== PARTIAL APPLICATION WITH BIND ========
console.log("\n===== PARTIAL APPLICATION =====");

function multiply(x, y) {
  return x * y;
}

// Create specialized functions with bind
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15

// ======== SETTING CONTEXT IN EVENT HANDLERS ========
console.log("\n===== EVENT HANDLER CONTEXT =====");

const counter = {
  count: 0,
  increase: function () {
    this.count++;
    console.log(this.count);
  },
};

// Simulating an event handler
function simulateEvent(callback) {
  // In normal event handlers, 'this' would be the element
  callback();
}

// Without binding - 'this' will be wrong
// simulateEvent(counter.increase); // Would fail - this.count is undefined

// With bind - preserves the correct 'this' context
simulateEvent(counter.increase.bind(counter)); // 1

// ======== INHERITANCE WITH CALL ========
console.log("\n===== INHERITANCE WITH CALL =====");

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, position) {
  // Call the parent constructor to initialize name and age
  Person.call(this, name, age);
  this.position = position;
}

const employee = new Employee("Bob", 30, "Developer");
console.log("Employee:", employee); // {name: "Bob", age: 30, position: "Developer"}

// ======== PERFORMANCE CONSIDERATIONS ========
console.log("\n===== PERFORMANCE NOTE =====");
console.log("- call and apply execute immediately");
console.log("- bind creates a new function that must be called later");
console.log("- bind is useful for callbacks and event handlers");
console.log(
  "- Modern JS often uses arrow functions instead of bind for preserving context"
);
