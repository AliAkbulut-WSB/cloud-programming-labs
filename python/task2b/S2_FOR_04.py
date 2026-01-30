def countOccurrences(values):
  counts = {}
  for v in values:
      counts[v] = counts.get(v, 0) + 1
  return counts

print(countOccurrences([1, 2, 2, 3]))
print(countOccurrences(['a', 'b', 'a']))
print(countOccurrences([]))
