const express = require("express");
const app = express();

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
app.get("/", (req, res) => res.send("Yay Node!"));

app.get("/node", (req, res) => res.send("Hello, World!"));

app.get("/codeyourfuture", (req, res) => res.send("Code Your Future"));

app.get("/chocolate", (req, res) => {
  let amountQuery = req.query.amount;
  res.send(`You have requested ${amountQuery} chocolates`);
});

app.get("/multiply", (req, res) => {
  let value1 = req.query.value1;
  let value2 = req.query.value2;
  // Validation check - user must enter 2 values for query parameters
  value1 != undefined && value2 != undefined
    ? res.send(`${value1} x ${value2} = ${value1 * value2}`)
    : res.send("Please enter value1 and value2 in the query");
});

// We use the app.listen method to do this.
// This method takes two arguments: a port and a callback function telling it what to do once the server is running.
app.listen(3000, () =>
  console.log("Server is listening on port 3000. Ready to accept requests!")
);
