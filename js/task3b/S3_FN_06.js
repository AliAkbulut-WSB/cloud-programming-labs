function mapValues(obj, fn) {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { 
      result[key] = fn(obj[key], key, obj);
    }
  }

  return result;
}
const original = { a: 1, b: 2, c: 3 };
const squared = mapValues(original, x => x * x);

console.log(squared);
console.log(original);