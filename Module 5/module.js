// module.js - Demonstration of various export and import methods in ES6 modules

// Named exports
export function greet(name) {
    return `Hello, ${name}!`;
}

export const language = 'JavaScript';

// Default export
export default function farewell(name) {
    return `Goodbye, ${name}!`;
}
