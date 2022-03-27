//Create and array of numbers. Sum all of the numbers. Alert the sum.

const sum = function(nums) {
  return nums.reduce((acc,currentValue)=> acc + currentValue,0);
};
console.log(sum([12,34,67,10,13]));

//======================================================================================

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const squared = function(array) {
  return array.map(elem=>elem ** 2);
};
console.log(squared([2,3,4,5,6]));
//======================================================================================

//Create a function that takes string
//Print the reverse of that string to the console

const reverseString = function(str) {
  //  str.reverse() //will throw an error , reverse doenst work on string , this method works only with array. So turn the string into array first.
  // Split and join can take in value called delimiter.
  // if we want to split on each individual leeter , no space empty string
  // (' ') if we pass a space string will split where there is a space

  return str.split("").reverse().join("");
};
console.log(reverseString("hello hi"));
console.log(reverseString("my name is charu"));
//======================================================================================

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const isPalindrome = function(str) {
  let reverseString = str.split('').reverse().join('');
  return str.toLowerCase() === reverseString.toLowerCase() ? console.log("Yes") : console.log("NO");
};

console.log(isPalindrome("Tacocat"));