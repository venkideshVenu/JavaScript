// 4_this_node_strict.js
// "this" keyword in Node.js (strict mode)

/*
In strict mode, "this" inside functions that are called without an object context is undefined.
*/

'use strict';

function showThis() {
  console.log(this);
}

showThis(); // Outputs: undefined
