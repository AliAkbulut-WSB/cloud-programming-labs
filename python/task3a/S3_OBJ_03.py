def pick(obj, keys):
  return {k: obj[k] for k in keys if k in obj}


obj = {"a": 1, "b": 2, "c": 3}

print(pick(obj, ["a"]))
print(pick(obj, ["a", "c"]))
print(pick(obj, ["b", "d"]))
print(pick(obj, []))
print(pick(obj, ["a", "b", "c", "d"]))
