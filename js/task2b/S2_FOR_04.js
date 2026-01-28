function countOccurrences(values) {
  const counts = {};

  for (let value of values) {
      if (counts[value] === undefined) {
          counts[value] = 1;
      } else {
          counts[value]++;
      }
  }

  return counts;
}

console.log(countOccurrences([1, 2, 2, 3]));       
console.log(countOccurrences(['a', 'b', 'a']));    
console.log(countOccurrences([]));                 
