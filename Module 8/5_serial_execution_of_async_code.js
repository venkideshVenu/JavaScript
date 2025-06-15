/*
 * SERIAL EXECUTION OF ASYNCHRONOUS CODE USING ASYNC/AWAIT
 * =====================================================
 *
 * WHAT IS SERIAL EXECUTION?
 * ----------------------
 * Serial execution means running asynchronous operations one after another,
 * where each operation waits for the previous one to complete before starting.
 * This is in contrast to parallel execution where multiple operations run simultaneously.
 *
 * ASYNC/AWAIT:
 * ----------
 * Introduced in ES2017 (ES8), async/await is syntactic sugar built on top of promises
 * that makes asynchronous code look and behave more like synchronous code.
 *
 * 1. async:
 *    - Keyword used to declare an asynchronous function
 *    - Always returns a Promise
 *    - Enables the use of await inside the function
 *
 * 2. await:
 *    - Can only be used inside async functions
 *    - Pauses execution of the function until the Promise resolves
 *    - Unwraps the Promise, returning its resolved value
 *    - Allows exceptions from the Promise to be caught with try/catch
 *
 * BENEFITS OF SERIAL EXECUTION:
 * --------------------------
 * 1. Predictable order of operations
 * 2. Dependencies between operations are clear
 * 3. Prevents race conditions when operations depend on each other
 * 4. Easier error handling with try/catch blocks
 */

// Helper function that returns a Promise that resolves after a specified time
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to demonstrate serial execution
async function runSerial() {
  console.log("Start serial execution");
  console.log("Current time:", new Date().toLocaleTimeString());

  try {
    // First operation - pauses the function execution for 1 second
    console.log("Starting step 1");
    await wait(1000);
    console.log("Step 1 done after 1 second");
    console.log("Current time:", new Date().toLocaleTimeString());

    // Second operation - only starts after the first one completes
    console.log("Starting step 2");
    await wait(1000);
    console.log("Step 2 done after 2 seconds total");
    console.log("Current time:", new Date().toLocaleTimeString());

    // Third operation - only starts after the second one completes
    console.log("Starting step 3");
    await wait(1000);
    console.log("Step 3 done after 3 seconds total");
    console.log("Current time:", new Date().toLocaleTimeString());

    console.log("Serial execution complete");
  } catch (error) {
    // Any error in the awaited promises will be caught here
    console.error("An error occurred during serial execution:", error);
  }
}

// Execute the async function
runSerial();

/*
 * EXECUTION FLOW:
 * -------------
 * 1. "Start serial execution" is logged
 * 2. "Starting step 1" is logged
 * 3. await wait(1000) pauses execution for 1 second
 * 4. After 1 second, "Step 1 done after 1 second" is logged
 * 5. "Starting step 2" is logged
 * 6. await wait(1000) pauses execution for another 1 second
 * 7. After 2 seconds total, "Step 2 done after 2 seconds total" is logged
 * 8. "Starting step 3" is logged
 * 9. await wait(1000) pauses execution for another 1 second
 * 10. After 3 seconds total, "Step 3 done after 3 seconds total" is logged
 * 11. "Serial execution complete" is logged
 *
 * COMPARISON WITH PARALLEL EXECUTION:
 * --------------------------------
 * Serial:  Total time = sum of individual operation times
 *          (In this example: 1s + 1s + 1s = 3s)
 *
 * Parallel: Total time = duration of the longest operation
 *           (If run in parallel, same operations: max(1s, 1s, 1s) = 1s)
 *
 * WHEN TO USE SERIAL EXECUTION:
 * --------------------------
 * 1. When operations depend on results of previous operations
 * 2. When operations must occur in a specific sequence
 * 3. When you need to ensure resources aren't accessed concurrently
 * 4. When you need to throttle operations (e.g., API requests)
 */
