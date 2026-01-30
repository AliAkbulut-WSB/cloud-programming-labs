def sumUntil(nums, threshold):
  total = 0
  for num in nums:
      if total + num > threshold:
          break
      total += num
  return total

print(sumUntil([1, 2, 3, 4, 5], 7))
print(sumUntil([1, 2, 3, 4, 5], 10))
print(sumUntil([1, 2, 3, 4, 5], 3))
print(sumUntil([1, 2, 3, 4, 5], 0))
print(sumUntil([], 5))
