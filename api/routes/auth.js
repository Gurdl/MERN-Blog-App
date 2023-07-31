const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt'); //This is used for encrption of passwords

//Register
router.post("/register", async (req, res) => {
   try {
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(req.body.password, salt);
      const userExist = await User.findOne({ userName: req.body.userName })
      if (userExist) {
         return res.status(400).json({ message: `UserName '${req.body.userName}' already exists.Try Another` })
      }
      else{
         
         const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashPass,
         })
         const user = await newUser.save();
         res.status(201).json(newUser)
      }
   }
   catch (error) {
      res.status(400).json(error);
   }
});

//Login
router.post("/login", async (req, res) => {
   try {
      const user = await User.findOne({ userName: req.body.userName })
      !user && res.status(400).json("Wrong  userName,try again")

      try {
         const validates = await bcrypt.compare(req.body.password, user.password) //Here we are comparing the password with user we get
         !validates && res.status(400).json("Wrong password,try again ");
      } catch (error) {
         res.status(400).json({ msg: "Your password is wrong", error });
      }

      const { password, ...others } = user._doc
      res.status(200).json(others);
   }
   catch (error) {
      res.status(400).json(error);
   }

})
module.exports = router
