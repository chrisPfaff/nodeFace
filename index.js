const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const port = 3333;

const app = express();
app.use(express.static("public"));
app.use(express.static("uploads"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/fileupload", (req, res) => {
  res.redirect("/");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Your app is listening on ${port}`);
});
