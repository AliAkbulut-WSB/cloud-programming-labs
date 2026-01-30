def at_least(min_value):
  def inner(num):
      return num >= min_value
  return inner

numbers = [1, 3, 5, 7, 9]
filtered = list(filter(at_least(5), numbers))

print(filtered)
