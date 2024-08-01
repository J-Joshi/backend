require("dotenv").config();
const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/twitter", (req, res) => {
  res.send("joshi.com");
});
app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});
app.get("/bookings", (req, res) => {
  res.send("<h2>these are the current bookings</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`listening on the port ${port}`);
});
