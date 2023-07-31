const router = require("express").Router();
const { findById } = require("../models/Category");
const User = require("../models/User");
const Post = require("../models/Post")

//CREATE A NEW POST:
router.post("/", async (req, res) => {

    const newPost = new Post(req.body);
    const user = await User.findOne({ userName: req.body.username });

    if (user) {
        // The userName exists in the User model only then create the post
        try {
            const savePost = await newPost.save();
            res.status(200).json(savePost)

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        // The userName does not exist in the User model.
        res.json({ message: 'User name does not exist.' });
    }
})
//UPDATE:
router.put("/:id", async (req, res) => {
    try {

        const post = await Post.findById(req.params.id)

        //If post belongs to the user
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })
                res.status(200).json(updatedPost)
            }
            catch (error) {
                res.status(500).json(error)
            }
        }
        else {
            res.status(401).json("You can update only your post")
        }


    }
    catch (error) {
        res.status(500).json(error)
    }
})
//DELETE:
router.delete("/:id", async (req, res) => {
    try {

        const post = await Post.findById(req.params.id)

        //If post belongs to the user
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(req.params.id)
                res.status(200).json("Post get Deleted")
            }
            catch (error) {
                res.status(500).json(error)
            }
        }
        else {
            res.status(401).json("Only owner of post can delete its post")
        }


    }
    catch (error) {
        res.status(500).json(error)
    }
})
//GET POST
router.get("/:id", async (req, res) => {
    try {
        const post= await Post.findById(req.params.id);
        res.status(200).json(post)

    } catch (error) {
        res.status(400).json("post Not Found");
    }  
})
//GET All POST
router.get("/", async (req, res) => {
    const username=req.query.user;  //if the queru contains like http://localhost:3000/api/posts/?user=Gurdev
    const catname=req.query.cat
    try {
        let posts;
        if(username){
            posts=await Post.find({username:username})
        }else if (catname){
            posts=await Post.find({categories:{  //  categories:catname is not valid because categories is an array:
            $in:[catname]
            }
            })  
        }
        else{
            posts=await Post.find();
        }
        res.status(200).json(posts)

    } catch (error) {
        res.status(400).json("post Not Found");
    }  
})
module.exports = router
