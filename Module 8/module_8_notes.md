# 📘 Module 8: Asynchronous JavaScript

JavaScript is **single-threaded**, meaning it can only do **one thing at a time**. But it supports **asynchronous programming** to allow execution of long-running tasks like network calls, file reading, etc., **without blocking the main thread**.

---

## 🔄 Introduction to Asynchronous Programming

Asynchronous programming allows code to be executed **non-blocking** – JavaScript doesn’t wait for a task to finish before moving on.

### 🔧 Real-world Example

Imagine ordering food:
- You place an order (task starts).
- You continue scrolling your phone (other tasks continue).
- When the food arrives, you’re notified (callback, promise, etc.).

---

## 📂 Reading a File Synchronously (Node.js)

This blocks further code execution until the file is completely read.

```js
const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf8');
console.log(data); // Executes only after the file is read
console.log("Done reading file");
````

> ❗ Synchronous code **blocks the event loop**.

---

## 📁 Reading a File Asynchronously (Node.js)

Asynchronous reading allows the program to continue while the file is being read.

```js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("Done reading file");
```

> ✅ The callback is executed after the task is completed, **without blocking**.

---

## 🔄 The Event Loop (Key Concept)

JavaScript uses an **event loop** to handle asynchronous tasks.

### 🧠 How It Works:

1. JS code runs in the **call stack**.
2. Async operations (like timers, fetch) go to **Web APIs**.
3. When done, their callback/task goes to the **task queue** or **microtask queue**.
4. The event loop checks if the stack is empty, and moves tasks into the stack.

![Event Loop Diagram](https://miro.medium.com/v2/resize\:fit:1400/format\:webp/1*H0g4OzzQvZ0AtUN91HHs9g.gif)

---

## 🔂 Serial Execution of Async Code

To run async tasks one after another in sequence, you can use:

* **Promises** chaining
* `async/await`

```js
async function runTasks() {
  await task1();
  await task2();
  await task3();
}
```

---

## ⏰ `setTimeout()` and `setInterval()`

### `setTimeout()`

Executes a function **once** after a delay (in ms).

```js
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
```

### `setInterval()`

Executes a function **repeatedly** at specified intervals.

```js
setInterval(() => {
  console.log("Runs every 3 seconds");
}, 3000);
```

---

## 💥 Promises in JavaScript

A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.

### States of a Promise:

* `pending`
* `fulfilled`
* `rejected`

### Creating a Promise:

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Task succeeded");
  } else {
    reject("Task failed");
  }
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

---

## ✨ Promises + `async/await`

`async` makes a function return a **Promise**.
`await` pauses execution until the Promise is resolved or rejected.

```js
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function showData() {
  const data = await getData();
  console.log(data);
}

showData(); // waits 2 sec, then logs
```

---

## 🧵 Microtask Queue vs Callback Queue

### 📦 Callback Queue (Macro-task queue):

* `setTimeout`, `setInterval`, `setImmediate`, etc.

### 🧪 Microtask Queue:

* `Promise.then`, `catch`, `finally`, `queueMicrotask`

```js
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));

console.log("Sync");
```

> Output:

```
Sync
Promise
Timeout
```

> ✅ Microtasks are executed **before** the next macro-task, even if timeout is 0.

---

## ✅ Summary Table

| Concept         | Description                                      |
| --------------- | ------------------------------------------------ |
| Asynchronous JS | Allows non-blocking code execution               |
| `readFileSync`  | Synchronously reads file and blocks code         |
| `readFile`      | Asynchronously reads file without blocking       |
| Event Loop      | Handles async tasks using queues                 |
| `setTimeout`    | Delays execution once                            |
| `setInterval`   | Repeats execution periodically                   |
| Promise         | Represents a future result of an async operation |
| `async/await`   | Syntax sugar for promises                        |
| Microtask Queue | Runs before macro-tasks, used by promises        |

---