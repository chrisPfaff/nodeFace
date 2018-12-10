const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const imgFilter = require("./utils/utils.js").imageFilter;
const upload = multer({ dest: "uploads/", fileFilter: imgFilter });
const port = 3333;

const app = express();
app.use(express.static("public"));
app.use(express.static("uploads"));

console.log(imgFilter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/fileupload", upload.single("filetoupload"), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "./uploads/image.jpg");
  console.log(req.file);
  fs.renameSync(tempPath, targetPath);
  res.redirect("/");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Your app is listening on ${port}`);
});
