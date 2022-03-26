//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

const numberArray = function(n) {

  let output = [];
  for (let i = 0; i < n; i++) {
    output.push(i + 1);
  }
  return output;
};

console.log(numberArray(30));
console.log(numberArray(1));
console.log(numberArray(0))