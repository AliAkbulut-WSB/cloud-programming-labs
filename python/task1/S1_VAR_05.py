def isArray(value):
  return isinstance(value, list)

print(isArray([]))
print(isArray([1, 2, 3]))
print(isArray(list()))

print(isArray({}))
print(isArray(None))
print(isArray(None))
print(isArray(42))
print(isArray("array"))
print(isArray(lambda: None))
print(isArray(object()))
