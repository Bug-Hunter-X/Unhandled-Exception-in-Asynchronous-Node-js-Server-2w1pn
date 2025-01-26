const http = require('http');

const server = http.createServer((req, res) => {
  // Use try...catch to handle errors within the asynchronous operation
  try {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        throw new Error('Simulated error');
      }
    }, 100);
  } catch (err) {
    console.error('Request handler error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});