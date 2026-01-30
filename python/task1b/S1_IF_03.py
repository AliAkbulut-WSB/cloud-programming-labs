def normalizeName(input):
  if not input:
      return "Anonymous"
  return input.strip()

print(normalizeName(""))
print(normalizeName(" "))
print(normalizeName(None))
print(normalizeName(" Ola "))
print(normalizeName(None))
