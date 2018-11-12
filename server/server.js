const express = require('express');
const db = require("./db");

const app = express();

app.get("/data", (req, res) => {
  res.send(db);
});

const port = 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));