/*
 * INTRODUCTION TO ASYNCHRONOUS PROGRAMMING IN JAVASCRIPT
 * =====================================================
 *
 * WHAT IS ASYNCHRONOUS PROGRAMMING?
 * --------------------------------
 * Asynchronous programming is a technique that enables your program to start a potentially
 * long-running task and still be able to be responsive to other events while that task runs,
 * rather than having to wait until that task has finished. Once the task is completed, your
 * program is presented with the result.
 *
 * WHY ASYNCHRONOUS PROGRAMMING?
 * ----------------------------
 * 1. JavaScript runs on a single thread - one task at a time
 * 2. Long-running operations (like network requests, file I/O) would block the entire program
 * 3. Asynchronous code allows non-blocking execution, improving:
 *    - Performance: Can execute other code while waiting
 *    - Responsiveness: UI doesn't freeze while operations run
 *    - Efficiency: Better resource utilization
 *
 * COMMON ASYNCHRONOUS OPERATIONS IN JAVASCRIPT:
 * -------------------------------------------
 * - Timers (setTimeout, setInterval)
 * - AJAX/HTTP requests
 * - File I/O operations (in Node.js)
 * - Database operations
 * - Animations and user interactions
 */

console.log("Start of script");

// This is an asynchronous operation
// setTimeout schedules the callback function to be executed after 2000ms (2 seconds)
// The JS engine doesn't wait here - it continues executing code below
setTimeout(() => {
  console.log("This is asynchronous code executed after 2 seconds");
}, 2000);

// This code runs immediately after scheduling the setTimeout
console.log("End of script");

/*
 * EXECUTION FLOW:
 * --------------
 * 1. "Start of script" is logged immediately (synchronous code)
 * 2. setTimeout is scheduled but doesn't block execution
 * 3. "End of script" is logged immediately (synchronous code)
 * 4. After 2 seconds, the setTimeout callback executes and logs its message
 *
 * OUTPUT ORDER:
 * 1. "Start of script"
 * 2. "End of script"
 * 3. "This is asynchronous code executed after 2 seconds" (after 2s delay)
 *
 * ASYNCHRONOUS PATTERNS IN JAVASCRIPT:
 * ----------------------------------
 * 1. Callbacks: Oldest pattern (used in this example)
 * 2. Promises: Modern approach for handling async operations
 * 3. Async/Await: Syntactic sugar on top of promises (most modern)
 */
