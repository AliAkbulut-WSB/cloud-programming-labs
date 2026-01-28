function parseNumbers(arr) {
  return arr
      .map(item => Number(item.trim()))
      .filter(num => !Number.isNaN(num));
}

console.log(parseNumbers([" 1 ", "x", "2"]));  
console.log(parseNumbers(["10", " 20 ", "abc", "30.5"])); 
console.log(parseNumbers([])); 
console.log(parseNumbers(["1", "2", "3"]));