
## 🧠 **Module 7: Object-Oriented JavaScript**

---

### 🔹 1. **Introduction to Object-Oriented JavaScript**

* JavaScript supports **object-oriented programming (OOP)** using **prototypes** and the `class` syntax (ES6+).
* Core OOP principles:

  * **Encapsulation**
  * **Inheritance**
  * **Polymorphism**
  * **Abstraction** (not fully supported in JS, but can be simulated)

---

### 🔹 2. **The `this` Keyword**

* Refers to the **object that is executing the current function**.
* Value of `this` depends on **how a function is called**.

```js
const person = {
  name: "Alice",
  greet() {
    console.log(this.name); // refers to 'person' object
  }
};
person.greet(); // Alice
```

---

### 🔹 3. **`this` in Node.js (Non-Strict Mode)**

* In the global context (outside any function), `this` refers to **`global`** object.

```js
console.log(this); // refers to `module.exports`, not `global`
function show() {
  console.log(this); // global object in non-strict mode
}
show();
```

---

### 🔹 4. **`this` in Node.js (Strict Mode)**

* In **strict mode**, `this` inside a function is `undefined`.

```js
'use strict';
function test() {
  console.log(this); // undefined
}
test();
```

---

### 🔹 5. **`this` in Browser**

* Global context: `this` refers to `window`.
* Inside regular function: `this` is also `window` (non-strict mode).
* Inside a method: `this` refers to the object calling the method.

```js
console.log(this); // window
```

---

### 🔹 6. **Constructor Functions**

* Functions used to create multiple similar objects.
* Use `new` keyword.

```js
function Person(name) {
  this.name = name;
}
const p1 = new Person("Venkidesh");
```

---

### 🔹 7. **Classes in JS (ES6)**

* Introduced to make OOP in JS more readable.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
```

---

### 🔹 8. **Inheritance**

* One class inherits properties and methods from another.

```js
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
```

---

### 🔹 9. **Method Inheritance**

* Subclasses inherit methods from parent class or prototype.

```js
const dog = new Dog("Buddy");
dog.speak(); // Buddy barks
```

---

### 🔹 10. **Polymorphism**

* Ability for different classes to define the same method differently.

```js
class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps`);
  }
}
```

---

### 🔹 11. **Encapsulation in JS**

* Wrapping data and methods that operate on the data inside an object.
* Private fields in JS (ES2022):

```js
class User {
  #password;
  constructor(password) {
    this.#password = password;
  }

  checkPassword(pwd) {
    return this.#password === pwd;
  }
}
```

---

### 🔹 12. **What is Prototype**

* Every JS object has a hidden `[[Prototype]]` (accessed via `__proto__`).
* Used for **method and property inheritance**.

```js
function Car() {}
Car.prototype.drive = function () {
  console.log("Driving");
};
const c = new Car();
c.drive(); // Driving
```

---

### 🔹 13. **Call, Apply, and Bind**

* All three are used to **set `this` explicitly**.

```js
function greet(place) {
  console.log(`${this.name} from ${place}`);
}
const user = { name: "Venkidesh" };

greet.call(user, "India");      // Venkidesh from India
greet.apply(user, ["India"]);   // Venkidesh from India
const bound = greet.bind(user);
bound("India");                 // Venkidesh from India
```