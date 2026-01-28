function sumUntil(nums, threshold) {
  let sum = 0;

  for (let num of nums) {
      if (sum + num > threshold) {
          break;
      }
      sum += num;
  }

  return sum;
}

console.log(sumUntil([1, 2, 3, 4, 5], 7));    
console.log(sumUntil([1, 2, 3, 4, 5], 10));   
console.log(sumUntil([1, 2, 3, 4, 5], 3));   
console.log(sumUntil([1, 2, 3, 4, 5], 0));   
console.log(sumUntil([], 5));                 
