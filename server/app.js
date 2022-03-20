const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./db.js')

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "David bsdk chodu" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
