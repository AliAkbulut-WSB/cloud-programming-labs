def map_values(obj, fn):
  result = {}
  for key, value in obj.items():
      result[key] = fn(value, key, obj)
  return result


original = {"a": 1, "b": 2, "c": 3}
squared = map_values(original, lambda x, k, o: x * x)

print(squared)
print(original)
