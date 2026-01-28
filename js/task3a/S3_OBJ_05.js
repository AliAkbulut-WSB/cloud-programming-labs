function invert(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (result.hasOwnProperty(value)) {
      if (Array.isArray(result[value])) {
        result[value].push(key);
      } else {
        result[value] = [result[value], key];
      }
    } else {
      result[value] = key;
    }
  }

  return result;
}

console.log(
  invert({ a: 1, b: 2, c: 1 })
);
console.log(
  invert({ x: 'foo', y: 'bar', z: 'foo' })
);
console.log(
  invert({ one: true, two: false, three: true })
);
console.log(
  invert({})
);

