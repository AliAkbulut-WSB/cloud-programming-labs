def compose(*fns):
  def inner(initial_value):
      result = initial_value
      for fn in reversed(fns):
          result = fn(result)
      return result
  return inner

add1 = lambda x: x + 1
double = lambda x: x * 2

composed = compose(add1, double)
print(composed(5))
