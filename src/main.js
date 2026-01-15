const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [
  { name: 'Task 0', description: 'Introduction', path: 'js/task0/task0.js' },
  { name: 'Task 1', description: 'Basic concepts', path: 'js/task1/README.md' },
  { name: 'Task 1b', description: 'Extended practice', path: 'js/task1b/README.md' },
  { name: 'Task 1c', description: 'Advanced practice', path: 'js/task1c/README.md' },
  { name: 'Task 2', description: 'Intermediate topics', path: 'js/task2/README.md' },
  { name: 'Task 2b', description: 'Extended topics', path: 'js/task2b/README.md' },
  { name: 'Task 3a', description: 'Advanced topics A', path: 'js/task3a/README.md' },
  { name: 'Task 3b', description: 'Advanced topics B', path: 'js/task3b/README.md' },
  { name: 'Task 3c', description: 'Advanced topics C', path: 'js/task3c/README.md' }
];

function showMenu() {
  console.clear();
  console.log('===============================');
  console.log('    Cloud Programming Labs     ');
  console.log('===============================');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.name}: ${task.description}`);
  });
  console.log('0. Exit');
  console.log('-------------------------------');
  rl.question('Select a task to view (or 0 to exit): ', (choice) => {
    const taskIndex = parseInt(choice) - 1;
    if (choice === '0') {
      console.log('Goodbye!');
      rl.close();
      process.exit(0);
    } else if (tasks[taskIndex]) {
      const task = tasks[taskIndex];
      console.log(`\nSelected: ${task.name} - ${task.description}`);
      console.log(`Path: ${task.path}`);
      console.log('\nPress any key to return to menu...');
      process.stdin.once('data', () => {
        showMenu();
      });
    } else {
      console.log('Invalid selection. Try again.');
      setTimeout(showMenu, 1000);
    }
  });
}

showMenu();
