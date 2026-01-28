function safeAdd(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
      if (Math.abs(a) > Number.MAX_SAFE_INTEGER || 
          Math.abs(b) > Number.MAX_SAFE_INTEGER) {

          const result = BigInt(a) + BigInt(b);
          console.log("bigint");
          return result;
      }

      const result = a + b;
      console.log("number");
      return result;
  }

  console.log("null");
  return null;
}

console.log(safeAdd(1, 2));                    
console.log(safeAdd(Number.MAX_SAFE_INTEGER, 1));  
console.log(safeAdd(-Number.MAX_SAFE_INTEGER, -1)); 
console.log(safeAdd(1.5, 2));                  
console.log(safeAdd("1", 2));                 
console.log(safeAdd(undefined, 2));