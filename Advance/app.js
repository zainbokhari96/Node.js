const express = require("express");
const app = express();
const bodyParser = require('body-parser'); 

const port = 3000;
app.use(bodyParser.json());


app.post("/", (req, res) => {
  console.log(req.body);
  res.send("You land on a wrong planet, no one lives here.");
});

// ROUTES FOR CUSTOMERS
app.use("/api/customer", require('./routes/customer'));
// ROUTES FOR ORDERS
app.use("/api/order", require('./routes/orders'));


app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

module.exports = app;