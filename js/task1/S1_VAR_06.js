function classifyNumberLike(x) {
  if (Number.isNaN(x)) {
      return "nan";
  }

  if (typeof x === 'number') {
      return "number";
  }

  return "not-a-number";
}

console.log(classifyNumberLike(NaN));         
console.log(classifyNumberLike(0));           
console.log(classifyNumberLike("0"));         
console.log(classifyNumberLike("abc"));      
console.log(classifyNumberLike(undefined));   
console.log(classifyNumberLike(null));