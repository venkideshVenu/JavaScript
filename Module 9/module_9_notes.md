# 📘 Module 9: Miscellaneous Topics in JavaScript

This module explores several important yet often overlooked core JavaScript concepts. Understanding these will help you write more robust and efficient code.

---

## 🔁 Comparison Operators

### 📌 Loose Equality (`==`)
- Compares values **after type coercion**.
```js
'5' == 5; // true
null == undefined; // true
````

### 📌 Strict Equality (`===`)

* Compares **both value and type** (no coercion).

```js
'5' === 5; // false
null === undefined; // false
```

---

## ✅ Truthy and Falsy Values

### 📌 Falsy Values in JavaScript:

These evaluate to `false` in a boolean context:

* `false`
* `0`
* `''` (empty string)
* `null`
* `undefined`
* `NaN`

### 📌 Everything else is Truthy:

```js
if ("hello") console.log("Truthy!"); // Output: Truthy!
```

---

## 📦 Primitive Data Types

These are immutable and stored by **value**.

| Type      | Example                 |
| --------- | ----------------------- |
| String    | `"hello"`               |
| Number    | `42`                    |
| Boolean   | `true` / `false`        |
| Null      | `null`                  |
| Undefined | `undefined`             |
| Symbol    | `Symbol("id")`          |
| BigInt    | `12345678901234567890n` |

---

## 🧾 Reference Data Types

Stored by **reference**. Changing one variable affects all references.

Examples:

* Arrays
* Objects
* Functions

```js
const obj1 = { name: "JS" };
const obj2 = obj1;
obj2.name = "React";
console.log(obj1.name); // React
```

---

## 📤 Shallow Copy

Only top-level properties are copied. Nested objects still share references.

```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 100;

console.log(obj1.b.c); // 100 ❗
```

---

## 🏊 Deep Copy

All levels are copied. Changes in the new object don't affect the original.

```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.b.c = 100;

console.log(obj1.b.c); // 2 ✅
```

> ⚠️ JSON method fails for circular refs or special types. Use `structuredClone()` (modern) or libraries like Lodash.

---

## 🔒 Closures in JavaScript

A closure is a function that **remembers** its **outer lexical environment**, even after the outer function has closed.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

---

## 🔁 Closure with Nested Functions

Closures can also be used for encapsulation and state retention across nested scopes.

```js
function outer(x) {
  return function middle(y) {
    return function inner(z) {
      return x + y + z;
    };
  };
}

console.log(outer(1)(2)(3)); // 6
```

---

## ☕ Function Currying

Currying transforms a function with multiple parameters into a sequence of functions with one parameter each.

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
```

> Useful for **function reusability** and **composition**.

---

## ❓ `null` vs `undefined` vs `not defined`

| Type          | Meaning                                     |
| ------------- | ------------------------------------------- |
| `undefined`   | Declared but not assigned a value           |
| `null`        | Assigned manually to indicate "no value"    |
| `not defined` | Variable doesn't exist in the current scope |

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(c); // ❌ ReferenceError: c is not defined
```

---

## 🔍 `typeof` Operator

Returns the **data type** of a value as a string.

```js
typeof "hello"; // "string"
typeof 10; // "number"
typeof null; // "object" ❗
typeof undefined; // "undefined"
typeof {}; // "object"
typeof []; // "object"
typeof function () {}; // "function"
```

> ⚠️ Note: `typeof null` returns `"object"` – a long-standing JS bug.

---

## 📚 `Array.isArray()` Method

Checks whether a value is an array.

```js
Array.isArray([1, 2, 3]); // true
Array.isArray("hello"); // false
```

> ✅ Recommended over `typeof` for arrays, since:

```js
typeof [1, 2, 3]; // "object"
```

---

## ✅ Summary Table

| Topic                 | Key Point                                      |
| --------------------- | ---------------------------------------------- |
| `==` vs `===`         | Loose vs strict equality                       |
| Falsy Values          | `0`, `false`, `''`, `null`, `undefined`, `NaN` |
| Primitives            | Stored by value                                |
| Reference Types       | Stored by reference                            |
| Shallow Copy          | Top-level only, shares nested object refs      |
| Deep Copy             | All levels cloned                              |
| Closure               | Inner function retains access to outer scope   |
| Currying              | Transforms functions for better reuse          |
| `null` vs `undefined` | Explicit vs uninitialized value                |
| `typeof`              | Returns type as string, buggy for `null`       |
| `Array.isArray()`     | Safely checks if a value is an array           |

---