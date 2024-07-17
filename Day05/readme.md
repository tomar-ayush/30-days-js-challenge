
## Methods to find substring in a string in javascript.  
  
  - __includes() method__:
    this function return true if substring is present and vice verca.  
 
    > const str = 'Bread and Milk';  
    > const char1 = 'd';  
    > const char2 = 'p';  
    > console.log(str.includes(char1)); // true  
    > console.log(str.includes(char2)); // false 

  - __indexOf() Method__:
    this function return the index of first char of substring and -1 if the substring is not presnt.  

    > const str = 'Bread and Milk';  
    > const char1 = 'd';  
    > const char2 = 'p';  
    > console.log(str.indexOf(char1)); // 4  
    > console.log(str.indexOf(char2)); // -1   

  - __Regex Matching__:
    the __test()__ method in regex searches for substring in the string and return true and false acc to that.

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

    ___ 

    ### Higher Order Function ###

      Higher Order Function operate on other functions by taking them as arguments or retturning them from function or both.  
      