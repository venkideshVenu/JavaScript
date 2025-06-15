function placeOrder(drink) {
  return new Promise((resolve, reject) => {
    if (drink === "coffee") {
      resolve("Order placed: Coffee is ready!");
    } else {
      reject("Order failed: We only serve coffee.");
    }
  });
}

function processOrder(order) {
  return new Promise((resolve) => {
    console.log("Processing order...");
    setTimeout(() => {
      resolve(`Order processed: ${order}`);
    }, 2000);
  });
}

// Solution using Promises

placeOrder("coffee")
  .then(function (orderPlaced) {
    console.log(orderPlaced);
    let orderIsProcessed = processOrder(orderPlaced);
    return orderIsProcessed;
  })
  .then(function (orderProcessed) {
    console.log(orderProcessed);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    console.log("Thank you for visiting our coffee shop!");
  });

// EXECUTION FLOW EXPLANATION:
// 1. The code starts by calling placeOrder("coffee"), which creates a new Promise
// 2. Since the drink is "coffee", the Promise is resolved immediately with the message "Order placed: Coffee is ready!"
// 3. The first .then() callback is executed:
//    - It logs "Order placed: Coffee is ready!" to the console
//    - It calls processOrder() with that message, which returns a new Promise
//    - It returns that Promise to chain to the next .then()
// 4. Inside processOrder():
//    - "Processing order..." is logged to the console
//    - A setTimeout starts a 2-second timer
// 5. After 2 seconds, the setTimeout callback:
//    - Resolves the processOrder Promise with "Order processed: Order placed: Coffee is ready!"
// 6. The second .then() callback is executed:
//    - It logs "Order processed: Order placed: Coffee is ready!" to the console
// 7. Since no errors occurred, the .catch() block is skipped
// 8. The .finally() block executes:
//    - It logs "Thank you for visiting our coffee shop!" to the console
//
// Console output (in order):
// "Order placed: Coffee is ready!"
// "Processing order..."
// (2 second delay)
// "Order processed: Order placed: Coffee is ready!"
// "Thank you for visiting our coffee shop!"

// Solution using async/await

async function orderCoffee() {
  try {
    const orderPlaced = await placeOrder("coffee");
    console.log(orderPlaced);
    const orderProcessed = await processOrder(orderPlaced);
    console.log(orderProcessed);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Thank you for visiting our coffee shop!");
  }
}

// ASYNC/AWAIT EXECUTION FLOW EXPLANATION:
// 1. When orderCoffee() is called, it creates an async function execution context
// 2. The try block begins execution
// 3. await placeOrder("coffee") is called:
//    - This suspends the orderCoffee() function execution
//    - The placeOrder Promise resolves immediately with "Order placed: Coffee is ready!"
//    - Execution resumes in orderCoffee() and orderPlaced receives the resolved value
// 4. "Order placed: Coffee is ready!" is logged to the console
// 5. await processOrder(orderPlaced) is called:
//    - This suspends the orderCoffee() function execution again
//    - "Processing order..." is logged to the console
//    - After 2 seconds, the processOrder Promise resolves
//    - Execution resumes in orderCoffee() and orderProcessed receives the resolved value
// 6. "Order processed: Order placed: Coffee is ready!" is logged to the console
// 7. Since no errors occurred, the catch block is skipped
// 8. The finally block executes:
//    - It logs "Thank you for visiting our coffee shop!" to the console
//
// Console output (in order):
// "Order placed: Coffee is ready!"
// "Processing order..."
// (2 second delay)
// "Order processed: Order placed: Coffee is ready!"
// "Thank you for visiting our coffee shop!"
