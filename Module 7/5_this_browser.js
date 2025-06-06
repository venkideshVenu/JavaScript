// 5_this_browser.js
// "this" keyword in Browser environment

/*
In browsers, "this" in the global context refers to the window object.
Inside event handlers and methods, "this" refers to the element that triggered the event or the object owning the method.
*/

// Global context
console.log(this === window); // true

// Inside a method
const obj = {
  name: "Browser Object",
  getName: function() {
    return this.name;
  }
};

console.log(obj.getName()); // "Browser Object"

// Event handler example (assuming this code runs in a browser)
document.body.addEventListener('click', function() {
  console.log(this); // Logs the element that was clicked (body)
});
