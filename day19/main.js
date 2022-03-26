// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let loveCoding;
loveCoding = true;
console.log(loveCoding);


// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = "red";
favColor = "green";
console.log(favColor);


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

const sum = function(a,b,c,d) {
  return a + b + c / d;
};

console.log(sum(2,4,6,8,2));


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

const power = function(a,b) {
  // return b ** a;
  return Math.pow(a , b);
};

console.log(power(2,3));


// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

const checkParams = function(boolean , string) {
  // if (boolean) {
  //   console.log(string);
  // } else {
  //   console.log(string);
  // }

  // eslint-disable-next-line no-undef
  boolean ? console.log(string) : console.log(string);
      
};

console.log(checkParams(true , "boolean is false"));
console.log(checkParams(false , "boolean is false"));


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
const printNum = function(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");

    } else if (i % 3 === 0) {
      console.log("fizz");

    } else {
      console.log(i);
    }

  }
};
console.log(printNum(1));
console.log(printNum(50));