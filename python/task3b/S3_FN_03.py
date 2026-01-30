def makeAdder(x):
  return lambda y: x + y

add5 = makeAdder(5)
print(add5(10))

add10 = makeAdder(10)
print(add10(7))
