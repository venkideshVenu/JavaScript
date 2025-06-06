// Pure Functions and Side Effects

/*
Pure functions:
- Always return the same output for the same input.
- Have no side effects (do not modify external state).

Side effects:
- Modifying external variables, I/O operations, etc.
*/

// Pure function example
function multiply(a, b) {
  return a * b;
}

// Impure function example (has side effect)
let count = 0;
function increment() {
  count++;
}

console.log("Pure function multiply(2, 3):", multiply(2, 3));
increment();
console.log("Impure function increment called, count:", count);
