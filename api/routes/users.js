const router = require("express").Router();
const { findById } = require("../models/Category");
const User = require("../models/User");
const Post = require("../models/Post")
const bcrypt = require("bcrypt");

//Update
router.put("/:id", async (req, res) => {

    //check if the userId exist to update:
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updateUser);
        }
        catch (error) {
            res.status(400).json(error);
        }

    }
    else {
        res.status(401).json("You can update only your account only ");
    }


})
//DELETE:
router.delete("/:id", async (req, res) => {

    //check if the userId exist to update:
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)

            try {
                await Post.deleteMany({ username: user.userName })
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User Has been deleted");
            }
            catch (error) {
                res.status(400).json(error);
            }

        }
        catch (error) {
            res.status(400).json("User Not Found");
        }
    }

    else {
        res.status(401).json("You can delete only your account  ");
    }
})
//GET:
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc
        res.status(200).json(others)

    } catch (error) {
        res.status(400).json("User Not Found");
    }

})
//Get all user:
router.get("/", async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the User model
        res.json(users);

    } catch (error) {
        res.status(400).json("User Not Found");
    }

})
//Get all user:
router.get("/", async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the User model
        res.json(users);

    } catch (error) {
        res.status(400).json("User Not Found");
    }

})
module.exports = router
