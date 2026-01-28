function chunk(arr, size) {
  if (size <= 0) return null;

  const result = [];

  for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));     
console.log(chunk([1, 2, 3, 4, 5], 3));    
console.log(chunk([1, 2, 3], 1));          
console.log(chunk([1, 2, 3], 5));         
console.log(chunk([], 3));                 
console.log(chunk([1, 2, 3], 0));         
console.log(chunk([1, 2, 3], -1));         
console.log(chunk([1, 2, 3], 1.5));