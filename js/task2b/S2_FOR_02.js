function findFirstEven(nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
          return nums[i];
      }
  }
  return null;
}

console.log(findFirstEven([1, 3, 2, 4, 5]));  
console.log(findFirstEven([1, 3, 5]));         
console.log(findFirstEven([2, 1, 3]));       
console.log(findFirstEven([]));               
