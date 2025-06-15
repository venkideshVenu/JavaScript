// 2_truthy_and_falsy_values.js

// In JavaScript, values can be categorized as either "truthy" or "falsy" based on how they are evaluated in boolean contexts, such as conditionals and loops.

// Falsy values are values that evaluate to false when coerced to a boolean. The following values are considered falsy:
// 1. false
// 2. 0 (zero)
// 3. -0 (negative zero)
// 4. 0n (BigInt zero)
// 5. "", '', `` (empty strings)
// 6. null
// 7. undefined
// 8. NaN (Not-a-Number)

// Example of falsy values:
if (false) {
    console.log("This won't be logged.");
}
if (0) {
    console.log("This won't be logged.");
}
if ("") {
    console.log("This won't be logged.");
}

// Truthy values are all values that are not falsy. This includes:
// 1. true
// 2. Any non-zero number (positive or negative)
// 3. Any non-empty string
// 4. Any object (including arrays)
// 5. Any function

// Example of truthy values:
if (true) {
    console.log("This will be logged.");
}
if (1) {
    console.log("This will be logged.");
}
if ("Hello") {
    console.log("This will be logged.");
}
if ([]) {
    console.log("This will be logged because an empty array is truthy.");
}

// Understanding truthy and falsy values is crucial for writing effective conditional statements and controlling the flow of your program.