def grade(score):
  if not isinstance(score, (int, float)) or score < 0 or score > 100:
      return None

  if score >= 90:
      return 'A'
  if score >= 80:
      return 'B'
  if score >= 70:
      return 'C'
      return 'D'
  if score >= 60:
      return 'D'
  return 'F'

print(grade(95))
print(grade(90))
print(grade(85))
print(grade(80))
print(grade(75))
print(grade(70))
print(grade(65))
print(grade(60))
print(grade(55))
print(grade(0))
print(grade(101))
print(grade(-1))
print(grade("90"))
print(grade(None))
