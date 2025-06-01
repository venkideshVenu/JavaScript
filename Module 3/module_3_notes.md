


# 🧭 Module 3: Conditional & Control Statements in JavaScript

---

## ⚡ What are Control Statements?

Control statements in JavaScript manage the **flow of execution** in a program. They determine **how and when code blocks should run**, based on conditions or repetition needs.

---

## 🔀 Conditional Statements

Conditional statements help in **decision making** — they execute different blocks of code based on different conditions.

### ✅ if Statement

```js
if (condition) {
  // block of code to execute if condition is true
}
````

**Example:**

```js
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
```

---

### ✅ if...else Statement

```js
if (condition) {
  // block if true
} else {
  // block if false
}
```

**Example:**

```js
let marks = 35;
if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

---

### ✅ if...else if...else Ladder

```js
if (condition1) {
  // block1
} else if (condition2) {
  // block2
} else {
  // block3
}
```

**Example:**

```js
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

---

### ✅ Ternary Operator (`? :`)

A short form of `if...else`.

```js
condition ? expressionIfTrue : expressionIfFalse;
```

**Example:**

```js
let access = (age >= 18) ? "Allowed" : "Denied";
```

---

### ✅ switch Statement

Used when you have multiple values to compare.

```js
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default block
}
```

**Example:**

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Midweek day");
}
```

---

## 🔁 Looping/Iteration Statements

Loops are used to **repeat a block of code** multiple times.

---

### 🔄 for Loop

```js
for (initialization; condition; increment/decrement) {
  // code block
}
```

**Example:**

```js
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}
```

---

### 🔄 while Loop

```js
while (condition) {
  // code block
}
```

* Evaluates condition **before** executing the loop block.

**Example:**

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

### 🔄 do...while Loop

```js
do {
  // code block
} while (condition);
```

* Executes the block **at least once**, even if the condition is false.

**Example:**

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

## 🌀 Looping through Objects and Arrays

---

### 🔁 for...in Loop

Used to **iterate over keys (property names)** of an object.

```js
for (let key in object) {
  // access object[key]
}
```

**Example:**

```js
let user = { name: "Alice", age: 25 };
for (let key in user) {
  console.log(key, ":", user[key]);
}
```

---

### 🔁 for...of Loop

Used to **iterate over iterable objects** like arrays, strings, maps, etc.

```js
for (let value of iterable) {
  // use value
}
```

**Example (Array):**

```js
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
```

**Example (String):**

```js
let name = "John";
for (let char of name) {
  console.log(char);
}
```

---

## 📝 Summary Table

| Statement    | Use Case                                       |
| ------------ | ---------------------------------------------- |
| `if/else`    | Run code based on condition                    |
| `switch`     | Run one block out of many based on value       |
| `for`        | Known number of iterations                     |
| `while`      | Unknown iterations, condition checked before   |
| `do...while` | Loop runs at least once                        |
| `for...in`   | Loop through object keys                       |
| `for...of`   | Loop through iterable values (arrays, strings) |

---
