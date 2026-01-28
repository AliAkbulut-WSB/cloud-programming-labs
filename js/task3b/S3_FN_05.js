function atLeast(min) {
  return function(num) {
    return num >= min;
  };
}

const numbers = [1, 3, 5, 7, 9];
const filtered = numbers.filter(atLeast(5));

console.log(filtered); 
