def flatten1(arr):
  result = []
  for item in arr:
      if isinstance(item, list):
          result.extend(item)
      else:
          result.append(item)
  return result

print(flatten1([1, [2, 3], [4], 5]))
print(flatten1([1, 2, 3]))
print(flatten1([[1], [2], [3]]))
print(flatten1([1, [2, [3]], 4]))
print(flatten1([]))
print(flatten1([1, [2, 3], [4, [5, 6]]]))
