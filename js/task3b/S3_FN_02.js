const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

console.log("Original array:");
console.log(people);
people.sort((a, b) => a.age - b.age);
console.log("Sorted by age (ascending):");
console.log(people);
console.log("Sorted names:");
people.forEach(person => console.log(person.name));
