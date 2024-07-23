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


<br>

# Array Common Functions

 - ___shift() method :__  
    It is used to remove an element from the first position of the arr.  

    > let arr = [1, 2, 3, 4, 5]  
    > arr.shift() // arr = 2, 3, 4, 5

    - ___unshift() method :__
      This method is used to add and ele to the begining of the arr.  

      >arr.unshift(9) // arr= 9, 2, 3, 4, 5

    - __map() method:__
      iterate over an obj

    - __filter() method__:
      only returns the values that matches passed condition.  

    - __reduce() method :__
      It passes two values __accumulator__ and __values__. Accumulator is the value the function returns.  

      > const totalPrice = items.reduce((accumulator ,item) => {  
      > return accumulator += item.price;  
      > }, 0)  

    - __forEach() function :__
      iterate over each elemet of the given obj

    <br>    

    ### this keyword cannot be used inside an arrow function we have to use normal function to use this key inside nested objects

    ### Spread and Rest Operators
      - __Spread__ - This operator defined by placing three dots before an array or an object. It is used to destruchure an object.
      - __Rest__ - rest parameter syntax allows an function to take indefinate no of values as arguments.
        >function add(...args) {  
        >  let sum = 0;  
        >  for (const arg of args){  
        >     sum += args;  
        >  }    
        >}  