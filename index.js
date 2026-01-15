const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'text/html',
    'Cache-Control': 'no-cache'
  });
  res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cloud Programming Labs</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
      background: #f5f5f5;
    }
    h1 { color: #333; }
    .tasks {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 30px;
    }
    .task {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .task h3 { margin: 0 0 10px 0; color: #2196F3; }
    .task p { margin: 0; color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <h1>Cloud Programming Labs</h1>
  <p>Welcome to the JavaScript programming labs. Navigate to the task directories to begin your assignments.</p>
  <div class="tasks">
    <div class="task"><h3>Task 0</h3><p>Introduction</p></div>
    <div class="task"><h3>Task 1</h3><p>Basic concepts</p></div>
    <div class="task"><h3>Task 1b</h3><p>Extended practice</p></div>
    <div class="task"><h3>Task 1c</h3><p>Advanced practice</p></div>
    <div class="task"><h3>Task 2</h3><p>Intermediate topics</p></div>
    <div class="task"><h3>Task 2b</h3><p>Extended topics</p></div>
    <div class="task"><h3>Task 3a</h3><p>Advanced topics A</p></div>
    <div class="task"><h3>Task 3b</h3><p>Advanced topics B</p></div>
    <div class="task"><h3>Task 3c</h3><p>Advanced topics C</p></div>
  </div>
</body>
</html>
  `);
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

server.listen(PORT, HOST, () => {
  console.log('Server running at http://' + HOST + ':' + PORT + '/');
});
