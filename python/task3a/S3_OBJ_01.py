def get(obj, path, fallback):
  if path == "":
      return fallback

  keys = path.split(".")
  current = obj

  for key in keys:
      if current is None or key not in current:
          return fallback
      current = current[key]

  return current


data = { "a": { "b": { "c": 42 } }, "x": None }

print(get(data, "a.b.c", 0))
print(get(data, "a.b.d", 0))
print(get(data, "x.y", 0))
print(get(data, "", 0))
