const upload = require("../../Middleware/imageUpload");
const express = require("express");
const router = express.Router();
const authToken = require('../../Middleware/authToken');

router.post("/", upload.single("file"), async (req, res) => {
  if (req.file == undefined) {
    return res.send("you must select a file.");
  } else {
    const imgUrl = `http://localhost:3001/file/${req.file.filename}`;
    return res.send(imgUrl);
  }
});

router.get("/file/:filename", async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.send("not found");
  }
});

router.delete("/file/:filename", async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.send("success");
  } catch (error) {
    console.log(error);
    res.send("An error occured.");
  }
});

module.exports = router;
