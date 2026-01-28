function flatten1(arr) {
  return arr.reduce((result, item) => {
      return Array.isArray(item) 
          ? result.concat(item) 
          : result.concat([item]);
  }, []);
}

console.log(flatten1([1, [2,3], [4], 5]));   
console.log(flatten1([1, 2, 3]));            
console.log(flatten1([[1], [2], [3]]));        
console.log(flatten1([1, [2, [3]], 4]));       
console.log(flatten1([]));                     
console.log(flatten1([1, [2, 3], [4, [5, 6]]]));