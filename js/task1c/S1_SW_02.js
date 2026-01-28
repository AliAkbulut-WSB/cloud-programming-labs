function runCommand(cmd) {
  switch (cmd) {
    case "start":
      return "Service started";
    case "stop":
      return "Service stopped";
    case "status":
      return "Service status unknown";
    default:
      return "Unknown command";
  }
}

const testCommands = ["start", "status", "restart"];

for (const cmd of testCommands) {
  console.log(`runCommand("${cmd}") =>`, runCommand(cmd));
}
