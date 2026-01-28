function pipeSafe(...fns) {
  return function(initialValue) {
    let value = initialValue;
    for (const fn of fns) {
      try {
        value = fn(value);
      } catch (error) {
        return { ok: false, error };
      }
    }
    return { ok: true, value };
  };
}

const safePipeline = pipeSafe(
  x => x + 1,
  x => {
    if (x > 2) throw new Error("Too big!");
    return x * 2;
  },
  x => x - 1
);
console.log(safePipeline(0)); 
console.log(safePipeline(2)); 
console.log(safePipeline(3));