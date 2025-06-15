/*
 * ASYNCHRONOUS FILE READING IN NODE.JS
 * ==================================
 *
 * WHAT IS ASYNCHRONOUS FILE I/O?
 * ----------------------------
 * Asynchronous file operations allow the program to continue executing other code
 * while waiting for the file operation to complete. When the operation finishes,
 * a callback function is called to handle the result.
 *
 * HOW ASYNCHRONOUS FILE I/O WORKS:
 * ------------------------------
 * 1. Request to read a file is initiated
 * 2. Node.js delegates the operation to the operating system
 * 3. JavaScript engine continues executing the code that follows
 * 4. When the OS completes reading the file, the callback function is placed in the event queue
 * 5. When the call stack is empty, the event loop pulls the callback from the queue
 * 6. The callback function executes with the file data
 *
 * ADVANTAGES OF ASYNCHRONOUS FILE OPERATIONS:
 * ----------------------------------------
 * 1. Non-blocking: The application can continue processing while I/O occurs
 * 2. Better scalability: Can handle many operations concurrently
 * 3. Improved responsiveness: UI or server remains available during I/O
 */

console.log("First line of code - Execution starts");
const fs = require("fs");

// This is an asynchronous operation using a callback
// The program continues to execute while the file is being read
fs.readFile("sample.txt", "utf8", (err, data) => {
  // This callback function executes only when the file reading completes
  // or when an error occurs

  if (err) {
    console.error("Error reading file asynchronously:", err);
    return;
  }

  console.log("File content read asynchronously:");
  console.log(data);

  console.log("File processing complete");
});

// This code executes immediately after initiating the file read
// It doesn't wait for the file reading to complete
console.log("Last line of code - Continuing execution while file is read");

/*
 * EXECUTION FLOW:
 * -------------
 * 1. "First line of code" is logged
 * 2. readFile is called and initiates file reading (non-blocking)
 * 3. "Last line of code" is logged immediately
 * 4. When file reading completes (which might take some time), the callback executes
 * 5. File content is displayed
 *
 * EXPECTED OUTPUT ORDER:
 * 1. "First line of code - Execution starts"
 * 2. "Last line of code - Continuing execution while file is read"
 * 3. "File content read asynchronously:" (after a brief delay)
 * 4. <Content of sample.txt>
 * 5. "File processing complete"
 *
 * CALLBACK PATTERN:
 * --------------
 * The callback pattern follows Node.js conventions:
 * - First parameter: Error object (null if operation succeeded)
 * - Second parameter: Operation result (file data in this case)
 *
 * COMMON ISSUES WITH CALLBACK-BASED ASYNC CODE:
 * ------------------------------------------
 * 1. Callback hell (nested callbacks becoming unwieldy)
 * 2. Error handling complexity
 * 3. Difficult to reason about code flow
 *
 * These issues are addressed by more modern patterns like Promises and async/await.
 */
