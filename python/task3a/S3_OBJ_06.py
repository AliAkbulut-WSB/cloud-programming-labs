def groupBy(items, key):
  result = {}
  for item in items:
      value = item.get(key)
      if value not in result:
          result[value] = []
      result[value].append(item)
  print(result)
  return result


data = [
  {"type": "fruit", "name": "apple"},
  {"type": "fruit", "name": "banana"},
  {"type": "vegetable", "name": "carrot"},
]

groupBy(data, "type")
