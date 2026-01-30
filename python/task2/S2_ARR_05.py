def stats(nums):
  if len(nums) == 0:
      return None

  return {
      "min": min(nums),
      "max": max(nums),
      "avg": sum(nums) / len(nums)
  }

print(stats([1, 2, 3, 4, 5]))
print(stats([10, -5, 0, 100]))
print(stats([7]))
print(stats([]))
print(stats([1.5, 2.5, 3.5]))
