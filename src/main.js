const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.clear();
rl.prompt();

rl.on('line', (line) => {
  const input = line.trim().toLowerCase();
  
  if (input === 'exit' || input === 'quit') {
    console.log('Goodbye!');
    process.exit(0);
  }

  // Handle commands or just echo for now
  if (input) {
    console.log(`You typed: ${line}`);
  }
  
  rl.prompt();
}).on('close', () => {
  console.log('\nExiting...');
  process.exit(0);
});
