people = [
  {"name": "Alice", "age": 30},
  {"name": "Bob", "age": 25},
  {"name": "Charlie", "age": 35}
]

print("Original list:")
print(people)

people.sort(key=lambda p: p["age"])
print("Sorted by age (ascending):")
print(people)

print("Sorted names:")
for person in people:
  print(person["name"])
