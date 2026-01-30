def parseNumbers(arr):
  result = []
  for item in arr:
      try:
          num = float(item.strip())
          result.append(num)
      except:
          pass
  return result

print(parseNumbers([" 1 ", "x", "2"]))
print(parseNumbers(["10", " 20 ", "abc", "30.5"]))
print(parseNumbers([]))
print(parseNumbers(["1", "2", "3"]))
