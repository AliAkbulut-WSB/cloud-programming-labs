def safeAdd(a, b):
  if isinstance(a, int) and isinstance(b, int):
      if abs(a) > 2**53 - 1 or abs(b) > 2**53 - 1:
          print("bigint")
          return a + b
      print("number")
      return a + b

  print("null")
  return None

print(safeAdd(1, 2))
print(safeAdd(2**53 - 1, 1))
print(safeAdd(-(2**53 - 1), -1))
print(safeAdd(1.5, 2))
print(safeAdd("1", 2))
print(safeAdd(None, 2))
