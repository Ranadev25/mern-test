const multer = require("multer");
// const file_upload = process.env.UPLOAD_FOLDER || 'src/public/images/users';
// const path = require("path");
const { file_type, file_size } = require("../secreat");

// ============first way to store file;
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, file_upload)
//   },
//   filename: function (req, file, cb)
//   {
//     const ext = path.extname(file.originalname)
//     const name = Date.now() + "_" + file.originalname.replace(ext, "") + ext;
//     cb(null, name)
//   }
// });
// =================================

// const filFilter = (req, file, cb) => {
//   const ext = path.extname(file.originalname)
//   const allowedTypes = file_type;
//   if(!allowedTypes.includes(ext.substring(1).toLowerCase())) {
//     cb(new Error("File type not allowed"), false);
//   } else {
//     cb(null, true);
//   }
// }
// ====================================

const storage = multer.memoryStorage();

const filFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image file are allowed"),false)
  }

  if (file.size > file_size) {
    return cb(new Error("file is too big"),false)
  }

  if (!file_type.includes(file.mimetype)) {
    return cb(new Error("file type is not allowed"),false)
  }
  return cb(null,true)
}

const upload = multer({
  storage: storage,
  fileFilter: filFilter,
});

module.exports = upload;