 const multer = require('multer');
 const path = require('path');
 

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null,  file.originalname);
  }
  }),
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/jpg",
      "image/pjpeg",
      "image/png",
    ];

    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true);

    } else {
      cb(new Error("Invalid file type."));
    } 
  },
};