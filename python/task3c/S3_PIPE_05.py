lines = [
  "INFO: user=42",
  "ERROR: something failed",
  "INFO: user=17",
  "DEBUG: check this",
  "INFO: user=99"
]

user_ids = [
  int(line.split("user=")[1])
  for line in lines
  if line.startswith("INFO:")
]

print(user_ids)
