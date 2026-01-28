function inspect(value) {
  return {
      type: value === null ? "null" : typeof value,
      isArray: Array.isArray(value),
      isNull: value === null,
      isNaN: Number.isNaN(value)
  };
}

const testValues = [
  null,
  undefined,
  42,
  "hello",
  true,
  {},
  [],
  () => {},
  NaN,
  Infinity
];

testValues.forEach(value => {
  console.log(value, JSON.stringify(inspect(value)));
});
