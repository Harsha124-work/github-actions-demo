const { getMessage } = require('./app');

if (getMessage() !== "Hello from GitHub Actions 🚀") {
  throw new Error("Test failed");
}

console.log("Test passed ✅");
