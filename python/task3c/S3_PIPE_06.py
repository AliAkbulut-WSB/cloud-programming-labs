def pipe_safe(*fns):
  def inner(initial_value):
      value = initial_value
      for fn in fns:
          try:
              value = fn(value)
          except Exception as error:
              return {"ok": False, "error": error}
      return {"ok": True, "value": value}
  return inner


safe_pipeline = pipe_safe(
  lambda x: x + 1,
  lambda x: (_ for _ in ()).throw(Exception("Too big!")) if x > 2 else x * 2,
  lambda x: x - 1
)

print(safe_pipeline(0))
print(safe_pipeline(2))
print(safe_pipeline(3))
