const express=require("express");
const app=express();
const dotenv=require("dotenv")
var cors = require('cors')
const mongoose=require("mongoose")
const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const postRoute=require("./routes/posts")
const categoriesRoute=require("./routes/categories")
const multer=require("multer")
const path=require("path")

app.use(cors())
dotenv.config(); // Load environment variables from .env file
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected with MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
const storage =multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images")
  },filename:(req,file,cb)=>{
    cb(null,req.body.name)
  }
})
const upload=multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
   res.status(200).json("File has been uploaded")
})


app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",categoriesRoute)

port="5000"
app.listen(port,()=>{
    console.log("The app is runing on "+port+" port, helloe ")
});
