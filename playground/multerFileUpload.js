//multer for file upload
const multer = require("multer");

const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000, //Mega byte
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("please Upload Doc File"));
    }
    cb(undefined, true);
  },
});

app.post("/upload", upload.single("upload"), (req, res) => {
  console.log("No Error come");
  res.send();
});
