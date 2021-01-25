const path = require('path');
const multer = require('multer');
const storage = require('../config/cloudinary');

function checkFileType(file, cb) {
  const filetypes = /zip/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Please upload zips only!');
  }
}

const uploadGerber = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

module.exports = uploadGerber;
