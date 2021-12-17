const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("You land on a wrong planet, no one lives here.");
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

module.exports = app;