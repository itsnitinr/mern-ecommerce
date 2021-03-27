const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('../config/aws');
//const storage = require('../config/cloudinary');

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

// const uploadGerber = multer({
//   storage,
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// });

const uploadGerber = multer({
  storage: multerS3({
    s3,
    bucket: 'pcbcupid-gerber/Users_Gerber',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  }),
});

module.exports = uploadGerber;
