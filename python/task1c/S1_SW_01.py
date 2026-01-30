def dayName(n):
  if n == 1: return "Monday"
  if n == 2: return "Tuesday"
  if n == 3: return "Wednesday"
  if n == 4: return "Thursday"
  if n == 5: return "Friday"
  if n == 6: return "Saturday"
  if n == 7: return "Sunday"
  return None

print(dayName(1))
print(dayName(7))
print(dayName(0))
print(dayName(8))
