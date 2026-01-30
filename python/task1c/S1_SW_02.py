def runCommand(cmd):
  if cmd == "start":
      return "Service started"
  if cmd == "stop":
      return "Service stopped"
  if cmd == "status":
      return "Service status unknown"
  return "Unknown command"

testCommands = ["start", "status", "restart"]

for cmd in testCommands:
  print(f'runCommand("{cmd}") =>', runCommand(cmd))
