/*
 * TIMING FUNCTIONS IN JAVASCRIPT: SETTIMEOUT AND SETINTERVAL
 * =======================================================
 *
 * INTRODUCTION:
 * -----------
 * JavaScript provides two main timing functions to schedule code execution:
 * setTimeout for one-time delayed execution, and setInterval for repeated
 * execution at specified intervals.
 *
 * 1. SETTIMEOUT:
 * -----------
 * Function: setTimeout(callback, delay[, arg1, arg2, ...])
 *
 * Purpose:
 * - Executes a function once after a specified delay
 * - Non-blocking: code continues to execute while timer runs
 *
 * Parameters:
 * - callback: Function to execute after the timer expires
 * - delay: Time in milliseconds to wait before execution (minimum, not guaranteed)
 * - arg1, arg2, ...: Optional arguments to pass to the callback
 *
 * Returns:
 * - A numeric timeout ID used to cancel the timeout with clearTimeout()
 *
 * Note: A delay of 0ms doesn't mean immediate execution. The callback will be executed
 * as soon as possible after the current code execution completes.
 *
 * 2. SETINTERVAL:
 * ------------
 * Function: setInterval(callback, interval[, arg1, arg2, ...])
 *
 * Purpose:
 * - Repeatedly executes a function with a fixed delay between executions
 * - Non-blocking: code continues to execute while timer runs
 *
 * Parameters:
 * - callback: Function to execute repeatedly
 * - interval: Time in milliseconds between executions
 * - arg1, arg2, ...: Optional arguments to pass to the callback
 *
 * Returns:
 * - A numeric interval ID used to cancel the interval with clearInterval()
 */

console.log("Start");
console.log("Current time:", new Date().toLocaleTimeString());

// setTimeout example - runs once after a delay
const timeoutId = setTimeout(() => {
  console.log("This runs once after 2 seconds");
  console.log("Current time:", new Date().toLocaleTimeString());
}, 2000);

// You can cancel a scheduled timeout before it executes
// Uncomment the following line to cancel the timeout
// clearTimeout(timeoutId);

// setInterval example - runs repeatedly at specified intervals
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval count: ${count} at ${new Date().toLocaleTimeString()}`);

  // It's important to have a way to stop intervals
  // otherwise they'll run indefinitely
  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval cleared after 3 executions");
  }
}, 1000);

// Code execution continues immediately
console.log("End");
console.log("Current time:", new Date().toLocaleTimeString());

/*
 * TIMING PRECISION AND GUARANTEES:
 * ------------------------------
 * - setTimeout and setInterval do NOT guarantee exact timing
 * - The specified delay is the MINIMUM time before execution
 * - Actual execution time may be longer due to:
 *   1. The state of the JavaScript event loop
 *   2. Other tasks waiting in the queue
 *   3. System load and available resources
 *
 * IMPORTANT CONCEPTS:
 * ----------------
 * 1. Nested setTimeout vs setInterval:
 *    - setInterval: Fixed time between the START of each callback
 *      If callback takes longer than interval, they can stack up
 *    - Nested setTimeout (setTimeout inside setTimeout):
 *      Fixed time between the END of one callback and START of next
 *      Often more reliable for consistent spacing
 *
 * 2. CLEARING TIMERS:
 *    - clearTimeout(timeoutId): Cancels a scheduled setTimeout
 *    - clearInterval(intervalId): Stops a running setInterval
 *    - Always store timer IDs if you might need to cancel them later
 *
 * 3. MEMORY CONSIDERATIONS:
 *    - Active intervals prevent garbage collection of their callbacks
 *    - Always clear intervals when they're no longer needed
 *    - Particularly important in components that can be destroyed/unmounted
 */

// Example of a nested setTimeout (recursive timeout)
// This creates a more reliable interval that won't stack callbacks
function demoRecursiveTimeout() {
  let recursiveCount = 0;

  // Define a recursive function that calls itself
  function executeAfterDelay() {
    recursiveCount++;
    console.log(`Recursive timeout count: ${recursiveCount}`);

    // Set up the next call only after this one completes
    if (recursiveCount < 3) {
      setTimeout(executeAfterDelay, 1500);
    } else {
      console.log("Recursive timeout sequence completed");
    }
  }

  // Start the recursive chain
  setTimeout(executeAfterDelay, 4000);
  console.log(
    "Recursive timeout demonstration scheduled to start in 4 seconds"
  );
}

// Uncomment to run the recursive timeout example
// demoRecursiveTimeout();
