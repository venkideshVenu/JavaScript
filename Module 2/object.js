var person = {
    name: "John",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
 };

// Accessing object properties
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.isEmployed); // true
console.log(person["name"]); // John
console.log(person["age"]); // 30
console.log(person["isEmployed"]); // true

console.log();

// Calling object method
person.greet(); // Hello, my name is John

console.log();

// Adding new properties
person.city = "New York";
console.log(person.city); // New York

console.log();

// Modifying existing properties
person.age = 31;
console.log(person.age); // 31

console.log();

// Deleting properties
delete person.isEmployed;
console.log(person.isEmployed); // undefined

console.log();

// Iterating over object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Output:
// name: John
// age: 31
// city: New York
// greet: function() { ... }
// Note: The greet method will not be displayed in the iteration output

console.log();

// because it is a function and not a simple property value.
// Checking if a property exists
console.log("name" in person); // true
console.log("isEmployed" in person); // false

console.log();

// Getting the keys and values of the object
console.log(Object.keys(person)); // ['name', 'age', 'city', 'greet']
console.log(Object.values(person)); // ['John', 31, 'New York', function() { ... }]

console.log();

// Getting the entries of the object
console.log(Object.entries(person));
// [['name', 'John'], ['age', 31], ['city', 'New York'], ['greet', function() { ... }]]

console.log();

// Cloning an object
let clonedPerson = { ...person };
console.log(clonedPerson);
// Output: { name: 'John', age: 31, city: 'New York', greet: [Function: greet] }

console.log();

// Merging objects
let additionalInfo = {
    country: "USA",
    hobbies: ["reading", "traveling"]
};
let mergedPerson = { ...person, ...additionalInfo };
console.log(mergedPerson);


console.log();
console.log("Complex Object Example");
console.log("=====================================");

let complexObject = {
    name: "Alice",
    age: 28,
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        zip: "90001"
    },
    hobbies: ["painting", "cycling"],
    isActive: false,
    greet: function() {
        console.log("Hi, I'm " + this.name);
    }
};

// Accessing nested object properties
console.log(complexObject.address.city); // Los Angeles
console.log(complexObject.hobbies[0]); // painting
console.log(complexObject["address"]["zip"]); // 90001
console.log(complexObject["hobbies"][1]); // cycling
console.log(complexObject.isActive); // false
