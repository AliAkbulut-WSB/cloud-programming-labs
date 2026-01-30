def toNumberOrNull(x):
  if not isinstance(x, str):
      return None

  s = x.strip()
  try:
      return float(s) if s != "" else None
  except:
      return None

print(toNumberOrNull("12"))
print(toNumberOrNull("12.5"))
print(toNumberOrNull(" 12 "))
print(toNumberOrNull("12x"))
print(toNumberOrNull(""))
print(toNumberOrNull("abc"))
