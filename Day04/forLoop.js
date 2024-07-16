// basic implementation

for (let i = 1; i <= 10; i++) {
  console.log(i + " ");
}

for (let i = 0; i <= 10; i++) {
  console.log(5 * i);
}

// while loop basic
let i = 0;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

i = 10;
while (i > 0) {
  console.log(i);
  i = i - 1;
}

// Do While loop

function printTill5() {
  i = 1;
  do {
    console.log(i);
    i++;
  } while (i < 6);
}
// printTill5();

function findFactorial(no) {
  if (
    typeof no !== "number" ||
    !isFinite(no) ||
    no < 0 ||
    !Number.isInteger(no)
  ) {
    throw new Error("Input must be a positive integer.");
  }
  
  let sum = 1;
  if (no <= 0) console.log("0");

  do {
    sum *= no;
    no--;
  } while (no > 0);

  console.log(sum);
}
findFactorial(6);

// Nested Loops

function rightTrianglePattern(rows) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
}
// rightTrianglePattern(7);

// Loop Control Statements

for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 7) break;
  console.log(i);
}
