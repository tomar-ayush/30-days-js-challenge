// Arrays Basics

let arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(arr[0], arr[4]);

// Arrays BAsic Commmands

arr.push(10);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(5);
console.log(arr);

// Intermediate array functions

let updatedArr = arr.map((x) => x * 5);
console.log(updatedArr);

let evenArr = arr.filter((x) => x % 2 === 0);
console.log(evenArr);

let sum = arr.reduce((reducer, value) => {
  return (reducer += value);
}, 0);
// console.log(arr)
console.log(sum);

// Array Iteration using loops

for (let i = 0, n = arr.length; i < n; i++) {
  console.log(arr[i]);
}

arr.forEach((ele) => console.log(ele));

// Multi-Dimensional Array

let multiArray = [[1, 2, 3],[4, 5, 6]];
console.log("test")

for (let i = 0, n = multiArray.length; i < n; i ++) {

  for (let j = 0, m = multiArray[i].length; j < m; j++) {
    process.stdout.write(multiArray[i][j] + " ")
  }
  console.log();
}
