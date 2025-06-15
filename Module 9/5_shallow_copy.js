// 5_shallow_copy.js

/*
Shallow Copy in JavaScript

A shallow copy creates a new object that is a copy of the original object, but it does not create copies of nested objects. Instead, it copies references to the nested objects. This means that if the nested objects are modified in the copied object, the changes will also reflect in the original object, as both objects reference the same nested objects.

Example of Shallow Copy:

1. Using Object.assign()
   const original = { a: 1, b: { c: 2 } };
   const shallowCopy = Object.assign({}, original);

   // Modifying the nested object in the shallow copy
   shallowCopy.b.c = 3;

   console.log(original.b.c); // Output: 3
   console.log(shallowCopy.b.c); // Output: 3

2. Using the Spread Operator
   const original = { a: 1, b: { c: 2 } };
   const shallowCopy = { ...original };

   // Modifying the nested object in the shallow copy
   shallowCopy.b.c = 3;

   console.log(original.b.c); // Output: 3
   console.log(shallowCopy.b.c); // Output: 3

In both examples, modifying the nested object in the shallow copy affects the original object because they share the same reference to the nested object.
*/