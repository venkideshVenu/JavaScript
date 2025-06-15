// 10_null_vs_not_defined_vs_undefined.js

// In JavaScript, null, undefined, and not defined are three distinct concepts that often confuse developers. 
// This file aims to clarify the differences between them.

// 1. null
// - null is an assignment value. It represents the intentional absence of any object value.
// - It is a primitive value that can be assigned to a variable as a representation of no value.
// - Example:
let a = null;
console.log(a); // Output: null

// 2. undefined
// - undefined is a type itself (undefined) and is the default value of uninitialized variables.
// - A variable that has been declared but not assigned a value is of type undefined.
// - Example:
let b;
console.log(b); // Output: undefined

// 3. not defined
// - not defined refers to a variable that has not been declared at all.
// - Trying to access a variable that has not been declared will result in a ReferenceError.
// - Example:
try {
    console.log(c); // This will throw a ReferenceError: c is not defined
} catch (error) {
    console.log(error.message); // Output: c is not defined
}

// Summary:
// - null is an assigned value indicating no value.
// - undefined is a type indicating a variable has been declared but not assigned a value.
// - not defined indicates a variable that has not been declared at all.