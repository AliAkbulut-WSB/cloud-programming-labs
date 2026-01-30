try:
  def block():
      blockLetVar = "I'm inside the block!"
  block()
  print(blockLetVar)
except Exception:
  print("Friendly message: The variable is not accessible outside its block.")

try:
  blockVar = "I'm also inside the block!"
  print(blockVar)
except Exception:
  print("Friendly message: The variable is not accessible outside its block.")

print(blockVar)

try:
  print(blockLetVar)
except Exception:
  print("Friendly message: The variable is not accessible outside its block.")
