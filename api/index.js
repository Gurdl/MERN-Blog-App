
const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv")
var cors = require('cors')
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoriesRoute = require("./routes/categories")
const multer = require("multer")
const path = require("path")

app.use(cors())
dotenv.config(); // Load environment variables from .env file
app.use("/images", express.static(path.join(__dirname, "/images")))
app.use(express.json());

//make connection with mongoDb
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected with MongoDB");
})
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  }, filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})
//To see all the images:
app.get("/api/images/list", (req, res) => {
  const imagesDirectory = path.join(__dirname, "images");

  // Read the contents of the "images" directory
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      console.error("Error reading images directory:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Filter out non-image files if needed (optional)
    // Example: Only return files with ".jpg" or ".png" extensions
    const imageFiles = files.filter((file) => {
      return /\.(jpg|jpeg|png|gif)$/i.test(file);
    });

    res.status(200).json(imageFiles);
  });
});

//Get image by name
app.get("/api/images/:filename", (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, "images", filename);

  // Check if the file exists
  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: "Image not found" });
  }

  // Set the content type header to "image/jpeg" (you can change this based on your image type)
  res.set("Content-Type", "image/jpeg");

  // Send the image as the response
  res.sendFile(imagePath);
});



app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoriesRoute)

port = "5000"
app.listen(port, () => {
  console.log("The app is runing on " + port + " port, helloe ")
});
