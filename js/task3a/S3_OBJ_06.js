function groupBy(items, key) {
  const result = items.reduce((acc, item) => {
    const value = item[key];

    if (!acc[value]) {
      acc[value] = [];
    }

    acc[value].push(item);
    return acc;
  }, {});
  console.log(result); 
  return result;
}
const data = [
  { type: 'fruit', name: 'apple' },
  { type: 'fruit', name: 'banana' },
  { type: 'vegetable', name: 'carrot' },
];

groupBy(data, 'type');
