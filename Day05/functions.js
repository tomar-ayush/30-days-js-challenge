// Function declaration

function oddEvenCheck(no) {
  if (typeof no !== "number") throw new Error("Data type is invalid");

  console.log(no % 2 === 0 ? "Even" : "Odd");
}

// oddEvenCheck(52);

function squareNo(no) {
  return no * no;
}

// Function Expression

function findGreater(no1, no2) {
  console.log(no1 > no2 ? no1 : no2);
}

// findGreater(2, 1);

function concatStrings(str1, str2) {
  return str1 + " " + str2;
}

// console.log(concatStrings("hello", "world"))

/// Arrow Function

let sumOfTwoNo = (no1, no2) => {
  return no1 + no2;
};

console.log(sumOfTwoNo(1, 2));

let isCharPresent = (str, chr) => {
  if (typeof str !== "string") throw new Error("Invalid Data Type");

  for (let i = 0, n = str.length; i < n; i++) {
    if (str[i] !== chr) return true;
    return false;
  }

  // METHDOD 2

  return str.includes(chr);
};

// Function Parameters and default values

let productOfTwo = (no1, no2 = 3) => {
  return no1 * no2;
};

// console.log(productOfTwo(10));

let greet = (name, age = 20) => {
  console.log(
    "Hello, " + name + " nice to meet you. Are you " + age + " old?  "
  );
};

greet("Ayush");

/// Higher Order Function

let helloFunc = () => {
  console.log("hi");
};

let callFunc = (fn, times) => {
  for (let i = 0; i < times; i++) {
    fn();
  }
};

callFunc(helloFunc, 3);

let sumOfSquares = (no, squaredNo) => {
  console.log(no + squaredNo);
};

let higherOderDemoFunc = (fun1, fun2, no) => {
  fun1(no, fun2(no));
};

// higherOderDemoFunc(sumOfSquares, squareNo, 3);
