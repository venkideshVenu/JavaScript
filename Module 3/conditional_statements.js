// give an example of a conditional statement in JavaScript
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}


// Example of an if-else statement
let score = 75;
if (score >= 50) {
    console.log("You passed the exam.");
}
else {
    console.log("You failed the exam.");
}

// Example of an if-else-if statement
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

// Example of a switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Example of a ternary operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// Example of a nested if statement
let temperature = 30;
if (temperature > 25) {
    console.log("It's warm outside.");
    if (temperature > 30) {
        console.log("It's hot outside.");
    } else {
        console.log("It's a pleasant day.");
    }
}

// Example of a conditional (ternary) operator
let num = 10;
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(result); // Output: Positive

// Example of a logical AND (&&) operator
let isMember = true;
let discount = isMember && "10% discount applied.";
console.log(discount); // Output: 10% discount applied.

// Example of a logical OR (||) operator
let isLogged = false;
let access = isLogged || "Guest access granted.";
console.log(access); // Output: Guest access granted.

// Example of a nullish coalescing operator (??)
let userInput = null;
let defaultInput = userInput ?? "Default value";
console.log(defaultInput); // Output: Default value

// Example of a short-circuit evaluation with logical AND (&&)
let isAuthenticated = true;
let canAccess = isAuthenticated && "Access granted.";
console.log(canAccess); // Output: Access granted.