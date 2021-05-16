const express = require("express");
const app = express();

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
app.get("/", (req, res) => res.send("Yay Node!"));

// We use the app.listen method to do this.
// This method takes two arguments: a port and a callback function telling it what to do once the server is running.
app.listen(3000, () =>
  console.log("Server is listening on port 3000. Ready to accept requests!")
);
