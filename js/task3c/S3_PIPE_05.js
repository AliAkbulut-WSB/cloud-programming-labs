const lines = [
  "INFO: user=42",
  "ERROR: something failed",
  "INFO: user=17",
  "DEBUG: check this",
  "INFO: user=99"
];

const userIds = lines
  .filter(line => line.startsWith("INFO:"))      
  .map(line => parseInt(line.split("user=")[1])); 

console.log(userIds);
