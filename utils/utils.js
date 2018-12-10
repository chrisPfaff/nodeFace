exports.imageFilter = function(req, file, cb) {
  if (!file.originalname.match(/\.(jpg)$/)) {
    return cb(new Error("Only .jpg files are allowed!"), false);
  }
  cb(null, true);
};
