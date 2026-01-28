function unique(values) {
  const result = [];

  for (const value of values) {
      if (!result.includes(value)) {
          result.push(value);
      }
  }

  return result;
}

console.log(unique([1, 2, 3, 2, 1]));       
console.log(unique(["a", "b", "a", "c"]));   
console.log(unique([1, "1", 1, "1"]));       
console.log(unique([]));                     
console.log(unique([1, 2, 3]));