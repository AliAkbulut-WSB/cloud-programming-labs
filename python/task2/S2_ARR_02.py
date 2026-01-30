def unique(values):
  result = []
  for value in values:
      if value not in result:
          result.append(value)
  return result

print(unique([1, 2, 3, 2, 1]))
print(unique(["a", "b", "a", "c"]))
print(unique([1, "1", 1, "1"]))
print(unique([]))
print(unique([1, 2, 3]))
