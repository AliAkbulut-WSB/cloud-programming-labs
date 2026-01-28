function stats(nums) {
  if (nums.length === 0) return null;

  return {
      min: Math.min(...nums),
      max: Math.max(...nums),
      avg: nums.reduce((sum, num) => sum + num, 0) / nums.length
  };
}

console.log(stats([1, 2, 3, 4, 5]));    
console.log(stats([10, -5, 0, 100]));    
console.log(stats([7]));                
console.log(stats([]));                 
console.log(stats([1.5, 2.5, 3.5]));