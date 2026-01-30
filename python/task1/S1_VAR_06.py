def classifyNumberLike(x):
  if x != x:
      return "nan"
  if isinstance(x, (int, float)):
      return "number"
  return "not-a-number"

print(classifyNumberLike(float('nan')))
print(classifyNumberLike(0))
print(classifyNumberLike("0"))
print(classifyNumberLike("abc"))
print(classifyNumberLike(None))
print(classifyNumberLike(None))
