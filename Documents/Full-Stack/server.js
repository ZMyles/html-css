"use strict";

const express = require("express");
const app = express();
const cartItems = require("./routes/routes");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/item", cartItems);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`)
});