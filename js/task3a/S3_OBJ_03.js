function pick(obj, keys) {
  return keys.reduce((res, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = obj[key];
    }
    return res;
  }, {});
}

const obj = { a: 1, b: 2, c: 3 };
console.log(pick(obj, ['a'])); 
console.log(pick(obj, ['a', 'c'])); 
console.log(pick(obj, ['b', 'd'])); 
console.log(pick(obj, [])); 
console.log(pick(obj, ['a', 'b', 'c', 'd'])); 

