def invert(obj):
  result = {}
  for key, value in obj.items():
      if value in result:
          if isinstance(result[value], list):
              result[value].append(key)
          else:
              result[value] = [result[value], key]
      else:
          result[value] = key
  return result


print(invert({"a": 1, "b": 2, "c": 1}))
print(invert({"x": "foo", "y": "bar", "z": "foo"}))
print(invert({"one": True, "two": False, "three": True}))
print(invert({}))
