
# 📘 Module 5: ES6 (ECMAScript 6) — Modern JavaScript Features

---

## 🔍 What is ES6?

**ES6 (ECMAScript 2015)** is the 6th edition of the ECMAScript language specification and a major update to JavaScript.  
It introduced new syntax and features that made JavaScript **more powerful, readable, maintainable, and modular**.

---

## 🌟 Significance of ES6

- Enhances **readability and maintainability** of code
- Promotes **modular** development
- Encourages use of **modern syntax**
- Enables more **efficient asynchronous programming**
- Adds support for **object-oriented** and **functional** patterns

---

## 🚀 Major Features of ES6

---

### 1️⃣ `let` and `const` Keywords

#### 🛑 Problems with `var`:
- `var` is **function-scoped**, not block-scoped.
- Allows **re-declaration** in the same scope.
- Supports **hoisting**, which can lead to bugs.

```js
var x = 10;
var x = 20; // valid, but dangerous!
````

---

#### ✅ `let`

* **Block-scoped**
* **Cannot be re-declared** in the same scope

```js
let a = 5;
a = 6; // ✅ Allowed
let a = 7; // ❌ SyntaxError
```

---

#### ✅ `const`

* **Block-scoped**
* **Must be initialized** at declaration
* **Cannot be reassigned**

```js
const PI = 3.14;
PI = 3.1415; // ❌ Error
```

---

### 2️⃣ Arrow Functions (`=>`)

A **shorter syntax** for writing functions.

```js
const greet = name => `Hello, ${name}`;
```

#### ✅ Benefits:

* Implicit `return` for one-liners
* Cleaner syntax
* Lexical `this` (doesn’t bind its own `this`)

```js
const add = (a, b) => a + b;
```

---

### 3️⃣ Default Parameters

Allow setting **default values** for parameters.

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```

---

### 4️⃣ Template Literals and Multiline Strings

Use **backticks** (`` ` ``) instead of quotes for:

#### ✅ String interpolation:

```js
let name = "Alice";
console.log(`Hello, ${name}!`);
```

#### ✅ Multiline strings:

```js
let poem = `
Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!
`;
```

---

### 5️⃣ Destructuring

#### ✅ Array Destructuring:

```js
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // red
```

#### ✅ Object Destructuring:

```js
const user = { name: "John", age: 25 };
const { name, age } = user;
console.log(name); // John
```

---

### 6️⃣ Higher-Order Functions (HOFs)

A **higher-order function**:

* Takes another function as an argument
* Or returns a function

Common HOFs: `.map()`, `.filter()`, `.reduce()`

```js
const nums = [1, 2, 3, 4];
const squares = nums.map(x => x * x); // [1, 4, 9, 16]
```

---

### 7️⃣ Promises

Promises simplify **asynchronous programming**.

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received!"), 1000);
});

promise.then(data => console.log(data));
```

#### ✅ States:

* **Pending**
* **Resolved**
* **Rejected**

---

### 8️⃣ Classes

Introduces **class-based object-oriented programming**.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const p1 = new Person("Alice");
p1.greet(); // Hello, I am Alice
```

---

### 9️⃣ Modules

ES6 introduced **module support** using `export` and `import`.

#### ✅ Export:

```js
// utils.js
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}
```

#### ✅ Import:

```js
// main.js
import { PI, add } from './utils.js';
```

✅ Promotes modularity, code reuse, and better structure.

---

## 🔁 Summary Table

| Feature            | Description                                    |
| ------------------ | ---------------------------------------------- |
| `let` / `const`    | Block scoped variable declarations             |
| Arrow Functions    | Concise syntax, lexical `this`                 |
| Default Parameters | Parameters with fallback values                |
| Template Literals  | Embedded expressions & multiline strings       |
| Destructuring      | Unpack arrays/objects easily                   |
| HOFs               | Functions that take/return other functions     |
| Promises           | Handle async code more cleanly                 |
| Classes            | OOP syntax with `constructor`, `extends`, etc. |
| Modules            | Import/export code across files                |

---