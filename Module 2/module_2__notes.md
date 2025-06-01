# 📘 Module 2: Basics of JavaScript

---

## 🧠 Variables in JavaScript

### 📌 What are Variables?

- **Variables** are containers used to store data values.
- The term "variable" means something that can change or vary over time.

### 🔑 Declaring Variables

There are **three main ways** to declare variables in JavaScript:

```js
var name = "John";    // Function-scoped
let age = 25;         // Block-scoped (preferred)
const PI = 3.14;      // Block-scoped, read-only (constant)
````

> `var` was traditionally used, but `let` and `const` are preferred in modern JavaScript due to better scoping and behavior.

### ✅ `var` Keyword

* Reserved keyword used to declare variables (function-scoped).
* Can store data of any **data type** (number, string, array, object, etc.).

```js
var x = 10;
var message = "Hello, World!";
```

### 🆚 Static vs Dynamic Typing

* **Statically Typed Language**:
  Each variable and expression's type is known at **compile-time** (e.g., Java, C++).

* **Dynamically Typed Language**:
  Variable types are determined **at runtime**, and a variable can change types (e.g., JavaScript, Python).

```js
let example = 10;      // number
example = "text";      // now a string
```

### ⚠️ Variable Naming Rules

* Variable names must be **unique identifiers**.
* Can contain **letters, digits, underscores (\_), and dollar signs (\$)**.
* Must **begin with a letter**, `$`, or `_`.
* **Case-sensitive**: `age` and `Age` are different.
* **Reserved words** (e.g., `let`, `return`, `if`) **cannot** be used as variable names.
* Cannot contain **spaces** or **special characters** like `@`, `#`, `!`, etc.

---

## 📚 Arrays in JavaScript

### 📌 What is an Array?

* Arrays are used to **store multiple values** in a single variable.
* Unlike in statically typed languages, JavaScript arrays can store **different data types**.

```js
let fruits = ["apple", "banana", 42, true];
```

* Arrays are **zero-indexed** (first element has index `0`).

```js
let arr = ["first", "second", "third"];
console.log(arr[0]); // Output: first
```

### 🔧 Array Methods

| Method       | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| `push()`     | Adds element(s) to the **end** of an array.                 |
| `pop()`      | Removes the **last** element.                               |
| `shift()`    | Removes the **first** element.                              |
| `unshift()`  | Adds element(s) to the **beginning** of an array.           |
| `splice()`   | Adds/removes elements at a specific index.                  |
| `slice()`    | Returns a shallow copy of a portion of an array.            |
| `concat()`   | Merges two or more arrays.                                  |
| `indexOf()`  | Returns the first index of a specified element.             |
| `includes()` | Checks if an element exists in the array.                   |
| `forEach()`  | Iterates through each array element.                        |
| `map()`      | Creates a new array by applying a function to each element. |
| `filter()`   | Creates a new array with elements that pass a condition.    |
| `reduce()`   | Reduces the array to a single value using a function.       |

```js
let nums = [1, 2, 3];
nums.push(4);          // [1, 2, 3, 4]
nums.pop();            // [1, 2, 3]
nums.shift();          // [2, 3]
nums.unshift(0);       // [0, 2, 3]
```

---

## 🧱 Objects in JavaScript

### 📌 What is an Object?

* An **object** is an **unordered collection** of key-value pairs.
* Keys must be **strings** or **symbols**; values can be of **any type**: string, number, array, function, etc.

```js
let person = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "cycling"],
  greet: function () {
    console.log("Hello!");
  }
};
```

### 🛠️ Creating Objects

* **Object Literal** (most common):

  ```js
  let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2024
  };
  ```

* **Using the `new Object()` syntax**:

  ```js
  let obj = new Object();
  obj.name = "Sample";
  ```

* **Using a Constructor Function**:

  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  let p1 = new Person("Bob", 25);
  ```

* **Using ES6 Classes**:

  ```js
  class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  }
  let s1 = new Student("Tom", "A");
  ```

### 🧪 Object Methods

| Method             | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| `hasOwnProperty()` | Returns `true` if a property exists directly on the object. |
| `Object.keys()`    | Returns an array of object’s own property names.            |
| `Object.values()`  | Returns an array of object’s own property values.           |
| `Object.entries()` | Returns an array of key-value pairs.                        |
| `Object.assign()`  | Copies values from one or more objects to a target object.  |

```js
let user = { name: "John", age: 28 };
console.log(user.hasOwnProperty("name")); // true
console.log(Object.keys(user));           // ['name', 'age']
```


