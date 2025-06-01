// Demonstration of arrow functions in JavaScript

// 1. Basic arrow function syntax
const greet = () => {
    console.log("Hello from arrow function!");
};
greet();

// 2. Arrow function with parameters
const add = (a, b) => {
    return a + b;
};
console.log("Sum:", add(3, 5));

// 3. Arrow function with implicit return (single expression)
const multiply = (a, b) => a * b;
console.log("Product:", multiply(4, 6));

// 4. Arrow functions and 'this' keyword
function Person() {
    this.age = 0;

    // Using regular function: 'this' refers to the calling context
    setInterval(function () {
        this.age++;
        console.log("Regular function age:", this.age);
    }, 1000);

    // Using arrow function: 'this' refers to the enclosing context (Person object)
    setInterval(() => {
        this.age++;
        console.log("Arrow function age:", this.age);
    }, 1000);
}

// Uncomment below to test Person function behavior
// const p = new Person();

// 5. Differences from regular functions:
// - Arrow functions do not have their own 'this', 'arguments', 'super', or 'new.target' bindings.
// - Arrow functions cannot be used as constructors and will throw an error when used with 'new'.
// - Arrow functions are always anonymous.

// Example: Arrow function cannot be used as constructor
const Foo = () => {};
const foo = new Foo(); // Error: Foo is not a constructor
