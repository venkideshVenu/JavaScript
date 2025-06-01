// example for funtion in javascript

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Venkidesh")


// Example of a function with parameters and return value
function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

// Example of a function that takes an array as an argument
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));


// Example of a function that uses a callback
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

processArray([1, 2, 3, 4, 5], function(item) {
    console.log("Processing item: " + item);
});


// Example of a function that returns another function
function outerFunction(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = outerFunction(5);
console.log(addFive(10)); // Outputs: 15


// Example of a function that uses default parameters
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5)); // Outputs: 5

// Example of a function that uses rest parameters
function concatenate(...args) {
    return args.join(" ");
}

console.log(concatenate("Hello", "World", "from", "JavaScript")); // Outputs: Hello World from JavaScript

// Example of a function that uses the spread operator
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Outputs: [1, 2, 3, 4, 5, 6]

// Example of an immediately invoked function expression (IIFE)
(function() {
    console.log("This is an IIFE that runs immediately!");
})();


// Example of a recursive function
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Outputs: 120


// Example of a function that handles errors using try...catch
function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

console.log(safeDivide(10, 2)); // Outputs: 5
console.log(safeDivide(10, 0)); // Outputs: Division by zero is not allowed. and returns null


// Example of a function that uses async/await
async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error: ", error);
        return null;
    }
}

// fetchData("https://jsonplaceholder.typicode.com/posts")
//     .then(data => {
//         if (data) {
//             console.log("Fetched data:", data);
//         }
//     });





// Example of a function that uses promises
function fetchDataWithPromise(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// fetchDataWithPromise("https://jsonplaceholder.typicode.com/posts")
//     .then(data => {
//         console.log("Fetched data with promise:", data);
//     })
//     .catch(error => {
//         console.error("Fetch error with promise:", error);
//     });


// Example of a function that uses a closure
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Outputs: 1
console.log(counter.increment()); // Outputs: 2
console.log(counter.decrement()); // Outputs: 1
console.log(counter.getCount()); // Outputs: 1




// Example of a function that uses an arrow function
const square = (x) => x * x;

console.log(square(5)); // Outputs: 25


// Example of a function that uses an arrow function with multiple parameters
const addNumbers = (a, b) => a + b;

console.log(addNumbers(3, 4)); // Outputs: 7

// Example of a function that uses an arrow function with a default parameter
const greetUser = (name = "Guest") => {
    console.log("Hello, " + name + "!");
};

greetUser("Alice"); // Outputs: Hello, Alice!
greetUser(); // Outputs: Hello, Guest!



// Example of a function that uses an arrow function with rest parameters
const sumAll = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sumAll(1, 2, 3, 4, 5)); // Outputs: 15


// Example of a function that uses an arrow function with a single parameter
const double = x => x * 2;

console.log(double(10)); // Outputs: 20

// Example of a function that uses an arrow function with no parameters
const sayHello = () => {
    console.log("Hello, World!");
};

sayHello(); // Outputs: Hello, World!


// Example of a function that uses an arrow function with a block body
const calculateArea = (length, width) => {
    return length * width;
};

console.log(calculateArea(5, 10)); // Outputs: 50



// Example of a function that uses an arrow function with implicit return
const getGreeting = name => `Hello, ${name}!`;

// Example of a function that uses an arrow function with a ternary operator
const isEven = num => num % 2 === 0 ? "Even" : "Odd";


// Example of a function that uses an arrow function with destructuring
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

