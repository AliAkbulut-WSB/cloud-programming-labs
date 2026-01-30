def sumNested(matrix):
  total = 0
  for row in matrix:
      for num in row:
          total += num
  return total

print(sumNested([[1, 2], [3, 4]]))
print(sumNested([[1], [2, 3], [4, 5, 6]]))
print(sumNested([]))
print(sumNested([[]]))
