/// Template Literals

let uname = "Ayush";
let age = 19;

console.log(`Hello, ${uname}. Are you ${age} years old ? `);

// Multi line template literal

console.log(`Sum of 2 and 3 
5`);

/// De-structuring

let arr = [1, 2, 3, 4, 5, 6, 7];
let [a, b, ...rest] = arr;
console.log(`first:${a} second:${b} `);

let book = {
  title: "Book of life",
  author: "Ayush",
  content: "Information about life by Ayush",
};

let { author, title } = book;
console.log(title, author);

/// Spread and Rest Operator

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4];
console.log(arr2);

function add(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(add(...arr2));

/// Default Parameters

function mult(a, b = 1) {
  return a * b;
}

console.log(mult(2));
console.log(mult(2, 3));

/// Enhanced Objects Literals

uname = "Ayush";
age = 25;

let sampleObj = {
  uname,
  age,
  print() {
    console.log(uname, age);
  },
};

console.log(sampleObj.print())