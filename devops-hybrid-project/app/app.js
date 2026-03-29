const express = require("express");
const app = express();

// root
app.get("/", (req, res) => {
  res.send("DevOps Hybrid Project Running 🚀");
});

// API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend API" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});