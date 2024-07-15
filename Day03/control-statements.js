// if else statement

function isPositive(a) {
  if (a == 0) return "zero";
  else if (a < 0) return "negative";
  return "positive";
}

function isEligibleToVote(age) {
  if (age >= 18) return "Eligible to vote";
  return "Not Eligible to Vote";
}

// Activity 2 find greatest b/w two numbers

function greatestNo(a, b, c) {
  if (a <= b) {
    if (b <= c) {
      return c + " is gratest no";
    } else return b + " is gratest no";
  } else return a + " is gratest no";
}

console.log(greatestNo(1, 2, 3));

// Activity 3

function findDay(no) {
  switch (no) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thruday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "The entered value is invalid or out of range(1 -7).";
  }
}

// Mark the grade of the student based on their marks via switch statements

function yourGrade(marks) {
  switch (marks) {
    case marks >= 90:
      console.log("you got A your marks are " + marks);
      break;
    case marks >= 80:
      console.log("You got B your marks are " + marks);
      break;
    case marks >= 70:
      console.log("You got C your marks are " + marks);
      break;
    case marks >= 60:
      console.log("You got D your marks are " + marks);
      break;
    default:
      console.log("Your grade is F your marks are " + marks);
  }
}

// Ternary operator

function oddEvenCheck(no) {
  console.log(no % 2 === 0 ? "Even" : "Odd");
}

// Combining Conditions

function leapyear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      console.log("This is leap year");
    } else if (year % 100 === 0) {
      console.log("Not a leap year ");
    } else {
      console.log("This is is leap year");
    }
  } else {
    console.log("Not a leap year");
  }
}

leapyear(1988);
leapyear(2024);
