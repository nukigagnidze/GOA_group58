// utils/uploadImage.js
const multer = require("multer");
const path = require("path");

// ფაილის შენახვის ლოკაცია და სახელი
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// მხოლოდ სურათების დაშვება
function fileFilter(req, file, cb) {
  const allowed = /jpg|jpeg|png|gif/;
  const isValid = allowed.test(path.extname(file.originalname).toLowerCase());

  if (isValid) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"));
  }
}

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
