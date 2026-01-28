function pipe(...fns) {
  return function(initialValue) {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
  };
}
const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;
const myPipe = pipe(double, increment, square);
console.log(myPipe(3)); 

