// 2_read_file_synchronously.js
// Reading a file synchronously in Node.js

/*
 * SYNCHRONOUS FILE READING IN NODE.JS
 * ==================================
 *
 * WHAT IS SYNCHRONOUS CODE?
 * ------------------------
 * Synchronous code executes in sequence – each statement waits for the previous statement
 * to finish before executing. In the context of I/O operations like reading files,
 * synchronous operations block the entire program until the operation completes.
 *
 * SYNCHRONOUS FILE I/O:
 * --------------------
 * When reading a file synchronously:
 * 1. The entire program stops execution
 * 2. Waits for the file reading to complete
 * 3. Only then proceeds to the next line of code
 *
 * USE CASES FOR SYNCHRONOUS FILE OPERATIONS:
 * ----------------------------------------
 * 1. During application initialization/startup
 * 2. Simple scripts where blocking isn't a concern
 * 3. When the application cannot proceed without the file data
 *
 * DRAWBACKS:
 * ---------
 * 1. Blocks the entire Node.js event loop
 * 2. Poor performance in high-concurrency applications
 * 3. Can cause the application to become unresponsive
 */

const fs = require("fs");

try {
  console.log("About to read file synchronously...");

  // readFileSync is a blocking operation
  // The program will pause here until the entire file is read
  const data = fs.readFileSync("sample.txt", "utf8");

  console.log("File content read synchronously:");
  console.log(data);

  console.log("This line executes only after file reading is complete");
} catch (err) {
  console.error("Error reading file synchronously:", err);
}

/*
 * EXECUTION FLOW:
 * --------------
 * 1. Program announces it's about to read
 * 2. readFileSync is called and BLOCKS the thread until complete
 * 3. File content is displayed
 * 4. Program continues
 *
 * ERROR HANDLING:
 * -------------
 * With synchronous code, we can use standard try/catch blocks to handle errors.
 * This is simpler than error handling in asynchronous code.
 *
 * SYNCHRONOUS VS ASYNCHRONOUS:
 * --------------------------
 * - Synchronous: Simpler code flow, but blocks execution
 * - Asynchronous: More complex code, but non-blocking
 *
 * BEST PRACTICE:
 * ------------
 * Avoid synchronous I/O operations in production applications, especially in:
 * - Web servers handling multiple requests
 * - Applications requiring high responsiveness
 * - Any code running on the main thread of a user interface
 */
