// while loop in javascript
// Example of a while loop
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// Example of a while loop with an array
let numbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < numbers.length) {
    console.log("Number at index " + index + ": " + numbers[index]);
    index++;
}

// Example of a while loop with a string
let text = "Hello";
let charIndex = 0;
while (charIndex < text.length) {
    console.log("Character at index " + charIndex + ": " + text[charIndex]);
    charIndex++;
}

// Example of a while loop with a nested condition
let count2 = 0;
let maxCount = 10;
while (count2 < maxCount) {
    if (count2 % 2 === 0) {
        console.log("Even count: " + count2);
    } else {
        console.log("Odd count: " + count2);
    }
    count2++;
}

// Example of a while loop with a break statement
let attempts = 0;
let maxAttempts = 3;
while (attempts < maxAttempts) {
    console.log("Attempt number: " + (attempts + 1));
    attempts++;
    if (attempts === 2) {
        console.log("Breaking the loop at attempt 2");
        break; // Exit the loop when attempts reach 2
    }
}

// Example of a while loop with a continue statement
let count3 = 0;
let maxCount3 = 10;
while (count3 < maxCount3) {
    count3++;
    if (count3 % 2 === 0) {
        console.log("Skipping even count: " + count3);
        continue; // Skip the rest of the loop for even counts
    }
    console.log("Odd count: " + count3);
}

// Example of a while loop with a do-while structure
let count4 = 0;
do {
    console.log("Count in do-while loop: " + count4);
    count4++;
} while (count4 < 5);

// Example of a while loop with an array and a condition
let numbers2 = [10, 15, 20, 25, 30];
let index2 = 0;
while (index2 < numbers2.length) {
    if (numbers2[index2] > 20) {
        console.log("Number greater than 20 at index " + index2 + ": " + numbers2[index2]);
    }
    index2++;
}

