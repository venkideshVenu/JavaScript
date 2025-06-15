// 8_microtask_queue.js
// Demonstrating the microtask queue in JavaScript

/*
 * JAVASCRIPT MICROTASK QUEUE EXPLAINED
 * ==================================
 *
 * EVENT LOOP ARCHITECTURE RECAP:
 * ---------------------------
 * The JavaScript runtime has multiple task queues:
 *
 * 1. MACROTASK QUEUE (TASK QUEUE):
 *    - Contains callbacks from:
 *      • setTimeout/setInterval
 *      • I/O operations (e.g., file system, network)
 *      • UI rendering
 *      • setImmediate (in Node.js)
 *    - Processed one task per event loop iteration
 *
 * 2. MICROTASK QUEUE:
 *    - Higher priority than the macrotask queue
 *    - Contains callbacks from:
 *      • Promises (.then, .catch, .finally)
 *      • queueMicrotask() API
 *      • process.nextTick() (in Node.js, even higher priority)
 *      • MutationObserver (in browsers)
 *    - Processed until completely empty after each macrotask
 *
 * EVENT LOOP PROCESSING ORDER:
 * -------------------------
 * 1. Execute all synchronous code in the call stack
 * 2. Process all microtasks until the microtask queue is empty
 * 3. Process one macrotask from the macrotask queue
 * 4. Process all microtasks again
 * 5. Render UI updates (in browsers)
 * 6. Repeat steps 3-5
 */

console.log("Script start");

// Schedule a macrotask (will go to the macrotask queue)
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// Create a resolved Promise (callbacks will go to the microtask queue)
Promise.resolve()
  .then(() => {
    console.log("Promise microtask 1");

    // This will create another microtask that gets added to the queue
    // It will execute before the next macrotask
    return Promise.resolve();
  })
  .then(() => {
    console.log("Promise microtask 2");

    // Demonstrate that all microtasks execute before setTimeout
    // by scheduling another setTimeout here
    setTimeout(() => {
      console.log("Inner setTimeout (another macrotask)");
    }, 0);
  });

console.log("Script end");

/*
 * EXECUTION FLOW EXPLAINED:
 * -----------------------
 * 1. "Script start" is logged (synchronous)
 *
 * 2. setTimeout is called
 *    - Callback is scheduled as a macrotask
 *    - Will execute after the current execution context and all microtasks
 *
 * 3. Promise.resolve().then() schedules a microtask
 *
 * 4. "Script end" is logged (synchronous)
 *
 * 5. Call stack is empty, event loop takes over
 *
 * 6. First, all microtasks are executed:
 *    - "Promise microtask 1" is logged
 *    - The first .then returns Promise.resolve() and chains another .then
 *    - "Promise microtask 2" is logged
 *    - The inner setTimeout schedules another macrotask
 *
 * 7. Only then, macrotasks are executed one at a time:
 *    - "setTimeout callback (macrotask)" is logged
 *    - Event loop processes microtasks again (there are none)
 *    - "Inner setTimeout (another macrotask)" is logged
 *
 * EXPECTED OUTPUT ORDER:
 * 1. "Script start"
 * 2. "Script end"
 * 3. "Promise microtask 1"
 * 4. "Promise microtask 2"
 * 5. "setTimeout callback (macrotask)"
 * 6. "Inner setTimeout (another macrotask)"
 *
 * WHY MICROTASKS EXIST:
 * ------------------
 * 1. To ensure consistent ordering of related async operations
 * 2. To guarantee that Promise callbacks execute as soon as possible
 * 3. To reduce UI rendering jank in browsers (by processing related callbacks together)
 * 4. To ensure async operations finish before the next rendering
 *
 * PRACTICAL IMPLICATIONS:
 * --------------------
 * 1. Promise chains fully resolve before setTimeout callbacks, even with 0 delay
 * 2. UI updates happen after all microtasks are processed
 * 3. Infinite microtasks can starve macrotasks and block rendering
 * 4. Use queueMicrotask() to explicitly schedule code as a microtask
 */

// Demonstrate queueMicrotask API (uncomment to see the behavior)
/*
console.log("Before queueMicrotask");

queueMicrotask(() => {
  console.log("Inside queueMicrotask callback");
});

console.log("After queueMicrotask");
*/

// Output would be:
// "Before queueMicrotask"
// "After queueMicrotask"
// "Inside queueMicrotask callback"
