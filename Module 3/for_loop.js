

for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}



// Example of a for loop with an array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index " + i + ": " + fruits[i]);
}

// Example of a for loop with an object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}


// Example of a for loop with a string
let message = "Hello, World!";
for (let i = 0; i < message.length; i++) {
    console.log("Character at index " + i + ": " + message[i]);
}

// Example of a for loop with a nested loop
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log("Element at [" + i + "][" + j + "]: " + matrix[i][j]);
    }
}

// example of for of loop
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log("Color: " + color);
}

// Example of a for...of loop with a string
let text = "Hello";
for (let char of text) {
    console.log("Character: " + char);
}