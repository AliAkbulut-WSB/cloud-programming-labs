def mergeDefaults(defaults, overrides):
  defaults = defaults or {}
  overrides = overrides or {}
  return {**defaults, **overrides}


defaults = {"a": 1, "b": 2}
overrides = {"b": 3, "c": 4}

result = mergeDefaults(defaults, overrides)

print("Result:", result)
print("Defaults unchanged:", defaults)
print("Overrides unchanged:", overrides)
print(mergeDefaults({"a": 1}, None))
print(mergeDefaults(None, {"b": 2}))
print(mergeDefaults(None, None))
