var arr =[12,'hello',45.65,true,undefined,null,NaN,Infinity];

console.log(arr);

// accessing elements
console.log(arr[0]); // 12
console.log(arr[1]); // 'hello'
console.log(arr[2]); // 45.65

console.log();

console.log(arr[3]); // true
arr[3] = false; // changing value at index 3
console.log(arr[3]); // false

// length of the array
console.log('Length of array is : ',arr.length); // 8


// Array methods

var arr2 = [12, 14, 15,17, 19, 20];



console.log('Array : ', arr2);
arr2.push(25);
console.log('Array after push: ', arr2); // [10, 14, 15, 17, 19, 20, 25]
arr2.pop();
console.log('Array after pop: ', arr2); // [10, 14, 15, 17, 19, 20]
arr2.shift();
console.log('Array after shift: ', arr2); // [14, 15, 17, 19, 20]
arr2.unshift(5);
console.log('Array after unshift: ', arr2); // [5, 14, 15, 17, 19, 20]
arr2.splice(2, 1); // removes 1 element at index 2
console.log('Array after splice: ', arr2); // [5, 14, 17, 19, 20]
arr2.splice(2, 0, 16); // adds 16 at index 2
console.log('Array after splice: ', arr2); // [5, 14, 16, 17, 19, 20]
arr2.sort();
console.log('Array after sort: ', arr2); // [5, 14, 16, 17, 19, 20]
arr2.reverse();
console.log('Array after reverse: ', arr2); // [20, 19, 17, 16, 14, 5]
arr2.splice(2, 2, 18, 21); // replaces 2 elements at index 2 with 18 and 21
console.log('Array after splice: ', arr2); // [20, 19, 18, 21, 14, 5]
