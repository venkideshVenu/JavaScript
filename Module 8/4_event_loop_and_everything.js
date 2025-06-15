// 4_event_loop_and_everything.js
// Demonstrating the event loop in JavaScript

/*
 * JAVASCRIPT EVENT LOOP EXPLAINED
 * =============================
 *
 * WHAT IS THE EVENT LOOP?
 * ---------------------
 * The event loop is the mechanism that allows JavaScript to perform non-blocking operations
 * despite being single-threaded. It's responsible for executing code, collecting and processing
 * events, and executing queued sub-tasks.
 *
 * JAVASCRIPT RUNTIME COMPONENTS:
 * ---------------------------
 * 1. CALL STACK:
 *    - Single thread of execution
 *    - LIFO (Last In, First Out) data structure (STACK)
 *    - Tracks function calls in progress
 *    - When empty, the event loop can run queued tasks
 *
 * 2. CALLBACK QUEUE (TASK QUEUE):
 *    - Contains callbacks from events, timers, etc.
 *    - FIFO (First In, First Out) structure (QUEUE)
 *    - Tasks wait here until the call stack is empty
 *
 * 3. MICROTASK QUEUE:
 *    - Higher priority than the callback queue
 *    - Contains microtasks like Promise callbacks
 *    - Processed after each task in the main stack completes
 *    - Emptied before moving to callback queue
 *
 * 4. EVENT LOOP:
 *    - Continuously checks if the call stack is empty
 *    - If empty, first processes all microtasks
 *    - Then processes one task from the callback queue
 *
 * EXECUTION ORDER PRIORITY:
 * ----------------------
 * 1. Synchronous code (call stack)
 * 2. Microtasks (Promises, process.nextTick)
 * 3. Macrotasks (setTimeout, setInterval, I/O, UI rendering)
 */

console.log("Start");

// This is a macrotask (setTimeout callback)
// It will be placed in the callback queue
setTimeout(() => {
  console.log("Timeout callback (macrotask)");
}, 0);

// This is a microtask (Promise callback)
// It will be placed in the microtask queue
Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

// This is synchronous code
console.log("End");

/*
 * EXECUTION FLOW EXPLAINED:
 * -----------------------
 * 1. "Start" is logged (synchronous)
 * 2. setTimeout is registered (callback scheduled as macrotask)
 * 3. Promise.resolve() creates a resolved promise
 *    - .then callback is scheduled as a microtask
 * 4. "End" is logged (synchronous)
 * 5. Call stack is now empty, event loop takes over
 * 6. Event loop processes the microtask queue first
 *    - "Promise callback (microtask)" is logged
 * 7. Event loop processes the callback queue next
 *    - "Timeout callback (macrotask)" is logged
 *
 * EXPECTED OUTPUT ORDER:
 * 1. "Start"
 * 2. "End"
 * 3. "Promise callback (microtask)"
 * 4. "Timeout callback (macrotask)"
 *
 * IMPORTANT CONCEPTS:
 * ----------------
 * - Zero delay (setTimeout(fn, 0)) doesn't mean immediate execution
 *   It means "execute as soon as possible after current synchronous code"
 *
 * - Microtasks can delay macrotasks indefinitely if they keep adding
 *   new microtasks (known as "starving the event loop")
 *
 * - Browser rendering occurs between macrotasks, not between microtasks
 *
 * - Node.js has additional phases in its event loop implementation
 */
