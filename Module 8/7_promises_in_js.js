/*
 * JAVASCRIPT PROMISES, ASYNC/AWAIT: THEORY AND PRACTICE
 * ====================================================
 * 
 * PROMISES THEORY:
 * ----------------
 * A Promise is an object representing the eventual completion or failure of an
 * asynchronous operation and its resulting value. A Promise is in one of these states:
 * 
 * 1. Pending: Initial state, neither fulfilled nor rejected
 * 2. Fulfilled: The operation completed successfully
 * 3. Rejected: The operation failed
 * 
 * Once a promise is fulfilled or rejected, it is immutable (cannot change to any other state).
 * 
 * Promises solve the "callback hell" problem by providing a more structured way to handle
 * asynchronous operations and making error handling more straightforward.
 */

// 1. Basic Promise example
function basicPromise() {
  console.log("1. Basic Promise Example:");
  
  /*
   * Creating a new Promise:
   * The Promise constructor takes a function (executor) with two arguments:
   * - resolve: A function to call when the Promise is fulfilled
   * - reject: A function to call when the Promise is rejected
   * 
   * The executor function is executed immediately when the Promise is created.
   */
  const simplePromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (like API call)
    setTimeout(() => {
      const success = true; // Change to false to see error handling
      if (success) {
        // Fulfill the promise with a value
        resolve("Operation successful");
      } else {
        // Reject the promise with a reason
        reject("Operation failed");
      }
    }, 1000);
  });
  
  /*
   * Promise Consumption:
   * - .then(): Attaches callbacks for the resolution and/or rejection of the Promise
   * - .catch(): Shorthand for .then(null, onRejected) - handles errors only
   * - .finally(): Executes regardless of whether the Promise was fulfilled or rejected
   * 
   * These methods return new Promises, enabling chaining.
   */
  simplePromise
    .then(result => console.log(`  Success: ${result}`))
    .catch(error => console.log(`  Error: ${error}`))
    .finally(() => console.log("  Promise completed (finally)\n"));
}

// 2. Promise chaining
function promiseChaining() {
  console.log("2. Promise Chaining Example:");
  
  /*
   * PROMISE CHAINING:
   * -----------------
   * Each .then() returns a new Promise, allowing you to chain multiple asynchronous operations.
   * The value returned from one .then() becomes the input for the next .then().
   * This creates a sequence of asynchronous operations that depend on each other.
   */
  
  const fetchUser = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "User 1" });
      }, 1000);
    });
  };
  
  const fetchPosts = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Post 1", userId },
          { id: 2, title: "Post 2", userId }
        ]);
      }, 1000);
    });
  };
  
  // Chain promises together
  fetchUser()
    .then(user => {
      console.log(`  User: ${JSON.stringify(user)}`);
      // Return a new promise for the next .then() in the chain
      return fetchPosts(user.id);
    })
    .then(posts => {
      console.log(`  Posts: ${JSON.stringify(posts)}\n`);
    })
    .catch(error => {
      // A single .catch() can handle errors from any previous promise in the chain
      console.log(`  Error: ${error}`);
    });
}

// 3. Promise.all - wait for multiple promises to complete
function promiseAll() {
  console.log("3. Promise.all Example:");
  
  /*
   * PROMISE.ALL:
   * ------------
   * Promise.all() takes an array of promises and returns a new promise that:
   * - Fulfills when ALL promises in the array fulfill (with an array of results)
   * - Rejects when ANY promise in the array rejects (with the first rejection reason)
   * 
   * Use Promise.all when multiple operations can be performed in parallel
   * and you need all of them to complete.
   */
  
  const promise1 = new Promise(resolve => setTimeout(() => resolve("Result 1"), 1000));
  const promise2 = new Promise(resolve => setTimeout(() => resolve("Result 2"), 1500));
  const promise3 = new Promise(resolve => setTimeout(() => resolve("Result 3"), 800));
  
  Promise.all([promise1, promise2, promise3])
    .then(results => {
      // results is an array containing the values from each resolved promise
      // in the same order as the original promises array
      console.log(`  All promises completed: ${results}`);
      console.log("  Note: Promise.all waits for all promises to complete\n");
    })
    .catch(error => {
      // If any promise rejects, Promise.all immediately rejects with that error
      console.log(`  Error in one of the promises: ${error}`);
    });
}

// 4. Promise.race - complete when the first promise resolves
function promiseRace() {
  console.log("4. Promise.race Example:");
  
  /*
   * PROMISE.RACE:
   * -------------
   * Promise.race() takes an array of promises and returns a new promise that:
   * - Settles (fulfills or rejects) as soon as ANY promise in the array settles
   * - With the value or reason from that first settled promise
   * 
   * Use Promise.race when you want to take the first result or implement timeouts.
   */
  
  const promise1 = new Promise(resolve => setTimeout(() => resolve("Fast: 500ms"), 500));
  const promise2 = new Promise(resolve => setTimeout(() => resolve("Medium: 1000ms"), 1000));
  const promise3 = new Promise(resolve => setTimeout(() => resolve("Slow: 1500ms"), 1500));
  
  Promise.race([promise1, promise2, promise3])
    .then(result => {
      // result contains the value from the first promise to resolve
      console.log(`  First promise to complete: ${result}`);
      console.log("  Note: Other promises still run but results are ignored\n");
    });

  /*
   * Other useful Promise static methods:
   * - Promise.allSettled(): Waits for all promises to settle (resolve or reject)
   * - Promise.any(): Returns the first fulfilled promise (ignores rejections unless all reject)
   * - Promise.resolve(): Creates a promise that resolves with the given value
   * - Promise.reject(): Creates a promise that rejects with the given reason
   */
}

