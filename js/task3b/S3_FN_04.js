const nums = [1, 2, 3, 4, 5, 6];

const sumOfSquares = nums
  .filter(x => x % 2 === 0)  
  .map(x => x * x)           
  .reduce((a, b) => a + b, 0); 

console.log("Sum of squares of even numbers:", sumOfSquares);
