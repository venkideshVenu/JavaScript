# 📘 Module 6: Functional Programming in JavaScript

---

## 🧠 What is Functional Programming?

**Functional Programming (FP)** is a programming paradigm that treats **computation as the evaluation of mathematical functions** and avoids changing state and mutable data.

In JavaScript, FP is widely supported through features like **higher-order functions**, **first-class functions**, and **array methods**.

---

## 🌟 Key Features of Functional Programming

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| First-Class Functions  | Functions are treated like variables (can be passed, returned, assigned)    |
| Pure Functions         | Same input gives same output, no side effects                               |
| Immutability           | Data is not changed; instead, new data is returned                          |
| Higher-Order Functions | Functions that take or return other functions                               |
| Declarative Code       | Describes *what* to do, not *how* to do it                                  |
| Function Composition   | Combining functions to build complex logic                                  |

---

## 🔄 Imperative vs Declarative Programming

### 🛠️ Imperative Style
You **tell the computer how to do something**, step by step.

```js
let numbers = [1, 2, 3, 4];
let squares = [];
for (let i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] * numbers[i]);
}
````

### ✨ Declarative Style

You **describe what to do**, and let the language handle the "how".

```js
let numbers = [1, 2, 3, 4];
let squares = numbers.map(n => n * n);
```

---

## 🧼 Pure Functions

A **pure function**:

* **Always returns the same output** for the same input
* Has **no side effects** (does not modify global variables, DOM, or external state)

```js
function add(a, b) {
  return a + b;
}
```

### ❌ Impure Function Example:

```js
let total = 0;
function addToTotal(num) {
  total += num; // modifies external variable = side effect
}
```

---

## ⚠️ Side Effects

A **side effect** is any observable effect outside the function:

* Modifying a global variable
* Writing to the DOM
* Changing a file
* Logging to console

Functional programming tries to **avoid side effects**.

---

## 🔁 Callback Functions

A **callback function** is a function passed as an argument to another function, and it is executed later.

```js
function greetUser(callback) {
  let name = "Alice";
  callback(name);
}

function sayHello(name) {
  console.log("Hello, " + name);
}

greetUser(sayHello); // Output: Hello, Alice
```

---

## 🔝 Higher-Order Functions

A **higher-order function**:

* Takes another function as a parameter
* Or returns another function

JavaScript array methods like `map`, `forEach`, `filter`, `reduce` are higher-order.

---

## 🔁 `map()` and `forEach()`

### 🗺️ `map()`

Returns a **new array** with the result of applying a function to every element.

```js
let nums = [1, 2, 3];
let squared = nums.map(n => n * n); // [1, 4, 9]
```

### 🔄 `forEach()`

Calls a function on each element but **does not return a new array**.

```js
nums.forEach(n => console.log(n * 2)); // Logs: 2, 4, 6
```

---

## 🔍 `find()` and `findIndex()`

### 🔎 `find()`

Returns the **first element** that satisfies a condition.

```js
let users = [{id: 1}, {id: 2}, {id: 3}];
let result = users.find(user => user.id === 2); // {id: 2}
```

### 📍 `findIndex()`

Returns the **index** of the first match.

```js
let index = users.findIndex(user => user.id === 2); // 1
```

---

## ✅ `some()` and `every()`

### 🔘 `some()`

Returns `true` if **at least one element** satisfies the condition.

```js
let nums = [1, 2, 3];
nums.some(n => n > 2); // true
```

### 🔒 `every()`

Returns `true` if **all elements** satisfy the condition.

```js
nums.every(n => n > 0); // true
```

---

## 🧼 `filter()` Method

Returns a **new array** containing only elements that pass the condition.

```js
let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 0); // [2, 4]
```

---

## 📉 `reduce()` Method

**Reduces** the array to a single value by accumulating results.

```js
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, val) => acc + val, 0); // 10
```

| Term  | Meaning                          |
| ----- | -------------------------------- |
| `acc` | Accumulator (total)              |
| `val` | Current array element            |
| `0`   | Initial value of the accumulator |

---

## 🔗 Method Chaining

You can **chain** multiple array methods for clean, functional code.

```js
let result = [1, 2, 3, 4, 5]
  .filter(n => n % 2 === 0)     // [2, 4]
  .map(n => n * 2)              // [4, 8]
  .reduce((acc, n) => acc + n); // 12
```

---

## ✅ Summary Table

| Method        | Purpose                             | Returns      |
| ------------- | ----------------------------------- | ------------ |
| `map()`       | Transforms array elements           | New array    |
| `forEach()`   | Loops over array (no return)        | `undefined`  |
| `filter()`    | Filters elements based on condition | New array    |
| `reduce()`    | Reduces array to a single value     | Single value |
| `find()`      | Finds first matching element        | Single value |
| `findIndex()` | Finds index of first match          | Index        |
| `some()`      | Checks if *any* element matches     | Boolean      |
| `every()`     | Checks if *all* elements match      | Boolean      |

---
