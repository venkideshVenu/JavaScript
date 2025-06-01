/**
 * Demonstration of Object Destructuring in JavaScript
 */

const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// Basic object destructuring
const { name, age, city } = person;
console.log(name); // Alice
console.log(age);  // 30
console.log(city); // New York

// Destructuring with new variable names
const { name: personName, age: personAge } = person;
console.log(personName); // Alice
console.log(personAge);  // 30

// Destructuring with default values
const { name: n, country = 'USA' } = person;
console.log(n);       // Alice
console.log(country); // USA

// Nested object destructuring
const employee = {
    id: 101,
    details: {
        firstName: 'Bob',
        lastName: 'Smith'
    }
};

const { details: { firstName, lastName } } = employee;
console.log(firstName); // Bob
console.log(lastName);  // Smith
