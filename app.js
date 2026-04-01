function getMessage() {
  return "Hello from GitHub Actions 🚀";
}

module.exports = { getMessage };

const http = require('http');

const server = http.createServer((req, res) => {
  res.end(getMessage());
});

server.listen(3000);
