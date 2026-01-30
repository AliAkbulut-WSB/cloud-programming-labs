def chunk(arr, size):
  if size <= 0:
      return None

  result = []
  i = 0

  while i < len(arr):
      result.append(arr[i:i+size])
      i += size

  return result

print(chunk([1, 2, 3, 4, 5], 2))
print(chunk([1, 2, 3, 4, 5], 3))
print(chunk([1, 2, 3], 1))
print(chunk([1, 2, 3], 5))
print(chunk([], 3))
print(chunk([1, 2, 3], 0))
print(chunk([1, 2, 3], -1))
print(chunk([1, 2, 3], 1.5))
