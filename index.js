const express = require("express");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const port = 3333;

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/fileupload", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req);

  form.on("fileBegin", function(name, file) {
    file.path = __dirname + "/uploads/" + file.name;
  });

  form.on("file", function(name, file) {
    console.log("Uploaded " + file.name);
  });

  res.redirect("/");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Your app is listening on ${port}`);
});
