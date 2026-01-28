function get(obj, path, fallback) {
  const keys = path.split('.');

  let current = obj;
  for (let key of keys) {
      if (current === null || current === undefined || !(key in current)) {
          return fallback;
      }
      current = current[key];
  }

  return current;
}

const data = { a: { b: { c: 42 } }, x: null };

console.log(get(data, 'a.b.c', 0));    
console.log(get(data, 'a.b.d', 0));     
console.log(get(data, 'x.y', 0));       
console.log(get(data, '', 0));         
