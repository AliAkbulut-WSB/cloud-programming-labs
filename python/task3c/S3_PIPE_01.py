def pipe(*fns):
  def inner(initial_value):
      result = initial_value
      for fn in fns:
          result = fn(result)
      return result
  return inner

double = lambda x: x * 2
increment = lambda x: x + 1
square = lambda x: x * x

my_pipe = pipe(double, increment, square)
print(my_pipe(3))
