# Difference b/w let and var

- <ins>var</ins> is used throughout the function and it is defined from the start of the function.

- <ins>let</ins> is used only inside the code block in which it is defined.

<br>

# Difference b/w double and triple equal to

In double equal to there is no type checking and in triple equal to there is type checking

- 1 == '1' is true
- 1 === '1' is false
- 0 == false is true
- 0 === false is false

<br>

# Methods to find substring in a string in javascript.

- **includes() method**:
  This function return true if substring is present and vice verca.

  > const str = 'Bread and Milk';  
  > const char1 = 'd';  
  > const char2 = 'p';  
  > console.log(str.includes(char1)); // true  
  > console.log(str.includes(char2)); // false

- **indexOf() Method**:
  This function return the index of first char of substring and -1 if the substring is not presnt.

  > const str = 'Bread and Milk';  
  > const char1 = 'd';  
  > const char2 = 'p';  
  > console.log(str.indexOf(char1)); // 4  
  > console.log(str.indexOf(char2)); // -1

- **Regex Matching**:
  The **test()** method in regex searches for substring in the string and return true and false acc to that.

  > const str = 'Bread and Milk';  
  > console.log(/d/.test(str)); // true  
  > console.log(/p/.test(str)); // false
  > const str = 'Bread and Milk';  
  > // Contains a digit?  
  > console.log(/\d/.test(str)); // false  
  > // Contains 'r', 'l' or 'c'?  
  > console.log(/[rlc]/.test(str)); // true  
  > // Contains whitespace?  
  > console.log(/\s/.test(str)); // true

  <br>

# Higher Order Function

Higher Order Function operate on other functions by taking them as arguments or returning them from function or both.
