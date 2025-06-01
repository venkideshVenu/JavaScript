// Demonstration of differences between var, let, and const keywords in JavaScript

// 1. Scope differences
function scopeTest() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";
    }
    console.log(varVariable); // Accessible here: var is function scoped
    // console.log(letVariable); // Error: let is block scoped
    // console.log(constVariable); // Error: const is block scoped
}
scopeTest();

// 2. Re-declaration differences
var varVariable = "var can be re-declared";
var varVariable = "var re-declared again"; // No error

let letVariable = "let cannot be re-declared";
// let letVariable = "let re-declared again"; // Error: Identifier 'letVariable' has already been declared

const constVariable = "const cannot be re-declared";
// const constVariable = "const re-declared again"; // Error: Identifier 'constVariable' has already been declared

// 3. Re-assignment differences
var varReassign = "var can be reassigned";
varReassign = "var reassigned successfully";

let letReassign = "let can be reassigned";
letReassign = "let reassigned successfully";

const constReassign = "const cannot be reassigned";
// constReassign = "const reassigned?"; // Error: Assignment to constant variable

// 4. Hoisting behavior
console.log(varHoisted); // undefined (var is hoisted and initialized with undefined)
// console.log(letHoisted); // Error: Cannot access 'letHoisted' before initialization
// console.log(constHoisted); // Error: Cannot access 'constHoisted' before initialization

var varHoisted = "var hoisted";
let letHoisted = "let hoisted";
const constHoisted = "const hoisted";

// 5. Temporal Dead Zone (TDZ) for let and const
function tdzTest() {
    // console.log(a); // Error: Cannot access 'a' before initialization
    let a = 10;
    console.log(a); // 10

    // console.log(b); // Error: Cannot access 'b' before initialization
    const b = 20;
    console.log(b); // 20
}
tdzTest();

// 6. Const with objects and arrays
const obj = { name: "John" };
obj.name = "Jane"; // Allowed: object properties can be changed
// obj = {}; // Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // Allowed: array contents can be changed
// arr = []; // Error: Assignment to constant variable
