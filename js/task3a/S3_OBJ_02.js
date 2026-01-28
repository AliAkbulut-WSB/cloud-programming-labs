function mergeDefaults(defaults, overrides) {
  return {
    ...(defaults ?? {}),
    ...(overrides ?? {})
  };
}

const defaults = { a: 1, b: 2 };
const overrides = { b: 3, c: 4 };

const result = mergeDefaults(defaults, overrides);

console.log("Result:", result);
console.log("Defaults unchanged:", defaults); 
console.log("Overrides unchanged:", overrides); 
console.log(mergeDefaults({ a: 1 }, null));       
console.log(mergeDefaults(null, { b: 2 }));       
console.log(mergeDefaults(undefined, undefined)); 

