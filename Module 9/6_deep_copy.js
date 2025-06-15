// 6_deep_copy.js

// Deep copy in JavaScript refers to the process of creating a new object that is a complete copy of the original object, including all nested objects. Unlike shallow copy, where the new object references the same memory locations as the original, deep copy ensures that all levels of the object are duplicated.

// This is particularly important when dealing with complex data structures, as changes to nested objects in a shallow copy will affect the original object. In contrast, a deep copy allows for independent manipulation of the copied object.

// There are several ways to create a deep copy in JavaScript:

// 1. Using JSON methods:
// The simplest way to create a deep copy is by using JSON.stringify() and JSON.parse(). This method converts the object to a JSON string and then parses it back into a new object.

// Example:
const original = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
};

const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying the deep copy does not affect the original object
deepCopy.address.city = "Los Angeles";

console.log(original.address.city); // Output: New York
console.log(deepCopy.address.city); // Output: Los Angeles

// 2. Using a recursive function:
// For more complex objects, especially those containing functions or special objects (like Date), a custom recursive function can be used to create a deep copy.

// Example:
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return the value if obj is not an object
    }

    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let item of obj) {
            arrCopy.push(deepClone(item)); // Recursively copy each item
        }
        return arrCopy;
    }

    const objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]); // Recursively copy each property
        }
    }
    return objCopy;
}

// Example usage:
const originalObj = {
    name: "Alice",
    hobbies: ["reading", "traveling"],
    details: {
        age: 25,
        location: "Paris"
    }
};

const clonedObj = deepClone(originalObj);
clonedObj.details.age = 30;

console.log(originalObj.details.age); // Output: 25
console.log(clonedObj.details.age); // Output: 30

// In summary, deep copy is essential when you need to ensure that the original object remains unchanged when the copy is modified.