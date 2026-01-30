def findFirstEven(nums):
  for n in nums:
      if n % 2 == 0:
          return n
  return None

print(findFirstEven([1, 3, 2, 4, 5]))
print(findFirstEven([1, 3, 5]))
print(findFirstEven([2, 1, 3]))
print(findFirstEven([]))
