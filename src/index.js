
require('dotenv').config();

const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 8000;
const cache = require('./cache')

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    cache.connect();
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();