// 5. Async/Await basics
async function asyncAwaitBasics() {
  console.log("5. Async/Await Basics:");
  
  /*
   * ASYNC/AWAIT THEORY:
   * ------------------
   * Async/await is syntactic sugar built on top of Promises, making asynchronous
   * code look and behave more like synchronous code.
   * 
   * - async: Keyword used to declare an asynchronous function. An async function:
   *   • Always returns a Promise
   *   • Can contain await expressions
   * 
   * - await: Pauses execution of the async function until the Promise resolves:
   *   • Can only be used inside async functions
   *   • Makes the function wait until the Promise settles
   *   • Returns the resolved value of the Promise
   *   • If the Promise rejects, it throws an error that can be caught with try/catch
   */
  
  const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
  
  try {
    console.log("  Starting async operations...");
    
    // await pauses execution until the Promise resolves
    const result1 = await delay(1000, "First operation");
    console.log(`  ${result1} complete`);
    
    // This runs only after the previous await is complete
    const result2 = await delay(1000, "Second operation");
    console.log(`  ${result2} complete`);
    
    console.log("  All async operations completed sequentially\n");
  } catch (error) {
    // Catches any error thrown in the try block
    console.log(`  Error: ${error}`);
  }
}

// 6. Async/Await with Promise.all for parallel execution
async function asyncAwaitParallel() {
  console.log("6. Async/Await with Parallel Execution:");
  
  /*
   * COMBINING ASYNC/AWAIT WITH PROMISE.ALL:
   * --------------------------------------
   * While await makes operations run sequentially (one after another),
   * you can use Promise.all with await to run operations in parallel.
   * 
   * This gives you both the clean syntax of async/await and the
   * performance benefits of parallel execution when appropriate.
   */
  
  const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
  
  try {
    console.log("  Starting parallel operations...");
    
    // Execute promises in parallel with Promise.all
    // Instead of waiting 3 seconds total (1s + 1s + 1s), this takes only 1 second
    const [result1, result2, result3] = await Promise.all([
      delay(1000, "Operation 1"),
      delay(1000, "Operation 2"),
      delay(1000, "Operation 3")
    ]);
    
    console.log(`  Results: ${result1}, ${result2}, ${result3}`);
    console.log("  All parallel operations completed\n");
  } catch (error) {
    console.log(`  Error: ${error}`);
  }
}

// 7. Error handling with async/await
async function errorHandlingWithAsyncAwait() {
  console.log("7. Error Handling with Async/Await:");
  
  /*
   * ERROR HANDLING WITH ASYNC/AWAIT:
   * -------------------------------
   * There are two main ways to handle errors with async/await:
   * 
   * 1. try/catch blocks: Similar to synchronous code error handling
   * 2. .catch() method: Can be used since async functions return Promises
   * 
   * The try/catch approach is generally preferred as it's more readable
   * and consistent with the synchronous-like style of async/await.
   */
  
  const successOperation = () => Promise.resolve("Success!");
  const failOperation = () => Promise.reject("Something went wrong");
  
  // Method 1: try-catch block
  try {
    console.log("  First successful operation:");
    const result = await successOperation();
    console.log(`  Result: ${result}`);
    
    console.log("  Now trying failing operation:");
    const failResult = await failOperation();
    // This line won't execute if failOperation rejects
    console.log(failResult);
  } catch (error) {
    console.log(`  Caught error: ${error}`);
  }
  
  // Method 2: .catch() with async/await
  console.log("  Another approach with .catch():");
  await failOperation().catch(error => {
    console.log(`  Handled error: ${error}\n`);
  });

  /*
   * BEST PRACTICES FOR ASYNC/AWAIT:
   * -----------------------------
   * 1. Always add proper error handling with try/catch
   * 2. Use Promise.all for concurrent operations
   * 3. Remember that async functions always return Promises
   * 4. Be careful with loops - use Promise.all with map() for parallel execution
   * 5. Consider adding timeouts to prevent hanging operations
   * 6. Remember that top-level await is only available in ECMAScript modules
   */
}

// Run all examples in sequence
async function runExamples() {
  /*
   * ADVANTAGES OF PROMISES AND ASYNC/AWAIT:
   * --------------------------------------
   * 1. Better readability and maintainability compared to callbacks
   * 2. Better error handling through propagation
   * 3. Simpler composition of asynchronous operations
   * 4. Easier debugging with clearer stack traces
   * 5. Built-in features for parallel and sequential execution
   */

  basicPromise();
  
  // Wait for the first example to complete
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  promiseChaining();
  
  // Wait for the chaining example to complete
  await new Promise(resolve => setTimeout(resolve, 2500));
  
  promiseAll();
  promiseRace();
  
  // Wait for Promise.all and Promise.race to complete
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await asyncAwaitBasics();
  await asyncAwaitParallel();
  await errorHandlingWithAsyncAwait();
  
  console.log("All examples completed!");
}

// Start the examples
runExamples();