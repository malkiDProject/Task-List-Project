const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 3002; // You can use any available port you prefer

server.use(middlewares);
server.use(jsonServer.bodyParser);

// You can add custom routes or actions here if needed
// Example: server.post('/tasks', (req, res) => { /* custom action for creating a new task */ });

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});


