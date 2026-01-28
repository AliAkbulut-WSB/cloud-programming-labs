function compose(...fns) {
  return function(initialValue) {
    return fns.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}
const add1 = x => x + 1;
const double = x => x * 2;
const composed = compose(add1, double);
console.log(composed(5));
