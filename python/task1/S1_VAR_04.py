def typeLabel(value):
  if value is None:
      return "null"
  return type(value).__name__

print(typeLabel(None))
print(typeLabel(None))
print(typeLabel(42))
print(typeLabel("42"))
print(typeLabel(True))
print(typeLabel({}))
print(typeLabel([]))
print(typeLabel(lambda: None))
print(typeLabel(object()))
