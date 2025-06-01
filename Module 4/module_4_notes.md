
# 📘 Module 4: Functions, Function Expressions & Hoisting in JavaScript

---

## 🧠 What is a Function?

A **function** is a reusable block of code that performs a specific task.

```js
function functionName(parameters) {
  // code to execute
}
````

### ✅ Why use Functions?

* Avoid code repetition
* Improve modularity
* Increase code readability and reusability
* Debug code more easily

---

## ✨ Function Declaration

A function can be declared using the `function` keyword.

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!
```

---

## ✨ Function Parameters & Arguments

* **Parameters**: Variables listed in the function definition.
* **Arguments**: Actual values passed to the function when it is called.

```js
function add(x, y) {
  return x + y;
}
console.log(add(2, 3)); // Output: 5
```

---

## 📦 Return Statement

A function can return a value using the `return` keyword.

```js
function square(n) {
  return n * n;
}
let result = square(4); // result = 16
```

---

## 🔁 Function Expression

A **function expression** is a function assigned to a variable. It can be anonymous (no name).

```js
const sayHi = function(name) {
  console.log("Hi, " + name);
};
sayHi("Bob"); // Output: Hi, Bob
```

* Function expressions **are not hoisted**.
* You must declare them before use.

---

## 🧾 Arrow Functions (ES6+)

A **shorter syntax** for writing function expressions.

```js
const greet = (name) => {
  return "Hello, " + name;
};
```

If the function has only **one parameter** and **one return statement**, it can be written even shorter:

```js
const square = x => x * x;
```

---

## ⚠️ Function Declaration vs Function Expression

| Feature               | Function Declaration | Function Expression          |
| --------------------- | -------------------- | ---------------------------- |
| Syntax                | `function name() {}` | `const name = function() {}` |
| Hoisting              | ✅ Yes                | ❌ No                         |
| Use before definition | ✅ Allowed            | ❌ Throws error               |

---

## 📌 IIFE (Immediately Invoked Function Expression)

A function that runs **immediately after it’s defined**.

```js
(function() {
  console.log("IIFE runs immediately!");
})();
```

---

## 🔍 What is Hoisting?

**Hoisting** is JavaScript's default behavior of moving **declarations** (not initializations) to the top of the current scope during the compilation phase.

### ✅ Hoisted:

* `var` declarations
* `function` declarations

### ❌ Not Hoisted:

* `let` and `const` declarations
* Function expressions
* Arrow functions

---

### 🧪 Example: Function Hoisting

```js
sayHello(); // Works due to hoisting

function sayHello() {
  console.log("Hello!");
}
```

But with function expression:

```js
sayHello(); // ❌ Error: sayHello is not a function

const sayHello = function() {
  console.log("Hello!");
};
```

---

## 🧠 Best Practices for Functions

* Keep functions short and focused on a single task.
* Use **descriptive names** for functions and parameters.
* Avoid polluting the global scope.
* Prefer `const` for function expressions unless reassignment is needed.
* Use arrow functions for simple logic and callbacks.

---

## ✅ Summary

| Topic                | Key Point                                                              |
| -------------------- | ---------------------------------------------------------------------- |
| Function Declaration | Named function, hoisted, can be called before declaration              |
| Function Expression  | Anonymous or named, not hoisted, assigned to variables                 |
| Arrow Function       | Concise syntax, especially for callbacks and simple returns            |
| IIFE                 | Executes immediately, useful for creating private scope                |
| Hoisting             | Function declarations and `var` get hoisted, but `let`, `const` do not |

---
