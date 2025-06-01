// Demonstration of template literals and multiline strings in JavaScript

// 1. Basic template literal usage
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

// 2. Embedding expressions inside template literals
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.

// 3. Multiline strings using template literals
const multilineString = `This is a string
that spans across
multiple lines.`;
console.log(multilineString);

// 4. Tagged template literals (basic example)
function tag(strings, ...values) {
    console.log("Strings:", strings);
    console.log("Values:", values);
    return "Tagged template result";
}

const taggedResult = tag`Hello, ${name}. You have ${a + b} new messages.`;
console.log(taggedResult);
