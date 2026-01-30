def shippingCost(weightKg, isMember):
  if weightKg < 1:
      cost = 10
  elif weightKg <= 5:
      cost = 20
  else:
      cost = 30

  if isMember:
      cost *= 0.8

  return cost

print(shippingCost(0.5, False))
print(shippingCost(0.5, True))
print(shippingCost(2, False))
print(shippingCost(2, True))
print(shippingCost(6, False))
print(shippingCost(6, True))
print(shippingCost(10, False))
